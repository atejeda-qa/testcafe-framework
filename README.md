# a2censo-automation
![Tested with TestCafe](https://img.shields.io/badge/tested%20with-TestCafe-2fa4cf.svg)
## Project structure
```
a2censo-automation
├─ .testcaferc.json
├─ config.js
├─ package-lock.json
├─ package.json
└─ test
   ├─ actions
   │  └─ action.js
   ├─ actors
   │  └─ actor.js
   ├─ page-objects
   │  └─ page-object.js
   └─ tests
      └─ test.js
```
 ## Installation
 1. Install [Node](https://nodejs.org/en/) 
 2. Install [Git](https://git-scm.com/downloads)
 3. Clone this repository `git clone https://github.com/grability-inc/a2censo-automation.git` 
 4. Install dependencies  `npm i`
 
## To test
```sh 
$ npm run test
```
## Libraries
We use some libraries like:
1. [TestCafe Testing Library](https://testing-library.com/docs/testcafe-testing-library/intro)

## Architecture
To this project implement 2 design patterns for test automation: [Page Object Model](https://medium.com/tech-tajawal/page-object-model-pom-design-pattern-f9588630800b) and [Screen Play](https://moduscreate.com/blog/the-screenplay-test-design-pattern/). With this patterns' combination we'll obtain better performance and maintainability.
