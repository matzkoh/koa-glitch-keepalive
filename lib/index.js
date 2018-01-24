const http = require('http');

const middleware = () => {
  const url = middleware.getUrl();

  setInterval(() => http.get(url), 3 * 60 * 1000);

  return async (ctx, next) => {
    if (ctx.path === '/keepalive') {
      ctx.status = 200;
      ctx.type = 'text';
      ctx.body = 'OK';
    }

    await next();
  }
};

middleware.getUrl = () => {
  return `http://${process.env.PROJECT_DOMAIN}.glitch.me/keepalive`;
};

module.exports = middleware;
