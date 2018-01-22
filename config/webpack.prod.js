const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const themes = require('../src/themes/themes.json');

// webpack plugins
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const entries = {qgrid: './src/build.js'};

themes.forEach(theme => {
	entries[`qgrid.${theme.path}`] = path.join(__dirname, '..', 'src', 'themes', theme.path)
});

module.exports = webpackMerge(commonConfig, {
	entry: entries,
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
		new webpack.DefinePlugin({
			'ENV': JSON.stringify('production'),
		}),
		new webpack.LoaderOptionsPlugin({
			options: {
				eslint: {
					failOnWarning: false,
					failOnError: true
				}
			}
		}),
		new ExtractTextPlugin({
			filename: '[name].css',
			disable: false,
			allChunks: true
		}),
	]
});