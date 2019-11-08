# vuepress自动侧边栏

最近尝试着换种静态博客框架，vuepress进入了我的视野，看了看别人的整体效果发现还不错，但是自己配的时候发现了vuepress的一个缺点，就是很多东西都要自己配，不是开箱即用，很多东西都要自己配置。当然，这也不完全是坏事，写写代码肯定也是好的。

啰嗦了一段，vuepress目前最让我觉得难受的就是它的侧边栏配置，每次写好了一篇文章，还要去配一下路由，这点着实有点反人类，于是乎搜集了一些前人对于自动侧边栏的实现，大部分参考了这篇文章

[vuepress自动侧边栏--隔壁大叔]: http://xxy5.com/vuepress/vuepress-auto-sidebar.html



但是他的方法，emmm，有一定的问题，我就参考着他的自己重新写了一个，只支持二级目录哦

## 步骤

### 文档目录如图

![](https://raw.githubusercontent.com/Kitaharakasusa/img/master/20191107171517.png)

### 新建utils/autoSidebar.js 

在docs文件夹中新建utils文件夹，在其中添加autoSidebar.js，代码如下：

```  javascript
const fs = require('fs');
const path = require('path');
const {sep} = path;
const rootPath = path.resolve(path.dirname(__dirname), 'blog'); // 根目录

console.log(rootPath);

let pathArr = {};

let readDir = dirPath => {
    let exists = fs.existsSync(dirPath);
    let stat = fs.statSync(dirPath);
    if (exists && stat) {
        if (stat.isFile()) {
            let pathWithoutRootArr = dirPath.replace(rootPath + sep, '').split(sep);
            if (pathWithoutRootArr.length === 2 ) {
                if (pathArr.hasOwnProperty(pathWithoutRootArr[0])) {
                    pathArr[pathWithoutRootArr[0]].push(pathWithoutRootArr[1]);
                }else {
                    pathArr[pathWithoutRootArr[0]] = new Array(1).fill(pathWithoutRootArr[1]);
                }
            }
        }else if(stat.isDirectory()) {
            let files = fs.readdirSync(dirPath);
            if (files && files.length > 0) {
                files.forEach(function (file) {
                        readDir(dirPath + sep + file); //递归
                    })
                }
            }
        }
};

readDir(rootPath);

let sidebar = {};
for(let key in pathArr) {
    let children = [];
    let link = '';
    let title = '';
    console.log(pathArr[key]);
    let files = pathArr[key];
    files.forEach(filesname => {
        if(filesname.indexOf('.md') > 0) {
            if (filesname === 'README.md') filesname = '';
            children.push(filesname.replace(/\.md/gi, ''))
        }
    });
    title = key;
    sidebar[`/blog`+`/${key}/`] = [{title, children}];
}

console.log(sidebar);

module.exports = sidebar;
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