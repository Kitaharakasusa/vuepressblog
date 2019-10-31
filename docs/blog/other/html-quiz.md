---
title: html_quiz
date: 2019-04-09 20:44:21
categories: 前端
tags: HTML
---

## doctype是什么

doctype是一种标准通用标记语言的文档类型声明，目的是告诉标准通用标记语言解析器要使用什么样的文档类型定义（DTD）来解析文档。

<!DOCTYPE>声明是用来指示web浏览器关于页面使用哪个HTML版本进行编写的指令。

<!DOCTYPE>声明必须是HTML文档的第一行，位于html标签之前。

浏览器本身分为两种模式，一种是标准模式，一种是怪异模式，浏览器通过doctype来区分这两种模式，doctype在html中的作用就是触发浏览器的标准模式，如果html中省略了doctype，浏览器就会进入到Quirks模式的怪异状态，在这种模式下，有些样式会和标准模式存在差异，而html标准和dom标准值规定了标准模式下的行为，没有对怪异模式做出规定，因此不同浏览器在怪异模式下的处理也是不同的，所以一定要在html开头使用doctype。

### html4.01的doctype
在HTML4.01中，<!DOCTYPE>声明引用DTD，因为HTML4.01基于SGML。DTD规定了标记语言的规则，这样浏览器才能正确的呈现内容。在HTML4.01中有三种<!DOCTYPE>声明。

#### 严格模式
`<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"  "http://www.w3.org/TR/html4/strict.dtd">`
#### 过渡模式
`<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"  "http://www.w3.org/TR/html4/loose.dtd">`
#### 框架模式
`<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN"  "http://www.w3.org/TR/html4/frameset.dtd">`

### HTML5中的doctype
HTML5不基于SGML，所以不需要引用DTD。在HTML5中<!DOCTYPE>只有一种
`<！DOCTYPE html>`

## 多语言静态页面解决方案

1. 在服务器端为每个语言准备一个静态页面，根据用户请求头里面的语言内容来自动切换
2. 每个语言内容采用json进行存储，用户可以自行更换
3. 每个语言内容采用css的方式进行存储

## 设计一个多语言页面要考虑什么
1. 多语言内容的问题，上面有提到
2. 统一采用utf-8编码
3. 对于同样的内容，不同的语言的字符长度不同，要做到自适应

## data-* 属性能干嘛
它初衷是数据应与特定的元素相关联，但不需要任何定义。data-* 属性允许我们在标准内于HTML元素中存储额外的信息，而不需要使用类似于 classList，标准外属性，DOM额外属性或是 setUserData 之类的技巧。

## HTML5的构建模块
- 更语义化的标记
- 新的表单元素
- vedio 和 audio
- 新的js API
- canvas 和 SVG
- 新的通信api
- 定位api
- web wordker api
- 新的数据存储方式

## cookie localStorage sessionStorage的异同
### cookie 
Cookie 是小甜饼的意思。顾名思义，cookie 确实非常小，它的大小限制为4KB左右，是网景公司的前雇员 Lou Montulli 在1993年3月的发明。它的主要用途有保存登录信息，比如你登录某个网站市场可以看到“记住密码”，这通常就是通过在 Cookie 中存入一段辨别用户身份的数据来实现的。

### localStorage
localStorage 是 HTML5 标准中新加入的技术，它并不是什么划时代的新东西。早在 IE 6 时代，就有一个叫 userData 的东西用于本地存储，而当时考虑到浏览器兼容性，更通用的方案是使用 Flash。而如今，localStorage 被大多数浏览器所支持，如果你的网站需要支持 IE6+，那以 userData 作为你的 polyfill 的方案是种不错的选择。

### sessionStorage
sessionStorage 与 localStorage 的接口类似，但保存数据的生命周期与 localStorage 不同。做过后端开发的同学应该知道 Session 这个词的意思，直译过来是“会话”。而 sessionStorage 是一个前端的概念，它只是可以将一部分数据在当前会话中保存下来，刷新页面数据依旧存在。但当页面关闭后，sessionStorage 中的数据就会被清空。

### 三者的异同
| 特性           | cookie                                                       | localStorage                                                | sessionStorage                               |
| -------------- | ------------------------------------------------------------ | ----------------------------------------------------------- | -------------------------------------------- |
| 数据的生命周期 | 一般由服务器生成，可设置失效时间。如果在浏览器端生成Cookie，默认是关闭浏览器后失效 | 除非被清除，否则永久保存                                    | 仅在当前会话下有效，关闭页面或浏览器后被清除 |
| 存放数据的大小 | 4K左右                                                       | 一般为5MB                                                   |                                              |
| 与服务器端通信 | 每次都会携带在HTTP头中，如果使用cookie保存过多数据会带来性能问题 | 仅在客户端（即浏览器）中保存，不参与和服务器的通信          |                                              |
| 易用性         | 需要程序员自己封装，源生的Cookie接口不友好                   | 源生接口可以接受，亦可再次封装来对Object和Array有更好的支持 |                                              |

