const app = require('./app')
const Serverless = require('serverless-http')
exports.hello = Serverless(app);
