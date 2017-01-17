const webpack = require('webpack');
const path = require('path');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = webpackMerge(commonConfig, {
	entry: {
		demo: './demo/index.js',
		vendor: [
			'angular',
			'angular-route',
			'angular-animate',
			'angular-aria',
			'angular-material'
		]
	},
	output: {
		path: path.join(__dirname, '..', 'demo', 'dist'),
		filename: 'demo.js',
		publicPath: '/demo/dist/'
	},
	eslint: {
		failOnWarning: false,
		failOnError: false
	},
	plugins: [
		new ExtractTextPlugin('demo.css'),
		new CommonsChunkPlugin('vendor', 'vendor.js')
	]
});
