---
title: Angular6移动端事件监听
date: 2019-09-22 17:38:45
categories:
tags:
---

我遇到的需求是移动端的input输入完之后, 由于采用的是实时搜索,这个时候需要滑动页面就收起手机键盘,即使input失去焦点

采用ViewChild方式获取到input组件

component.ts部分

```
  @ViewChild('greet', {static: false}) inputElement: ElementRef;
  
  ngAfterViewInit() {
  window.addEventListener('scroll', () => {
    this.inputElement.nativeElement.blur();
  });
}
```

之后是html部分

```
<input #greet/>
```

