var qgrid =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 379);
/******/ })
/************************************************************************/
/******/ ({

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = ReferenceEdit;
ReferenceEdit.$inject = ['$scope', 'qgrid'];
function ReferenceEdit($scope, qgrid) {
	var _this = this;

	this.cell = function () {
		return $scope.$editor || $scope.$view.edit.cell;
	};

	var closed = false;
	var close = function close() {
		if ($scope.$popup && !closed) {
			$scope.$popup.close();
			closed = true;
		}
	};

	var options = this.cell().options;
	this.gridModel = options && options.modelFactory && options.modelFactory($scope.$view ? $scope.$view.model.navigation() : {}) || qgrid.model();

	this.commit = function ($cell, $event) {
		_this.cell().value = _this.gridModel.selection().items;
		_this.cell().tag = {
			entries: _this.gridModel.selection().entries,
			schema: _this.gridModel.data().columns
		};
		_this.cell().commit.execute($cell, $event);
		close();
	};

	this.cancel = function ($cell, $event) {
		_this.cell().cancel.execute($cell, $event);
		close();
	};

	$scope.$on('$destroy', function () {
		close();
	});
}

/***/ }),

/***/ 165:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 166:
/***/ (function(module, exports) {

module.exports = "<div ng-cloak class=\"q-grid-editor q-grid-array\">\n\t<h2 class=\"md-title\">Edit {{::$cell.column.title}}</h2>\n\t<div class=\"q-grid-array-view\">\n\t\t<md-chips ng-model=\"$view.edit.cell.value\"\n\t\t\t\t\t md-removable=\"'true'\"\n\t\t\t\t\t md-enable-chip-edit=\"'true'\"\n\t\t\t\t\t placeholder=\"Enter a {{::$cell.column.title}}...\">\n\t\t</md-chips>\n\t</div>\n\t<div class=\"q-grid-actions\">\n\t\t<md-button class=\"md-primary md-confirm-button\" ng-click=\"$view.edit.cell.commit.execute($cell, $event)\">Save\n\t\t</md-button>\n\t\t<md-button class=\"md-primary md-cancel-button\" ng-click=\"$view.edit.cell.cancel.execute($cell, $event)\">Cancel\n\t\t</md-button>\n\t</div>\n</div>"

/***/ }),

/***/ 167:
/***/ (function(module, exports) {

module.exports = "<ul q-grid:animate=\"false\">\n\t<li ng-repeat=\"item in $cell.value\" ng-bind=\"item\"></li>\n</ul>"

/***/ }),

/***/ 168:
/***/ (function(module, exports) {

module.exports = "<div class=\"q-grid-editor q-grid-autocomplete\">\n\t<md-autocomplete\n\t\tmd-autofocus\n\t\tq-grid:raise=\"focus\"\n\t\tmd-selected-item=\"$view.edit.cell.value\"\n\t\tng-blur=\"$view.edit.cell.commit.execute($cell)\"\n\t\tng-model=\"$view.edit.cell.value\"\n\t\tng-change=\"$view.edit.cell.commit.execute($cell)\"\n\t\tmd-search-text=\"searchText\"\n\t\tmd-search-text-change=\"$view.edit.cell.fetch.run($cell.row, searchText)\"\n\t\tmd-items=\"item in $view.edit.cell.fetch.busy\"\n\t\tmd-item-text=\"item\"\n\t\tmd-clear-button=\"false\"\n\t\tplaceholder=\"Select a value\">\n\t\t<md-item-template>\n\t\t\t<span md-highlight-text=\"searchText\">{{item}}</span>\n\t\t</md-item-template>\n\t</md-autocomplete>\n</div>"

/***/ }),

/***/ 169:
/***/ (function(module, exports) {

module.exports = "<md-checkbox aria-label=\"Bool cell edit\"\n\t\t\t\t class=\"md-primary\"\n\t\t\t\t q-grid:focus\n\t\t\t\t ng-blur=\"$view.edit.cell.commit.execute($cell)\"\n\t\t\t\t ng-model=\"$view.edit.cell.value\">\n</md-checkbox>"

/***/ }),

/***/ 170:
/***/ (function(module, exports) {

module.exports = "<md-icon ng-if=\"$cell.value\">check</md-icon>"

/***/ }),

/***/ 171:
/***/ (function(module, exports) {

module.exports = "<div class=\"q-grid-editor q-grid-date\">\n\t<h2 class=\"md-title\">Edit {{::$cell.column.title}}</h2>\n\t<md-datepicker ng-model=\"$view.edit.cell.value\"\n\t\t\t\t\t\tmd-placeholder=\"Enter date\"\n\t\t\t\t\t\tmd-auto-focus>\n\t</md-datepicker>\n\t<div class=\"q-grid-actions\">\n\t\t<md-button class=\"md-primary md-confirm-button\" ng-click=\"$view.edit.cell.commit.execute($cell, $event)\">Save</md-button>\n\t\t<md-button class=\"md-primary md-cancel-button\" ng-click=\"$view.edit.cell.cancel.execute($cell, $event)\">Cancel</md-button>\n\t</div>\n</div>"

/***/ }),

/***/ 172:
/***/ (function(module, exports) {

module.exports = "<md-select q-grid:raise=\"click\"\n\t\t\t  ng-model=\"$view.edit.cell.value\"\n\t\t\t  placeholder=\"Select a value\"\n\t\t\t  ng-blur=\"$view.edit.cell.cancel.execute($cell)\"\n\t\t\t  md-on-open=\"$view.edit.cell.fetch.busy\"\n\t\t\t  md-on-close=\"$view.edit.cell.cancel.execute($cell)\"\n\t\t\t  ng-change=\"$view.edit.cell.commit.execute($cell)\">\n\t<md-option ng-value=\"option\"\n\t\t\t\t  ng-repeat=\"option in $view.edit.cell.fetch.result\">{{ option }}\n\t</md-option>\n</md-select>"

/***/ }),

/***/ 173:
/***/ (function(module, exports) {

module.exports = "<div ng-cloak class=\"q-grid-editor q-grid-email\">\n\t<h2 class=\"md-title\">Edit {{::$cell.column.title}}</h2>\n\t<div layout=\"column\" class=\"q-grid-email-fields\" flex>\n\t\t<md-input-container ng-if=\"$cell.column.label !== null\">\n\t\t\t<label>Label</label>\n\t\t\t<input type=\"text\"\n\t\t\t\t\t ng-model=\"$view.edit.cell.label\"></input>\n\t\t</md-input-container>\n\t\t<md-input-container>\n\t\t\t<label>Email</label>\n\t\t\t<input type=\"email\"\n\t\t\t\t\t ng-model=\"$view.edit.cell.value\"></input>\n\t\t</md-input-container>\n\t</div>\n\t<div class=\"q-grid-actions\">\n\t\t<md-button class=\"md-primary md-confirm-button\" ng-click=\"$view.edit.cell.commit.execute($cell, $event)\">Save\n\t\t</md-button>\n\t\t<md-button class=\"md-primary md-cancel-button\" ng-click=\"$view.edit.cell.cancel.execute($cell, $event)\">Cancel\n\t\t</md-button>\n\t</div>\n</div>"

/***/ }),

