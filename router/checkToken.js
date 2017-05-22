const router = require('koa-router')();
// const warnCode = Server.warnCode;
// const DB0Handle = new Server.proxy.cache.DB0Handle();
const whiteList = [
];

router.all('/*', async (ctx , next) =>{
  // await DB0Handle.checkToken(ctx, whiteList, warnCode, next);
  next();
});

module.exports = router;