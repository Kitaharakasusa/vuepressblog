---
title: leetcode-140-WordBreakTwo
date: 2019-05-26 11:08:21
categories: 算法
tags:
---

Given a **non-empty** string *s* and a dictionary *wordDict* containing a list of **non-empty** words, add spaces in *s* to construct a sentence where each word is a valid dictionary word. Return all such possible sentences.

**Note:**

- The same word in the dictionary may be reused multiple times in the segmentation.
- You may assume the dictionary does not contain duplicate words.

**Example 1:**

```
Input:
s = "catsanddog"
wordDict = ["cat", "cats", "and", "sand", "dog"]
Output:
[
  "cats and dog",
  "cat sand dog"
]
```

**Example 2:**

```
Input:
s = "pineapplepenapple"
wordDict = ["apple", "pen", "applepen", "pine", "pineapple"]
Output:
[
  "pine apple pen apple",
  "pineapple pen apple",
  "pine applepen apple"
]
Explanation: Note that you are allowed to reuse a dictionary word.
```

**Example 3:**

```
Input:
s = "catsandog"
wordDict = ["cats", "dog", "sand", "and", "cat"]
Output:
[]
```





js题解如下

```js
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
    let res = [];
    let from = [];
    wordDict = new Set(wordDict);
    from[0] = [0];
    for (let i = 1; i <= s.length; i++) {
        from[i] = [];
        for (let j = 0; j < i; j++) {
            if ( from[j].length && wordDict.has(s.substring(j, i))) {
                from[i].push(j);
            }
        }
    }
    build(s.length, '');
    return res;

    function build(idx, suffix) {
        if (!idx) return res.push(suffix);
        from[idx].forEach(function (from) {
            build(from, suffix === ''? s.substring(from, idx):
            s.substring(from, idx) +' ' +suffix); 
        })
    }
};

```

= =还得再琢磨琢磨