/***/ 174:
/***/ (function(module, exports) {

module.exports = "<a ng-href=\"mailto:{{$cell.value}}\" ng-bind=\"$cell.label || $cell.value\"></a>\n<md-button class=\"md-icon-button q-grid-email-edit\"\n\t\t\t  aria-label=\"email\"\n\t\t\t  ng-disabled=\"!$view.edit.cell.enter.canExecute($cell)\"\n\t\t\t  ng-click=\"$view.edit.cell.enter.execute($cell)\">\n\t<md-icon>edit</md-icon>\n\t<md-tooltip>Edit Email</md-tooltip>\n</md-button>"

/***/ }),

/***/ 175:
/***/ (function(module, exports) {

module.exports = "<a ng-href=\"{{$cell.value}}\" ng-bind=\"$cell.label || $cell.value\"></a>\n<md-button class=\"md-icon-button q-grid-file-edit\"\n\t\t\t  aria-label=\"file-edit\"\n\t\t\t  ng-disabled=\"!$view.edit.cell.enter.canExecute($cell)\"\n\t\t\t  ng-click=\"$view.edit.cell.enter.execute($cell)\">\n\t<md-icon>file_upload</md-icon>\n\t<md-tooltip>Upload</md-tooltip>\n</md-button>"

/***/ }),

/***/ 176:
/***/ (function(module, exports) {

module.exports = "<img ng-if=\"$cell.value\" ng-src=\"{{$cell.value}}\"/>\n<md-icon ng-if=\"!$cell.value\">account_circle</md-icon>"

/***/ }),

/***/ 177:
/***/ (function(module, exports) {

module.exports = "<div class=\"q-grid-editor q-grid-number\">\n\t<md-input-container>\n\t\t<input type=\"number\"\n\t\t\t\t q-grid:focus\n\t\t\t\t ng-blur=\"$view.edit.cell.commit.execute($cell)\"\n\t\t\t\t ng-model=\"$view.edit.cell.value\"/>\n\t</md-input-container>\n</div>"

/***/ }),

/***/ 178:
/***/ (function(module, exports) {

module.exports = "<div class=\"q-grid-editor q-grid-password\">\n\t<md-input-container>\n\t\t<input type=\"password\"\n\t\t\t\t q-grid:focus\n\t\t\t\t ng-blur=\"$view.edit.cell.commit.execute($cell)\"\n\t\t\t\t ng-model=\"$view.edit.cell.value\"/>\n\t</md-input-container>\n</div>"

/***/ }),

/***/ 179:
/***/ (function(module, exports) {

module.exports = "<q-grid:popup id=\"q-grid-reference-popup\" ng-init=\"$popup.show()\"\n\t\t\t\t  q-grid:popup-close=\"$view.edit.cell.cancel.execute($cell, $event)\">\n\t<q-grid:template for=\"trigger\">\n\t\t<span ng-init=\"$popup.open({width: 350, height: 500})\"></span>\n\t</q-grid:template>\n\t<q-grid:template for=\"body\" let=\"[$view, $ctrl, $cell]\">\n\t\t<div ng-cloak\n\t\t\t  class=\"q-grid-editor q-grid-reference\"\n\t\t\t  layout=\"column\"\n\t\t\t  ng-controller=\"Body.Cell.Reference.Edit.Controller as $ctrl\">\n\t\t\t<div flex=\"90\">\n\t\t\t\t<q-grid model=\"$ctrl.gridModel\"\n\t\t\t\t\t\t  selection=\"$view.edit.cell.value\">\n\t\t\t\t\t<q-grid:columns>\n\t\t\t\t\t</q-grid:columns>\n\t\t\t\t\t<q-grid:toolbar>\n\t\t\t\t\t\t<q-grid:template for=\"top\">\n\t\t\t\t\t\t\t<div class=\"q-grid-progress\">\n\t\t\t\t\t\t\t\t<q-grid:progress></q-grid:progress>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</q-grid:template>\n\t\t\t\t\t</q-grid:toolbar>\n\t\t\t\t</q-grid>\n\t\t\t</div>\n\t\t\t<div flex=\"10\" class=\"q-grid-actions\">\n\t\t\t\t<md-button class=\"md-primary md-confirm-button\" ng-click=\"$ctrl.commit($cell, $event)\">Save\n\t\t\t\t</md-button>\n\t\t\t\t<md-button class=\"md-primary md-cancel-button\"\n\t\t\t\t\t\t\t  ng-click=\"$ctrl.cancel($cell, $event)\">Cancel\n\t\t\t\t</md-button>\n\t\t\t</div>\n\t\t</div>\n\t</q-grid:template>\n\t<q-grid:template for=\"head\" let=\"$cell\">\n\t\t<h2 class=\"md-title\">Edit {{::$cell.column.title}}</h2>\n\t</q-grid:template>\n</q-grid:popup>"

/***/ }),

/***/ 180:
/***/ (function(module, exports) {

module.exports = "<span ng-bind=\"$cell.label\"></span>\n<md-button class=\"md-icon-button q-grid-reference-edit\"\n\t\t\t  aria-label=\"reference-edit\"\n\t\t\t  ng-disabled=\"!$view.edit.cell.enter.canExecute($cell)\"\n\t\t\t  ng-click=\"$view.edit.cell.enter.execute($cell)\">\n\t<md-icon>search</md-icon>\n\t<md-tooltip>Edit reference</md-tooltip>\n</md-button>"

/***/ }),

/***/ 181:
/***/ (function(module, exports) {

module.exports = "<md-icon>keyboard_arrow_right</md-icon>"

/***/ }),

/***/ 182:
/***/ (function(module, exports) {

module.exports = "<md-checkbox md-indeterminate=\"$view.selection.isIndeterminate($row)\"\n\t\t\t\t ng-checked=\"$view.selection.state($row)\"\n\t\t\t\t ng-click=\"$view.selection.toggleRow.execute($row)\"\n\t\t\t\t ng-disabled=\"!$view.selection.toggleRow.canExecute($row)\"\n\t\t\t\t aria-label=\"Selection\">\n</md-checkbox>\n"

/***/ }),

