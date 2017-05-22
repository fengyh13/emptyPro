const router = require('koa-router')();
const url = require("url");
router.all('/*', async (ctx) =>{
  
  const urlParse = url.parse(ctx.request.url);
  
  const path = '..' + urlParse.pathname;
    
  await require(path)(ctx);
  
});


module.exports = router;