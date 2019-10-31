---
title: Angular6 navigate ActivedRoute 实现类似谷歌的搜索效果
date: 2019-09-22 17:40:08
categories:
tags:
---

当时还看了蛮久, 结果发现原理很简单

1. 更改url
2. 监听url的变化 进而进行搜索

采用Router的navigate方法更改url链接

```
this.router.navigate([], {
    queryParams: {
    }
  });
 }
```

这个方法可以更新当前url链接的参数,并将旧的链接进行pushstate操作,可以进行网页的前进和后退

采用ActivedRouter对url的变更进行监听

```
this.routeInfo.queryParams.subscribe(params => {
    }
)
```

该方法可以监听url参数的变更,从而对参数进行解析,之后再进行搜索即可.