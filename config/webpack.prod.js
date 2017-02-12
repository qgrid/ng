const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

// webpack plugins
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

module.exports = webpackMerge(commonConfig, {
	entry: {
		qgrid: './src/build.js'
	},
	output: {
		path: path.join(__dirname, '..', 'dist'),
		filename: '[name].js',
		library: 'qgrid'
	},

	/**
	 * Add additional plugins to the compiler.
	 *
	 * See: http://webpack.github.io/docs/configuration.html#plugins
	 */
	plugins: [
		new webpack.LoaderOptionsPlugin({
			options: {
				eslint: {
					failOnWarning: false,
					failOnError: true
				}
			}
		}),
		new ExtractTextPlugin({
			filename: 'qgrid.css',
			disable: false,
			allChunks: true
		}),
	]
});