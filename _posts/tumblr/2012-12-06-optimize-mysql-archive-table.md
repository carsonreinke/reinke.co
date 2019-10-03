---
layout: post
title: Optimize MySQL ARCHIVE Table
date: '2012-12-06T16:03:00-05:00'
tags:
- mysql
tumblr_url: https://reinke.co/post/37351817373/optimize-mysql-archive-table
---
Running optimize on an archive table will reset the AUTO\_INCREMENT value. &nbsp;Setting the AUTO\_INCREMENT value back to the original value will not work, instead this needs to be set to 0 or 1. &nbsp;Appears to be something how the table is re-built, might be a problem specifically with using partitions also.

