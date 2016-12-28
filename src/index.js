import angular from 'angular';
import Grid from './components/grid/grid';

const qgrid = 'qgrid';
angular
	.module('qgrid', [])
	.component('qGrid', Grid)
	.run(Setup);

Setup.$inject = ['$templateCache'];
function Setup($templateCache) {
	$templateCache.put('qgrid.html', require('./components/grid/grid.html'));
}

export default qgrid;