/***/ 183:
/***/ (function(module, exports) {

module.exports = "<div class=\"q-grid-editor q-grid-text-area\">\n\t<md-input-container>\n\t\t<textarea type=\"text\"\n\t\t\t\t\t rows=\"8\"\n\t\t\t\t\t cols=\"45\"\n\t\t\t\t\t wrap=\"soft\"\n\t\t\t\t\t q-grid:focus\n\t\t\t\t\t ng-blur=\"$view.edit.cell.commit.execute($cell)\"\n\t\t\t\t\t md-maxlength=\"{{::$cell.column.maxLength}}\"\n\t\t\t\t\t ng-model=\"$view.edit.cell.value\"/>\n\t</md-input-container>\n</div>"

/***/ }),

/***/ 184:
/***/ (function(module, exports) {

module.exports = "<div ng-cloak class=\"q-grid-editor q-grid-url\">\n\t<h2 class=\"md-title\">Edit {{::$cell.column.title}}</h2>\n\t<div layout=\"column\" class=\"q-grid-url-fields\" flex>\n\t\t<md-input-container ng-if=\"$cell.column.label !== null\">\n\t\t\t<label>Label</label>\n\t\t\t<input type=\"text\"\n\t\t\t\t\t ng-model=\"$view.edit.cell.label\"></input>\n\t\t</md-input-container>\n\t\t<md-input-container>\n\t\t\t<label>Url</label>\n\t\t\t<input type=\"url\"\n\t\t\t\t\t ng-model=\"$view.edit.cell.value\"></input>\n\t\t</md-input-container>\n\t</div>\n\t<div class=\"q-grid-actions\">\n\t\t<md-button class=\"md-primary md-confirm-button\" ng-click=\"$view.edit.cell.commit.execute($cell, $event)\">Save\n\t\t</md-button>\n\t\t<md-button class=\"md-primary md-cancel-button\" ng-click=\"$view.edit.cell.cancel.execute($cell, $event)\">Cancel\n\t\t</md-button>\n\t</div>\n</div>"

/***/ }),

/***/ 185:
/***/ (function(module, exports) {

module.exports = "<a ng-href=\"{{$cell.value}}\" ng-bind=\"$cell.label || $cell.value\"></a>\n<md-button class=\"md-icon-button q-grid-url-edit\"\n\t\t\t  aria-label=\"url\"\n\t\t\t  ng-disabled=\"!$view.edit.cell.enter.canExecute($cell)\"\n\t\t\t  ng-click=\"$view.edit.cell.enter.execute($cell)\">\n\t<md-icon>edit</md-icon>\n\t<md-tooltip>Edit Url</md-tooltip>\n</md-button>"

/***/ }),

/***/ 186:
/***/ (function(module, exports) {

module.exports = "<md-input-container>\n\t<label ng-bind=\"$editor.title\"></label>\n\t<md-checkbox aria-label=\"Bool cell edit\"\n\t\t\t\t\t class=\"md-primary\"\n\t\t\t\t\t ng-model=\"$editor.value\">\n\t</md-checkbox>\n</md-input-container>"

/***/ }),

/***/ 187:
/***/ (function(module, exports) {

module.exports = "<div class=\"q-grid-editor q-grid-date\">\n\t<md-input-container>\n\t\t<label ng-bind=\"$editor.title\"></label>\n\t\t<md-datepicker ng-model=\"$editor.value\"\n\t\t\t\t\t\t\tmd-placeholder=\"Enter date\"\n\t\t\t\t\t\t\tmd-hide-icons=\"calendar\">\n\t\t</md-datepicker>\n\t</md-input-container>\n</div>"

/***/ }),

/***/ 188:
/***/ (function(module, exports) {

module.exports = "<div class=\"q-grid-editor q-grid-number\">\n\t<md-input-container>\n\t\t<label ng-bind=\"$editor.title\"></label>\n\t\t<input type=\"number\"\n\t\t\t\t ng-model=\"$editor.value\"/>\n\t</md-input-container>\n</div>"

/***/ }),

/***/ 189:
/***/ (function(module, exports) {

module.exports = "<h4 class=\"md-title\" style=\"margin: 0\" ng-bind=\"$editor.title\"></h4>\n<div ng-cloak\n\t  layout=\"column\"\n\t  ng-controller=\"Body.Cell.Reference.Edit.Controller as $ctrl\">\n\t<q-grid class=\"q-grid-edit-form-reference\" model=\"$ctrl.gridModel\">\n\t\t<q-grid:columns>\n\t\t</q-grid:columns>\n\t\t<q-grid:toolbar>\n\t\t\t<q-grid:template for=\"top\">\n\t\t\t\t<div class=\"q-grid-progress\">\n\t\t\t\t\t<q-grid:progress></q-grid:progress>\n\t\t\t\t</div>\n\t\t\t</q-grid:template>\n\t\t\t<q-grid:template for=\"bottom\">\n\t\t\t</q-grid:template>\n\t\t</q-grid:toolbar>\n\t</q-grid>\n</div>"

/***/ }),

/***/ 190:
/***/ (function(module, exports) {

module.exports = "<div ng-cloak class=\"q-grid-editor q-grid-url\">\n\t<h4 class=\"md-title\" ng-bind=\"$editor.title\"></h4>\n\t<div layout=\"column\" class=\"q-grid-url-fields\" flex>\n\t\t<md-input-container ng-if=\"$editor.label !== null\">\n\t\t\t<label>Label</label>\n\t\t\t<input type=\"text\"\n\t\t\t\t\t ng-model=\"$editor.label\"></input>\n\t\t</md-input-container>\n\t\t<md-input-container>\n\t\t\t<label>Url</label>\n\t\t\t<input type=\"url\"\n\t\t\t\t\t ng-model=\"$editor.value\"></input>\n\t\t</md-input-container>\n\t</div>\n</div>"

/***/ }),

/***/ 191:
/***/ (function(module, exports) {

module.exports = "<div>\n\t<md-tooltip md-delay=\"1000\">\n\t{{$cell.column.title}}\n\t</md-tooltip>\n\t{{$cell.column.title}}\n</div>"

/***/ }),

/***/ 192:
/***/ (function(module, exports) {

module.exports = "<md-checkbox md-indeterminate=\"$view.selection.isIndeterminate()\"\n             ng-checked=\"$view.selection.state()\"\n             ng-click=\"$view.selection.toggleRow.execute()\"\n             ng-disabled=\"!$view.selection.toggleRow.canExecute()\"\n             aria-label=\"Selection\"/>"

/***/ }),

