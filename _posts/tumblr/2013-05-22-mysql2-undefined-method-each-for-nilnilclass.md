---
layout: post
title: mysql2 - undefined method `each' for nil:NilClass Within Resque
date: '2013-05-22T10:14:00-04:00'
tags:
- resque
- mysql2
tumblr_url: https://reinke.co/post/51069991684/mysql2-undefined-method-each-for-nilnilclass
---
Came across this problem, and finally figured out what is causing this (well in my case). &nbsp;Sending a SIGUSR1 to the worker, terminates the child process, however, it seems to leave mysql2 connection sometimes in a bad state. &nbsp;The next job that is started by the worker cannot use mysql2 properly, but the job after works without issue. &nbsp;I just switched to using a SIGTERM instead, so the entire worker will be restarted fresh.

