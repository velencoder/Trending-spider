const Koa = require("koa");
const Router = require("koa-router");
const cheerio = require("cheerio");
const superagent = require("superagent-charset");

const app = new Koa();
const router = new Router();

router.get('/', function(ctx, next) {
  ctx.body = "Hello World";
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
  console.log("[服务已开启,访问地址为：] http://127.0.0.1:3000/");
});