/***/ 193:
/***/ (function(module, exports) {

module.exports = "<div class=\"q-grid-column-chooser\" layout=\"column\" flex=\"100\">\n\t<div flex=\"none\" layout=\"row\">\n\t\t<md-input-container class=\"q-grid-column-chooser-filter\" flex>\n\t\t\t<label>Search</label>\n\t\t\t<input type=\"text\"\n\t\t\t\t\t ng-model=\"$columnChooser.filter\"\n\t\t\t\t\t q-grid:focus/>\n\t\t</md-input-container>\n\t</div>\n\t<div flex layout=\"column\">\n\t\t<ul>\n\t\t\t<li>\n\t\t\t\t<md-checkbox ng-click=\"$columnChooser.toggleAll.execute()\"\n\t\t\t\t\t\t\t\t ng-checked=\"$columnChooser.stateAll()\"\n\t\t\t\t\t\t\t\t md-indeterminate=\"$columnChooser.isIndeterminate()\">\n\t\t\t\t\tSelect All\n\t\t\t\t</md-checkbox>\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t<md-checkbox ng-click=\"$columnChooser.defaults.execute()\"\n\t\t\t\t\t\t\t\t ng-checked=\"$columnChooser.stateDefault()\">\n\t\t\t\t\tSelect Defaults\n\t\t\t\t</md-checkbox>\n\t\t\t</li>\n\t\t</ul>\n\t\t<ul class=\"q-grid-column-chooser-list\">\n\t\t\t<li ng-repeat=\"column in $columnChooser.columns | filter: $columnChooser.filter\"\n\t\t\t\tq-grid:drag=\"$columnChooser.transfer(column)\"\n\t\t\t\tq-grid:drop=\"$columnChooser.transfer(column)\"\n\t\t\t\tq-grid:on-drop=\"$columnChooser.drop.execute($event)\"\n\t\t\t\tq-grid:can-drop=\"$columnChooser.drop.canExecute($event)\"\n\t\t\t\tq-grid:can-drag=\"$columnChooser.drag.canExecute($event)\">\n\n\t\t\t\t<md-checkbox ng-checked=\"$columnChooser.state(column)\"\n\t\t\t\t\t\t\t\tng-if=\"$columnChooser.toggle.canExecute(column)\"\n\t\t\t\t\t\t\t\tng-click=\"$columnChooser.toggle.execute(column)\"\n\t\t\t\t\t\t\t\taria-label=\"Selection\">\n\t\t\t\t\t<span ng-bind-html=\"column.title | qgridHighlight : $columnChooser.filter\"> </span>\n\t\t\t\t</md-checkbox>\n\n\n\t\t\t\t<md-input-container ng-if=\"$columnChooser.canAggregate\">\n\t\t\t\t\t<md-select aria-label=\"Aggregation\" ng-model=\"column.aggregation\"\n\t\t\t\t\t\t\t\tng-change=\"$columnChooser.toggleAggregation.execute(column)\">\n\t\t\t\t\t\t<md-option value=\"\"><em>Aggregation</em></md-option>\n\t\t\t\t\t\t<md-option ng-repeat=\"aggregation in $columnChooser.aggregations\"\n\t\t\t\t\t\t\t\t\tng-value=\"aggregation\">\n\t\t\t\t\t\t\t{{::aggregation}}\n\t\t\t\t\t\t</md-option>\n\t\t\t\t\t</md-select>\n\t\t\t\t</md-input-container>\n\n\t\t\t</li>\n\t\t</ul>\n\t</div>\n\t<div class=\"q-grid-column-chooser-actions\" flex=\"none\">\n\t\t<md-button ng-click=\"$columnChooser.cancel.execute()\">\n\t\t\tCancel\n\t\t</md-button>\n\t\t<md-button ng-click=\"$columnChooser.reset.execute()\">\n\t\t\tReset\n\t\t</md-button>\n\t\t<md-button class=\"md-primary\"\n\t\t\t\t\t  ng-click=\"$columnChooser.submit.execute()\"\n\t\t\t\t\t  ng-disabled=\"!$columnChooser.submit.canExecute()\">\n\t\t\tApply\n\t\t</md-button>\n\t</div>\n</div>"

/***/ }),

/***/ 194:
/***/ (function(module, exports) {

module.exports = "<div class=\"q-grid-column-filter-panel\" layout=\"column\" flex=\"100\">\n\t<div flex=\"none\" layout=\"row\">\n\t\t<md-input-container class=\"q-grid-column-filter-filter\">\n\t\t\t<label>Search</label>\n\t\t\t<input type=\"text\"\n\t\t\t\t\t ng-change=\"$columnFilterPanel.resetItems.execute()\"\n\t\t\t\t\t ng-model=\"$columnFilterPanel.filter\"\n\t\t\t\t\t ng-model-options=\"{debounce: 500}\"\n\t\t\t\t\t q-grid:focus/>\n\t\t</md-input-container>\n\t</div>\n\t<div flex>\n\t\t<ul>\n\t\t\t<li>\n\t\t\t\t<md-checkbox ng-click=\"$columnFilterPanel.toggleAll.execute()\"\n\t\t\t\t\t\t\t\t ng-checked=\"$columnFilterPanel.stateAll()\"\n\t\t\t\t\t\t\t\t md-indeterminate=\"$columnFilterPanel.isIndeterminate()\">\n\t\t\t\t\tSelect All\n\t\t\t\t</md-checkbox>\n\t\t\t</li>\n\t\t\t</li>\n\t\t</ul>\n\t\t<div class=\"q-grid-column-filter-list\" vscroll>\n\t\t\t<ul vscroll-port-y=\"$columnFilterPanel.vscrollContext\">\n\t\t\t\t<li\n\t\t\t\t\tng-repeat=\"item in $columnFilterPanel.items | vscroll: $columnFilterPanel.vscrollContext track by $index\"\n\t\t\t\t\tvscroll-row=\"{{::$index}}\">\n\t\t\t\t\t<md-checkbox ng-checked=\"$columnFilterPanel.state(item)\"\n\t\t\t\t\t\t\t\t\t ng-if=\"$columnFilterPanel.toggle.canExecute(item)\"\n\t\t\t\t\t\t\t\t\t ng-click=\"$columnFilterPanel.toggle.execute(item)\">\n\t\t\t\t\t\t<span ng-bind-html=\"item | qgridHighlight : $columnFilterPanel.filter\"> </span>\n\t\t\t\t\t</md-checkbox>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n\t<div class=\"q-grid-column-filter-panel-actions\" flex=\"none\">\n\t\t<md-button ng-click=\"$columnFilterPanel.cancel.execute()\">\n\t\t\tCancel\n\t\t</md-button>\n\t\t<md-button ng-click=\"$columnFilterPanel.reset.execute()\">\n\t\t\tReset\n\t\t</md-button>\n\t\t<md-button class=\"md-primary\"\n\t\t\t\t\t  ng-click=\"$columnFilterPanel.submit.execute()\"\n\t\t\t\t\t  ng-disabled=\"!$columnFilterPanel.submit.canExecute()\">\n\t\t\tApply\n\t\t</md-button>\n\t</div>\n</div>"

/***/ }),

