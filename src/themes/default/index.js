'use strict';

import angular from 'angular';
require('./body.scss');

const theme = 'qgrid.theme.default';
angular
	.module(theme, [])
	.run(Setup);

Setup.$inject = ['$templateCache'];
function Setup(/*$templateCache*/) {
	// here'll be custom templates
}

export default theme;