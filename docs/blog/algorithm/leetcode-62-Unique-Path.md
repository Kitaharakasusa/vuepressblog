---
title: 'leetcode#62.Unique Path'
date: 2018-11-07 13:52:47
categories: 算法
tags: 
- leetcode
- 算法
- java
---

原题如下

> A robot is located at the top-left corner of a *m* x *n* grid (marked 'Start' in the diagram below).
>
> The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).
>
> How many possible unique paths are there?

从左上角开始走，每一步只能往右或者往下走，问多少步能到达最右下角

我看到dp问题往往是懵逼的，基本是做一次忘一次，这次就记录一下吧。

**方法一**

常规的思路非常的简单，就是到达当前格子的路径数目 = 左边的格子的路径数 + 上方格子的路径数

```java
public class UniquePaths {
    public int uniquePaths(int m, int n) {
            int map[][] = new int[m][n];
            for (int i= 0; i < m; i++) {
                for (int j = 0; j < n; j++) {
                    if (i == 0 || j  ==0) map[i][j]=1;
                    else {
                        map[i][j] = map[i-1][j] + map[i] [j-1];
                    }
                }
            }
            return map[m-1][n-1];
    }
}
```
这种方法的时间复杂度是$O(n^2)$空间复杂度是 $O(m*n)$  每次当我们更新map\[i][j]的时候我们只需要map\[i-1][j]和map\[i][j-1]，所以我们只需要维护两列：当前列和左边的那一列所以有了方法二

**方法二**

```java
public class UniquePaths {
    public int uniquePaths(int m, int n) {
            int cur[] = new int[n];
            for(int i = 0; i < n; i++)cur[i] = 1;
            for (int i= 1; i < m; i++) {
                for (int j = 1; j < n; j++) {
                    cur[j] += cur[j-1];
                }
            }
            return cur[n-1];
    }
}
```