/***/ 195:
/***/ (function(module, exports) {

module.exports = "<q-grid:popup id=\"q-grid-edit-form-popup-{{::$editForm.key}}\"\n\t\t\t\t  class=\"q-grid-edit-form-popup\">\n\t<q-grid:template for=\"trigger\">\n\t\t<md-button class=\"md-icon-button\" ng-click=\"$popup.open({width: 550, height: 450})\">\n\t\t\t<md-icon>edit</md-icon>\n\t\t</md-button>\n\t</q-grid:template>\n\t<q-grid:template for=\"body\" let=\"$editForm\">\n\t\t<q-grid:edit-form-panel key=\"$editForm.key\"\n\t\t\t\t\t\t\t\t\t\trow=\"$editForm.row\"\n\t\t\t\t\t\t\t\t\t\ton:submit=\"$popupBody.close()\"\n\t\t\t\t\t\t\t\t\t\ton:cancel=\"$popupBody.close()\">\n\t\t</q-grid:edit-form-panel>\n\t</q-grid:template>\n\t<q-grid:template for=\"head\" let=\"$editForm\">\n\t\t<h2 class=\"md-title\" style=\"margin-bottom: 0;\">{{$editForm.title}}</h2>\n\t</q-grid:template>\n</q-grid:popup>"

/***/ }),

/***/ 196:
/***/ (function(module, exports) {

module.exports = "<div class=\"q-grid-edit-form-panel\" layout=\"column\">\n\t<div flex layout=\"column\" class=\"q-grid-edit-form-panel-body\">\n\t\t<div ng-repeat=\"editor in $editFormPanel.editor.editors\">\n\t\t\t<q-grid:edit-form-editor editor=\"editor\"></q-grid:edit-form-editor>\n\t\t</div>\n\t</div>\n\t<div flex=\"none\" class=\"q-grid-edit-form-panel-actions\">\n\t\t<md-button class=\"md-primary\"\n\t\t\t\t\t  ng-click=\"$editFormPanel.submit.execute()\">\n\t\t\tSubmit\n\t\t</md-button>\n\t\t<md-button ng-click=\"$editFormPanel.cancel.execute()\">\n\t\t\tCancel\n\t\t</md-button>\n\t</div>\n</div>"

/***/ }),

/***/ 197:
/***/ (function(module, exports) {

module.exports = "<div class=\"q-grid-export\" layout=\"row\" layout-align=\"end center\">\n\t<md-button ng-if=\"$export.csv.canExecute()\"\n\t\t\t\t  ng-click=\"$export.csv.execute()\">\n\t\t<md-icon>file_download</md-icon>\n\t\tExport\n\t</md-button>\n</div>"

/***/ }),

/***/ 198:
/***/ (function(module, exports) {

module.exports = "<div layout=\"column\"\n\t  class=\"q-grid-group-bar\"\n\t  q-grid:drop\n\t  q-grid:on-drop=\"$groupBar.drop.execute($event)\"\n\t  q-grid:can-drop=\"$groupBar.drop.canExecute($event)\">\n\t<md-input-container>\n\t\t<label>Group By</label>\n\t\t<md-select ng-disabled=\"!$groupBar.replace.canExecute()\"\n\t\t\t\t\t  ng-model=\"$groupBar.selectedItems\"\n\t\t\t\t\t  ng-change=\"$groupBar.replace.execute($groupBar.selectedItems)\"\n\t\t\t\t\t  multiple>\n\t\t\t<md-option ng-value=\"column.key\"\n\t\t\t\t\t\t  ng-repeat=\"column in $groupBar.columns track by column.key\"\n\t\t\t\t\t\t  ng-bind=\"column.title\"></md-option>\n\t\t</md-select>\n\t</md-input-container>\n</div>"

/***/ }),

/***/ 199:
/***/ (function(module, exports) {

module.exports = "<div class=\"q-grid-pager\" ng-switch=\"$pager.scroll.mode\">\n\t<div ng-switch-when=\"virtual\">\n\t\t<label class=\"q-grid-page\" ng-switch=\"::$pager.mode\">\n\t\t\t<span ng-switch-when=\"row\">{{$pager.from}}-{{$pager.to}} of {{$pager.total}}</span>\n\t\t\t<span ng-switch-default>{{$pager.current + 1}} of {{$pager.totalPages}}</span>\n\t\t</label>\n\t</div>\n\t<div ng-switch-default>\n\t\t<label class=\"q-grid-page-size\">Rows per page:</label>\n\t\t<md-select aria-label=\"Page Size List\"\n\t\t\t\t\t  class=\"q-grid-page-size\"\n\t\t\t\t\t  ng-model=\"$pager.size\">\n\t\t\t<md-option ng-repeat=\"size in $pager.sizeList\" ng-value=\"size\">{{size}}</md-option>\n\t\t</md-select>\n\t\t<label class=\"q-grid-page\" ng-switch=\"::$pager.mode\">\n\t\t\t<span ng-switch-when=\"row\">{{$pager.from}}-{{$pager.to}} of {{$pager.total}}</span>\n\t\t\t<span ng-switch-default>{{$pager.current + 1}} of {{$pager.totalPages}}</span>\n\t\t</label>\n\t\t<md-button class=\"md-icon-button q-grid-prev-page\"\n\t\t\t\t\t  ng-disabled=\"!$pager.prev.canExecute()\"\n\t\t\t\t\t  ng-click=\"$pager.prev.execute();\">\n\t\t\t<md-icon>keyboard_arrow_left</md-icon>\n\t\t</md-button>\n\t\t<md-button class=\"md-icon-button q-grid-next-page\"\n\t\t\t\t\t  ng-disabled=\"!$pager.next.canExecute()\"\n\t\t\t\t\t  ng-click=\"$pager.next.execute();\">\n\t\t\t<md-icon>keyboard_arrow_right</md-icon>\n\t\t</md-button>\n\t</div>\n</div>"

/***/ }),

