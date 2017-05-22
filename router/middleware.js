const config = require('../config');

/**
 * 接口输入输出参数中间件
 * @param {*} next 
 */
async function inoutLog(ctx, next){
  const start = new Date();
  console.log('此次请求的API: ', ctx.request.url);
  // global.Server.log.info(ctx.request.url, "inputData", ctx.request.body);
  await next();
  const ms = new Date() - start;
  console.log('此次请求的API : ' + ctx.request.url + ' , 此次请求花费的时间 : '+ ms + ' ms');
  // global.Server.log.speed(ctx.request.url , 'speed' , ms + 'ms');
  // global.Server.log.info(ctx.request.url, "outData", ctx.body);
}

/**
 * 捕捉错误中间件
 * @param {*} next 
 */
async function errorHandle(ctx, next){
  try {
    await next();
  }catch(err){
    console.error('err==>',err.stack);
    if (process.env.NODE_ENV == "production"){
      //send email
    }
    // global.Server.log.error({
    //   url: ctx.request.url,
    //   error: err
    // });
  }
}

module.exports = {
  inoutLog: inoutLog,
  errorHandle: errorHandle
}