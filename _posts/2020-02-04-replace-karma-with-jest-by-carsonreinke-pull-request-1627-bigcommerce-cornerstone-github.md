---
layout: post
title: "Replace Karma With Jest by carsonreinke · Pull Request #1627 ·
  bigcommerce/cornerstone · GitHub"
tags:
  - link
summary: What? ↵ Simply replace Karma with Jest. ↵ Jest is far superior, a lot easier,
  and more popular.  This all started from me trying to write a test with Karma…
---

[Replace Karma With Jest by carsonreinke · Pull Request #1627 · bigcommerce/cornerstone · GitHub](https://github.com/bigcommerce/cornerstone/pull/1627)

<blockquote><p>
What?<br>Simply replace Karma with Jest.<br>Jest is far superior, a lot easier, and more popular.  This all started from me trying to write a test with Karma for assets/js/theme/common/state-country.js, but basically could not even get it to work.  Using Jest was simple and easy and definitely appears to be a better direction.<br>Tickets / Documentation<br>Some oddities:<br><br>jest-eventemitter2-transformer.js: required to get Babel and eventemitter2 to work together, it is absurd, but is needed unless stencil-utils is updated<br>jest-setup.js: Foundation expects certain things and jsdom (used by Jest)  has no layout dimensions<br><br>Screenshots (if appropriate)<br>N/A<br>Thanks @jbruni and @martinchuka for helping me solve some very complicated problems.
</p></blockquote>
