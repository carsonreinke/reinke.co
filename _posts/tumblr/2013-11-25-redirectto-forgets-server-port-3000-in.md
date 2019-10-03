---
layout: post
title: redirect_to forgets server port (3000) in production / mongrel / nginx (Page
  1) - Controllers and Views - Rails Forum - Ruby on Rails Help and Discussion Forum
date: '2013-11-25T13:58:58-05:00'
tags:
- nginx
tumblr_url: https://reinke.co/post/68081325533/redirectto-forgets-server-port-3000-in
---
[redirect\_to forgets server port (3000) in production / mongrel / nginx (Page 1) - Controllers and Views - Rails Forum - Ruby on Rails Help and Discussion Forum](http://archive.railsforum.com/viewtopic.php?id=1447)  

> redirect\_to forgets server port (3000) in production / mongrel / nginx (Page 1) - Controllers and Views - Rails Forum - Ruby on Rails Help and Discussion Forum - A forum for Ruby on Rails users

Testing with WEBrick, came across this issue. &nbsp;Changing the `proxy_set_header` helped when port was missing.

