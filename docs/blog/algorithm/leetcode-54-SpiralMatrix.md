---
title: leetcode-54-SpiralMatrix
date: 2019-05-23 23:27:14
categories: 算法
tags:
---

Given a matrix of *m* x *n* elements (*m* rows, *n* columns), return all elements of the matrix in spiral order.

**Example 1:**

```
Input:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
Output: [1,2,3,6,9,8,7,4,5]
```

**Example 2:**

```
Input:
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
```

javascript代码如下：

```js
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
     if (matrix.length < 1) return [];
     let row = matrix.length;
     let col = matrix[0].length;
     let res = new Array(row * col);
    
     let u = 0, d = row -1, l = 0, r = col - 1, k = 0;
     while (true) {
         //up
         for (let col = l; col <= r; col++) res[k++] = matrix[u][col];
         if (++u > d) break;
        //right
         for (let row = u; row <=d; row++) res[k++] = matrix[row][r];
         if ( -- r < l) break;
         //down
         for (let col = r; col >= l; col--) res[k++] = matrix[d][col];
         if (--d < u) break;
         //left
         for (let row = d; row >= u; row--) res[k++] = matrix[row][l];
         if (++l > r) break;
     }
    return res;
};
```