/***/ 200:
/***/ (function(module, exports) {

module.exports = "<div layout=\"column\"\n\t  class=\"q-grid-pivot-bar\"\n\t  q-grid:drop\n\t  q-grid:on-drop=\"$pivotBar.drop.execute($event)\"\n\t  q-grid:can-drop=\"$pivotBar.drop.canExecute($event)\">\n\t<md-input-container>\n\t\t<label>Pivot By</label>\n\t\t<md-select ng-disabled=\"!$pivotBar.replace.canExecute()\"\n\t\t\t\t\t  ng-model=\"$pivotBar.selectedItems\"\n\t\t\t\t\t  ng-change=\"$pivotBar.replace.execute($pivotBar.selectedItems)\"\n\t\t\t\t\t  multiple>\n\t\t\t<md-option ng-value=\"column.key\"\n\t\t\t\t\t\t  ng-repeat=\"column in $pivotBar.columns track by column.key\"\n\t\t\t\t\t\t  ng-bind=\"column.title\"></md-option>\n\t\t</md-select>\n\t</md-input-container>\n</div>"

/***/ }),

/***/ 201:
/***/ (function(module, exports) {

module.exports = "<q-grid-core:box model=\"$popup.model\" class=\"q-grid-popup-panel\">\n\t<md-card>\n\t\t<md-card-header>\n\t\t\t<md-card-title>\n\t\t\t\t<md-card-title-text>\n\t\t\t\t\t<q-grid:popup-head model=\"$popup.model\" id=\"$popup.id\"></q-grid:popup-head>\n\t\t\t\t</md-card-title-text>\n\t\t\t\t<md-card-title-actions>\n\t\t\t\t\t<md-button ng-if=\"popup.collapsible && !popup.expanded()\"\n\t\t\t\t\t\t\t\t  class=\"md-icon-button\"\n\t\t\t\t\t\t\t\t  aria-label=\"Expand\">\n\t\t\t\t\t\t<md-icon aria-hidden=\"true\">&#xE5D0;</md-icon>\n\t\t\t\t\t\t<md-tooltip md-direction=\"bottom\">\n\t\t\t\t\t\t\tExpand\n\t\t\t\t\t\t</md-tooltip>\n\t\t\t\t\t</md-button>\n\t\t\t\t\t<md-button ng-if=\"popup.collapsible && popup.expanded()\"\n\t\t\t\t\t\t\t\t  class=\"md-icon-button\"\n\t\t\t\t\t\t\t\t  aria-label=\"Collapse\">\n\t\t\t\t\t\t<md-icon aria-hidden=\"true\">&#xE5D1;</md-icon>\n\t\t\t\t\t\t<md-tooltip md-direction=\"bottom\">\n\t\t\t\t\t\t\tCollapse\n\t\t\t\t\t\t</md-tooltip>\n\t\t\t\t\t</md-button>\n\t\t\t\t\t<md-button class=\"md-icon-button md-action-close\"\n\t\t\t\t\t\t\t\t  aria-label=\"Close\"\n\t\t\t\t\t\t\t\t  ng-click=\"$popup.close()\">\n\t\t\t\t\t\t<md-icon aria-hidden=\"true\">&#xE5CD;</md-icon>\n\t\t\t\t\t\t<md-tooltip md-direction=\"bottom\">\n\t\t\t\t\t\t\tClose\n\t\t\t\t\t\t</md-tooltip>\n\t\t\t\t\t</md-button>\n\t\t\t\t</md-card-title-actions>\n\t\t\t</md-card-title>\n\t\t</md-card-header>\n\t\t<md-card-content>\n\t\t\t<q-grid:popup-body model=\"$popup.model\" id=\"$popup.id\"></q-grid:popup-body>\n\t\t</md-card-content>\n\t\t<div class=\"q-grid-popup-resizer\" ng-if=\"popup.resizable\"></div>\n\t</md-card>\n</q-grid-core:box>"

/***/ }),

/***/ 202:
/***/ (function(module, exports) {

module.exports = "<md-progress-linear ng-if=\"$progress.isBusy\"\n\t\t\t\t\t\t  md-mode=\"indeterminate\">\n</md-progress-linear>"

/***/ }),

/***/ 203:
/***/ (function(module, exports) {

module.exports = "<div layout=\"row\" class=\"q-grid-selection-bar\">\n\t<md-input-container>\n\t\t<label>Unit</label>\n\t\t<md-select ng-model=\"$selectionBar.unit\" \n\t\t\t  ng-change=\"$selectionBar.toggleUnit.execute($selectionBar.unit)\"\n\t\t\t  ng-disabled=\"!$selectionBar.toggleUnit.canExecute()\">\n\t\t\t<md-option ng-value=\"unit.key\" \n\t\t\t\t\tng-repeat=\"unit in $selectionBar.units\"\n\t\t\t\t\tng-bind=\"unit.title\"></md-option>\n\t\t</md-select>\n\t</md-input-container>\n\n\t<md-input-container>\n\t\t<label>Mode</label>\n\t\t<md-select ng-model=\"$selectionBar.mode\" \n\t\t\t\t\tng-change=\"$selectionBar.toggleMode.execute($selectionBar.mode)\"\n\t\t\t\t\tng-disabled=\"!$selectionBar.toggleMode.canExecute()\">\n\t\t\t<md-option ng-value=\"mode.key\" \n\t\t\t\t\tng-repeat=\"mode in $selectionBar.modes\"\n\t\t\t\t\tng-bind=\"mode.title\"></md-option>\n\t\t</md-select>\n\t</md-input-container>\n\n \t<md-input-container>\n\t\t<label>Selection Count</label>\n\t\t<input ng-model=\"$selectionBar.count\" disabled>\n\t</md-input-container>\n</div>"

/***/ }),

/***/ 204:
/***/ (function(module, exports) {

module.exports = "<div layout=\"column\"\n\t  class=\"q-grid-sort-bar\"\n\t  q-grid:drop\n\t  q-grid:on-drop=\"$sortBar.drop.execute($event)\"\n\t  q-grid:can-drop=\"$sortBar.drop.canExecute($event)\">\n\t<md-input-container>\n\t\t<label>Sort By</label>\n\t\t<md-select ng-disabled=\"!$sortBar.replace.canExecute()\"\n\t\t\t\t\t  ng-model=\"$sortBar.selectedItems\"\n\t\t\t\t\t  ng-change=\"$sortBar.replace.execute($sortBar.selectedItems)\"\n\t\t\t\t\t  multiple>\n\t\t\t<md-option ng-value=\"column.key\"\n\t\t\t\t\t\t  ng-repeat=\"column in $sortBar.columns track by column.key\"\n\t\t\t\t\t\t  ng-bind=\"column.title\"></md-option>\n\t\t</md-select>\n\t</md-input-container>\n</div>"

/***/ }),

