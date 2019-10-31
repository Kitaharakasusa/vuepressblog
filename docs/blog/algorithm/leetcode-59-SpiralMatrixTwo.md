---
title: leetcode-59-SpiralMatrixTwo
date: 2019-05-24 10:10:12
categories: 算法
tags:
---

原题如下

Given a positive integer *n*, generate a square matrix filled with elements from 1 to n^2^ in spiral order.

**Example:**

```
Input: 3
Output:
[
 [ 1, 2, 3 ],
 [ 8, 9, 4 ],
 [ 7, 6, 5 ]
]
```

javascript代码如下

```js
var generateMatrix = function(n) {
     let spiral = new Array(n);
     for(let i = 0; i < n; i++) {
         spiral[i] = new Array(n);
     }
    let val = 1, p = n;
    for (let i = 0; i < Math.floor(n / 2); i++, p -= 2) {
        for (let col = i;  col < i + p; col++) 
            spiral[i][col]=val++;
        for (let row = i + 1; row < i+p; row++)
            spiral[row][i + p - 1] = val++;
        for (let col = i + p - 2; col >=i; col-- )
            spiral[i + p -1][col] = val++;
        for (let row = i + p - 2; row > i; row--)
            spiral[row][i] = val++;
    }
    let index = Math.floor(n / 2);
    if (n % 2 !==0) spiral[index][index] = val;
    return spiral;
};
```

解法二 简化参数 这种方法的参数非常的清晰

```js
var generateMatrix = function(n) {
     let spiral = new Array(n);
     for(let i = 0; i < n; i++) {
         spiral[i] = new Array(n);
     }
     let up = 0, down = n - 1, left = 0, right = n - 1, val  = 1;
     while(true) {
         for ( let j = left; j <= right; j++) spiral[up][j] = val++;
         if (++up > down) break;
         for ( let i = up; i <=down; i++) spiral[i][right] = val++;
         if (--right < left) break;
         for (let j = right; j >=left; j--) spiral[down][j] = val++;
         if (-- down < up) break;
         for (let i = down; i >=up; i--) spiral[i][left] = val++;
         if (++left > right) break
     }
     return spiral;
};
```

