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
	},
	/**
	 * Developer tool to enhance debugging.
	 *
	 * The 'source-map' settings is meant to be used in production only. It
	 * splits the source map in a separate file and it is slow to compute.
	 *
	 * See: http://webpack.github.io/docs/configuration.html#devtool
	 * See: https://github.com/webpack/docs/wiki/build-performance#sourcemaps
	 */
	devtool: 'source-map',
	module: {
		rules: [
			{
				enforce: 'pre',
				test: /\.js?$/,
				loader: 'eslint-loader',
				exclude: /node_modules/
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract({
					fallbackLoader: 'style-loader',
					loader: [
						{
							loader: 'css-loader',
						}, {
							loader: 'sass-loader'
						}],
				})
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract({
					fallbackLoader: 'style-loader',
					loader: [
						{
							loader: 'css-loader',
						}],
				})
			},
			{
				test: /\.html$/,
				loader: 'raw-loader'
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
	}
};
