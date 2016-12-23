const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: './src/index.js',
	output: {
		path: 'dist',
		filename: 'bundle.js'
	},
	plugins: [
		new ExtractTextPlugin("bundle.css"),
		// 	new HtmlWebpackPlugin({
		// 		title: 'qgrid',
		// 		template: './demo/index.html',
		// 		minify: {
		// 			collapseWhitespace: true,
		// 			removeComments: true,
		// 			removeRedundantAttributes: true,
		// 			removeScriptTypeAttributes: true,
		// 			removeStyleLinkTypeAttributes: true
		// 		}
		// 	})
	],
	// plugins: [
		// ],
	module: {
		loaders: [
			{test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
			{test: /\.css$/, loader: 'style-loader!css-loader'},
			{test: /\.scss$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")},
			//{test: /\.scss$/, loaders: ['style', 'css?sourceMap', 'sass?sourceMap']},
			{test: /\.html$/, loader: 'raw'},
			// inline base64 URLs for <=8k images, direct URLs for the rest
			{test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'},
			// helps to load bootstrap's css.
			{
				test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
				loader: 'url?limit=10000&minetype=application/font-woff'
			},
			{
				test: /\.woff2$/,
				loader: 'url?limit=10000&minetype=application/font-woff'
			},
			{
				test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
				loader: 'url?limit=10000&minetype=application/octet-stream'
			},
			{
				test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
				loader: 'file'
			},
			{
				test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
				loader: 'url?limit=10000&minetype=image/svg+xml'
			}
		]
	},
	devtool: 'eval-source-map'
};
