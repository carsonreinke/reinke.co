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

```
mailcatcher_process_id = Kernel.fork do 
    require 'mail_catcher' 
    MailCatcher.run!(:daemon => false) 
end 
$stderr.puts('Unable to fork mailcatcher') if mailcatcher_process_id.nil?() 
Kernel.at_exit do 
    unless mailcatcher_process_id.nil?()
        Process.kill('TERM', mailcatcher_process_id) rescue nil 
        Process.kill('SIGTERM', mailcatcher_process_id) rescue nil 
    end 
end
```

