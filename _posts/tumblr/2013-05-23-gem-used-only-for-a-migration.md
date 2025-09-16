---
layout: post
title: Gem Used Only For A Migration
date: '2013-05-23T11:07:41-04:00'
tags:
- howto
tumblr_url: https://reinke.co/post/51150826573/gem-used-only-for-a-migration
---
Figured out how to do this, mostly by the insight [here](http://stackoverflow.com/questions/13783801/composing-one-gemfile-from-multiple-others). &nbsp;Added a Gemfile just for the migration, included the project’s Gemfile with&nbsp;`instance_eval(File.read(File.join(File.dirname( __FILE__ ), '..', '..', 'Gemfile')))`. &nbsp;When running the migration, just added in environment variable&nbsp;`BUNDLE_GEMFILE` to use that migration specific Gemfile.

