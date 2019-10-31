---
title: leetcode-82-RemoveDpulicatesFromSortedListTwo
date: 2019-06-01 19:26:24
categories: 算法
tags:
---

Given a sorted linked list, delete all nodes that have duplicate numbers, leaving only *distinct* numbers from the original list.

**Example 1:**

```
Input: 1->2->3->3->4->4->5
Output: 1->2->5
```

**Example 2:**

```
Input: 1->1->1->2->3
Output: 2->3
```

该题的难点在于要删除所有的重复节点，如果从头结点开始，但是头结点也可能重复，所以新建一个头结点之前的假头结点，代码如下：

```js
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
    if (!head || !head.next) return head;
    let  dummy = new ListNode(), pre = dummy;
    dummy.next = head;
    while (pre.next) {
        let cur = pre.next;
        while (cur.next && cur.next.val === cur.val) {
            cur = cur.next;
        }
        if (cur !== pre.next) pre.next = cur.next;
        else pre = pre.next;
    }
    return dummy.next;
};
```

