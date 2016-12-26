'use strict';

require('./body.scss');

(function (angular) {

	angular.module('qgrid')
		.run(Setup);

	Setup.$inject = ['$templateCache'];
	function Setup(/*$templateCache*/) {
		// here'll be custom templates
	}

})(angular);