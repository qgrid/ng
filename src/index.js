'use strict';

import Grid from './components/grid/grid';
require('./themes/default/index');

(function (angular) {
	angular.module('qgrid', [])
		.component('qGrid', Grid)
		.run(Setup);

	Setup.$inject = ['$templateCache'];
	function Setup($templateCache) {
		$templateCache.put('qgrid.html', require('./components/grid/grid.html'));
	}
})(angular);