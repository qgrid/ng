import setup from './setup';
import ExceptionHandler from './exception';
import {Log} from '@grid/core/infrastructure';

import angular from 'angular';
import ngRoute from 'angular-route';
import ngAnimate from 'angular-animate';
import ngArea from 'angular-aria';
import ngSanitize from 'angular-sanitize';
import ngMessages from 'angular-messages';
import {} from 'angular-material';

import qgrid from '../src/index';

//import themeDefault from '../src/themes/default';
import themeMaterial from '../src/themes/material';

import Run from './run';
import App from './components/app/app';
import PageList from './components/page-list/page.list';
import PageDetails from './components/page-details/page.details';
import ThemeSelector from './components/theme-selector/theme.selector';
import JsFilter from './filters/js';
import HtmlFilter from './filters/html';

require('./index.scss');
require('./markdown.scss');
require('../src/assets/index.scss');
require('angular-material/angular-material.css');
require('prismjs/themes/prism.css');

// TODO: more generic code
const theme = themeMaterial;
// const theme = (window.location.hash || '')
// 	.toLowerCase()
// 	.indexOf('?theme=default') >= 0
// 	? themeDefault
// 	: themeMaterial;

const dependencies = [
	ngRoute,
	ngAnimate,
	ngArea,
	ngSanitize,
	ngMessages,
	'ngMaterial', // WTF?
	qgrid,
	theme
];

const pages = buildPages(require('./pages/pages.json'));
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


function buildPages(schema) {
	const extensions = ['html', 'js', 'md'];

	return schema
		.map(node => {
			const page = {
				title: node.title
			};

			if (node.items) {
				page.items = buildPages(node.items);
			}
			else {
				page.path = node.path;
				page.code = {};
				extensions.forEach(ext => {
					try {
						if (ext === 'html' || ext === 'md') {
							page.code[ext] = require(`./pages/${page.path}/index.${ext}`);
						}
						else {
							page.code[ext] = require(`raw-loader!./pages/${page.path}/index.${ext}`);
						}
					}
					catch (ex) {
						Log.warn('build.pages', `Can't find "index.${ext}" file for "${node.title}"`);
					}
				});
			}

			return page;
		});
}
