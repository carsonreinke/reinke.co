---
layout: post
title: Digester / UnsupportedOperationException / setXIncludeAware
date: '2011-12-02T16:05:00-05:00'
tags: []
tumblr_url: https://reinke.co/post/13645706366/digester-unsupportedoperationexception
---
[http://apache-commons.680414.n4.nabble.com/digester-Xinclude-aware-parsing-td741068.html](http://apache-commons.680414.n4.nabble.com/digester-Xinclude-aware-parsing-td741068.html)

_setXIncludeAware_ can throw&nbsp;_UnsupportedOperationException_, which is being used by Digester. &nbsp;Easy work around is to just provide a _SAXParser_ with the constructor

    SAXParserFactory factory = SAXParserFactory.newInstance();
    factory.setValidating(false);
    Digester digester = new Digester(factory.newSAXParser());