### 应用场景
有了对上面这些差别的直观理解，我们就可以讨论三者的应用场景了。

因为考虑到每个 HTTP 请求都会带着 Cookie 的信息，所以 Cookie 当然是能精简就精简啦，比较常用的一个应用场景就是判断用户是否登录。针对登录过的用户，服务器端会在他登录时往 Cookie 中插入一段加密过的唯一辨识单一用户的辨识码，下次只要读取这个值就可以判断当前用户是否登录啦。曾经还使用 Cookie 来保存用户在电商网站的购物车信息，如今有了 localStorage，似乎在这个方面也可以给 Cookie 放个假了~

而另一方面 localStorage 接替了 Cookie 管理购物车的工作，同时也能胜任其他一些工作。比如HTML5游戏通常会产生一些本地数据，localStorage 也是非常适用的。如果遇到一些内容特别多的表单，为了优化用户体验，我们可能要把表单页面拆分成多个子页面，然后按步骤引导用户填写。这时候 sessionStorage 的作用就发挥出来了。

### 安全性的考虑

需要注意的是，不是什么数据都适合放在 Cookie、localStorage 和 sessionStorage 中的。使用它们的时候，需要时刻注意是否有代码存在 XSS 注入的风险。因为只要打开控制台，你就随意修改它们的值，也就是说如果你的网站中有 XSS 的风险，它们就能对你的 localStorage 肆意妄为。所以千万不要用它们存储你系统中的敏感数据。

## script script async  script defer的区别

-  `<script src="script.js"></script>`
  没有 `defer` 或 `async`，浏览器会立即加载并执行指定的脚本，“立即”指的是在渲染该 `script` 标签之下的文档元素之前，也就是说不等待后续载入的文档元素，读到就加载并执行。

-  `<script async src="script.js"></script>`
  有 `async`，加载和渲染后续文档元素的过程将和 `script.js` 的加载与执行并行进行（异步）。

-  `<script defer src="myscript.js"></script>`
  有 `defer`，加载后续文档元素的过程将和 `script.js` 的加载并行进行（异步），但是` script.js` 的执行要在所有元素解析完成之后，`DOMContentLoaded` 事件触发之前完成。

然后从实用角度来说呢，首先把所有脚本都丢到 </body> 之前是最佳实践，因为对于旧浏览器来说这是唯一的优化选择，此法可保证非脚本的其他一切元素能够以最快的速度得到加载和解析。

接着，我们来看一张图：

![image](http://segmentfault.com/img/bVcQV0)

蓝色线代表网络读取，红色线代表执行时间，这俩都是针对脚本的；绿色线代表 HTML 解析。

此图告诉我们以下几个要点：

`defer` 和 `async` 在网络读取（下载）这块儿是一样的，都是异步的（相较于 HTML 解析）
它俩的差别在于脚本下载完之后何时执行，显然 defer 是最接近我们对于应用脚本加载和执行的要求的
关于 `defer`，此图未尽之处在于它是按照加载顺序执行脚本的，这一点要善加利用
`async` 则是一个乱序执行的主，反正对它来说脚本的加载和执行是紧紧挨着的，所以不管你声明的顺序如何，只要它加载完了就会立刻执行
仔细想想，`async` 对于应用脚本的用处不大，因为它完全不考虑依赖（哪怕是最低级的顺序执行），不过它对于那些可以不依赖任何脚本或不被任何脚本依赖的脚本来说却是非常合适的，最典型的例子：Google Analytics

## 为什么要把css的link放在head中

css放在head标签中时, 先加载css, 之后解析css构建CSSOMTree, 于此同时构建DOMTree, CSSOMTree和DOMTree都构建完毕之后开始构建RenderTree, 计算布局渲染网页

css放在body标签尾部时, DOMTree构建完成之后便开始构建RenderTree, 并计算布局渲染网页, 等加载解析完css之后, 开始构建CSSOMTree, 并和DOMTree重新构建RenderTree, 重新计算布局渲染网页

对比两者, css放在head标签中比css放在body标签尾部少了一次构建RenderTree, 一次计算布局和一次渲染网页, 因此性能会更好; 并且css放在body标签尾部时会在网页中短暂出现"裸奔"的HTML, 这不利于用户体验

## 什么是渐进式渲染

With HTML progressive rendering is chunking the HTML into separate bits and loading each block as it's finished. Usually, the backend code loads the HTML at once, but if you flush after finishing one part of the structure, it can be rendered immediately to the page.

This can be done asynchronously with different components being loaded as they finish. There's new features which can be used with Web Components making it more standard. Another interesting article on this is from eBay with Async Fragments.

When a HTTP response is flushed multiple times, a browser doesn't wait until the whole content is loaded and renders each part earlier.

## 你用过HTML 模板语言吗

Yes. Jinja2 and Django template language in Python. Jade and EJS in JavaScript. Some more in other languages.

