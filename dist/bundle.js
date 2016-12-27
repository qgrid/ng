/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _grid = __webpack_require__(1);
	
	var _grid2 = _interopRequireDefault(_grid);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(function (angular) {
		angular.module('qgrid', []).component('qGrid', _grid2.default).run(Setup);
	
		Setup.$inject = ['$templateCache'];
		function Setup($templateCache) {
			$templateCache.put('qgrid.html', __webpack_require__(2));
		}
	})(angular);

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	// import GridModel from './grid.model';
	// import Utility from '../../services/utility';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		templateUrl: 'qgrid.html',
		controller: Controller,
		bindings: {
			rows: '<',
			columns: '<'
		}
	};
	
	
	Controller.$inject = [];
	function Controller() {
		//this.model = new GridModel();
		// TODO: investigate how to track changes in this case
		// or get rid of $scope or of GridModel
		//Utility.assign(this.model, $scope);
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = "<div class=\"qgrid theme-default\">\n\t<table>\n\t\t<thead>\n\t\t<tr>\n\t\t\t<th ng-repeat=\"$column in $ctrl.columns track by $index\" class=\"{{::$column.key}}\">\n\t\t\t\t<label>{{$column.title}}</label>\n\t\t\t</th>\n\t\t</tr>\n\t\t</thead>\n\t\t<tbody>\n\t\t<tr ng-repeat=\"$row in $ctrl.rows track by $index\">\n\t\t\t<td ng-repeat=\"$column in $ctrl.columns track by $index\" class=\"{{::$column.key}}\">\n\t\t\t\t{{$column.value ? $column.value($row) : $row[$column.key]}}\n\t\t\t</td>\n\t\t</tr>\n\t\t</tbody>\n\t\t<tfoot>\n\t\t</tfoot>\n\t</table>\n</div>"

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYzFmYTkyNjFjYjUxYjE1ZjYzNGMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2dyaWQvZ3JpZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ncmlkL2dyaWQuaHRtbCJdLCJuYW1lcyI6WyJhbmd1bGFyIiwibW9kdWxlIiwiY29tcG9uZW50IiwicnVuIiwiU2V0dXAiLCIkaW5qZWN0IiwiJHRlbXBsYXRlQ2FjaGUiLCJwdXQiLCJyZXF1aXJlIiwidGVtcGxhdGVVcmwiLCJjb250cm9sbGVyIiwiQ29udHJvbGxlciIsImJpbmRpbmdzIiwicm93cyIsImNvbHVtbnMiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUN0Q0E7Ozs7OztBQUVBLEVBQUMsVUFBVUEsT0FBVixFQUFtQjtBQUNuQkEsVUFBUUMsTUFBUixDQUFlLE9BQWYsRUFBd0IsRUFBeEIsRUFDRUMsU0FERixDQUNZLE9BRFosa0JBRUVDLEdBRkYsQ0FFTUMsS0FGTjs7QUFJQUEsUUFBTUMsT0FBTixHQUFnQixDQUFDLGdCQUFELENBQWhCO0FBQ0EsV0FBU0QsS0FBVCxDQUFlRSxjQUFmLEVBQStCO0FBQzlCQSxrQkFBZUMsR0FBZixDQUFtQixZQUFuQixFQUFpQyxtQkFBQUMsQ0FBUSxDQUFSLENBQWpDO0FBQ0E7QUFDRCxFQVRELEVBU0dSLE9BVEgsRTs7Ozs7O0FDRkE7O0FBRUE7QUFDQTs7Ozs7bUJBRWU7QUFDZFMsZUFBYSxZQURDO0FBRWRDLGNBQVlDLFVBRkU7QUFHZEMsWUFBVTtBQUNUQyxTQUFNLEdBREc7QUFFVEMsWUFBUztBQUZBO0FBSEksRTs7O0FBU2ZILFlBQVdOLE9BQVgsR0FBcUIsRUFBckI7QUFDQSxVQUFTTSxVQUFULEdBQXNCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7O0FDcEJELHFLQUFvSyxlQUFlLHNCQUFzQixlQUFlLG1NQUFtTSxlQUFlLGVBQWUseURBQXlELHNGIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGMxZmE5MjYxY2I1MWIxNWY2MzRjIiwiaW1wb3J0IEdyaWQgZnJvbSAnLi9jb21wb25lbnRzL2dyaWQvZ3JpZCc7XG5cbihmdW5jdGlvbiAoYW5ndWxhcikge1xuXHRhbmd1bGFyLm1vZHVsZSgncWdyaWQnLCBbXSlcblx0XHQuY29tcG9uZW50KCdxR3JpZCcsIEdyaWQpXG5cdFx0LnJ1bihTZXR1cCk7XG5cblx0U2V0dXAuJGluamVjdCA9IFsnJHRlbXBsYXRlQ2FjaGUnXTtcblx0ZnVuY3Rpb24gU2V0dXAoJHRlbXBsYXRlQ2FjaGUpIHtcblx0XHQkdGVtcGxhdGVDYWNoZS5wdXQoJ3FncmlkLmh0bWwnLCByZXF1aXJlKCcuL2NvbXBvbmVudHMvZ3JpZC9ncmlkLmh0bWwnKSk7XG5cdH1cbn0pKGFuZ3VsYXIpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vZXNsaW50LWxvYWRlciEuL3NyYy9pbmRleC5qcyIsIid1c2Ugc3RyaWN0JztcblxuLy8gaW1wb3J0IEdyaWRNb2RlbCBmcm9tICcuL2dyaWQubW9kZWwnO1xuLy8gaW1wb3J0IFV0aWxpdHkgZnJvbSAnLi4vLi4vc2VydmljZXMvdXRpbGl0eSc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0dGVtcGxhdGVVcmw6ICdxZ3JpZC5odG1sJyxcblx0Y29udHJvbGxlcjogQ29udHJvbGxlcixcblx0YmluZGluZ3M6IHtcblx0XHRyb3dzOiAnPCcsXG5cdFx0Y29sdW1uczogJzwnXG5cdH1cbn07XG5cbkNvbnRyb2xsZXIuJGluamVjdCA9IFtdO1xuZnVuY3Rpb24gQ29udHJvbGxlcigpIHtcblx0Ly90aGlzLm1vZGVsID0gbmV3IEdyaWRNb2RlbCgpO1xuXHQvLyBUT0RPOiBpbnZlc3RpZ2F0ZSBob3cgdG8gdHJhY2sgY2hhbmdlcyBpbiB0aGlzIGNhc2Vcblx0Ly8gb3IgZ2V0IHJpZCBvZiAkc2NvcGUgb3Igb2YgR3JpZE1vZGVsXG5cdC8vVXRpbGl0eS5hc3NpZ24odGhpcy5tb2RlbCwgJHNjb3BlKTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2VzbGludC1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy9ncmlkL2dyaWQuanMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwicWdyaWQgdGhlbWUtZGVmYXVsdFxcXCI+XFxuXFx0PHRhYmxlPlxcblxcdFxcdDx0aGVhZD5cXG5cXHRcXHQ8dHI+XFxuXFx0XFx0XFx0PHRoIG5nLXJlcGVhdD1cXFwiJGNvbHVtbiBpbiAkY3RybC5jb2x1bW5zIHRyYWNrIGJ5ICRpbmRleFxcXCIgY2xhc3M9XFxcInt7OjokY29sdW1uLmtleX19XFxcIj5cXG5cXHRcXHRcXHRcXHQ8bGFiZWw+e3skY29sdW1uLnRpdGxlfX08L2xhYmVsPlxcblxcdFxcdFxcdDwvdGg+XFxuXFx0XFx0PC90cj5cXG5cXHRcXHQ8L3RoZWFkPlxcblxcdFxcdDx0Ym9keT5cXG5cXHRcXHQ8dHIgbmctcmVwZWF0PVxcXCIkcm93IGluICRjdHJsLnJvd3MgdHJhY2sgYnkgJGluZGV4XFxcIj5cXG5cXHRcXHRcXHQ8dGQgbmctcmVwZWF0PVxcXCIkY29sdW1uIGluICRjdHJsLmNvbHVtbnMgdHJhY2sgYnkgJGluZGV4XFxcIiBjbGFzcz1cXFwie3s6OiRjb2x1bW4ua2V5fX1cXFwiPlxcblxcdFxcdFxcdFxcdHt7JGNvbHVtbi52YWx1ZSA/ICRjb2x1bW4udmFsdWUoJHJvdykgOiAkcm93WyRjb2x1bW4ua2V5XX19XFxuXFx0XFx0XFx0PC90ZD5cXG5cXHRcXHQ8L3RyPlxcblxcdFxcdDwvdGJvZHk+XFxuXFx0XFx0PHRmb290PlxcblxcdFxcdDwvdGZvb3Q+XFxuXFx0PC90YWJsZT5cXG48L2Rpdj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvZ3JpZC9ncmlkLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==