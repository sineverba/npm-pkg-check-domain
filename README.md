Check Domain
============

| CI / CD | Status |
| ------- | ------ |
| NPM | [![npm version](https://badge.fury.io/js/%40sineverba%2Ffeedback.svg)](https://badge.fury.io/js/%40sineverba%2Ffeedback) |
| Semaphore CI | [![Build Status](https://sineverba.semaphoreci.com/badges/npm-pkg-check-domain/branches/master.svg?style=shields&key=819e4483-6854-48be-91cb-602b609f6b5e)](https://sineverba.semaphoreci.com/projects/npm-pkg-check-domain) |
| Circle CI | [![CircleCI](https://dl.circleci.com/status-badge/img/gh/sineverba/npm-pkg-check-domain/tree/master.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/sineverba/npm-pkg-check-domain/tree/master) |
| Coverall | [![Coverage Status](https://coveralls.io/repos/github/sineverba/npm-pkg-check-domain/badge.svg?branch=master)](https://coveralls.io/github/sineverba/npm-pkg-check-domain?branch=master) |
| SonarCloud | [![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=npm-pkg-check-domain&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=npm-pkg-check-domain) |


`Check domain` checks if an email is part of a domain.

### Installation

`npm install @sineverba/check-domain`

### Usage

```js
import {isInDomain} from "@sineverba/check-domain";

console.log(isInDomain("info@example.com", "example.com")); // prints true
console.log(isInDomain("info@example.com", "example.it")); // prints false

```

#### Tests

`npm run test` for simple test

`npm run cover` for coverage
