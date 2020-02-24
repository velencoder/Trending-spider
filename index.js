const Koa = require("koa");
const app = new Koa();

app.use(async ctx=>{
  ctx.body ='hello World'
})

app.listen(3000,()=>{
  console.log("server is running at 3000 port");
})