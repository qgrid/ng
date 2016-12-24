import Sandbox from './sandbox/index';

require('../src/index');

(function (angular) {
	"use strict";

	angular.module('demo', ['ngRoute', 'qgrid'])
		.config(Setup)
		.controller('qgrid.demo.ctrl', Controller);

	Setup.$inject = ['$routeProvider', '$locationProvider'];
	function Setup($routeProvider, $locationProvider) {
		$routeProvider
			.when('/', {
				template: 'qgrid demo page'
			})
			.when('/sandbox', {
				templateUrl: 'sandbox/index.html',
				controller: Sandbox
			});

		$locationProvider
			.html5Mode(true)
			.hashPrefix('!');
	}

	Controller.$inject = ['$scope'];
	function Controller($scope) {
	}

})(angular);