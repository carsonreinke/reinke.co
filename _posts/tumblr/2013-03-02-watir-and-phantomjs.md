---
layout: post
title: Watir and PhantomJS
date: '2013-03-02T12:56:02-05:00'
tags:
- phantomjs
- watir
tumblr_url: https://reinke.co/post/44383108617/watir-and-phantomjs
---
1. Run the phantomjs webdriver first:&nbsp;`phantomjs --webdriver=8910`
2. 

    $> driver = Selenium::WebDriver.for(:remote, :url => "http://localhost:8910") => #<Selenium::WebDriver::Driver:0x..f5cf0fbae287ba00 browser=:phantomjs>  $> b = Watir::Browser.new driver => #<Watir::Browser:0x4a8a6ee2cae900d8 url="about:blank" title="">  $> b.goto 'reinke.co' => "http://www.reinke.co/" 

