---
title: leetcode-83-RemoveDuplicatesFromSortedList
date: 2019-06-01 19:09:02
categories: 算法
tags:
---

原题如下

Given a sorted linked list, delete all duplicates such that each element appear only *once*.

**Example 1:**

```
Input: 1->1->2
Output: 1->2
```

**Example 2:**

```
Input: 1->1->2->3->3
Output: 1->2->3
```

该题比较简单，由于是已经排序过的，只要将后面重复的值的节点删除就好。

javascript代码如下：

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let realHead = head;
    while (head !== null && head.next !== null) {
         if (head.val == head.next.val) {
             head.next = head.next.next;
         }
         else head = head.next;
    }
    return realHead;
};
```

