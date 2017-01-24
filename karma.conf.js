module.exports = function (config) {

	var configuration = {
		// base path used to resolve all patterns
		basePath: '',

		// frameworks to use
		// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
		frameworks: ['mocha', 'chai'],

		// list of files/patterns to load in the browser
		files: [{pattern: 'spec.bundle.js', watched: false}],

		// files to exclude
		exclude: [],

		// preprocess matching files before serving them to the browser
		// available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
		preprocessors: {'spec.bundle.js': ['webpack', 'sourcemap']},

		webpack: {
			devtool: 'inline-source-map',
			module: {
				rules: [
					{
						test: /\.js/,
						exclude: [/dist/, /node_modules/],
						loader: 'babel-loader'
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
		browsers: ['Chrome'],

		customLaunchers: {
			Chrome_travis_ci: {
				base: 'Chrome',
				flags: ['--no-sandbox']
			}
		},

		// if true, Karma runs tests once and exits
		singleRun: true
	};

	config.set(configuration);
};
