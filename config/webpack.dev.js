const webpack = require('webpack');
const path = require('path');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');

module.exports = webpackMerge(commonConfig, {
	entry: {
		demo: path.join(__dirname, '..', 'demo', 'index.js'),
		vendor: [
			'angular',
			'angular-route',
			'angular-animate',
			'angular-aria',
			'angular-material',
			'angular-sanitize',
			'file-saver',
			'jspdf',
			'jspdf-autotable',
			'xlsx'
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
		new CircularDependencyPlugin({
			// exclude detection of files based on a RegExp
			exclude: /node_modules/,
			// add errors to webpack instead of warnings
			failOnError: false,
			// override `exclude` and `failOnError` behavior
			// `onDetected` is called for each module that is cyclical
			onDetected({ paths, compilation }) {
				// `paths` will be an Array of the relative module paths that make up the cycle
				compilation.errors.push(new Error(paths.join(' -> ')))
			}
		}),
		new webpack.DefinePlugin({
			'ENV.PRODUCTION': JSON.stringify(false),
		}),
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
