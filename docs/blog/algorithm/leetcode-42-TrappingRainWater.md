---
title: 'leetcode-42-TrappingRainWater'
date: 2019-05-21 17:45:09
categories: 算法
tags:
---

## 42. Trapping Rain Water

Given *n* non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.

![](https://raw.githubusercontent.com/Kitaharakasusa/img/master/rainwatertrap.png)

The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped. **Thanks Marcos** for contributing this image!

**Example:**

```
Input: [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
```

题解如下：

该题是典型的动态规划问题，javascript代码如下

解法一：先从左到右遍历，dp数组存储左边的最大值，然后从右到左遍历，存储最小值，

```javascript
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
     let n = height.length;
     let res = 0; 
     let mx = 0;
     let  dp = new Array(n).fill(0);
     for ( let i = 0; i < n; i++) {
          dp[i] = mx;
          mx =  Math.max(mx, height[i]);
     }
    mx = 0;
     for (let i = n - 1; i >=0; i--) {
          dp[i] = Math.min(dp[i], mx);
          mx = Math.max(mx, height[i]);
          if (dp[i] > height[i]) res += dp[i] - height[i];
     }
     return res;
    
};
```

解法二：定义两个指针，从两边向中间扫描

```javascript
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
     let n = height.length;
     let res = 0; 
     let mx = 0;
     let  dp = new Array(n).fill(0);
     for ( let i = 0; i < n; i++) {
          dp[i] = mx;
          mx =  Math.max(mx, height[i]);
     }
    mx = 0;
     for (let i = n - 1; i >=0; i--) {
          dp[i] = Math.min(dp[i], mx);
          mx = Math.max(mx, height[i]);
          if (dp[i] > height[i]) res += dp[i] - height[i];
     }
     return res;
    
};
```

