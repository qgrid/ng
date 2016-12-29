'use strict';

import angular from 'angular';
import ngRoute from 'angular-route';
import ngAnimate from 'angular-animate';
import ngArea from 'angular-aria';
import {} from 'angular-material';
import qgrid from '../src/index';
import theme from '../src/themes/default/index';
import App from './components/app/app';
require('./index.scss');
require('angular-material/angular-material.css');

const dependencies = [
	ngRoute,
	ngAnimate,
	ngArea,
	'ngMaterial', // WTF?
	qgrid,
	theme
];

const pages = require('./pages/pages.json');
const controllers = pages.reduce((memo, p) => {
	// TODO: use es6 imports
	memo[p.path] = require('./pages/' + p.path + '/index').default;
	return memo;
}, {});

export default angular.module('demo', dependencies)
	.config(Setup)
	.controller('Demo.App.Controller', App)
	.constant('Demo.PAGES', pages)
	.name;


Setup.$inject = ['$routeProvider', '$locationProvider', 'Demo.PAGES'];
function Setup($routeProvider, $locationProvider, pages) {
	pages.forEach(page => {
		$routeProvider
			.when('/' + page.path, {
				templateUrl: `pages/${page.path}/index.html`,
				controller: controllers[page.path],
				controllerAs: '$ctrl'
			});
	});

	$routeProvider
		.when('/', {
			templateUrl: 'pages/home/index.html',
			controllers: controllers.home,
			controllerAs: '$ctrl'
		})
		.otherwise({
			redirectTo: '/'
		});


	// TODO: setup history api for the webpack-dev-server
	$locationProvider
		.html5Mode(false)
		.hashPrefix('!');
}