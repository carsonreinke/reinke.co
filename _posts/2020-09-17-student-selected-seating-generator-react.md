---
layout: post
title: Student Selected Seating Generator (React)
tags: []
---
[Student Selected Seating Generator](https://student-selected-seating-generator-react.reinke.co/#/)

I previously built a [Vue.js app]({% post_url 2020-04-15-student-selected-seating-generator %}) and decided to convert it to utilize React instead.

The project was biting off quite a bit.  The world of React is quite different from Vue.js, were things are more loosely associated, but still a desire to do it the "React" way.  While React seemed pretty straightforward, the use of Redux, Redux Toolkit, and Hooks became super confusing on how to approach a solution.  Ultimately, what I thought large portions of the Vue.js project could be reused, it just was not possible.  Redux's requirement to have simple JS objects required dropping the OO paradigm.  Though, this change had a surprising simplicity that went along with it and TypeScript quite greatly.  Also, I had stayed away from any class components and only created functional components (from my understanding this is the direction of React). 

The testing aspect had now been greatly increased with roughly 91% coverage.  I focused really pushing to have at least one test per method for some level of proveability.  The pre-packaged testing environment from the create React app established all tooling and configuration making it a breeze.  The only confusing area definitely being the Redux mocking and the lack of good pre-established approaches.

It was wonderful learning experience and helped to focus on migrating an existing project because all project details were already worked out previously.

---

This project utilized the follow technologies:

- React
- [Create React App](https://create-react-app.dev/)
- [Redux](https://redux.js.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React DOM Router](https://reactrouter.com/web/guides/quick-start)
- TypeScript
- [Resize Observer API](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver)
- Jest
- [Testing Library](https://testing-library.com/)
- [Pure.css](https://purecss.io/)
- GitHub pages

[https://student-selected-seating-generator-react.reinke.co/#/](https://student-selected-seating-generator-react.reinke.co/#/)

[https://github.com/carsonreinke/student-selected-seating-generator-react](https://github.com/carsonreinke/student-selected-seating-generator-react)