---
title: leetcode-73-SetMatrixZeroes
date: 2019-07-10 00:19:42
categories: 算法
tags:
---

Given a *m* x *n* matrix, if an element is 0, set its entire row and column to 0. Do it [**in-place**](https://en.wikipedia.org/wiki/In-place_algorithm).

**Example 1:**

```
Input: 
[
  [1,1,1],
  [1,0,1],
  [1,1,1]
]
Output: 
[
  [1,0,1],
  [0,0,0],
  [1,0,1]
]
```

**Example 2:**

```
Input: 
[
  [0,1,2,0],
  [3,4,5,2],
  [1,3,1,5]
]
Output: 
[
  [0,0,0,0],
  [0,4,5,0],
  [0,3,1,0]
]
```



比较直观的解法

```js
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let a = [];
    let row = matrix.length;
    let col = matrix[0].length;
    for(let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++){
            if (matrix[i][j] === 0){
                let pos = [];
                pos[0] = i;
                pos[1] = j;
                a.push(pos);
            } 
        } 
    }
    for (let count = 0; count < a.length; count++) {
        let rowpos = a[count][0];
        let colpos = a[count][1];
        for (let i = 0; i < row; i++){
            matrix[i][colpos] = 0;
        } 
        for (let j = 0; j < col; j++) {
            matrix[rowpos][j] = 0;
        } 
    }
    
};
```

