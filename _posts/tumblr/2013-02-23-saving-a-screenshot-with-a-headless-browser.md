---
layout: post
title: Saving A Screenshot With A Headless Browser
date: '2013-02-23T18:28:12-05:00'
tags:
- phantomjs
- selenium
- ruby
- webdriver
tumblr_url: https://reinke.co/post/43842389636/saving-a-screenshot-with-a-headless-browser
---
1. Install [phantomjs](http://phantomjs.org/) with the following: `brew install phantomjs`
2. Run the phantomjs webdriver:&nbsp;`phantomjs --webdriver=8910`
3. Install the [selenium-webdriver](https://code.google.com/p/selenium/) gem: `gem install selenium-webdriver`
4. Create a driver and grab a screenshot:&nbsp;`driver = Selenium::WebDriver.for(:remote, :url => "http://localhost:8910")driver.navigate.to "http://www.reinke.co"driver.save_screenshot('reinke.co.png')`
