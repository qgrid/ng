'use strict';

module.exports = {
	devtool: '#inline-source-map',
	module: {
		preLoaders: [
			{
				test: /\.js?$/,
				loader: 'eslint',
				exclude: /node_modules/
			}
		],
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015']
				}
			},
			{
				test: /\.html$/,
				loader: 'raw'
			},
			{// inline base64 URLs for <=8k images, direct URLs for the rest
				test: /\.(png|jpg)$/,
				loader: 'url-loader?limit=8192'
			},
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
		],
	},
	eslint: {
		failOnWarning: false,
		failOnError: true
	}
};
