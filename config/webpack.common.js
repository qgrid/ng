const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	/**
	 * Options affecting the output of the compilation.
	 *
	 * See: http://webpack.github.io/docs/configuration.html#output
	 */
	output: {
		/**
		 * The output directory as absolute path (required).
		 *
		 * See: http://webpack.github.io/docs/configuration.html#output-path
		 */
		path: path.join(__dirname, '..', 'dist'),

		/**
		 * Specifies the name of each output file on disk.
		 * IMPORTANT: You must not specify an absolute path here!
		 *
		 * See: http://webpack.github.io/docs/configuration.html#output-filename
		 */
		filename: '[name].js',

		/**
		 * The filename of the SourceMaps for the JavaScript files.
		 * They are inside the output.path directory.
		 *
		 * See: http://webpack.github.io/docs/configuration.html#output-sourcemapfilename
		 */
		sourceMapFilename: '[name].map',

		/**
		 * The filename of non-entry chunks as relative path
		 * inside the output.path directory.
		 *
		 * See: http://webpack.github.io/docs/configuration.html#output-chunkfilename
		 */
		chunkFilename: '[id].chunk.js',

		publicPath: '/scripts/'
	},
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
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
			},
			{
				test: /\.html$/,
				loader: 'raw'
			},
			{
				test: /\.json$/,
				exclude: /node_modules/,
				loader: 'json'
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
