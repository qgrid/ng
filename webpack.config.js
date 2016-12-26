const env = (process.env.NODE_ENV || 'dev').trim();
module.exports = require('./config/webpack.' + env);