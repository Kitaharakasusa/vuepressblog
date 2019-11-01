# leetcode 57 题解

原题如下所示：

Given a set of *non-overlapping* intervals, insert a new interval into the intervals (merge if necessary).

You may assume that the intervals were initially sorted according to their start times.

**Example 1:**

```
Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]
```

**Example 2:**

```
Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]
Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
```

该题就是将newInterval插入到原本的intervals数组中，如果由重叠的区间则合并。被合并的区间原本在数组中也肯定是连续的，我们将一个区间的开始定义为start，末尾定义为end，那么我们newInterval插入的地方，一定是找到最后一个end比newInterval的start要小的区间， 从右到左找到最后一个start比newInterval的end大的区间，newInterval一定会插在这两个区间之间，并将中间的区间合并。

最终的代码如下

```javascript
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    let n = intervals.length;
    let l = -1, r = n;
    while(l < n - 1 && intervals[l+1][1] < newInterval[0]) l++;
    while(r > 0 && intervals[r-1][0] > newInterval[1]) r--;

    if (r > 0) newInterval[1] = Math.max(newInterval[1], intervals[r - 1][1]);
    if (l < n-1) newInterval[0] = Math.min(newInterval[0], intervals[l+1][0]);

    console.log(l, r);
    let res = [];
    for(let i = 0; i <= l; i++){
        res.push(intervals[i]);
    }
    res.push(newInterval);
    for(let j = r; j < n; j++) {
        res.push(intervals[j]);
    }
    
    return res;
};
```

