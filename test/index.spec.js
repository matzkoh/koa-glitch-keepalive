const Koa = require('koa');
const request = require('supertest');

jest.useFakeTimers();

const keepalive = require('..');

describe('glitch-keepalive', () => {
  it('getUrl', () => {
    const org = process.env.PROJECT_DOMAIN;

    process.env.PROJECT_DOMAIN = 'glitch-project-name';

    const url = keepalive.getUrl();

    if (org === undefined)
      delete process.env.PROJECT_DOMAIN;

    else
      process.env.PROJECT_DOMAIN = org;

    expect(url).toBe('http://glitch-project-name.glitch.me/keepalive');
  });

  describe('middleware', () => {
    let app;

    beforeEach(() => {
      app = new Koa();

      const getUrl = keepalive.getUrl;

      keepalive.getUrl = jest.fn(() => 'http://localhost:3333/keepalive');

      app.use(keepalive());

      keepalive.getUrl = getUrl;
    });

    it('routes /keepalive', async () => {
      await request(app.callback())
        .get('/keepalive')
        .expect(200)
        .expect('Content-Type', 'text/plain; charset=utf-8')
        .expect('OK');
    });

    it('get /keepalive every 3 minutes', async () => {
      const okRoute = jest.fn();
      const ngRoute = jest.fn();

      app.use(async (ctx, next) => {
        if (ctx.path ===  '/keepalive')
          okRoute(ctx);

        else {
          ngRoute(ctx);
        }

        return await next();
      });

      const server = app.listen(3333);

      try {
        expect(okRoute).not.toBeCalled();
        expect(ngRoute).not.toBeCalled();

        await new Promise(resolve => {
          app.use(async (ctx, next) => {
            await next();

            resolve();
          });

          jest.runOnlyPendingTimers();
        });

        expect(okRoute).toHaveBeenCalledTimes(1);
        expect(ngRoute).not.toBeCalled();
      } catch (e) {
        throw e;
      } finally {
        await new Promise(resolve => server.close(resolve));
      }
    });
  });
});
