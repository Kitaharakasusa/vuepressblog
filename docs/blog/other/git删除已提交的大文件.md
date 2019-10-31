---
title: git删除已提交的大文件
date: 2019-04-02 16:30:19
categories: git
tags: git
---

本文记录一下当git不小心提交了大文件的时候该如何操作

### 不再跟踪记录文件

`git rm filename` 

该命令会将文件直接删除，建议后面跟-f

### 寻找大文件

`git rev-list --objects --all | grep "$(git verify-pack -v .git/objects/pack/*.                                 
idx | sort -k 3 -n | tail -5 | awk '{print$1}')"                                                                 `

### 清除大文件

`git filter-branch -f --prune-empty --index-filter 'git rm -rf --cached --ignore-unmatch your_file_name' --tag-name-filter cat -- --all                                                                     `

之后就是commit和push了 