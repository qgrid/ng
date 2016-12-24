const webpackMerge = require('webpack-merge');
const configFactory = require('./webpack.common.js');
const commonConfig = configFactory('./demo/index.js', './demo/dist/');

module.exports = webpackMerge(commonConfig, {});
