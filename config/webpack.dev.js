const webpack = require('webpack');
const path = require('path');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = webpackMerge(commonConfig, {
	entry: {
		demo: path.join(__dirname, '..', 'demo', 'index.js'),
		vendor: [
			'angular',
			'angular-route',
			'angular-animate',
			'angular-aria',
			'angular-material',
			'angular-sanitize'
		]
	},
	devtool: 'inline-source-map',
	devServer: {
		compress: true,
		hot: true,
		publicPath: '/demo/dist'
	},
	output: {
		path: path.join(__dirname, '..', 'demo', 'dist'),
		filename: '[name].js',
		publicPath: '/demo/dist'
	},
	plugins: [
		new webpack.LoaderOptionsPlugin({
			options: {
				eslint: {
					failOnWarning: false,
					failOnError: false
				}
			}
		}),
		new ExtractTextPlugin({
			filename: 'demo.css',
			disable: false,
			allChunks: true
		}),
		new CommonsChunkPlugin({
			name: 'vendor'
		})
	]
});
