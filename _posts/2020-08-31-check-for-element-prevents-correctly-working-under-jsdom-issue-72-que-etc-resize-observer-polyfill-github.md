---
layout: post
title: "Check for `Element` prevents correctly working under jsdom · Issue #72 ·
  que-etc/resize-observer-polyfill · GitHub"
tags:
  - link
summary: Under a jsdom environment Element is not an Object. if (typeof Element ===
  'undefined' || !(Element instanceof Object)) { return; }
  https://github.com/que-etc/resize-observer-polyfill/blob/master/src/ResizeObserverSPI.js#L76…
---

[Check for `Element` prevents correctly working under jsdom · Issue #72 · que-etc/resize-observer-polyfill · GitHub](https://github.com/que-etc/resize-observer-polyfill/issues/72)

<blockquote><p>
Under a jsdom environment Element is not an Object. if (typeof Element === 'undefined' || !(Element instanceof Object)) { return; } https://github.com/que-etc/resize-observer-polyfill/blob/master/src/ResizeObserverSPI.js#L76 Probably sim...
</p></blockquote>
