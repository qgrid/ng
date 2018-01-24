const path = require('path');

module.exports = function (config) {

	const configuration = {
		// base path used to resolve all patterns
		basePath: '',

		// frameworks to use
		// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
		frameworks: ['mocha', 'chai-spies', 'chai'],

		// list of files/patterns to load in the browser
		files: [{pattern: 'spec.bundle.js', watched: false}, 'karma.global.js'],

		// files to exclude
		exclude: [],

		// preprocess matching files before serving them to the browser
		// available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
		preprocessors: {'spec.bundle.js': ['webpack', 'sourcemap']},

		webpack: {
			resolve: {
				alias: {
					'@grid/src': path.resolve(__dirname, 'src'),
					'@grid/view': path.resolve(__dirname, 'src/view'),
					'@grid/themes': path.resolve(__dirname, 'src/themes'),
					'@grid/core': path.resolve(__dirname, 'core'),
					'@grid/plugin': path.resolve(__dirname, 'plugin')
				}
			},
			devtool: 'inline-source-map',
			module: {
				rules: [
					{
						test: /\.js/,
						exclude: [/dist/, /node_modules/],
						use: 'babel-loader'
					}
				]
			}
		},

		webpackServer: {
			noInfo: true // prevent console spamming when running in Karma!
		},

		// available reporters: https://npmjs.org/browse/keyword/karma-reporter
		reporters: ['mocha'],


		// uncomment that if you want to have pretty console without error stack traces
		// mochaReporter: {
		// 	output: 'noFailures'
		// },

		client: {
			mocha: {
				reporter: 'html'
			}
		},

		// web server port
		port: 9876,

		// enable colors in the output
		colors: true,

		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,

		// toggle whether to watch files and rerun tests upon incurring changes
		autoWatch: true,

		// start these browsers
		// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
		browsers: [process.env.TRAVIS ? 'ChromeTravis' : 'ChromeHeadless'],

		customLaunchers: {
			ChromeTravis: {
				base: 'ChromeHeadless',
				flags: ['--no-sandbox']
			}
		},

		// if true, Karma runs tests once and exits
		singleRun: true
	};

	config.set(configuration);
};
