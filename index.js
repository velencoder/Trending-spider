const Koa = require("koa");
const Router = require("koa-router");
const cheerio = require("cheerio");
const superagent = require("superagent");
require('superagent-charset')(superagent)

const app = new Koa();
const router = new Router();

router.get("/", function(ctx, next) {
  url = "https://github.com/trending";
  let arr = [1];

  superagent
    .get(url)
    .charset("utf-8") //当前页面编码格式
    .end((err, sres) => {
      //页面获取到的数据
      // let html = sres.text,
      //     $ = cheerio.load(html, {
      //         decodeEntities: false
      //     }), //用cheerio解析页面数据
      //     obj = {};
      // arr = [];
      // //下面类似于jquery的操作，前端的小伙伴们肯定很熟悉啦
      // $(".hotnews ul li").each((index, element) => {
      //     var $text = $(element).text();
      //     arr.push($text);
      // });
    });
  ctx.body = arr;
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
  console.log("[服务已开启,访问地址为：] http://127.0.0.1:3000/");
});