/***/ 205:
/***/ (function(module, exports) {

module.exports = "<div layout=\"row\">\n\t<div flex=\"100\"\n\t\t  layout=\"row\"\n\t\t  layout-align=\"start center\"\n\t\t  layout-align-xs=\"start start\"\n\t\t  layout-align-sm=\"start start\"\n\t\t  layout-xs=\"column\"\n\t\t  layout-sm=\"column\">\n\t</div>\n\t<div class=\"q-grid-actions\" flex=\"none\" layout=\"row\" layout-align=\"end center\">\n\t\t<!--<div>-->\n\t\t\t<!--<q-grid:popup id=\"q-grid-filter-popup\">-->\n\t\t\t\t<!--<q-grid:template for=\"trigger\">-->\n\t\t\t\t\t<!--<md-button ng-click=\"$popup.open({width: 352, height: 652})\" class=\"md-icon-button\">-->\n\t\t\t\t\t\t<!--<md-icon>filter_list</md-icon>-->\n\t\t\t\t\t<!--</md-button>-->\n\t\t\t\t<!--</q-grid:template>-->\n\t\t\t\t<!--<q-grid:template for=\"body\">-->\n\t\t\t\t\t<!--<q-grid:expression-builder on:submit=\"$popup.close()\"-->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!--on:cancel=\"$popup.close()\">-->\n\t\t\t\t\t<!--</q-grid:expression-builder>-->\n\t\t\t\t<!--</q-grid:template>-->\n\t\t\t\t<!--<q-grid:template for=\"head\">-->\n\t\t\t\t\t<!--Filter-->\n\t\t\t\t<!--</q-grid:template>-->\n\t\t\t<!--</q-grid:popup>-->\n\t\t<!--</div>-->\n\t\t<div>\n\t\t\t<q-grid:popup id=\"q-grid-column-chooser-popup\">\n\t\t\t\t<q-grid:template for=\"trigger\">\n\t\t\t\t\t<md-button ng-click=\"$popup.open({width: 352, height: 652})\" class=\"md-icon-button\">\n\t\t\t\t\t\t<md-icon>more_vert</md-icon>\n\t\t\t\t\t</md-button>\n\t\t\t\t</q-grid:template>\n\t\t\t\t<q-grid:template for=\"body\">\n\t\t\t\t\t<q-grid:column-chooser on:submit=\"$popupBody.close()\"\n\t\t\t\t\t\t\t\t\t\t\t\t  on:cancel=\"$popupBody.close()\">\n\t\t\t\t\t</q-grid:column-chooser>\n\t\t\t\t</q-grid:template>\n\t\t\t\t<q-grid:template for=\"head\">\n\t\t\t\t\t<span class=\"md-subhead\">Column Chooser</span>\n\t\t\t\t</q-grid:template>\n\t\t\t</q-grid:popup>\n\t\t</div>\n\t</div>\n</div>\n<div class=\"q-grid-progress\">\n\t<q-grid:progress>\n\t</q-grid:progress>\n</div>"

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__templates_body_cell_reference_edit__ = __webpack_require__(163);
__webpack_require__(165);


/* harmony default export */ __webpack_exports__["default"] = (angular.module('qgrid.theme.material', ['qgrid']).controller('Body.Cell.Reference.Edit.Controller', __WEBPACK_IMPORTED_MODULE_0__templates_body_cell_reference_edit__["a" /* default */]).config(Setup).name);

Setup.$inject = ['qgridThemeProvider'];
function Setup(qgridThemeProvider) {
	qgridThemeProvider.register('material', function (theme) {
		theme.put('qgrid.plugin.progress.tpl.html', __webpack_require__(202));
		theme.put('qgrid.plugin.export.tpl.html', __webpack_require__(197));

		theme.put('qgrid.body.cell.text.edit.tpl.html', __webpack_require__(57));
		theme.put('qgrid.body.cell.text-area.edit.tpl.html', __webpack_require__(183));
		theme.put('qgrid.body.cell.bool.edit.tpl.html', __webpack_require__(169));
		theme.put('qgrid.body.cell.date.edit.tpl.html', __webpack_require__(171));
		theme.put('qgrid.body.cell.number.edit.tpl.html', __webpack_require__(177));
		theme.put('qgrid.body.cell.array.tpl.html', __webpack_require__(167));
		theme.put('qgrid.body.cell.array.edit.tpl.html', __webpack_require__(166));
		theme.put('qgrid.body.cell.password.edit.tpl.html', __webpack_require__(178));
		theme.put('qgrid.body.cell.bool.tpl.html', __webpack_require__(170));
		theme.put('qgrid.body.cell.select.tpl.html', __webpack_require__(182));
		theme.put('qgrid.body.cell.row-indicator.tpl.html', __webpack_require__(181));
		theme.put('qgrid.body.cell.url.tpl.html', __webpack_require__(185));
		theme.put('qgrid.body.cell.url.edit.tpl.html', __webpack_require__(184));
		theme.put('qgrid.body.cell.email.tpl.html', __webpack_require__(174));
		theme.put('qgrid.body.cell.email.edit.tpl.html', __webpack_require__(173));
		theme.put('qgrid.body.cell.file.tpl.html', __webpack_require__(175));
		theme.put('qgrid.body.cell.file.edit.tpl.html', __webpack_require__(56));
		theme.put('qgrid.body.cell.image.tpl.html', __webpack_require__(176));
		theme.put('qgrid.body.cell.image.edit.tpl.html', __webpack_require__(56));
		theme.put('qgrid.body.cell.reference.tpl.html', __webpack_require__(180));
		theme.put('qgrid.body.cell.reference.edit.tpl.html', __webpack_require__(179));
		theme.put('qgrid.body.cell.dropdown.edit.tpl.html', __webpack_require__(172));
		theme.put('qgrid.body.cell.autocomplete.edit.tpl.html', __webpack_require__(168));
		theme.put('qgrid.body.cell.id.edit.tpl.html', __webpack_require__(57));

		theme.put('qgrid.head.cell.text.tpl.html', __webpack_require__(4));
		theme.put('qgrid.head.cell.bool.tpl.html', __webpack_require__(4));
		theme.put('qgrid.head.cell.date.tpl.html', __webpack_require__(4));
		theme.put('qgrid.head.cell.number.tpl.html', __webpack_require__(4));
		theme.put('qgrid.head.cell.array.tpl.html', __webpack_require__(4));
		theme.put('qgrid.head.cell.email.tpl.html', __webpack_require__(4));
		theme.put('qgrid.head.cell.password.tpl.html', __webpack_require__(4));
		theme.put('qgrid.head.cell.time.tpl.html', __webpack_require__(4));
		theme.put('qgrid.head.cell.url.tpl.html', __webpack_require__(4));
		theme.put('qgrid.head.cell.file.tpl.html', __webpack_require__(4));
		theme.put('qgrid.head.cell.image.tpl.html', __webpack_require__(4));
		theme.put('qgrid.head.cell.reference.tpl.html', __webpack_require__(4));
		theme.put('qgrid.head.cell.id.tpl.html', __webpack_require__(4));
		theme.put('qgrid.head.cell.pivot.tpl.html', __webpack_require__(191));
		theme.put('qgrid.head.cell.select.tpl.html', __webpack_require__(192));

		theme.put('qgrid.form.cell.text.edit.tpl.html', __webpack_require__(58));
		theme.put('qgrid.form.cell.number.edit.tpl.html', __webpack_require__(188));
		theme.put('qgrid.form.cell.date.edit.tpl.html', __webpack_require__(187));
		theme.put('qgrid.form.cell.bool.edit.tpl.html', __webpack_require__(186));
		theme.put('qgrid.form.cell.reference.edit.tpl.html', __webpack_require__(189));
		theme.put('qgrid.form.cell.id.edit.tpl.html', __webpack_require__(58));
		theme.put('qgrid.form.cell.url.edit.tpl.html', __webpack_require__(190));

		theme.put('qgrid.toolbar.top.tpl.html', __webpack_require__(205));
		theme.put('qgrid.plugin.column-chooser.tpl.html', __webpack_require__(193));
		theme.put('qgrid.plugin.column-filter-panel.tpl.html', __webpack_require__(194));
		theme.put('qgrid.plugin.edit-form.tpl.html', __webpack_require__(195));
		theme.put('qgrid.plugin.edit-form-panel.tpl.html', __webpack_require__(196));
		theme.put('qgrid.plugin.popup-panel.tpl.html', __webpack_require__(201));
		theme.put('qgrid.plugin.group-bar.tpl.html', __webpack_require__(198));
		theme.put('qgrid.plugin.sort-bar.tpl.html', __webpack_require__(204));
		theme.put('qgrid.plugin.pivot-bar.tpl.html', __webpack_require__(200));
		theme.put('qgrid.plugin.selection-bar.tpl.html', __webpack_require__(203));
		theme.put('qgrid.plugin.pager.tpl.html', __webpack_require__(199));
	});
}

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = "<div ng-click=\"$view.sort.toggle.execute($cell.column)\"\n\t  ng-mouseover=\"$view.sort.hover = true\"\n\t  ng-mouseleave=\"$view.sort.hover = false\">\n\t<div class=\"q-grid-sort\"\n\t\t  ng-class=\"{'q-grid-active': $view.sort.order($cell.column) >= 0}\"\n\t\t  ng-if=\"$cell.column.canSort\"\n\t\t  ng-switch=\"$view.sort.direction($cell.column)\">\n\t\t<md-icon class=\"q-grid-asc\" ng-switch-when=\"asc\">arrow_downward</md-icon>\n\t\t<md-icon class=\"q-grid-desc\" ng-switch-when=\"desc\">arrow_upward</md-icon>\n\t\t<md-icon ng-switch-default ng-if=\"$view.sort.hover\">arrow_downward</md-icon>\n\t</div>\n\t<label>\n\t\t<md-tooltip md-delay=\"1000\">{{$cell.column.title}}</md-tooltip>\n\t\t{{$cell.column.title}}\n\t</label>\n</div>\n<q-grid:column-filter ng-if=\"$cell.column.canFilter\"\n\t\t\t\t\t\t\t class=\"q-grid-column-filter\"\n\t\t\t\t\t\t\t key=\"$cell.column.key\"\n\t\t\t\t\t\t\t title=\"{{$cell.column.title}}\"\n\t\t\t\t\t\t\t ng-class=\"{'q-grid-active': $view.filter.has($cell.column)}\">\n</q-grid:column-filter>"

/***/ }),

