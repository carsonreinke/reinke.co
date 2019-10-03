---
layout: post
title: Mocking SMTP in Unit Tests
date: '2014-08-27T15:20:45-04:00'
tags:
- ruby
- rails
- smtp
tumblr_url: https://reinke.co/post/95931883292/mocking-smtp-in-unit-tests
---
I’m sure there are other better ways to do this, but I just wanted to try doing something real quick using [MailCatcher](http://mailcatcher.me/).

Instead of just starting a process up, I added the following to the `test_helper.rb`

    mailcatcher\_process\_id = Kernel.fork do require 'mail\_catcher' MailCatcher.run!(:daemon =\> false) end $stderr.puts('Unable to fork mailcatcher') if mailcatcher\_process\_id.nil?() Kernel.at\_exit do unless mailcatcher\_process\_id.nil?() Process.kill('TERM', mailcatcher\_process\_id) rescue nil Process.kill('SIGTERM', mailcatcher\_process\_id) rescue nil end end

