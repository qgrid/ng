'use strict';

import angular from 'angular';
import ngRoute from 'angular-route';
import ngAnimate from 'angular-animate';
import ngArea from 'angular-aria';
import {} from 'angular-material';
import qgrid from '../src/index';
import theme from '../src/themes/default/index';
import App from './components/app/app';
import setup from './setup';

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
const Setup = setup(pages);

export default angular.module('demo', dependencies)
	.config(Setup)
	.controller('Demo.App.Controller', App)
	.constant('Demo.PAGES', pages)
	.name;