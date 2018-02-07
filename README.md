[![Build Status](https://travis-ci.org/matzkoh/koa-glitch-keepalive.svg?branch=master)](https://travis-ci.org/matzkoh/koa-glitch-keepalive)
[![codecov](https://codecov.io/gh/matzkoh/koa-glitch-keepalive/branch/master/graph/badge.svg)](https://codecov.io/gh/matzkoh/koa-glitch-keepalive)
[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE)

# koa-glitch-keepalive

A koa middleware that keeps the Glitch project alive.

Inspired by [hubot-heroku-keepalive](https://github.com/hubot-scripts/hubot-heroku-keepalive)

## Installation

`npm i -S koa koa-glitch-keepalive`

```js
const Koa = require('koa');
const keepalive = require('koa-glitch-keepalive');

const app = new Koa();

app.use(keepalive());
app.use(ctx => {
  ctx.body = 'Hello, world!';
});

app.listen(process.env.PORT);
```
