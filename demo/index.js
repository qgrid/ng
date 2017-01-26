import setup from './setup';
import ExceptionHandler from './exception';

import angular from 'angular';
import ngRoute from 'angular-route';
import ngAnimate from 'angular-animate';
import ngArea from 'angular-aria';
import ngSanitize from 'angular-sanitize';
import {} from 'angular-material';

import qgrid from '../src/index';

import themeDefault from '../src/themes/default';
import themeMaterial from '../src/themes/material';

import Run from './run';
import App from './components/app/app';
import PageList from './components/page-list/page.list';
import PageDetails from './components/page-details/page.details';
import ThemeSelector from './components/theme-selector/theme.selector';
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
	themeDefault,
	themeMaterial
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
					js: require(`raw-loader!./pages/${page.path}/index.js`)
				};
			}

			return p;
		});

const themes = require('../src/themes/themes.json');
const defaults = require('./defaults.json');
const Setup = setup(pages);

export default angular.module('demo', dependencies)
	.config(Setup)
	.run(Run)
	.factory('$exceptionHandler', ExceptionHandler)
	.controller('Demo.App.Controller', App)
	.constant('Demo.PAGES', pages)
	.constant('Demo.THEMES', themes)
	.constant('Demo.DEFAULTS', defaults)
	.component('pageList', PageList)
	.component('pageDetails', PageDetails)
	.component('themeSelector', ThemeSelector)
	.filter('html', HtmlFilter)
	.filter('js', JsFilter)
	.name;