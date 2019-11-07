---
title: js浏览器对象
date: 2018-11-05 15:56:56
categories: 前端
tags: 
- javasrcipt
- 前端
---

### window对象

所有浏览器都支持 *window* 对象。它表示浏览器窗口。

所有 JavaScript 全局对象、函数以及变量均自动成为 window 对象的成员。

全局变量是 window 对象的属性。

全局函数是 window 对象的方法。

甚至 HTML DOM 的 document 也是 window 对象的属性之一：

`window.document.getElementById("header");`

与此相同

`document.getElementById("header");`

**尺寸**

有三种方法能够确定浏览器窗口的尺寸（浏览器的视口，不包括工具栏和滚动条）。

对于Internet Explorer、Chrome、Firefox、Opera 以及 Safari：

 - window.innerHeight - 浏览器窗口的内部高度
 - window.innerWidth - 浏览器窗口的内部宽度

 对于 Internet Explorer 8、7、6、5：

 - document.documentElement.clientHeight
 - document.documentElement.clientWidth

 或者

 - document.body.clientHeight
 - document.body.clientWidth

### 计时器

 计时器就是两个函数

 1. setTimeout

 2. clearTimeout: 取消setTimetout

    ```javascript
    var t=setTimeout("javascript语句",毫秒)3.setIntervel
    ```

 3. setInterval

### History对象

   1.history.back()返回上一页

2. history.forward() 下一页

3. history.go(-1)上一页 history.go(1)下一页 

### Location对象

 window.location对象用于获得当前页面的地址(URL)，并把浏览器重定向到新的页面

**属性**

- location.hostname 返回 web 主机的域名
- location.pathname 返回当前页面的路径和文件名
- location.port 返回 web 主机的端口 （80 或 443）
- location.protocol 返回所使用的 web 协议（http:// 或 https://）
- location.assign() 方法加载新的文档
- location.href 属性返回当前页面的 URL

### Screen对象

*window.screen* 对象在编写时可以不使用 window 这个前缀。

一些属性：

- screen.availWidth - 可用的屏幕宽度
- screen.availHeight - 可用的屏幕高度。





