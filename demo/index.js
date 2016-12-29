'use strict';

import angular from 'angular';
import ngRoute from 'angular-route';
import qgrid from '../src/index';
import theme from '../src/themes/default/index';
import Sandbox from './sandbox/index';

angular.module('demo', [ngRoute, qgrid, theme])
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