/***/ 56:
/***/ (function(module, exports) {

module.exports = "<div ng-cloak class=\"q-grid-editor q-grid-file\">\n\t<h2 class=\"md-title\">Edit {{::$cell.column.title}}</h2>\n\t<div layout=\"column\" flex>\n\t\t<div class=\"q-grid-file-upload-area\"\n\t\t\t  ng-class=\"{'q-grid-file-has-preview': $cell.column.hasPreview($view.edit.cell.label)}\">\n\t\t\t<div class=\"q-grid-file-upload-message\" layout=\"column\"\n\t\t\t\t  ng-switch=\"!!$view.edit.cell.value\">\n\t\t\t\t<span class=\"q-grid-file-upload-filename\"\n\t\t\t\t\t\tng-switch-when=\"true\">{{$view.edit.cell.label}}</span>\n\t\t\t\t<div layout=\"row\" layout-align=\"center center\">\n\t\t\t\t\t<md-icon>file_upload</md-icon>\n\t\t\t\t\t<span ng-switch-when=\"false\">Drag and drop a file here or click</span>\n\t\t\t\t\t<span ng-switch-when=\"true\">Drag and drop or click to replace </span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<input q-grid:file-upload=\"$view.edit.cell.value\"\n\t\t\t\t\t q-grid:file-upload-label=\"$view.edit.cell.label\"\n\t\t\t\t\t q-grid:can-upload=\"cell.column.canUpload($event)\"\n\t\t\t\t\t type=\"file\"></input>\n\t\t\t<div class=\"q-grid-file-preview\"\n\t\t\t\t  ng-if=\"$cell.column.hasPreview($view.edit.cell.label)\">\n\t\t\t\t<img ng-src=\"{{$view.edit.cell.value}}\"/>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"q-grid-actions\">\n\t\t<md-button class=\"md-primary md-confirm-button\" ng-click=\"$view.edit.cell.commit.execute($cell, $event)\">Save\n\t\t</md-button>\n\t\t<md-button class=\"md-primary md-cancel-button\" ng-click=\"$view.edit.cell.cancel.execute($cell, $event)\">Cancel\n\t\t</md-button>\n\t</div>\n</div>"

/***/ }),

/***/ 57:
/***/ (function(module, exports) {

module.exports = "<div class=\"q-grid-editor q-grid-text\">\n\t<md-input-container>\n\t\t<input type=\"text\"\n\t\t\t\t q-grid:focus\n\t\t\t\t ng-blur=\"$view.edit.cell.commit.execute($cell)\"\n\t\t\t\t ng-model=\"$view.edit.cell.value\"\n\t\t\t\t md-maxlength=\"{{::$cell.column.maxLength}}\" />\n\t</md-input-container>\n</div>"

/***/ }),

/***/ 58:
/***/ (function(module, exports) {

module.exports = "<div class=\"q-grid-editor q-grid-text\">\n\t<md-input-container>\n\t\t<label ng-bind=\"$editor.title\"></label>\n\t\t<input type=\"text\"\n\t\t\t\t ng-model=\"$editor.value\" />\n\t</md-input-container>\n</div>"

/***/ })

/******/ });