# vuepress自动侧边栏

最近尝试着换种静态博客框架，vuepress进入了我的视野，看了看别人的整体效果发现还不错，但是自己配的时候发现了vuepress的一个缺点，就是很多东西都要自己配，不是开箱即用，很多东西都要自己配置。当然，这也不完全是坏事，写写代码肯定也是好的。

啰嗦了一段，vuepress目前最让我觉得难受的就是它的侧边栏配置，每次写好了一篇文章，还要去配一下路由，这点着实有点反人类，于是乎搜集了一些前人对于自动侧边栏的实现，大部分参考了这篇文章

[vuepress自动侧边栏--隔壁大叔]: http://xxy5.com/vuepress/vuepress-auto-sidebar.html



但其中仍有不清楚的点，我会逐一解释。

## 步骤

### 文档目录如图

![](https://raw.githubusercontent.com/Kitaharakasusa/img/master/20191107171517.png)

### 新建utils/autoSidebar.js 

在docs文件夹中新建utils文件夹，在其中添加autoSidebar.js，代码如下：

```  javascript
const fs = require('fs')
const path = require('path')
const { sep } = path
const rootpath = path.resolve(path.dirname(__dirname), 'blog/') // 根目录

let pathArr = []
// 读取目录
let readDir = folderPath => {
  let exists = fs.existsSync(folderPath),
    stat = fs.statSync(folderPath)

  if (exists && stat) {
    //判断文件、文件目录是否存在
    if (stat.isFile()) {
      let tempArr = folderPath.replace(rootpath + sep, '').split(sep) // 去除根目录部分，并分割成数组
      // 大于 1 可排除根目录下的 'README.md'
      if (tempArr.length > 1) {
        pathArr.forEach(item => {
          // 如果 pathArr 中已经有相同目录则直接 push .md 文件
          if (item.join(sep).indexOf(tempArr.slice(0, -1).join(sep)) != -1) {
            item.push(tempArr.pop())
          }
        })
        // 排除没有 .md 的目录
        if (tempArr[tempArr.length - 1].indexOf('.md') > 0)
          pathArr.push(tempArr)
      }
    } else if (stat.isDirectory()) {
      let files = fs.readdirSync(folderPath)
      if (files && files.length > 0) {
        files.forEach(function(file) {
          if (file != '.vuepress') {
            // 排除 .vuepress 目录
            readDir(folderPath + sep + file) //递归
          }
        })
      }
    }
  }
}
readDir(rootpath)
// console.log('pathArr:', pathArr);

let getSidebar = (title, children = ['']) => {
  let arr = []
  arr.push({
    title,
    children
  })
  console.log(title, children);
  return arr
}

let sidebar = {}
pathArr.forEach(item => {
  let children = []
  let link = ''
  let title = ''
  item.forEach(key => {
    if (key.indexOf('.md') > 0) {
      if (key === 'README.md') key = ''
      children.push(key.replace(/\.md/gi, ''))
    } else {
      link += `${key}/`
      title = key
    }
  })
  sidebar[`/blog`+`/${link}`] = getSidebar(title, children)
})

// console.log('sidebar:', sidebar);
// console.log(sidebar);
module.exports = sidebar
```

我这里跟原作者的不太一样，主要修改了根目录，我把blog作为了我的根目录，因为文档全部在这个文件夹下，之后根据文件夹和内容，会生成一个如下形式的字典，也可以运行一下这个脚本自己看看。

``` javascript
sidebar: {
  '/guide/': [
    {
      title: 'Guide',
      collapsable: false,
      children: [
        '',
        'using-vue',
      ]
    }
  ],
}
```

生成的key值是根据文件夹来的， 文件夹名就会等于key名 也就是上面的`/guide/` 我在生成siderbar的最后一步又加上了`/blog` 原因在于我的路由配置部分是这样的

```javascript
{ text: 'blog', 
              items: [
                {text: 'JavaScript笔记', link: '/blog/javascript/'},
                {text: 'Vue笔记', link: '/blog/vue/'},
                {text: 'React笔记', link: '/blog/react/'},
                {text: 'Angular笔记', link: '/blog/angular/'},
                {text: '刷题算法笔记', link: '/blog/algorithm/'},
                {text: '其他学习', link: '/blog/other/'},
              ]
            },
```

所以要加上`/blog` 不然根本不会进行渲染， 因为siderbar的渲染本身就是根据路径，及key值决定的，当url地址的栏路径和key值相等，才会渲染出对应的侧边栏。

### 修改config.js

在config.js中添加如下代码

``` javascript
const sidebar = require('../utils/autoSidebar')

module.exports = {
   // 在module中添加
       sidebar:sidebar,
       sidebarDepth:2
}
```

之后运行，应该就可以了。不可以的话应该就是路径key的问题了。