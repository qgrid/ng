import Grid from './components/grid/grid';
import Body from './components/body/body';
import Head from './components/head/head';

require('./components/grid/grid.scss');
require('./components/body/body.scss');
require('./components/head/head.scss');

(function (angular) {

	var app = angular.module('qgrid', [])
		.component('qGrid', Grid)
		.component('qGridBody', Body)
		.component('qGridHead', Head);

	Setup.$inject = ['$templateCache'];
	function Setup($templateCache) {
		$templateCache.put('qgrid.html', require('./components/grid/grid.html'));
		$templateCache.put('qgrid.head.html', require('./components/head/head.html'));
		$templateCache.put('qgrid.body.html', require('./components/body/body.html'));
	}

	app.run(Setup);

})(angular);