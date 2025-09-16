---
layout: post
title: Liquid::Drop method with arguments
date: '2014-05-02T14:30:45-04:00'
tags:
- howto
tumblr_url: https://reinke.co/post/84537796822/liquiddrop-method-with-arguments
---
Kind of a hack, but possible using a new stack and a variable named “args” from a filter method:

    @context.stack({'args' =\> args}) do #Call to drop method end

Related:  
[https://github.com/Shopify/liquid/blob/v2.5.4/lib/liquid/context.rb#L103](https://github.com/Shopify/liquid/blob/v2.5.4/lib/liquid/context.rb#L103)  
[https://github.com/Shopify/liquid/issues/29](https://github.com/Shopify/liquid/issues/29)  
[https://groups.google.com/forum/#!topic/liquid-templates/adH2bjH0yAE](https://groups.google.com/forum/#!topic/liquid-templates/adH2bjH0yAE)

