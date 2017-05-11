// This SystemJS fake config allows to web storm resolve aliases that are used from webpack

const path = require('path');

System.config({
	src: path.resolve(__dirname, '../src'),
	core: path.resolve(__dirname, '../src/core'),
	ng: path.resolve(__dirname, '../src/ng'),
	themes: path.resolve(__dirname, '../src/themes')
});
