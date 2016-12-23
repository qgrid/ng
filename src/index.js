import grid from './components/grid/grid'
import body from './components/body/body'
import head from './components/head/head'

require('./components/grid/grid.scss');
require('./components/body/body.scss');
require('./components/head/head.scss');

(function (angular) {

	var app = angular.module('qgrid', [])
		.component('qGrid', grid)
		.component('qGridBody', body)
		.component('qGridHead', head);

	Setup.$inject = ['$templateCache'];
	function Setup($templateCache) {
		$templateCache.put('qgrid.html', require('html!./components/grid/grid.html'));
		$templateCache.put('qgrid.head.html', require('html!./components/head/head.html'));
		$templateCache.put('qgrid.body.html', require('html!./components/body/body.html'));
	}

	app.run(Setup);

})(angular);