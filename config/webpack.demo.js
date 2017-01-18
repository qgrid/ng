const webpackMerge = require('webpack-merge');
const devConfig = require('./webpack.dev.js');

module.exports = webpackMerge(devConfig, {
	eslint: {
		failOnWarning: false,
		failOnError: true
	}
});