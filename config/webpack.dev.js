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
		path: path.join(__dirname, '..', 'dist'),
		filename: 'demo.js'
	},
	eslint: {
		failOnWarning: false,
		failOnError: false
	},
	devtool: 'inline-source-map',
	plugins: [
		new ExtractTextPlugin('demo.css'),
		new CommonsChunkPlugin('vendor', 'vendor.js'),
	]
});
