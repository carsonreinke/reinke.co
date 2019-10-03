---
layout: post
title: How can I check that the nginx gzip_static module is working?
date: '2013-11-25T10:40:13-05:00'
tags:
- nginx
tumblr_url: https://reinke.co/post/68066620068/how-can-i-check-that-the-nginx-gzipstatic-module
---
[How can I check that the nginx gzip\_static module is working?](http://reinke.co/post/61677134901/how-can-i-check-that-the-nginx-gzip-static-module-is)  

> I was looking for a way to verify gzip\_static was working correctly. However, using this I was actually able to optimize my Nginx configuration file.

One for the grab bag.

`dtruss -p `pgrep -f "^nginx: worker process"``

