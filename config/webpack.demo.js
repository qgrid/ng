const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const devConfig = require('./webpack.dev.js');

module.exports = webpackMerge(devConfig, {
	devtool: 'source-map',
	plugins: [
		new webpack.LoaderOptionsPlugin({
			options: {
				eslint: {
					failOnWarning: false,
					failOnError: true
				}
			}
		})
	]
});