---
title: leetcode-309
date: 2019-02-13 22:58:32
categories: 算法
tags:
---

# 309. Best Time to Buy and Sell Stock with Cooldown

原题如下

Say you have an array for which the *i*^th^ element is the price of a given stock on day *i*.

Design an algorithm to find the maximum profit. You may complete as many transactions as you like (ie, buy one and sell one share of the stock multiple times) with the following restrictions:

- You may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).
- After you sell your stock, you cannot buy stock on next day. (ie, cooldown 1 day)

####Example

```
Input: [1,2,3,0,2]
Output: 3 
Explanation: transactions = [buy, sell, cooldown, buy, sell]
```

题目解释:

`prices[i]` 代表第`i`天的股票价格,  问可能得到的最大profit, 交易规则如下:

- 买之前必须卖掉
- 每次只能买卖一股
- 不限制总共的买卖次数
- 卖完股票第二天不能买股票(要休息一天)

从discuss里面看了方法, 但是感觉难以理解, 在油管上看到了这个方法, 虽然时间上没之前的那么快, 但是更加易于理解,视频地址: https://www.youtube.com/watch?v=Ggzbo9eVrLU

#### Example

prices = [1, 2, 3, 0, 2]

maxProfit = 3



transactions = [buy , sell, cooldown, buy, sell]

profit:                -1        1            1             1     3



Assumption: 股票价格不能为负

##dp的方法:

1. 定义状态:

   hold[i]: 第i天hold股票的最大profit

   unhold[i]: 第i天不hold鬼獒的最大profit

2. Target: unhold[n-1]

3. Base Case:

   hold[0] = -prices[0]

   hold[1] = max(-prices[1], -prices[0])

   unhold[0] = 0

4. 状态转移

   hold[i] 取一下情况最大值

   - 第i天买入       `unhold[i-2] -  prices[i]`
   - 第i天没有买入`hold[i-1]`

   unhold[i]取一下情况最大值

   - 第i天有卖出      `hold[i-1] + prices[i]`
   - 第i天没有卖出 `unhold[i-1]`

java代码如下:

```java
class Solution {
    public int maxProfit(int[] prices) {
       if(prices == null || prices.length <= 1) {
           return 0;
       }
        int n = prices.length;
        int[] hold = new int[n];
        int[] unhold = new int[n];
        
        hold[0] = -prices[0];
        
        for(int i = 1; i<n; i++) {
            if(i ==1) {
                hold[i] = Math.max(hold[i-1], -prices[1]);
            }else {
                hold[i] = Math.max(hold[i - 1], unhold[i - 2] - prices[i]);
            }
            unhold[i] = Math.max(unhold[i-1], hold[i-1] + prices[i]);
        }
        return unhold[n-1];
    }
}
```



