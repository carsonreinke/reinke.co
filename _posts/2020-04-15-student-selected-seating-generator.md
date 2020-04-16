---
layout: post
title: Student Selected Seating Generator
tags: []
---
[Student Selected Seating Generator](https://student-selected-seating-generator.reinke.co/#/)

I built this!

My wife (who is a teacher) brought up this issue about selecting seating arrangements, especially arrangement based on student having preferences for other students.

This tool is quite simple because it allows you to arrange a classroom, select preferences for students and it will produce a seating chart.

The approach I took was a simple brute force to minimize total average distance of the preferances, it is not glamerous, but seems to work well.  The purpose of the drawing the layout helps define those distances, rather then having this tool define the actual layout, which I believe is pretty unrealistic.

The two biggest hurdles were figuring the persistence of circular dependencies and the user interface.  The solution for circular dependency was building a object reference identifier scheme that defined a unique identifier per object, this allowed to have two separate objects, one with all real objects replaced with the identifer, the other with all the identifiers and the corresponding objects.  The user interface, well, I am no designer, you get grayscale.

Another particular concern I did have was privacy, which I simplied did not use any CDN hosted assets or add any analytics.  Only GitHub will be aware of the request for the page.  The persistence portion is just simply browser local storage.

I did only focus on unit testing instead of e2e testing along with pretty much skipping on any browser compatiability testing and only focusing on Chrome.

It was a very rewarding experience!

---

This project utilized the follow technologies:

- Vue.js
- [Vuex](https://vuex.vuejs.org/)
- [Vue Router](https://router.vuejs.org/)
- [Vue CLI](https://cli.vuejs.org/)
- Jest
- [Pure.css](https://purecss.io/)
- GitHub pages

[https://student-selected-seating-generator.reinke.co/#/](https://student-selected-seating-generator.reinke.co/#/)
[https://github.com/carsonreinke/student-selected-seating-generator](https://github.com/carsonreinke/student-selected-seating-generator)