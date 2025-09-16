---
layout: post
title: Seed Data in Rails
date: '2013-12-19T14:18:05-05:00'
tags:
- link
tumblr_url: https://reinke.co/post/70508372898/seed-data-in-rails
---
[Seed Data in Rails](http://quotedprintable.com/2007/11/16/seed-data-in-rails#comments)  

I was able to decrease seeding time from ~2-3 minutes down to 1 second by switching to using MySQL LOAD DATE INFILE instead of `#create!` statements.

