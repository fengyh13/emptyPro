// "use strict"

const projectName = require('./package.json').name;
// const PUB = require('../pub');
// global.Server = new PUB();
debug = require("debug")(projectName+":debug");

const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser');
const checkToken = require('./router/checkToken');
const routers = require('./router/routers');
const middleware = require('./router/middleware');

app.use(bodyParser());
app.use(middleware.errorHandle);
app.use(middleware.inoutLog);

/**
 * 检测token 刷新缓存
 */
app.use(checkToken.routes());

/**
 * 路由API
 */
app.use(routers.routes());

app.listen(28139,function(){
  console.log('project '+ projectName + ' 监听 : ' + 28139);
});