const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

// webpack plugins
const WebpackMd5Hash = require('webpack-md5-hash');
const DedupePlugin = require('webpack/lib/optimize/DedupePlugin');
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
		path: './dist',
		filename: 'qgrid.js'
	},

	/**
	 * Disable debug mode for production.
	 *
	 * See: http://webpack.github.io/docs/configuration.html#debug
	 */
	debug: false,
	/**
	 * Add additional plugins to the compiler.
	 *
	 * See: http://webpack.github.io/docs/configuration.html#plugins
	 */
	plugins: [
		new ExtractTextPlugin('qgrid.css'),
		new CommonsChunkPlugin('vendor', 'vendor.js'),

		/**
		 * Plugin: WebpackMd5Hash
		 * Description: Plugin to replace a standard webpack chunkhash with md5.
		 *
		 * See: https://www.npmjs.com/package/webpack-md5-hash
		 */
		new WebpackMd5Hash(),

		/**
		 * Plugin: DedupePlugin
		 * Description: Prevents the inclusion of duplicate code into your bundle
		 * and instead applies a copy of the function at runtime.
		 *
		 * See: https://webpack.github.io/docs/list-of-plugins.html#defineplugin
		 * See: https://github.com/webpack/docs/wiki/optimization#deduplication
		 */
		new DedupePlugin(),

		/**
		 * Plugin: UglifyJsPlugin
		 * Description: Minimize all JavaScript output of chunks.
		 * Loaders are switched into minimizing mode.
		 *
		 * See: https://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
		 */
		// NOTE: To debug prod builds uncomment //debug lines and comment //prod lines
		new UglifyJsPlugin({
			//   // beautify: true, //debug
			//   // mangle: false, //debug
			//   // dead_code: false, //debug
			//   // unused: false, //debug
			//   // deadCode: false, //debug
			//   // compress: {
			//   //   screw_ie8: true,
			//   //   keep_fnames: true,
			//   //   drop_debugger: false,
			//   //   dead_code: false,
			//   //   unused: false
			//   // }, // debug
			//   // comments: true, //debug


			beautify: false, //prod
			mangle: {screw_ie8: true}, //prod
			compress: {screw_ie8: true}, //prod
			comments: false //prod
		})
	]
});