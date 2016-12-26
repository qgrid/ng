const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

module.exports = webpackMerge(commonConfig, {
	entry: './demo/index.js',
	output: {
		path: './demo/dist',
		filename: 'bundle.js',
		publicPath: '/scripts/'
	}
});
