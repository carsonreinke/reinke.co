---
layout: post
title: 'libgpgme.so.11: cannot open  shared object file: No such file or directory
  in Unknown on line 0'
date: '2011-07-20T16:49:44-04:00'
tags:
  - link
tumblr_url: https://reinke.co/post/7856306280/libgpgmeso11-cannot-open-shared-object-file
---
[http://old.nabble.com/Cannot-open-shared-object-file-td30570804.html](http://old.nabble.com/Cannot-open-shared-object-file-td30570804.html)

Was able to fix this problem by using **_–with-prefix_** for **_configure_** &nbsp;to the correct directory when building _ **gpgme** _. &nbsp;Basically, the dependency could not be found. &nbsp;In my situation, I used _ **–with-prefix=/usr** _ because without it _ **/usr/local** _&nbsp;was being used and that is not within _ **ldconfig** _ path. &nbsp;Obviously, the “No such file or directory” is a giveaway on this issue. &nbsp;Another option would of been to modify the ldconfig file, but that did not seem like a good idea to me, since the only issue was a bad path.

