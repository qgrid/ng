// This SystemJS fake config allows to web storm resolve aliases that are used from webpack

const path = require('path');

System.config({
	'@grid/src': path.resolve(__dirname, '../src'),
	'@grid/core': path.resolve(__dirname, '../src/core'),
	'@grid/view': path.resolve(__dirname, '../src/view'),
	'@grid/themes': path.resolve(__dirname, '../src/themes')
});