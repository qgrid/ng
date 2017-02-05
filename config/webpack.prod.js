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
		qgrid: './src/build.js',
		vendor: [
			'angular'
		]
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name].js',
		sourceMapFilename: '[name].map'
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
		new ExtractTextPlugin(new ExtractTextPlugin({
			filename: 'qgrid.css',
			disable: false,
			allChunks: true
		})),
		new CommonsChunkPlugin({
			name: 'vendor'
		}),

		/**
		 * Plugin: UglifyJsPlugin
		 * Description: Minimize all JavaScript output of chunks.
		 * Loaders are switched into minimizing mode.
		 *
		 * See: https://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
		 */
		new UglifyJsPlugin({
			sourceMap: true,
			minimize: true, //prod
			beautify: false, //prod
			mangle: {screw_ie8: true}, //prod
			compress: {screw_ie8: true, warnings: true}, //prod
			comments: false //prod
		})
	]
});