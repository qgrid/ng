'use strict';

import angular from 'angular';
require('./body.scss');

export default angular
	.module('qgrid.theme.default', [])
	.run(Setup)
	.name;

Setup.$inject = ['$templateCache'];
function Setup(/*$templateCache*/) {
	// here'll be custom templates
}