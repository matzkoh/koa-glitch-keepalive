const http = require('http');

const middleware = projectId => {
  const url = middleware.getUrl(projectId);

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

middleware.getUrl = projectId => {
  return `http://${projectId}.glitch.me/keepalive`;
};

module.exports = middleware;
