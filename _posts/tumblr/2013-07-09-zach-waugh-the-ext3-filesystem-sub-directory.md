---
layout: post
title: 'Zach Waugh: The Ext3 filesystem sub-directory limit'
date: '2013-07-09T08:47:21-04:00'
tags:
- linux
- ext3
tumblr_url: https://reinke.co/post/54996554146/zach-waugh-the-ext3-filesystem-sub-directory
---
[Zach Waugh: The Ext3 filesystem sub-directory limit](http://blog.zachwaugh.com/post/309921185/ext3-filesystem-sub-directory-limit)  

> I recently came across a problem on a site where a client could no longer upload images through their site. After digging through the logs, I found the relevant error:
> 
> > Errno::EMLINK (Too many links - /usr/lib/ruby/1.8/fileutils.rb:243:in `mkdir’
> 
> This error was occurring when the system tried to…

Found this very useful as I came across this problem.

