import angular from 'angular';
require('./index.scss');

export default angular
	.module('qgrid.theme.default', [])
	.run(Setup)
	.name;

Setup.$inject = [];
function Setup(/*$templateCache*/) {
}