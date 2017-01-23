'use strict';

import setup from './setup';
import ExceptionHandler from './exception';

import angular from 'angular';
import ngRoute from 'angular-route';
import ngAnimate from 'angular-animate';
import ngArea from 'angular-aria';
import ngSanitize from 'angular-sanitize';
import {} from 'angular-material';

import qgrid from '../src/index';
import theme from '../src/themes/default/index';

import App from './components/app/app';
import PageList from './components/page-list/page.list';
import PageDetails from './components/page-details/page.details';
import JsFilter from './filters/js';
import HtmlFilter from './filters/html';

require('./index.scss');
require('angular-material/angular-material.css');
require('prismjs/themes/prism.css');

const dependencies = [
	ngRoute,
	ngAnimate,
	ngArea,
	ngSanitize,
	'ngMaterial', // WTF?
	qgrid,
	theme
];
const pages =
	require('./pages/pages.json')
		.map(page => {
			const p = {
				title: page.title,
				path: page.path
			};

			if (p.path !== 'home') {
				p.code = {
					html: require(`./pages/${page.path}/index.html`),
					js: require(`raw!./pages/${page.path}/index.js`)
				};
			}

			return p;
		});

const Setup = setup(pages);

export default angular.module('demo', dependencies)
	.config(Setup)
	.factory('$exceptionHandler', ExceptionHandler)
	.controller('Demo.App.Controller', App)
	.constant('Demo.PAGES', pages)
	.component('pageList', PageList)
	.component('pageDetails', PageDetails)
	.filter('html', HtmlFilter)
	.filter('js', JsFilter)
	.name;