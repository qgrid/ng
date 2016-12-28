'use strict';

import angular from 'angular';
import ngRoute from 'angular-route';
import ngAnimate from 'angular-animate';
import ngArea from 'angular-aria';
import {} from 'angular-material';
import qgrid from '../src/index';
import theme from '../src/themes/default/index';
import Sandbox from './examples/sandbox/index';
require('./index.scss');
require('angular-material/angular-material.scss');

const dependencies = [
	ngRoute,
	ngAnimate,
	ngArea,
	'ngMaterial', // WTF?
	qgrid,
	theme
];

export default angular.module('demo', dependencies)
	.config(Setup)
	.controller('Demo.Controller', Controller)
	.name;

Setup.$inject = ['$routeProvider', '$locationProvider'];
function Setup($routeProvider, $locationProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'examples/home/index.html'
		})
		.when('/sandbox', {
			templateUrl: 'examples/sandbox/index.html',
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