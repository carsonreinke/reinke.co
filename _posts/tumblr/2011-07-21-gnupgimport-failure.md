---
layout: post
title: gnupg_import Failure
date: '2011-07-21T16:16:31-04:00'
tags:
  - link
tumblr_url: https://reinke.co/post/7896434331/gnupgimport-failure
---
[http://www.php.net/manual/en/function.gnupg-import.php](http://www.php.net/manual/en/function.gnupg-import.php)

> `The return array consists of the following values: (   [imported] => (int),   [unchanged] => (int),   [newuserids] => (int),   [newsubkeys] => (int),   [secretimported] => (int),   [secretunchanged] => (int),   [newsignatures] => (int),   [skippedkeys] => (int),   [fingerprint] => (string) ) When invalid content is passed, all values, even skippedkeys, is 0. The fingerprint value does not exist then.`

If the directory .gnupg under the user’s home directory cannot be created or cannot be written to, the import will fail, just like the comment above. &nbsp;It will not specify what the issue is however, it just will not import correctly.

