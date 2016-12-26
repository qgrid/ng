'use strict';

import Sandbox from './sandbox/index';

require('../src/index');
require('../src/themes/default/index');

(function (angular) {
	angular.module('demo', ['ngRoute', 'qgrid'])
		.config(Setup)
		.controller('Demo.Controller', Controller);

	Setup.$inject = ['$routeProvider', '$locationProvider'];
	function Setup($routeProvider, $locationProvider) {
		$routeProvider
			.when('/', {
				template: 'qgrid demo page'
			})
			.when('/sandbox', {
				templateUrl: 'sandbox/index.html',
				controller: Sandbox,
				controllerAs: '$ctrl'
			});

		$locationProvider
			.html5Mode(false)
			.hashPrefix('!');
	}

	Controller.$inject = [];
	function Controller() {
	}

})(angular);