---
title: leetcode-304-IntegerBreak
date: 2019-05-25 20:03:13
categories: 算法
tags:
---

原题如下:

Given a positive integer *n*, break it into the sum of **at least** two positive integers and maximize the product of those integers. Return the maximum product you can get.

**Example 1:**

```
Input: 2
Output: 1
Explanation: 2 = 1 + 1, 1 × 1 = 1.
```

**Example 2:**

```
Input: 10
Output: 36
Explanation: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36.
```



我们不难发现，其中

```
2 = 1 + 1 乘积为 1
3 = 1 + 2      2
4 = 2 + 2      4
5 = 2 + 3      5
6 = 3 + 3      9
7 = 3 + 4      12
8 = 3 + 3 + 2  15
9 = 3 + 3 + 3  27
10 = 3 + 3 + 4 36
```

从5开始，若想取到最大值，那么我们需要先将所有的3拆出来，剩下的可会是 2 或者 4， 4 不用拆了，拆成两个2最终的结果反倒是会变小，所以可以得到如下代码。

 ```js
/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    if (n === 2 || n === 3) return n - 1;
    let res = 1;
    while (n > 4) {
        res *= 3;
        n -= 3;
    }
    return res * n;
};
 ```



