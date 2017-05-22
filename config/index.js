const env = process.env.NODE_ENV;
const specialConfig = require('./' + env);
const commonConfig = require('./commonConfig');

module.exports = Object.assign({} , commonConfig , specialConfig);