---
title: leetcode-66-PlusOne
date: 2019-05-24 16:43:45
categories: 算法
tags:
---

Given a **non-empty** array of digits representing a non-negative integer, plus one to the integer.

The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

You may assume the integer does not contain any leading zero, except the number 0 itself.

**Example 1:**

```
Input: [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
```

**Example 2:**

```
Input: [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
```

javascript代码如下

```js
var plusOne = function(digits) {
    if (digits.length === 0) return digits;
    
    for (let i= digits.length - 1; i >= 0; i --) {
        if ( digits[i] < 9) {
            digits[i]++;
            return digits;
        }
        digits[i] = 0;
    }
    let res = new Array(digits.length + 1);
    res[0] = 1;
    return res;
};
```

加了这行字测试一下