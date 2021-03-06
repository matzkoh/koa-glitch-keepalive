[![Travis](https://img.shields.io/travis/matzkoh/koa-glitch-keepalive.svg)](https://travis-ci.org/matzkoh/koa-glitch-keepalive)
[![Codecov](https://img.shields.io/codecov/c/github/matzkoh/koa-glitch-keepalive.svg)](https://codecov.io/gh/matzkoh/koa-glitch-keepalive)
[![Renovate](https://badges.renovateapi.com/github/matzkoh/koa-glitch-keepalive)](https://renovatebot.com/)
[![npm](https://img.shields.io/npm/v/koa-glitch-keepalive.svg)](https://www.npmjs.com/package/koa-glitch-keepalive)
![node](https://img.shields.io/node/v/koa-glitch-keepalive.svg)
![License](https://img.shields.io/npm/l/koa-glitch-keepalive.svg)

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
