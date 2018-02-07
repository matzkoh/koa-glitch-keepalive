[![Build Status](https://travis-ci.org/matzkoh/koa-glitch-keepalive.svg?branch=master)](https://travis-ci.org/matzkoh/koa-glitch-keepalive)

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
