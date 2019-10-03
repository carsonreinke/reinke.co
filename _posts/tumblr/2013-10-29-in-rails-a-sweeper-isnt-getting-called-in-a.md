---
layout: post
title: In Rails, a Sweeper isn't getting called in a Model-only setup - Stack Overflow
date: '2013-10-29T11:00:42-04:00'
tags:
- rails
tumblr_url: https://reinke.co/post/65435077535/in-rails-a-sweeper-isnt-getting-called-in-a
---
[In Rails, a Sweeper isn't getting called in a Model-only setup - Stack Overflow](http://stackoverflow.com/questions/1463714/in-rails-a-sweeper-isnt-getting-called-in-a-model-only-setup)  

I was looking into this kind of lacked some details. &nbsp;Here is also another [blog post](http://softwareas.com/rails-cache-sweeper-gotchas) that was quite helpful.

Sweepers require a controller, so cannot be used outside of a request. &nbsp;If a sweeper is called outside of the controller, all calls to `expire_` will be [silently ignored](https://github.com/rails/rails/blob/9b08afd2f4d501fb1710ba0ed4e19313093605c8/actionpack/lib/action_controller/caching/sweeping.rb#L91). &nbsp;You do not have to add a sweeper to observers, this is on purpose as the&nbsp;`cache_sweeper` method used in the controller adds it to the observers and also includes the controller object.

