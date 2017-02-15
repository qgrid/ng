var qgrid =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

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

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 431);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_isObject__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_isObject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_isObject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_isFunction__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_isFunction___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_isFunction__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_isArray__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_isArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_isArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_isBoolean__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_isBoolean___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash_isBoolean__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_clone__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_clone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash_clone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_cloneDeep__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_cloneDeep___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash_cloneDeep__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_isUndefined__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_isUndefined___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash_isUndefined__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_debounce__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_debounce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash_debounce__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_merge__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lodash_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_flatten__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_flatten___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_lodash_flatten__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash_orderBy__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash_orderBy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_lodash_orderBy__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_lodash_startCase__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_lodash_startCase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_lodash_startCase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_lodash_assignWith__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_lodash_assignWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_lodash_assignWith__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_0_lodash_isObject___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1_lodash_isFunction___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_2_lodash_isArray___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_6_lodash_isUndefined___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_3_lodash_isBoolean___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_4_lodash_clone___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_5_lodash_cloneDeep___default.a; });
/* unused harmony reexport debounce */
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_8_lodash_merge___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_9_lodash_flatten___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_11_lodash_startCase___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_12_lodash_assignWith___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_10_lodash_orderBy___default.a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return isEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return yes; });
/* unused harmony export no */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return toCamelCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return noop; });














var noop = function noop() {};
var yes = function yes() {
	return true;
};
var no = function no() {
	return false;
};
var identity = function identity(arg) {
	return arg;
};

var toCamelCase = function toCamelCase() {
	for (var _len = arguments.length, names = Array(_len), _key = 0; _key < _len; _key++) {
		names[_key] = arguments[_key];
	}

	var length = names.length;
	if (length > 0) {
		return names[0] + names.slice(1).map(function (name) {
			return name[0].toUpperCase() + name.substring(1, name.length);
		});
	}

	return '';
};

var isEmail = function isEmail(value) {
	if (value) {
		var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
		return re.test(value);
	}

	return false;
};



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return MODULE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MODULE_CORE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return MODULE_LAYOUT_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return SERVICE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return TEMPLATE_PATH_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return THEME_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return RANGE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return GRID; });
/* unused harmony export GRID_CORE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return GRID_NAME; });
/* unused harmony export GRID_PREFIX */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return BOX_CORE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return VIEW_CORE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return TD_CORE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return TF_CORE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return TH_CORE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return HEAD_CORE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return BODY_CORE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return FOOT_CORE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return TOOLBAR_CORE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return HEAD_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return TEMPLATE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return COLUMN_LIST_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return COLUMN_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return NODE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return FOOT_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DRAG_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return DROP_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return MARKUP_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return TOOLBAR_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return CAN_DROP_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return CAN_DRAG_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return DROP_EFFECT_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return ON_DROP_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return INDETERMINATE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return FOCUS_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return RESIZE_NAME; });
var MODULE_NAME = 'qgrid';
var MODULE_CORE_NAME = 'qgrid.core';
var MODULE_LAYOUT_NAME = 'qgrid.layout';

var SERVICE_NAME = MODULE_NAME;
var TEMPLATE_PATH_NAME = MODULE_NAME + 'TemplatePath';
var THEME_NAME = MODULE_NAME + 'Theme';
var RANGE_NAME = MODULE_NAME + 'Range';

var GRID = 'qGrid';
var GRID_CORE = GRID + 'Core';

var GRID_NAME = GRID;
var GRID_PREFIX = 'q-grid';
var BOX_CORE_NAME = GRID_CORE + 'Box';
var VIEW_CORE_NAME = GRID_CORE + 'View';
var TD_CORE_NAME = GRID_CORE + 'Td';
var TF_CORE_NAME = GRID_CORE + 'Tf';
var TH_CORE_NAME = GRID_CORE + 'Th';
var HEAD_CORE_NAME = GRID_CORE + 'Head';
var BODY_CORE_NAME = GRID_CORE + 'Body';
var FOOT_CORE_NAME = GRID_CORE + 'Foot';
var TOOLBAR_CORE_NAME = GRID_CORE + 'Toolbar';

var HEAD_NAME = GRID + 'Head';
var TEMPLATE_NAME = GRID + 'Template';
var COLUMN_LIST_NAME = GRID + 'Columns';
var COLUMN_NAME = GRID + 'Column';
var NODE_NAME = GRID + 'Node';
var FOOT_NAME = GRID + 'Foot';
var DRAG_NAME = GRID + 'Drag';
var DROP_NAME = GRID + 'Drop';
var MARKUP_NAME = GRID + 'Markup';
var TOOLBAR_NAME = GRID + 'Toolbar';

var CAN_DROP_NAME = GRID + 'CanDrop';
var CAN_DRAG_NAME = GRID + 'CanDrag';
var DROP_EFFECT_NAME = GRID + 'DropEffect';
var ON_DROP_NAME = GRID + 'OnDrop';

var INDETERMINATE_NAME = GRID + 'Indeterminate';
var FOCUS_NAME = GRID + 'Focus';
var RESIZE_NAME = GRID + 'Resize';

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_infrastructure_error__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_services_utility__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var resolvers = {};

var TemplatePath = function () {
	function TemplatePath() {
		_classCallCheck(this, TemplatePath);
	}

	_createClass(TemplatePath, null, [{
		key: 'register',
		value: function register(name, resolve) {
			if (resolvers.hasOwnProperty(name)) {
				throw new __WEBPACK_IMPORTED_MODULE_0_core_infrastructure_error__["a" /* default */]('template.path', '"' + name + '" is already registered');
			}

			resolvers[name] = resolve;
			return TemplatePath;
		}
	}, {
		key: 'get',
		value: function get(source) {
			var path = this.find(source);
			if (!path) {
				throw new __WEBPACK_IMPORTED_MODULE_0_core_infrastructure_error__["a" /* default */]('template.path', 'Template path can\'t be found');
			}

			return path;
		}
	}, {
		key: 'find',
		value: function find(source) {
			var getName = this.name;
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = Object.keys(resolvers)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var key = _step.value;

					var name = getName(key);
					var value = source[name];
					if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_core_services_utility__["e" /* isUndefined */])(value) && value !== null) {
						var path = resolvers[key](source, value);
						if (path) {
							return path;
						}
					}
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}

			return null;
		}
	}, {
		key: 'name',
		value: function name(_name) {
			return '_' + _name;
		}
	}, {
		key: 'require',
		get: function get() {
			var getName = this.name;
			return Object.keys(resolvers).reduce(function (memo, key) {
				memo[getName(key)] = '^^?' + key;
				return memo;
			}, {});
		}
	}]);

	return TemplatePath;
}();

/* harmony default export */ __webpack_exports__["a"] = TemplatePath;

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_utility__ = __webpack_require__(0);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var AppError = function (_Error) {
	_inherits(AppError, _Error);

	function AppError(name, message) {
		_classCallCheck(this, AppError);

		var _this = _possibleConstructorReturn(this, (AppError.__proto__ || Object.getPrototypeOf(AppError)).call(this, message));

		_this.name = _this.constructor.name;
		_this.message = 'qgrid.' + name + ': ' + message;
		if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__services_utility__["a" /* isFunction */])(Error.captureStackTrace)) {
			Error.captureStackTrace(_this, _this.constructor);
		} else {
			_this.stack = new Error(message).stack;
		}
		return _this;
	}

	return AppError;
}(Error);

/* harmony default export */ __webpack_exports__["a"] = AppError;

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Resource = function Resource() {
	var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	var scope = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	_classCallCheck(this, Resource);

	this.data = data;
	this.scope = scope;
};

/* harmony default export */ __webpack_exports__["a"] = Resource;

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_utility__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["a"] = map;
/* unused harmony export getValue */
/* harmony export (immutable) */ __webpack_exports__["d"] = find;
/* harmony export (immutable) */ __webpack_exports__["e"] = findIndex;
/* unused harmony export findView */
/* harmony export (immutable) */ __webpack_exports__["c"] = dataView;
/* harmony export (immutable) */ __webpack_exports__["b"] = lineView;
/* harmony export (immutable) */ __webpack_exports__["f"] = widthFactory;


function map(columns) {
	return columns.reduce(function (memo, column) {
		memo[column.key] = column;
		return memo;
	}, {});
}

function getValue(column) {
	return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__services_utility__["a" /* isFunction */])(column.value) ? function (row) {
		return column.value(row);
	} : function (row) {
		return row[column.key];
	};
}

function find(columns, key) {
	var index = findIndex(columns, key);
	return index < 0 ? null : columns[index];
}

function findIndex(columns, key) {
	var length = columns.length;
	while (length--) {
		var column = columns[length];
		if (column.key == key) {
			return length;
		}
	}

	return -1;
}

function findView(columns, key) {
	var length = columns.length;

	while (length--) {
		var column = columns[length];
		if (column.model.key == key) {
			return column;
		}
	}

	return null;
}

function dataView(columns, model) {
	var groupBy = new Set(model.group().by);
	var pivotBy = new Set(model.pivot().by);
	return columns.filter(function (c) {
		return !groupBy.has(c.model.key) && !pivotBy.has(c.model.key) && c.model.isVisible !== false;
	});
}

function lineView(columnRows) {
	var height = columnRows.length;
	if (height === 1) {
		return columnRows[0];
	}

	if (height > 1) {
		var viewColumns = columnRows[0].filter(function (c) {
			return c.model.type !== 'pivot' && c.model.type !== 'pad';
		});
		var pivotColumns = columnRows[columnRows.length - 1].filter(function (c) {
			return c.model.type === 'pivot' || c.model.type === 'pad';
		});
		return viewColumns.concat(pivotColumns);
	}

	return [];
}

function widthFactory(model) {
	var layout = model.layout;
	var columns = layout().columns;
	return function (column) {
		if (columns.hasOwnProperty(column.key)) {
			return columns[column.key].width;
		}

		var width = column.width;
		return width || width === 0 ? width : null;
	};
}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_utility__ = __webpack_require__(0);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Command = function Command(context) {
	_classCallCheck(this, Command);

	this.execute = context.execute || __WEBPACK_IMPORTED_MODULE_0__services_utility__["g" /* yes */];
	this.canExecute = context.canExecute || __WEBPACK_IMPORTED_MODULE_0__services_utility__["g" /* yes */];
	this.shortcut = context.shortcut;
};

/* harmony default export */ __webpack_exports__["a"] = Command;

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_view_view__ = __webpack_require__(11);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var ColumnView = function (_View) {
	_inherits(ColumnView, _View);

	function ColumnView(model) {
		_classCallCheck(this, ColumnView);

		var _this = _possibleConstructorReturn(this, (ColumnView.__proto__ || Object.getPrototypeOf(ColumnView)).call(this, model));

		_this.key = null;
		_this.colspan = 0;
		_this.rowspan = 0;
		return _this;
	}

	return ColumnView;
}(__WEBPACK_IMPORTED_MODULE_0_core_view_view__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = ColumnView;

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* harmony default export */ __webpack_exports__["a"] = function (name) {
	var require = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	var dependencies = Object.keys(require).reduce(function (memo, key) {
		memo.push({
			key: key,
			selector: require[key]
		});

		return memo;
	}, []);

	var Directive = function () {
		function Directive() {
			_classCallCheck(this, Directive);
		}

		_createClass(Directive, [{
			key: 'onInit',
			value: function onInit() {}
		}], [{
			key: 'link',
			value: function link($scope, $element, $attrs, $ctrls) {
				var ctrl = $ctrls[0];

				for (var i = 0, length = dependencies.length; i < length; i++) {
					var d = dependencies[i];
					ctrl[d.key] = $ctrls[i + 1];
				}

				ctrl.onInit($attrs);
				if (ctrl.onDestroy) {
					$scope.$on('$destroy', ctrl.onDestroy.bind(ctrl));
				}
			}
		}]);

		return Directive;
	}();

	Directive.require = [name].concat(dependencies.map(function (d) {
		return d.selector;
	}));
	return Directive;
};

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ng_definition__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MODULE_CORE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MODULE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return PAGER_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return PROGRESS_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SORTBAR_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return GROUPBAR_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return PIVOTBAR_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return SELECTIONBAR_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return VISIBILITY_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return COLUMNCHOOSER_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return POPUP_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return POPUP_TRIGGER_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return POPUP_HEAD_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return POPUP_BODY_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return POPUP_PANEL_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return POPUP_SERVICE; });


var MODULE_CORE_NAME = __WEBPACK_IMPORTED_MODULE_0_ng_definition__["a" /* MODULE_CORE_NAME */];
var MODULE_NAME = __WEBPACK_IMPORTED_MODULE_0_ng_definition__["D" /* MODULE_NAME */] + '.plugin';
var PAGER_NAME = __WEBPACK_IMPORTED_MODULE_0_ng_definition__["E" /* GRID */] + 'Pager';
var PROGRESS_NAME = __WEBPACK_IMPORTED_MODULE_0_ng_definition__["E" /* GRID */] + 'Progress';
var SORTBAR_NAME = __WEBPACK_IMPORTED_MODULE_0_ng_definition__["E" /* GRID */] + 'Sortbar';
var GROUPBAR_NAME = __WEBPACK_IMPORTED_MODULE_0_ng_definition__["E" /* GRID */] + 'Groupbar';
var PIVOTBAR_NAME = __WEBPACK_IMPORTED_MODULE_0_ng_definition__["E" /* GRID */] + 'Pivotbar';
var SELECTIONBAR_NAME = __WEBPACK_IMPORTED_MODULE_0_ng_definition__["E" /* GRID */] + 'Selectionbar';
var VISIBILITY_NAME = __WEBPACK_IMPORTED_MODULE_0_ng_definition__["E" /* GRID */] + 'Visibility';
var COLUMNCHOOSER_NAME = __WEBPACK_IMPORTED_MODULE_0_ng_definition__["E" /* GRID */] + 'ColumnChooser';

var POPUP_NAME = __WEBPACK_IMPORTED_MODULE_0_ng_definition__["E" /* GRID */] + 'Popup';
var POPUP_TRIGGER_NAME = __WEBPACK_IMPORTED_MODULE_0_ng_definition__["E" /* GRID */] + 'PopupTrigger';
var POPUP_HEAD_NAME = __WEBPACK_IMPORTED_MODULE_0_ng_definition__["E" /* GRID */] + 'PopupHead';
var POPUP_BODY_NAME = __WEBPACK_IMPORTED_MODULE_0_ng_definition__["E" /* GRID */] + 'PopupBody';
var POPUP_PANEL_NAME = __WEBPACK_IMPORTED_MODULE_0_ng_definition__["E" /* GRID */] + 'PopupPanel';
var POPUP_SERVICE = __WEBPACK_IMPORTED_MODULE_0_ng_definition__["E" /* GRID */] + 'PopupService';

/***/ }),
/* 10 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var View = function View(model) {
	_classCallCheck(this, View);

	this.model = model;
};

/* harmony default export */ __webpack_exports__["a"] = View;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(105);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*eslint-disable  no-console*/

var Log = function () {
	function Log() {
		_classCallCheck(this, Log);
	}

	_createClass(Log, null, [{
		key: "info",
		value: function info(source, message) {
			console.info("qgrid." + source + ": " + message);
		}
	}, {
		key: "warn",
		value: function warn(source, message) {
			console.warn("qgrid." + source + ": " + message);
		}
	}, {
		key: "error",
		value: function error(source, message) {
			console.error("qgrid." + source + ": " + message);
		}
	}]);

	return Log;
}();

/*eslint-enable*/


/* harmony default export */ __webpack_exports__["a"] = Log;

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Component = function () {
	function Component() {
		_classCallCheck(this, Component);

		this.$onInit = this.onInitCore;
		this.$onChanges = this.onChangeCore;
		this.$onDestroy = this.onDestroyCore;
		this.$postLink = this.onLinkCore;
	}

	_createClass(Component, [{
		key: "onInitCore",
		value: function onInitCore() {
			this.onInit();
		}
	}, {
		key: "onLinkCore",
		value: function onLinkCore() {
			this.onLink();
		}
	}, {
		key: "onChangeCore",
		value: function onChangeCore() {
			this.onChange();
		}
	}, {
		key: "onDestroyCore",
		value: function onDestroyCore() {
			this.onDestroy();
		}
	}, {
		key: "onInit",
		value: function onInit() {}
	}, {
		key: "onLink",
		value: function onLink() {}
	}, {
		key: "onChange",
		value: function onChange() {}
	}, {
		key: "onDestroy",
		value: function onDestroy() {}
	}]);

	return Component;
}();

/* harmony default export */ __webpack_exports__["a"] = Component;

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_infrastructure_error__ = __webpack_require__(3);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var TemplateLink = function () {
	function TemplateLink($compile, $templateCache) {
		_classCallCheck(this, TemplateLink);

		this.$compile = $compile;
		this.$templateCache = $templateCache;
	}

	_createClass(TemplateLink, [{
		key: 'link',
		value: function link(templateUrl, resource) {
			var _this = this;

			var keys = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ['content', '$default'];

			var resourceData = resource.data;
			var resourceKey = this.findResourceKey(resourceData, keys);
			var template = resourceKey !== null ? resourceData[resourceKey] : this.$templateCache.get(templateUrl);

			return function (element, scope) {
				var container = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : element;

				var resourceScope = resource.scope;
				var _iteratorNormalCompletion = true;
				var _didIteratorError = false;
				var _iteratorError = undefined;

				try {
					for (var _iterator = Object.keys(resourceScope)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
						var name = _step.value;

						if (scope.hasOwnProperty(name)) {
							throw new __WEBPACK_IMPORTED_MODULE_0_core_infrastructure_error__["a" /* default */]('template.core', '"' + name + '" is reserved, use another name');
						}

						scope[name] = resourceScope[name];
					}
				} catch (err) {
					_didIteratorError = true;
					_iteratorError = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion && _iterator.return) {
							_iterator.return();
						}
					} finally {
						if (_didIteratorError) {
							throw _iteratorError;
						}
					}
				}

				container.html('<!--qgrid: template-->' + template);
				var linkTo = _this.$compile(element.contents());
				linkTo(scope);
			};
		}
	}, {
		key: 'findResourceKey',
		value: function findResourceKey(resourceData, keys) {
			var _iteratorNormalCompletion2 = true;
			var _didIteratorError2 = false;
			var _iteratorError2 = undefined;

			try {
				for (var _iterator2 = keys[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
					var key = _step2.value;

					if (resourceData.hasOwnProperty(key)) {
						return key;
					}
				}
			} catch (err) {
				_didIteratorError2 = true;
				_iteratorError2 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion2 && _iterator2.return) {
						_iterator2.return();
					}
				} finally {
					if (_didIteratorError2) {
						throw _iteratorError2;
					}
				}
			}

			return null;
		}
	}]);

	return TemplateLink;
}();

/* harmony default export */ __webpack_exports__["a"] = TemplateLink;

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GRID_PREFIX; });
var GRID_PREFIX = 'q-grid';

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ng_components_model_component__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_infrastructure_error__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_infrastructure_guard__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_services_utility__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_components_template_template_link__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng_definition__ = __webpack_require__(1);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








/* harmony default export */ __webpack_exports__["a"] = function (pluginName) {
	var modelNames = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
	var inject = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

	__WEBPACK_IMPORTED_MODULE_2_core_infrastructure_guard__["a" /* notNullOrEmpty */](pluginName, 'pluginName');

	pluginName = pluginName.toLowerCase();

	var Plugin = function (_ModelComponent) {
		_inherits(Plugin, _ModelComponent);

		function Plugin($scope, $element, $attrs, $compile, $templateCache) {
			_classCallCheck(this, Plugin);

			if (modelNames.length) {
				var _this = _possibleConstructorReturn(this, (Plugin.__proto__ || Object.getPrototypeOf(Plugin)).call(this, modelNames));
			} else {
				var _this = _possibleConstructorReturn(this, (Plugin.__proto__ || Object.getPrototypeOf(Plugin)).call(this));
			}

			_this.$scope = $scope;
			_this.$element = $element;
			_this.$attrs = $attrs;
			_this.template = new __WEBPACK_IMPORTED_MODULE_4_ng_components_template_template_link__["a" /* default */]($compile, $templateCache);
			_this.templateScope = null;

			Array.from(arguments).filter(function (a, i) {
				return i >= 5;
			}).forEach(function (a, i) {
				return _this[inject[i]] = a;
			});
			return _possibleConstructorReturn(_this);
		}

		_createClass(Plugin, [{
			key: 'onInitCore',
			value: function onInitCore() {
				var _this2 = this;

				if (this.isReady()) {
					var visibility = this.model.visibility;
					var plugins = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_core_services_utility__["c" /* clone */])(visibility().plugin);
					if (!plugins.hasOwnProperty(pluginName)) {
						plugins[pluginName] = true;
						this.model.visibility({ plugin: plugins });
					}

					this.model.visibilityChanged.watch(function (e) {
						if (e.changes.hasOwnProperty('plugin')) {
							var newValue = e.changes.plugin.newValue;
							if (newValue[pluginName] !== _this2.isShown) {
								if (e.state.plugin[pluginName]) {
									_this2.templateScope = _this2.show();
								} else {
									_this2.templateScope = _this2.hide();
								}
							}
						}
					});
				}

				_get(Plugin.prototype.__proto__ || Object.getPrototypeOf(Plugin.prototype), 'onInitCore', this).call(this);
			}
		}, {
			key: 'isReady',
			value: function isReady() {
				// not in transclusion
				return this._box || !this._root;
			}
		}, {
			key: 'show',
			value: function show() {
				var templateUrl = 'qgrid.plugin.' + pluginName + '.tpl.html';
				var templateScope = this.$scope.$new();
				var link = this.template.link(templateUrl, this.resource);

				link(this.$element, templateScope);
				return templateScope;
			}
		}, {
			key: 'hide',
			value: function hide() {
				if (this.templateScope) {
					this.templateScope.$destroy();
					this.$element[0].innerHTML = '';
				}

				return null;
			}
		}, {
			key: 'resource',
			get: function get() {
				var model = this.model;
				if (model.hasOwnProperty(pluginName)) {
					var pluginState = model[pluginName]();
					if (pluginState.hasOwnProperty('resource')) {
						return pluginState.resource;
					}
				}

				return model.plugin().resource;
			}
		}, {
			key: 'model',
			get: function get() {
				var model = this._model || this._box && this._box.model || this._root && this._root.model;

				if (!model) {
					throw new __WEBPACK_IMPORTED_MODULE_1_core_infrastructure_error__["a" /* default */]('plugin.component', 'Model is not defined');
				}

				return model;
			}
		}, {
			key: 'isShown',
			get: function get() {
				return this.templateScope !== null;
			}
		}]);

		return Plugin;
	}(__WEBPACK_IMPORTED_MODULE_0_ng_components_model_component__["a" /* default */]);

	Plugin.$inject = ['$scope', '$element', '$attrs', '$compile', '$templateCache'].concat(inject);

	Plugin.component = function (settings) {
		var pluginSettings = {
			require: {
				'_box': '^^?' + __WEBPACK_IMPORTED_MODULE_5_ng_definition__["l" /* BOX_CORE_NAME */],
				'_root': '^^?' + __WEBPACK_IMPORTED_MODULE_5_ng_definition__["k" /* GRID_NAME */]
			},
			bindings: {
				'_model': '<model'
			}
		};

		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_core_services_utility__["d" /* merge */])(pluginSettings, settings);
		return pluginSettings;
	};

	return Plugin;
};

/***/ }),
/* 19 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ColumnModel = function () {
	function ColumnModel() {
		var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'text';

		_classCallCheck(this, ColumnModel);

		this.type = type;
		this.key = null;
		this.title = null;
		this.value = null;
		this.pin = null;
		this.source = 'user';

		this.width = null;
		this.minWidth = 20;
		this.maxWidth = null;

		this.canEdit = true;
		this.canResize = true;
		this.canSort = true;
		this.canMove = true;

		this.isVisible = true;
	}

	_createClass(ColumnModel, [{
		key: 'toString',
		value: function toString() {
			return this.type + ': ' + this.title;
		}
	}]);

	return ColumnModel;
}();

/* harmony default export */ __webpack_exports__["a"] = ColumnModel;

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_model__ = __webpack_require__(20);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var DataColumnModel = function (_ColumnModel) {
	_inherits(DataColumnModel, _ColumnModel);

	function DataColumnModel() {
		_classCallCheck(this, DataColumnModel);

		var _this = _possibleConstructorReturn(this, (DataColumnModel.__proto__ || Object.getPrototypeOf(DataColumnModel)).apply(this, arguments));

		_this.isDefault = true;
		_this.aggregation = null;
		return _this;
	}

	return DataColumnModel;
}(__WEBPACK_IMPORTED_MODULE_0__column_model__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = DataColumnModel;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(27),
    getRawTag = __webpack_require__(310),
    objectToString = __webpack_require__(339);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(269),
    getValue = __webpack_require__(311);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = "{{$cell.value}}"

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = "<div ng-click=\"$view.sort.toggle.execute($cell.column.key)\">\n\t<div class=\"q-grid-sort\"\n\t\t  ng-class=\"{'q-grid-active': $view.sort.order($cell.column.key) >= 0}\"\n\t\t  ng-switch=\"$view.sort.direction($cell.column.key)\">\n\t\t<span class=\"q-grid-asc\" ng-switch-when=\"asc\">&#8595;</span>\n\t\t<span class=\"q-grid-desc\" ng-switch-when=\"desc\">&#8593;</span>\n\t\t<span ng-switch-default>&#8595;</span>\n\t</div>\n\t<label ng-click=\"$head.sort.toggle.execute($cell.column.key)\"\n\t\t\t ng-bind=\"$cell.column.title\">\n\t</label>\n</div>"

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = "<div ng-click=\"$view.sort.toggle.execute($cell.column.key)\">\n\t<div class=\"q-grid-sort\"\n\t\t  ng-class=\"{'q-grid-active': $view.sort.order($cell.column.key) >= 0}\"\n\t\t  ng-switch=\"$view.sort.direction($cell.column.key)\">\n\t\t<md-icon class=\"q-grid-asc\" ng-switch-when=\"asc\">arrow_downward</md-icon>\n\t\t<md-icon class=\"q-grid-desc\" ng-switch-when=\"desc\">arrow_upward</md-icon>\n\t\t<md-icon ng-switch-default>arrow_downward</md-icon>\n\t</div>\n\t<label>\n\t\t<md-tooltip md-delay=\"1000\">{{$cell.column.title}}</md-tooltip>\n\t\t{{$cell.column.title}}\n\t</label>\n</div>"

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(13);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(91),
    baseAssignValue = __webpack_require__(61);

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(49),
    isLength = __webpack_require__(68);

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(88),
    baseKeys = __webpack_require__(272),
    isArrayLike = __webpack_require__(29);

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventListener = function () {
	function EventListener(context, element) {
		_classCallCheck(this, EventListener);

		this.element = element;
		this.context = context;
		this.handlers = {};
	}

	_createClass(EventListener, [{
		key: "on",
		value: function on(name, f) {
			var _this = this;

			var context = this.context;
			var handler = f.bind(context);
			var handlerSet = this.handlers[name] || (this.handlers[name] = []);
			handlerSet.push(handler);
			this.element.addEventListener(name, handler, false);
			return function () {
				_this.element.removeEventListener(name, handler);
				var index = handlerSet.indexOf(handler);
				if (index >= 0) {
					handlerSet.splice(index, 1);
				}
			};
		}
	}, {
		key: "off",
		value: function off() {
			var handlers = this.handlers;
			var element = this.element;
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = Object.keys(handlers)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var key = _step.value;
					var _iteratorNormalCompletion2 = true;
					var _didIteratorError2 = false;
					var _iteratorError2 = undefined;

					try {
						for (var _iterator2 = Array.from(handlers[key])[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
							var handler = _step2.value;

							element.removeEventListener(key, handler);
						}
					} catch (err) {
						_didIteratorError2 = true;
						_iteratorError2 = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion2 && _iterator2.return) {
								_iterator2.return();
							}
						} finally {
							if (_didIteratorError2) {
								throw _iteratorError2;
							}
						}
					}
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}
		}
	}]);

	return EventListener;
}();

/* harmony default export */ __webpack_exports__["a"] = EventListener;

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_infrastructure_model_bind__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_services_utility__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_infrastructure_guard__ = __webpack_require__(54);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var ModelComponent = function (_Component) {
	_inherits(ModelComponent, _Component);

	function ModelComponent() {
		for (var _len = arguments.length, names = Array(_len), _key = 0; _key < _len; _key++) {
			names[_key] = arguments[_key];
		}

		_classCallCheck(this, ModelComponent);

		var _this = _possibleConstructorReturn(this, (ModelComponent.__proto__ || Object.getPrototypeOf(ModelComponent)).call(this));

		var self = _this;
		_this.binder = new __WEBPACK_IMPORTED_MODULE_1_core_infrastructure_model_bind__["a" /* default */](self);
		_this.commit = __WEBPACK_IMPORTED_MODULE_2_core_services_utility__["b" /* noop */];

		_this.$onChanges = _this.onChangeCore();

		_this.setup = function () {
			return _this.binder.bind(_this.model, names, false);
		};
		return _this;
	}

	_createClass(ModelComponent, [{
		key: 'onInitCore',
		value: function onInitCore() {
			this.commit = this.setup();
			this.commit();

			_get(ModelComponent.prototype.__proto__ || Object.getPrototypeOf(ModelComponent.prototype), 'onInitCore', this).call(this);
		}
	}, {
		key: 'onChangeCore',
		value: function onChangeCore() {
			this.commit();
			_get(ModelComponent.prototype.__proto__ || Object.getPrototypeOf(ModelComponent.prototype), 'onChangeCore', this).call(this);
		}
	}, {
		key: 'onDestroyCore',
		value: function onDestroyCore() {
			this.binder.bind(null);
			_get(ModelComponent.prototype.__proto__ || Object.getPrototypeOf(ModelComponent.prototype), 'onDestroyCore', this).call(this);
		}
	}, {
		key: 'model',
		get: function get() {
			__WEBPACK_IMPORTED_MODULE_3_core_infrastructure_guard__["b" /* notNull */](this.root, 'root');

			return this.root.model;
		}
	}]);

	return ModelComponent;
}(__WEBPACK_IMPORTED_MODULE_0__component__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = ModelComponent;

/***/ }),
/* 33 */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(22),
    isObjectLike = __webpack_require__(19);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Event = function () {
	function Event() {
		_classCallCheck(this, Event);

		this.handlers = [];
		this.isDirty = false;
		this.e = null;
	}

	_createClass(Event, [{
		key: "on",
		value: function on(f) {
			var handlers = this.handlers;
			handlers.push(f);
			return function () {
				var index = handlers.indexOf(f);
				if (index >= 0) {
					handlers.splice(index, 1);
				}
			};
		}
	}, {
		key: "watch",
		value: function watch(f) {
			if (this.isDirty) {
				f(this.e);
			}

			return this.on(f);
		}
	}, {
		key: "emit",
		value: function emit(e) {
			this.isDirty = true;
			this.e = e;

			var temp = Array.from(this.handlers);
			for (var i = 0, length = temp.length; i < length; i++) {
				temp[i](e);
			}
		}
	}]);

	return Event;
}();

/* harmony default export */ __webpack_exports__["a"] = Event;

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Node = function Node(key) {
	var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'group';

	_classCallCheck(this, Node);

	this.key = key;
	this.level = level;
	this.rows = [];
	this.children = [];
	this.type = type;
	this.state = {
		expand: false
	};
};

/* harmony default export */ __webpack_exports__["a"] = Node;

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Aggregation = function () {
	function Aggregation() {
		_classCallCheck(this, Aggregation);
	}

	_createClass(Aggregation, null, [{
		key: 'first',
		value: function first(rows, getValue) {
			if (!rows.length) {
				return null;
			}

			return getValue(rows[0]);
		}
	}, {
		key: 'last',
		value: function last(rows, getValue) {
			if (!rows.length) {
				return null;
			}

			return getValue(rows[rows.length - 1]);
		}
	}, {
		key: 'max',
		value: function max(rows, getValue) {
			if (!rows.length) {
				return null;
			}

			var length = rows.length,
			    i = 0,
			    max = getValue(rows[i++]);

			while (i < length) {
				if (getValue(rows[i]) > max) {
					max = getValue(rows[i]);
				}
				i++;
			}

			return max;
		}
	}, {
		key: 'min',
		value: function min(rows, getValue) {
			if (!rows.length) {
				return null;
			}

			var length = rows.length,
			    i = 0,
			    min = getValue(rows[i++]);

			while (i < length) {
				if (getValue(rows[i]) < min) {
					min = getValue(rows[i]);
				}
				i++;
			}

			return min;
		}
	}, {
		key: 'minMax',
		value: function minMax(rows, getValue) {
			if (!rows.length) {
				return null;
			}

			var length = rows.length,
			    i = 0,
			    min = getValue(rows[i++]),
			    max = min;

			while (i < length) {
				if (getValue(rows[i]) < min) {
					min = getValue(rows[i]);
				}

				if (getValue(rows[i]) > max) {
					max = getValue(rows[i]);
				}

				i++;
			}

			return [min, max];
		}
	}, {
		key: 'avg',
		value: function avg(rows, getValue) {
			if (!rows.length) {
				return null;
			}

			return Aggregation.sum(rows, getValue) / rows.length;
		}
	}, {
		key: 'sum',
		value: function sum(rows, getValue) {
			if (!rows.length) {
				return null;
			}

			var length = rows.length,
			    i = 0,
			    sum = 0;

			while (i < length) {
				sum += Number(getValue(rows[i]));
				i++;
			}

			return sum;
		}
	}, {
		key: 'join',
		value: function join(rows, getValue) {
			if (!rows.length) {
				return null;
			}

			var length = rows.length,
			    i = 0,
			    join = getValue(rows[i++]);

			while (i < length) {
				join += '' + getValue(rows[i]);
				i++;
			}

			return join;
		}
	}, {
		key: 'count',
		value: function count(rows) {
			if (!rows.length) {
				return null;
			}

			return rows.length;
		}
	}]);

	return Aggregation;
}();

/* harmony default export */ __webpack_exports__["a"] = Aggregation;

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = compile;
function compile(path) {
	var parts = path.split('.');
	var last = parts.length - 1;
	var accessor = parts.filter(function (part, index) {
		return index !== last;
	}).reduce(function (accessor, part) {
		return accessor ? function (entry) {
			return accessor(entry)[part];
		} : function (entry) {
			return entry[part];
		};
	}, null);

	var key = parts[last];
	if (accessor) {
		return function (entry, value) {
			if (arguments.length === 2) {
				accessor(entry)[key] = value;
			}

			return accessor(entry)[key];
		};
	}

	return function (entry, value) {
		if (arguments.length === 2) {
			entry[key] = value;
		}

		return entry[key];
	};
}

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_services_pair__ = __webpack_require__(190);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return key; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return index; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return direction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return map; });


var key = __WEBPACK_IMPORTED_MODULE_0_core_services_pair__["a" /* key */];
var index = __WEBPACK_IMPORTED_MODULE_0_core_services_pair__["b" /* index */];
var direction = __WEBPACK_IMPORTED_MODULE_0_core_services_pair__["c" /* value */];
var map = __WEBPACK_IMPORTED_MODULE_0_core_services_pair__["d" /* map */];

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(325),
    listCacheDelete = __webpack_require__(326),
    listCacheGet = __webpack_require__(327),
    listCacheHas = __webpack_require__(328),
    listCacheSet = __webpack_require__(329);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(40),
    stackClear = __webpack_require__(345),
    stackDelete = __webpack_require__(346),
    stackGet = __webpack_require__(347),
    stackHas = __webpack_require__(348),
    stackSet = __webpack_require__(349);

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(33);

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(323);

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(23);

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(34);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),
/* 46 */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(266),
    isObjectLike = __webpack_require__(19);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(13),
    stubFalse = __webpack_require__(373);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(71)(module)))

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(22),
    isObject = __webpack_require__(12);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(88),
    baseKeysIn = __webpack_require__(273),
    isArrayLike = __webpack_require__(29);

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(288);

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_infrastructure_error__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_column_type_text_column__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_column_type_number_column__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_column_type_bool_column__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_column_type_date_column__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_column_type_password_column__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_column_type_array_column__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_column_type_email_column__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_column_type_select_column__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_column_type_group_column__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_column_type_pivot_column__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_column_type_row_number_column__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_column_type_row_indicator_column__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_column_type_pad_column__ = __webpack_require__(132);















/* harmony default export */ __webpack_exports__["a"] = function (type) {
	var model = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

	switch (type) {
		case 'text':
			return new __WEBPACK_IMPORTED_MODULE_1_core_column_type_text_column__["a" /* default */](model || __WEBPACK_IMPORTED_MODULE_1_core_column_type_text_column__["a" /* default */].model());
		case 'number':
			return new __WEBPACK_IMPORTED_MODULE_2_core_column_type_number_column__["a" /* default */](model || __WEBPACK_IMPORTED_MODULE_2_core_column_type_number_column__["a" /* default */].model());
		case 'bool':
			return new __WEBPACK_IMPORTED_MODULE_3_core_column_type_bool_column__["a" /* default */](model || __WEBPACK_IMPORTED_MODULE_3_core_column_type_bool_column__["a" /* default */].model());
		case 'date':
			return new __WEBPACK_IMPORTED_MODULE_4_core_column_type_date_column__["a" /* default */](model || __WEBPACK_IMPORTED_MODULE_4_core_column_type_date_column__["a" /* default */].model());
		case 'array':
			return new __WEBPACK_IMPORTED_MODULE_6_core_column_type_array_column__["a" /* default */](model || __WEBPACK_IMPORTED_MODULE_6_core_column_type_array_column__["a" /* default */].model());
		case 'email':
			return new __WEBPACK_IMPORTED_MODULE_7_core_column_type_email_column__["a" /* default */](model || __WEBPACK_IMPORTED_MODULE_7_core_column_type_email_column__["a" /* default */].model());
		case 'password':
			return new __WEBPACK_IMPORTED_MODULE_5_core_column_type_password_column__["a" /* default */](model || __WEBPACK_IMPORTED_MODULE_5_core_column_type_password_column__["a" /* default */].model());
		case 'select':
			return new __WEBPACK_IMPORTED_MODULE_8_core_column_type_select_column__["a" /* default */](model || __WEBPACK_IMPORTED_MODULE_8_core_column_type_select_column__["a" /* default */].model());
		case 'group':
			return new __WEBPACK_IMPORTED_MODULE_9_core_column_type_group_column__["a" /* default */](model || __WEBPACK_IMPORTED_MODULE_9_core_column_type_group_column__["a" /* default */].model());
		case 'pivot':
			return new __WEBPACK_IMPORTED_MODULE_10_core_column_type_pivot_column__["a" /* default */](model || __WEBPACK_IMPORTED_MODULE_10_core_column_type_pivot_column__["a" /* default */].model());
		case 'row-number':
			return new __WEBPACK_IMPORTED_MODULE_11_core_column_type_row_number_column__["a" /* default */](model || __WEBPACK_IMPORTED_MODULE_11_core_column_type_row_number_column__["a" /* default */].model());
		case 'row-indicator':
			return new __WEBPACK_IMPORTED_MODULE_12_core_column_type_row_indicator_column__["a" /* default */](model || __WEBPACK_IMPORTED_MODULE_12_core_column_type_row_indicator_column__["a" /* default */].model());
		case 'pad':
			return new __WEBPACK_IMPORTED_MODULE_13_core_column_type_pad_column__["a" /* default */](model || __WEBPACK_IMPORTED_MODULE_13_core_column_type_pad_column__["a" /* default */].model());
		default:
			throw new __WEBPACK_IMPORTED_MODULE_0_core_infrastructure_error__["a" /* default */]('column.factory', 'Invalid type "' + type + '"');
	}
};

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__error__ = __webpack_require__(3);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Cache = function () {
	function Cache() {
		_classCallCheck(this, Cache);

		this.items = {};
	}

	_createClass(Cache, [{
		key: 'set',
		value: function set(key, value) {
			this.items[key] = value;
		}
	}, {
		key: 'get',
		value: function get(key) {
			var entry = this.find(key);
			if (!entry) {
				throw new __WEBPACK_IMPORTED_MODULE_0__error__["a" /* default */]('cache.get', 'Entry with key was not found "' + key + '"');
			}

			return entry;
		}
	}, {
		key: 'has',
		value: function has(key) {
			var items = this.items;
			return items.hasOwnProperty(key);
		}
	}, {
		key: 'find',
		value: function find(key) {
			var items = this.items;
			if (items.hasOwnProperty(key)) {
				return items[key];
			}

			return null;
		}
	}, {
		key: 'remove',
		value: function remove(key) {
			if (!this.items.hasOwnProperty(key)) {
				throw new __WEBPACK_IMPORTED_MODULE_0__error__["a" /* default */]('cache.remove', 'Entry with key was not found "' + key + '"');
			}

			delete this.items[key];
		}
	}, {
		key: 'clear',
		value: function clear() {
			this.items = {};
		}
	}]);

	return Cache;
}();

/* harmony default export */ __webpack_exports__["a"] = Cache;

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__error__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_utility__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["c"] = notUndefined;
/* harmony export (immutable) */ __webpack_exports__["b"] = notNull;
/* harmony export (immutable) */ __webpack_exports__["a"] = notNullOrEmpty;
/* unused harmony export invokable */



/**
 * If value is undefined exception will be thrown
 * @param {any} value - Value to check
 * @param {string} name - Argument name
 */
function notUndefined(value, name) {
  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__services_utility__["e" /* isUndefined */])(value)) {
    throw new __WEBPACK_IMPORTED_MODULE_0__error__["a" /* default */]('guard.notUndefined', name);
  }
}

/**
 * If value is null or undefined exception will be thrown
 * @param {any} value - Value to check
 * @param {string} name - Argument name
 */
function notNull(value, name) {
  if (value === null || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__services_utility__["e" /* isUndefined */])(value)) {
    throw new __WEBPACK_IMPORTED_MODULE_0__error__["a" /* default */]('guard.notNull', name);
  }
}

/**
 * If value is null or undefined or empty exception will be thrown
 * @param {any} value - Value to check
 * @param {string} name - Argument name
 */
function notNullOrEmpty(value, name) {
  if (value === null || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__services_utility__["e" /* isUndefined */])(value) || value === '') {
    throw new __WEBPACK_IMPORTED_MODULE_0__error__["a" /* default */]('guard.notNullOrEmpty', name);
  }
}

/**
 * If value is not a function exception will be thrown
 * @param {any} value - Value to check
 * @param {string} name - Argument name
 */
function invokable(value, name) {
  if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__services_utility__["a" /* isFunction */])(value)) {
    throw new __WEBPACK_IMPORTED_MODULE_0__error__["a" /* default */]('guard.invokable', name);
  }
}

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__event__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_utility__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__error__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__guard__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_infrastructure_log__ = __webpack_require__(14);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }







var models = {};
var close = false;

var Model = function () {
	function Model() {
		var _this = this;

		_classCallCheck(this, Model);

		close = true;
		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			var _loop = function _loop() {
				var name = _step.value;

				var model = new models[name]();
				var event = new __WEBPACK_IMPORTED_MODULE_0__event__["a" /* default */]();
				_this[name + 'Changed'] = event;
				_this[name] = function (state, tag) {
					var length = arguments.length;
					if (length) {
						if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__services_utility__["i" /* isObject */])(state)) {
							throw new __WEBPACK_IMPORTED_MODULE_2__error__["a" /* default */]('model.' + name, '"' + state + '" is not a valid type, should be an object');
						}

						var hasChanges = false;
						var changes = {};
						var keys = Object.keys(state);
						for (var i = 0, keyLength = keys.length; i < keyLength; i++) {
							var key = keys[i];
							if (!model.hasOwnProperty(key)) {
								throw new __WEBPACK_IMPORTED_MODULE_2__error__["a" /* default */]('model.' + name, '"' + key + '" is not a valid key, only [' + Object.keys(model).join(', ') + '] keys are supported');
							}

							var newValue = state[key];
							var oldValue = model[key];
							if (newValue !== oldValue) {
								__WEBPACK_IMPORTED_MODULE_4_core_infrastructure_log__["a" /* default */].info('model', 'value changed - "' + name + '.' + key + '"');
								__WEBPACK_IMPORTED_MODULE_3__guard__["c" /* notUndefined */](newValue, 'model.' + name + '.' + key);

								model[key] = newValue;
								hasChanges = true;
								changes[key] = {
									newValue: newValue,
									oldValue: oldValue
								};
							}
						}

						if (hasChanges) {
							event.emit({
								state: model,
								changes: changes,
								tag: length > 1 ? tag : {}
							});
						}
					}

					return model;
				};
			};

			for (var _iterator = Object.keys(models)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				_loop();
			}
		} catch (err) {
			_didIteratorError = true;
			_iteratorError = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion && _iterator.return) {
					_iterator.return();
				}
			} finally {
				if (_didIteratorError) {
					throw _iteratorError;
				}
			}
		}
	}

	_createClass(Model, null, [{
		key: 'register',
		value: function register(name, model) {
			if (models.hasOwnProperty(name)) {
				throw new __WEBPACK_IMPORTED_MODULE_2__error__["a" /* default */]('model', '"' + name + '" is already registered');
			}

			if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__services_utility__["a" /* isFunction */])(model)) {
				throw new __WEBPACK_IMPORTED_MODULE_2__error__["a" /* default */]('model.' + name, '"' + model + '" is not a valid type, should be an constructor function');
			}

			if (close) {
				throw new __WEBPACK_IMPORTED_MODULE_2__error__["a" /* default */]('model.' + name, 'can\'t register, registration was closed');
			}

			models[name] = model;
			return Model;
		}
	}]);

	return Model;
}();

/* harmony default export */ __webpack_exports__["a"] = Model;

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_template_template_path__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_infrastructure_error__ = __webpack_require__(3);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function buildView(source, mode, column) {
	switch (mode) {
		case 'view':
			{
				var type = column.type || 'text';
				return {
					key: type + '-cell',
					url: 'qgrid.' + source + '.cell.' + type + '.tpl.html',
					defaults: ['$default.' + type, '$default']
				};
			}
		case 'edit':
			{
				var _type = column.editor || column.type || 'text';

				return {
					key: _type + '-cell-' + mode,
					url: 'qgrid.' + source + '.cell.' + _type + '.' + mode + '.tpl.html',
					defaults: column.editor ? ['$default.' + column.editor, '$default.' + column.type, '$default'] : ['$default.' + _type, '$default']
				};
			}
		default:
			throw new __WEBPACK_IMPORTED_MODULE_1_core_infrastructure_error__["a" /* default */]('cell.build', 'Invalid key "' + mode + '"');
	}
}

/* harmony default export */ __webpack_exports__["a"] = function (template) {
	var mode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'view';

	return function (source, model, column) {
		var _pathSource;

		var view = buildView(source, mode, column);
		var pathSource = (_pathSource = {}, _defineProperty(_pathSource, __WEBPACK_IMPORTED_MODULE_0_core_template_template_path__["a" /* default */].name(view.key), column), _defineProperty(_pathSource, 'for', source), _pathSource);
		var path = __WEBPACK_IMPORTED_MODULE_0_core_template_template_path__["a" /* default */].get(pathSource);
		var state = model[path.model]();

		var link = template.link(view.url, state.resource, [path.resource].concat(view.defaults));

		return function (element, scope) {
			return link(element, scope);
		};
	};
};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(23),
    root = __webpack_require__(13);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(330),
    mapCacheDelete = __webpack_require__(331),
    mapCacheGet = __webpack_require__(332),
    mapCacheHas = __webpack_require__(333),
    mapCacheSet = __webpack_require__(334);

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),
/* 59 */
/***/ (function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),
/* 60 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array == null ? 0 : array.length;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

module.exports = arrayReduce;


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(103);

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var Uint8Array = __webpack_require__(87);

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

module.exports = cloneArrayBuffer;


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(114);

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(255),
    stubArray = __webpack_require__(117);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),
/* 65 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(10),
    isSymbol = __webpack_require__(34);

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),
/* 67 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),
/* 68 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(270),
    baseUnary = __webpack_require__(97),
    nodeUtil = __webpack_require__(338);

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = "<input type=\"text\"\n\t\t q-grid:focus\n\t\t ng-blur=\"$view.edit.cell.commit.execute($cell)\"\n\t\t ng-model=\"$view.edit.cell.value\"\t/>"

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_utility__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_infrastructure_log__ = __webpack_require__(14);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var ModelBinder = function () {
	function ModelBinder(source) {
		_classCallCheck(this, ModelBinder);

		this.source = source;
		this.off = __WEBPACK_IMPORTED_MODULE_0__services_utility__["b" /* noop */];
	}

	_createClass(ModelBinder, [{
		key: 'bind',
		value: function bind(model, names) {
			var _this = this;

			var run = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

			this.off();
			var source = this.source;

			if (model) {
				var _ret = function () {
					var commits = [];
					var _iteratorNormalCompletion = true;
					var _didIteratorError = false;
					var _iteratorError = undefined;

					try {
						var _loop = function _loop() {
							var name = _step.value;

							var doBind = function doBind(e) {
								__WEBPACK_IMPORTED_MODULE_1_core_infrastructure_log__["a" /* default */].info('model.bind', 'to ctrl "' + name + '[' + Object.keys(e.changes).join(', ') + ']"');

								var _iteratorNormalCompletion2 = true;
								var _didIteratorError2 = false;
								var _iteratorError2 = undefined;

								try {
									for (var _iterator2 = Object.keys(e.changes)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
										var key = _step2.value;

										var sourceKey = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__services_utility__["f" /* toCamelCase */])(name, key);
										if (source.hasOwnProperty(sourceKey)) {
											source[sourceKey] = e.changes[key].newValue;
										}
									}
								} catch (err) {
									_didIteratorError2 = true;
									_iteratorError2 = err;
								} finally {
									try {
										if (!_iteratorNormalCompletion2 && _iterator2.return) {
											_iterator2.return();
										}
									} finally {
										if (_didIteratorError2) {
											throw _iteratorError2;
										}
									}
								}
							};

							var state = model[name];
							if (run) {
								var value = state();
								doBind({
									changes: {
										newValue: value,
										oldValue: value
									}
								});
							}

							_this.off = model[name + 'Changed'].on(doBind);

							commits.push(function () {
								__WEBPACK_IMPORTED_MODULE_1_core_infrastructure_log__["a" /* default */].info('model.bind', 'to model "' + name + '"');

								var oldState = state();
								var newState = {};
								var _iteratorNormalCompletion3 = true;
								var _didIteratorError3 = false;
								var _iteratorError3 = undefined;

								try {
									for (var _iterator3 = Object.keys(oldState)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
										var key = _step3.value;

										var sourceKey = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__services_utility__["f" /* toCamelCase */])(name, key);
										if (source.hasOwnProperty(sourceKey)) {
											var _value = source[sourceKey];
											if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__services_utility__["e" /* isUndefined */])(_value)) {
												newState[key] = _value;
											}
										}
									}
								} catch (err) {
									_didIteratorError3 = true;
									_iteratorError3 = err;
								} finally {
									try {
										if (!_iteratorNormalCompletion3 && _iterator3.return) {
											_iterator3.return();
										}
									} finally {
										if (_didIteratorError3) {
											throw _iteratorError3;
										}
									}
								}

								state(newState);
							});
						};

						for (var _iterator = names[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
							_loop();
						}
					} catch (err) {
						_didIteratorError = true;
						_iteratorError = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion && _iterator.return) {
								_iterator.return();
							}
						} finally {
							if (_didIteratorError) {
								throw _iteratorError;
							}
						}
					}

					return {
						v: function v() {
							return commits.forEach(function (commit) {
								return commit();
							});
						}
					};
				}();

				if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
			}

			this.off = __WEBPACK_IMPORTED_MODULE_0__services_utility__["b" /* noop */];
			return __WEBPACK_IMPORTED_MODULE_0__services_utility__["b" /* noop */];
		}
	}]);

	return ModelBinder;
}();

/* harmony default export */ __webpack_exports__["a"] = ModelBinder;

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__event_listener__ = __webpack_require__(31);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Shortcut = function () {
	function Shortcut(document, apply) {
		_classCallCheck(this, Shortcut);

		this.apply = apply;
		this.shortcuts = new Map();
		this.codeMap = new Map().set(9, 'tab').set(13, 'enter').set(37, 'left').set(38, 'up').set(39, 'right').set(40, 'down').set(113, 'f2').set(27, 'escape');

		this.listener = new __WEBPACK_IMPORTED_MODULE_0__event_listener__["a" /* default */](this, document).on('keydown', this.onKeyDown);
	}

	_createClass(Shortcut, [{
		key: 'onKeyDown',
		value: function onKeyDown(e) {
			var _this = this;

			var code = this.translate(e);
			if (this.shortcuts.has(code)) {
				var cmds = this.shortcuts.get(code);
				cmds.forEach(function (cmd) {
					if (cmd.canExecute()) {
						e.preventDefault();
						_this.apply(function () {
							return cmd.execute();
						});
					}
				});
			}
		}
	}, {
		key: 'translate',
		value: function translate(e) {
			var codes = [];
			if (e.ctrlKey) {
				codes.push('ctrl');
			}

			if (e.shiftKey) {
				codes.push('shift');
			}

			var char = (this.codeMap.get(e.keyCode) || String.fromCharCode(e.keyCode)).toLowerCase();
			codes.push(char);
			return codes.join('+');
		}
	}, {
		key: 'register',
		value: function register(id, commands) {
			var _this2 = this;

			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				var _loop = function _loop() {
					var value = _step.value;

					if (value.shortcut) {
						value.shortcut.toLowerCase().split('|').forEach(function (shortcut) {
							var temp = [];
							if (_this2.shortcuts.has(shortcut)) {
								temp = _this2.shortcuts.get(shortcut);
							}
							temp.push(value);
							_this2.shortcuts.set(shortcut, temp);
						});
					}
				};

				for (var _iterator = commands.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					_loop();
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}

			return function () {
				_this2.listener.off();
				_this2.shortcuts.delete(id);
			};
		}
	}]);

	return Shortcut;
}();

/* harmony default export */ __webpack_exports__["a"] = Shortcut;

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node__ = __webpack_require__(36);
/* harmony export (immutable) */ __webpack_exports__["a"] = flatView;


function flatView(nodes) {
	var result = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

	for (var i = 0, nodesLength = nodes.length; i < nodesLength; i++) {
		var node = nodes[i];
		result.push(node);

		if (node.state.expand) {
			var children = node.children;
			if (children.length) {
				flatView(children, result);
			} else {
				var rows = node.rows;
				for (var j = 0, rowsLength = rows.length; j < rowsLength; j++) {
					var row = rows[j];
					var rowNode = new __WEBPACK_IMPORTED_MODULE_0__node__["a" /* default */](node.key, node.level + 1, 'row');
					rowNode.rows = [row];
					children.push(rowNode);
					result.push(rowNode);
				}
			}
		}
	}

	return result;
}

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_column_column_factory__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_column_column_service__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_services_merge__ = __webpack_require__(82);
/* harmony export (immutable) */ __webpack_exports__["a"] = pipeColumn;
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }





var doMerge = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_core_services_merge__["a" /* default */])({
	equals: function equals(l, r) {
		return l.model.key === r.model.key;
	},
	update: function update(l, r, left, i) {
		return left[i] = r;
	}
});

function addSelectColumn(columns, context) {
	var selectColumn = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_core_column_column_factory__["a" /* default */])('select');
	selectColumn.model.source = 'generation';
	selectColumn.rowspan = context.rowspan;

	selectColumn.key = selectColumn.model.key = selectColumn.model.key + ('[' + context.row + '][' + columns.length + ']');

	columns.push(selectColumn);
	return selectColumn;
}

function addGroupColumn(columns, context) {
	var groupColumn = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_core_column_column_factory__["a" /* default */])('group');
	groupColumn.model.source = 'generation';
	groupColumn.rowspan = context.rowspan;

	groupColumn.key = groupColumn.model.key = groupColumn.model.key + ('[' + context.row + '][' + columns.length + ']');

	columns.push(groupColumn);
	return groupColumn;
}

function addDataColumns(columns, model, context) {
	var dataColumns = model.data().columns;
	columns.push.apply(columns, _toConsumableArray(__WEBPACK_IMPORTED_MODULE_1_core_column_column_service__["c" /* dataView */](dataColumns.map(function (c, i) {
		var dataColumn = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_core_column_column_factory__["a" /* default */])(c.type || 'text', c);
		dataColumn.rowspan = context.rowspan;
		dataColumn.key = c.key + ('[' + context.row + '][' + (columns.length + i) + ']');
		return dataColumn;
	}), model)));
	return dataColumns;
}

function addPadColumn(columns, context) {
	var padColumn = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_core_column_column_factory__["a" /* default */])('pad');
	padColumn.key = padColumn.key + ('[' + context.row + '][' + columns.length + ']');
	padColumn.rowspan = context.rowspan;

	columns.push(padColumn);
	return padColumn;
}

function addPivotColumns(columns, heads) {
	var rows = [columns];

	/*
  * Data columns + first row pivot columns
  *
  */
	var head = heads[0];
	var headLength = head.length;
	var row = new Array(headLength);
	var startIndex = columns.length;
	for (var j = 0; j < headLength; j++) {
		var headColumn = head[j];
		var pivotColumn = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_core_column_column_factory__["a" /* default */])('pivot');
		pivotColumn.colspan = headColumn.value;
		var pivotColumnModel = pivotColumn.model;
		pivotColumnModel.title = headColumn.key;
		pivotColumnModel.key = pivotColumnModel.key + ('[0][' + j + ']');

		pivotColumnModel.rowIndex = 0;
		pivotColumnModel.columnIndex = startIndex + j;

		pivotColumn.key = pivotColumnModel.key + ' of ' + heads.length;
		row[j] = pivotColumn;
	}

	var firstRow = rows[0];
	firstRow.push.apply(firstRow, row);

	/*
  * Add special column type
  * that fills remaining place (width = 100%)
  *
  */
	addPadColumn(firstRow, { rowspan: 1, row: 0 });

	/*
  * Next rows pivot columns
  *
  */
	for (var i = 1, length = heads.length; i < length; i++) {
		var _head = heads[i];
		var _headLength = _head.length;
		var _row = new Array(_headLength);
		for (var _j = 0; _j < _headLength; _j++) {
			var _headColumn = _head[_j];
			var _pivotColumn = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_core_column_column_factory__["a" /* default */])('pivot');
			_pivotColumn.colspan = _headColumn.value;
			var _pivotColumnModel = _pivotColumn.model;
			_pivotColumnModel.title = _headColumn.key;
			_pivotColumnModel.key = _pivotColumnModel.key + ('[' + i + '][' + _j + ']');

			_pivotColumnModel.rowIndex = i;
			_pivotColumnModel.columnIndex = _j;

			_pivotColumn.key = _pivotColumnModel.key + ' of ' + heads.length;
			_row[_j] = _pivotColumn;
		}

		/*
   * Add special column type
   * that fills remaining place (width = 100%)
   *
   */
		addPadColumn(_row, { rowspan: 1, row: i });

		rows.push(_row);
	}

	return rows;
}

function pipeColumn(memo, context, next) {
	var model = context.model;
	var pivot = memo.pivot;
	var nodes = memo.nodes;
	var heads = pivot.heads;
	var columns = [];

	/*
  * Add column with select boxes
  * if selection unit is row
  *
  */
	if (model.selection().unit === 'row') {
		addSelectColumn(columns, { rowspan: heads.length, row: 0 });
	}

	/*
  * Add group column with nodes
  *
  */
	if (nodes.length) {
		addGroupColumn(columns, { rowspan: heads.length, row: 0 });
	}

	/*
  * Add columns defined by user
  * that are visible
  *
  */
	addDataColumns(columns, model, { rowspan: heads.length, row: 0 });

	/*
  * Persist order of draggable columns
  *
  */
	//const orderedColumns = columns;
	var orderedColumns = Array.from(model.view().columns)[0] || [];
	doMerge(orderedColumns, columns);

	if (heads.length) {
		/*
   * Add column rows for pivoted data
   * if pivot is turned on
   *
   */

		memo.columns = addPivotColumns(orderedColumns, heads);
	} else {
		/*
   * Add special column type
   * that fills remaining place (width = 100%)
   *
   */
		addPadColumn(orderedColumns, { rowspan: heads.length, row: 0 });
		memo.columns = [orderedColumns];
	}

	next(memo);
}

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pipe_filter__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pipe_pagination__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pipe_sort__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipe_data__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipe_memo__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pipe_group__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pipe_pivot__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pipe_column__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pipe_view__ = __webpack_require__(170);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }











var Pipe = function () {
	function Pipe() {
		_classCallCheck(this, Pipe);
	}

	_createClass(Pipe, null, [{
		key: 'data',
		get: function get() {
			return __WEBPACK_IMPORTED_MODULE_3__pipe_data__["a" /* default */];
		}
	}, {
		key: 'filter',
		get: function get() {
			return __WEBPACK_IMPORTED_MODULE_0__pipe_filter__["a" /* default */];
		}
	}, {
		key: 'pagination',
		get: function get() {
			return __WEBPACK_IMPORTED_MODULE_1__pipe_pagination__["a" /* default */];
		}
	}, {
		key: 'sort',
		get: function get() {
			return __WEBPACK_IMPORTED_MODULE_2__pipe_sort__["a" /* default */];
		}
	}, {
		key: 'memo',
		get: function get() {
			return __WEBPACK_IMPORTED_MODULE_4__pipe_memo__["a" /* default */];
		}
	}, {
		key: 'group',
		get: function get() {
			return __WEBPACK_IMPORTED_MODULE_5__pipe_group__["a" /* default */];
		}
	}, {
		key: 'pivot',
		get: function get() {
			return __WEBPACK_IMPORTED_MODULE_6__pipe_pivot__["a" /* default */];
		}
	}, {
		key: 'column',
		get: function get() {
			return __WEBPACK_IMPORTED_MODULE_7__pipe_column__["a" /* default */];
		}
	}, {
		key: 'view',
		get: function get() {
			return __WEBPACK_IMPORTED_MODULE_8__pipe_view__["a" /* default */];
		}
	}]);

	return Pipe;
}();

/* harmony default export */ __webpack_exports__["a"] = Pipe;

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pipe_column__ = __webpack_require__(75);


/* harmony default export */ __webpack_exports__["a"] = [function (memo, context, next) {
	next(context.model.view());
}, __WEBPACK_IMPORTED_MODULE_0__pipe_column__["a" /* default */], function (memo, context, next) {
	context.model.view({
		columns: memo.columns
	});

	next(memo);
}];

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resource__ = __webpack_require__(4);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var EnumerableResource = function (_Resource) {
	_inherits(EnumerableResource, _Resource);

	function EnumerableResource() {
		var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
		var scope = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
		var count = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

		_classCallCheck(this, EnumerableResource);

		var _this = _possibleConstructorReturn(this, (EnumerableResource.__proto__ || Object.getPrototypeOf(EnumerableResource)).call(this, data, scope));

		_this.count = count;
		return _this;
	}

	return EnumerableResource;
}(__WEBPACK_IMPORTED_MODULE_0__resource__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = EnumerableResource;

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Selection = function () {
	function Selection(model) {
		_classCallCheck(this, Selection);

		this.model = model;
	}

	_createClass(Selection, [{
		key: "select",
		value: function select(item) {
			var _this = this;

			var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

			if (Array.isArray(item)) {
				item.forEach(function (item) {
					return _this.select(item, state);
				});
				return;
			}

			if (item instanceof Node) {
				var _ret = function () {
					var rows = _this.model.data().rows;
					item.rows.forEach(function (index) {
						return _this.select(rows[index], state);
					});
					return {
						v: void 0
					};
				}();

				if ((typeof _ret === "undefined" ? "undefined" : _typeof(_ret)) === "object") return _ret.v;
			}

			this.selectCore(item, state);
		}
	}, {
		key: "state",
		value: function state(item) {
			var _this2 = this;

			if (Array.isArray(item)) {
				var all = item.every(function (item) {
					return _this2.state(item);
				});
				return all ? true : item.some(function (item) {
					return _this2.state(item);
				}) ? null : false;
			}

			if (item instanceof Node) {
				var _ret2 = function () {
					var rows = _this2.model.data().rows;
					var all = item.rows.every(function (index) {
						return _this2.state(rows[index]);
					});
					return {
						v: all ? true : item.rows.some(function (index) {
							return _this2.state(rows[index]);
						}) ? null : false
					};
				}();

				if ((typeof _ret2 === "undefined" ? "undefined" : _typeof(_ret2)) === "object") return _ret2.v;
			}

			return this.stateCore(item);
		}
	}, {
		key: "selectCore",
		value: function selectCore() {}
	}, {
		key: "stateCore",
		value: function stateCore() {
			return false;
		}
	}, {
		key: "view",
		get: function get() {
			return [];
		}
	}]);

	return Selection;
}();

/* harmony default export */ __webpack_exports__["a"] = Selection;

/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utility__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["b"] = parseFactory;
/* harmony export (immutable) */ __webpack_exports__["a"] = getType;
/* unused harmony export isPrimitive */


function parseFactory(type) {
	switch (type) {
		case 'text':
		case 'currency':
			return parseText;
		case 'number':
			return parseNumber;
		case 'date':
			return parseDate;
		default:
			return __WEBPACK_IMPORTED_MODULE_0__utility__["k" /* identity */];
	}
}

function getType(value) {
	if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utility__["o" /* isArray */])(value)) {
		if (value.length) {
			var itemType = getType(value[0]);
			if (!isPrimitive(itemType)) {
				return 'collection';
			}
		}

		return 'array';
	}

	if (parseNumber(value) !== null && !isNaN(value)) {
		return 'number';
	}

	if (parseDate(value) !== null) {
		return 'date';
	}

	if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utility__["p" /* isBoolean */])(value)) {
		return 'bool';
	}

	if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utility__["i" /* isObject */])(value)) {
		return 'object';
	}

	if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utility__["q" /* isEmail */])(value)) {
		return 'email';
	}

	return 'text';
}

function isPrimitive(type) {
	switch (type) {
		case 'date':
		case 'bool':
		case 'text':
		case 'number':
		case 'email':
			return true;
		default:
			return false;
	}
}

function parseText(value) {
	return '' + value;
}

function parseDate(value) {
	var date = new Date(value);
	if (date !== 'Invalid Date' && !isNaN(date)) {
		return date;
	}

	return null;
}

function parseNumber(value) {
	var number = parseFloat(value);
	if (!isNaN(number) && isFinite(number)) {
		return number;
	}

	return null;
}

// function parseInteger(value) {
// 	const number = parseInt(value);
// 	if (!isNaN(number) && isFinite(number)) {
// 		return number;
// 	}
//
// 	return null;
// }

/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__markup__ = __webpack_require__(188);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return escape; });
/* harmony export (immutable) */ __webpack_exports__["c"] = addStyle;
/* harmony export (immutable) */ __webpack_exports__["a"] = removeStyle;


var escape = CSS.escape;

function addStyle(id, css) {
	var style = document.createElement('style');
	style.innerHTML = __WEBPACK_IMPORTED_MODULE_0__markup__["a" /* build */](css);
	style.type = 'text/css';
	style.id = id;
	document.getElementsByTagName('head')[0].appendChild(style);
}

function removeStyle(id) {
	var sheet = document.getElementById(id);
	if (sheet) {
		sheet.parentNode.removeChild(sheet);
	}
}

/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utility__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = function (settings) {
	var context = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utility__["j" /* assignWith */])({
		equals: function equals(l, r) {
			return l === r;
		},
		update: function update(l, r /*left, i*/) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utility__["j" /* assignWith */])(l, r);
			return l;
		},
		remove: function remove(l, left, i) {
			left.splice(i, 1);
			return l;
		},
		insert: function insert(r, left) {
			left.push(r);
			return r;
		}
	}, settings);

	return function (left, right, result) {
		var ls = left.slice();
		var rs = right.slice();
		var updated = 0;
		var removed = 0;

		result = result || left;
		for (var i = 0, lsLength = ls.length; i < lsLength; i++) {
			var l = ls[i];
			var matched = false;
			for (var j = 0, rsLength = rs.length; j < rsLength; j++) {
				var r = rs[j];
				if (context.equals(l, r, i, j)) {
					context.update(l, r, result, result.indexOf(l));
					updated++;
					matched = true;
					rs.splice(j, 1);
					break;
				}
			}

			if (!matched) {
				context.remove(l, result, result.indexOf(l));
				removed++;
			}
		}

		var inserted = rs.length;
		for (var _i = 0; _i < inserted; _i++) {
			context.insert(rs[_i], result);
		}

		return {
			updated: updated,
			removed: removed,
			inserted: inserted
		};
	};
};

/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ng_definition__ = __webpack_require__(1);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var transfer = null;

var DragService = function () {
	function DragService() {
		_classCallCheck(this, DragService);
	}

	_createClass(DragService, null, [{
		key: 'decode',
		value: function decode(source) {
			return JSON.parse(source); // eslint-disable-line angular/json-functions
		}
	}, {
		key: 'encode',
		value: function encode(source) {
			return JSON.stringify(source); // eslint-disable-line angular/json-functions
		}
	}, {
		key: 'mimeType',
		get: function get() {
			return 'application/x-' + __WEBPACK_IMPORTED_MODULE_0_ng_definition__["k" /* GRID_NAME */] + '+json';
		}
	}, {
		key: 'transfer',
		get: function get() {
			return transfer;
		},
		set: function set(value) {
			transfer = value;
		}
	}]);

	return DragService;
}();

/* harmony default export */ __webpack_exports__["a"] = DragService;

/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__root_component__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_pipe_units_pipe_column_unit__ = __webpack_require__(77);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Grid; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Grid = function (_RootComponent) {
	_inherits(Grid, _RootComponent);

	function Grid($element, $transclude, $document, serviceFactory) {
		_classCallCheck(this, Grid);

		var _this = _possibleConstructorReturn(this, (Grid.__proto__ || Object.getPrototypeOf(Grid)).call(this, 'data', 'selection', 'sort', 'group', 'pivot', 'edit'));

		_this.$element = $element;
		_this.$transclude = $transclude;
		_this.serviceFactory = function (model) {
			return serviceFactory.service(model);
		};
		_this.markup = {
			document: $document[0]
		};
		return _this;
	}

	_createClass(Grid, [{
		key: 'onInit',
		value: function onInit() {
			var _this2 = this;

			this.compile();

			var model = this.model;
			var service = this.serviceFactory(model);

			model.selectionChanged.watch(function (e) {
				if (e.changes.hasOwnProperty('items')) {
					_this2.onSelectionChanged({
						$event: {
							state: model.selection(),
							changes: e.changes
						}
					});
				}

				if (e.changes.hasOwnProperty('unit')) {
					service.invalidate('selection', e.changes, __WEBPACK_IMPORTED_MODULE_1_core_pipe_units_pipe_column_unit__["a" /* default */].column);
				}
			});

			model.navigationChanged.watch(function (e) {
				if (e.changes.hasOwnProperty('row') || e.changes.hasOwnProperty('column')) {
					var nav = e.state;
					var cell = null;
					if (nav.column >= 0 && nav.row >= 0) {
						var element = _this2.markup.body.rows[nav.row].cells[nav.column];
						var scope = angular.element(element).scope();
						cell = scope.$cell;
					}

					model.navigation({
						active: {
							cell: cell
						}
					});
				}
			});

			model.data().triggers.forEach(function (name) {
				return model[name + 'Changed'].watch(function (e) {
					return service.invalidate(name, e.changes);
				});
			});
		}
	}, {
		key: 'compile',
		value: function compile() {
			var _this3 = this;

			var template = null;
			var templateScope = null;

			this.$transclude(function (clone, scope) {
				template = clone;
				templateScope = scope;

				_this3.$element.append(clone);
			});

			template.remove();
			templateScope.$destroy();
		}
	}, {
		key: 'visibility',
		get: function get() {
			// TODO: get rid of that
			return this.model.visibility();
		}
	}]);

	return Grid;
}(__WEBPACK_IMPORTED_MODULE_0__root_component__["a" /* default */]);

Grid.$inject = ['$element', '$transclude', '$document', 'qgrid'];

/**
 * By convention all binding should be named in camelCase like: modelname + [P]ropertyname
 */
/* harmony default export */ __webpack_exports__["a"] = {
	transclude: true,
	templateUrl: 'qgrid.grid.tpl.html',
	controller: Grid,
	controllerAs: '$grid',
	bindings: {
		model: '<',
		dataRows: '<rows',
		dataColumns: '<columns',
		dataPipe: '<pipe',
		selectionItems: '<selection',
		selectionMode: '@',
		selectionUnit: '@',
		onSelectionChanged: '&',
		groupBy: '<',
		pivotBy: '<',
		sortBy: '<',
		sortMode: '@',
		editMode: '@'
	}
};

/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isSystem;
function isSystem(key) {
	return key && key[0] === '$';
}

/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_services_utility__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_services_path__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_infrastructure_error__ = __webpack_require__(3);
/* unused harmony export get */
/* harmony export (immutable) */ __webpack_exports__["a"] = getFactory;
/* harmony export (immutable) */ __webpack_exports__["b"] = set;




function get(row, column) {
	return column.$value ? column.$value({ $row: row }) : column.value ? column.value(row) : column.path ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_core_services_path__["a" /* compile */])(column.path)(row) : row[column.key];
}

function getFactory(column) {
	var get = column.$value ? function (row) {
		return column.$value({ $row: row });
	} : column.value ? function (row) {
		return column.value(row);
	} : column.path ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_core_services_path__["a" /* compile */])(column.path) : function (row) {
		return row[column.key];
	};

	return function (row) {
		return get(row);
	};
}

function set(row, column, value) {
	if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_core_services_utility__["a" /* isFunction */])(column.$value)) {
		column.$value({ $row: row, $value: value });
		return;
	}

	if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_core_services_utility__["a" /* isFunction */])(column.value)) {
		column.value(row, value);
		return;
	}

	if (column.path) {
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_core_services_path__["a" /* compile */])(column.path)(row, value);
		return;
	}

	if (row.hasOwnProperty(column.key)) {
		row[column.key] = value;
		return;
	}

	throw new __WEBPACK_IMPORTED_MODULE_2_core_infrastructure_error__["a" /* default */]('value', 'Row can\'t be edit on "' + column.key + '" column');
}

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(13);

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(287),
    isArguments = __webpack_require__(47),
    isArray = __webpack_require__(10),
    isBuffer = __webpack_require__(48),
    isIndex = __webpack_require__(65),
    isTypedArray = __webpack_require__(69);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),
/* 89 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(61),
    eq = __webpack_require__(33);

/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignMergeValue(object, key, value) {
  if ((value !== undefined && !eq(object[key], value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignMergeValue;


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(61),
    eq = __webpack_require__(33);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(41),
    arrayEach = __webpack_require__(254),
    assignValue = __webpack_require__(91),
    baseAssign = __webpack_require__(259),
    baseAssignIn = __webpack_require__(260),
    cloneBuffer = __webpack_require__(99),
    copyArray = __webpack_require__(101),
    copySymbols = __webpack_require__(298),
    copySymbolsIn = __webpack_require__(299),
    getAllKeys = __webpack_require__(106),
    getAllKeysIn = __webpack_require__(308),
    getTag = __webpack_require__(108),
    initCloneArray = __webpack_require__(319),
    initCloneByTag = __webpack_require__(320),
    initCloneObject = __webpack_require__(110),
    isArray = __webpack_require__(10),
    isBuffer = __webpack_require__(48),
    isObject = __webpack_require__(12),
    keys = __webpack_require__(30);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      result = (isFlat || isFunc) ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat
          ? copySymbolsIn(value, baseAssignIn(result, value))
          : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, baseClone, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  var keysFunc = isFull
    ? (isFlat ? getAllKeysIn : getAllKeys)
    : (isFlat ? keysIn : keys);

  var props = isArr ? undefined : keysFunc(value);
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

module.exports = baseClone;


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var createBaseFor = __webpack_require__(302);

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(98),
    toKey = __webpack_require__(45);

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(59),
    isArray = __webpack_require__(10);

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqualDeep = __webpack_require__(267),
    isObjectLike = __webpack_require__(19);

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;


/***/ }),
/* 97 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(10),
    isKey = __webpack_require__(66),
    stringToPath = __webpack_require__(351),
    toString = __webpack_require__(51);

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(13);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(71)(module)))

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(62);

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

module.exports = cloneTypedArray;


/***/ }),
/* 101 */
/***/ (function(module, exports) {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

var baseRest = __webpack_require__(283),
    isIterateeCall = __webpack_require__(322);

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

module.exports = createAssigner;


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(23);

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(249),
    arraySome = __webpack_require__(256),
    cacheHas = __webpack_require__(289);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(430)))

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(95),
    getSymbols = __webpack_require__(64),
    keys = __webpack_require__(30);

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(59),
    getPrototype = __webpack_require__(63),
    getSymbols = __webpack_require__(64),
    stubArray = __webpack_require__(117);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols(object));
    object = getPrototype(object);
  }
  return result;
};

module.exports = getSymbolsIn;


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__(245),
    Map = __webpack_require__(57),
    Promise = __webpack_require__(247),
    Set = __webpack_require__(248),
    WeakMap = __webpack_require__(250),
    baseGetTag = __webpack_require__(22),
    toSource = __webpack_require__(116);

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),
/* 109 */
/***/ (function(module, exports) {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsZWJ = '\\u200d';

/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboRange + rsVarRange + ']');

/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */
function hasUnicode(string) {
  return reHasUnicode.test(string);
}

module.exports = hasUnicode;


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(261),
    getPrototype = __webpack_require__(63),
    isPrototype = __webpack_require__(67);

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

module.exports = initCloneObject;


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(12);

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

module.exports = isStrictComparable;


/***/ }),
/* 112 */
/***/ (function(module, exports) {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;


/***/ }),
/* 113 */
/***/ (function(module, exports) {

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

module.exports = matchesStrictComparable;


/***/ }),
/* 114 */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),
/* 115 */
/***/ (function(module, exports) {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


/***/ }),
/* 116 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),
/* 117 */
/***/ (function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),
/* 118 */
/***/ (function(module, exports) {

module.exports = "<span>{{$cell.value}}</span>"

/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_infrastructure_model__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_grid_grid_model__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_view_view_model__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_data_data_model__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_head_head_model__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_body_body_model__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_layout_layout_model__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_navigation_navigation_model__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_column_list_column_list_model__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_row_row_model__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_selection_selection_model__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_foot_foot_model__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__core_sort_sort_model__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_group_group_model__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_pivot_pivot_model__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_core_plugin_plugin_model__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_core_edit_edit_model__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_core_toolbar_toolbar_model__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_core_pagination_pagination_model__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_core_progress_progress_model__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_core_node_node_model__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_core_visibility_visibility_model__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_core_filter_filter_model__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_core_drag_drag_model__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_ng_plugins_popup_popup_model__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_ng_plugins_column_chooser_column_chooser_model__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ng__ = __webpack_require__(221);






























__WEBPACK_IMPORTED_MODULE_0_core_infrastructure_model__["a" /* default */].register('grid', __WEBPACK_IMPORTED_MODULE_1_core_grid_grid_model__["a" /* default */]).register('view', __WEBPACK_IMPORTED_MODULE_2_core_view_view_model__["a" /* default */]).register('data', __WEBPACK_IMPORTED_MODULE_3_core_data_data_model__["a" /* default */]).register('selection', __WEBPACK_IMPORTED_MODULE_10_core_selection_selection_model__["a" /* default */]).register('head', __WEBPACK_IMPORTED_MODULE_4_core_head_head_model__["a" /* default */]).register('body', __WEBPACK_IMPORTED_MODULE_5_core_body_body_model__["a" /* default */]).register('navigation', __WEBPACK_IMPORTED_MODULE_7_core_navigation_navigation_model__["a" /* default */]).register('foot', __WEBPACK_IMPORTED_MODULE_11_core_foot_foot_model__["a" /* default */]).register('layout', __WEBPACK_IMPORTED_MODULE_6_core_layout_layout_model__["a" /* default */]).register('row', __WEBPACK_IMPORTED_MODULE_9_core_row_row_model__["a" /* default */]).register('columnList', __WEBPACK_IMPORTED_MODULE_8_core_column_list_column_list_model__["a" /* default */]).register('sort', __WEBPACK_IMPORTED_MODULE_12__core_sort_sort_model__["a" /* default */]).register('group', __WEBPACK_IMPORTED_MODULE_13_core_group_group_model__["a" /* default */]).register('node', __WEBPACK_IMPORTED_MODULE_20_core_node_node_model__["a" /* default */]).register('pivot', __WEBPACK_IMPORTED_MODULE_14_core_pivot_pivot_model__["a" /* default */]).register('edit', __WEBPACK_IMPORTED_MODULE_16_core_edit_edit_model__["a" /* default */]).register('plugin', __WEBPACK_IMPORTED_MODULE_15_core_plugin_plugin_model__["a" /* default */]).register('toolbar', __WEBPACK_IMPORTED_MODULE_17_core_toolbar_toolbar_model__["a" /* default */]).register('pagination', __WEBPACK_IMPORTED_MODULE_18_core_pagination_pagination_model__["a" /* default */]).register('progress', __WEBPACK_IMPORTED_MODULE_19_core_progress_progress_model__["a" /* default */]).register('visibility', __WEBPACK_IMPORTED_MODULE_21_core_visibility_visibility_model__["a" /* default */]).register('columnChooser', __WEBPACK_IMPORTED_MODULE_25_ng_plugins_column_chooser_column_chooser_model__["a" /* default */]).register('filter', __WEBPACK_IMPORTED_MODULE_22_core_filter_filter_model__["a" /* default */]).register('drag', __WEBPACK_IMPORTED_MODULE_23_core_drag_drag_model__["a" /* default */]).register('popup', __WEBPACK_IMPORTED_MODULE_24_ng_plugins_popup_popup_model__["a" /* default */]);

/* harmony default export */ __webpack_exports__["default"] = __WEBPACK_IMPORTED_MODULE_26__ng__["a" /* default */];

/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
__webpack_require__(244);

/* harmony default export */ __webpack_exports__["default"] = angular.module('qgrid.theme.material', []).config(Setup).name;

Setup.$inject = ['qgridThemeProvider'];
function Setup(qgridThemeProvider) {
	qgridThemeProvider.register('material', function (theme) {
		theme.put('qgrid.plugin.progress.tpl.html', __webpack_require__(428));

		theme.put('qgrid.body.cell.text.edit.tpl.html', __webpack_require__(424));
		theme.put('qgrid.body.cell.text-area.edit.tpl.html', __webpack_require__(423));
		theme.put('qgrid.body.cell.bool.edit.tpl.html', __webpack_require__(417));
		theme.put('qgrid.body.cell.date.edit.tpl.html', __webpack_require__(419));
		theme.put('qgrid.body.cell.number.edit.tpl.html', __webpack_require__(420));
		theme.put('qgrid.body.cell.array.edit.tpl.html', __webpack_require__(416));
		theme.put('qgrid.body.cell.password.edit.tpl.html', __webpack_require__(421));
		theme.put('qgrid.body.cell.bool.tpl.html', __webpack_require__(418));
		theme.put('qgrid.body.cell.select.tpl.html', __webpack_require__(422));

		theme.put('qgrid.head.cell.text.tpl.html', __webpack_require__(26));
		theme.put('qgrid.head.cell.bool.tpl.html', __webpack_require__(26));
		theme.put('qgrid.head.cell.date.tpl.html', __webpack_require__(26));
		theme.put('qgrid.head.cell.number.tpl.html', __webpack_require__(26));
		theme.put('qgrid.head.cell.array.tpl.html', __webpack_require__(26));
		theme.put('qgrid.head.cell.email.tpl.html', __webpack_require__(26));
		theme.put('qgrid.head.cell.password.tpl.html', __webpack_require__(26));
		theme.put('qgrid.head.cell.pivot.tpl.html', __webpack_require__(425));
		theme.put('qgrid.head.cell.select.tpl.html', __webpack_require__(426));

		theme.put('qgrid.toolbar.top.tpl.html', __webpack_require__(429));
		theme.put('qgrid.plugin.columnchooser.tpl.html', __webpack_require__(427));
	});
}

/***/ }),
/* 121 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_resource_resource__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_infrastructure_cache__ = __webpack_require__(53);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var BodyModel = function BodyModel() {
	_classCallCheck(this, BodyModel);

	this.resource = new __WEBPACK_IMPORTED_MODULE_0_core_resource_resource__["a" /* default */]();
	this.cache = new __WEBPACK_IMPORTED_MODULE_1_core_infrastructure_cache__["a" /* default */]();
};

/* harmony default export */ __webpack_exports__["a"] = BodyModel;

/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_view_view__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_column_column_service__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_services_aggregation__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_infrastructure_error__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_infrastructure_log__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_node_node__ = __webpack_require__(36);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var BodyView = function (_View) {
	_inherits(BodyView, _View);

	function BodyView(model, valueFactory) {
		_classCallCheck(this, BodyView);

		var _this = _possibleConstructorReturn(this, (BodyView.__proto__ || Object.getPrototypeOf(BodyView)).call(this, model));

		_this.rows = [];
		_this.columns = [];
		_this._valueFactory = valueFactory;

		model.viewChanged.watch(function () {
			return _this.invalidate(model);
		});
		return _this;
	}

	_createClass(BodyView, [{
		key: 'invalidate',
		value: function invalidate(model) {
			__WEBPACK_IMPORTED_MODULE_4_core_infrastructure_log__["a" /* default */].info('view.body', 'invalidate');

			this.invalidateRows(model);
			this.invalidateColumns(model);
		}
	}, {
		key: 'invalidateRows',
		value: function invalidateRows(model) {
			this.rows = model.view().rows;
		}
	}, {
		key: 'invalidateColumns',
		value: function invalidateColumns(model) {
			var columns = model.view().columns;
			this.columns = __WEBPACK_IMPORTED_MODULE_1_core_column_column_service__["b" /* lineView */](columns);
		}
	}, {
		key: 'valueFactory',
		value: function valueFactory(column) {
			var model = this.model;
			var getValue = this._valueFactory(column);

			return function (row) {
				if (row instanceof __WEBPACK_IMPORTED_MODULE_5_core_node_node__["a" /* default */]) {
					var _ret = function () {
						var node = row;
						var rows = model.data().rows;
						switch (node.type) {
							case 'group':
								{
									var aggregation = column.aggregation;
									if (aggregation) {
										if (!__WEBPACK_IMPORTED_MODULE_2_core_services_aggregation__["a" /* default */].hasOwnProperty(aggregation)) {
											throw new __WEBPACK_IMPORTED_MODULE_3_core_infrastructure_error__["a" /* default */]('view.body', 'Aggregation ' + aggregation + ' is not registered');
										}

										var groupRows = node.rows.map(function (i) {
											return rows[i];
										});
										return {
											v: __WEBPACK_IMPORTED_MODULE_2_core_services_aggregation__["a" /* default */][aggregation](groupRows, getValue)
										};
									}

									return {
										v: null
									};
								}
							case 'row':
								{
									var rowIndex = node.rows[0];
									return {
										v: getValue(rows[rowIndex], column)
									};
								}
							default:
								throw new __WEBPACK_IMPORTED_MODULE_3_core_infrastructure_error__["a" /* default */]('view.body', 'Invalid node type ' + node.type);
						}
					}();

					if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
				}

				return getValue(row);
			};
		}
	}, {
		key: 'value',
		value: function value(row, column) {
			var getValue = this.valueFactory(column);
			return getValue(row);
		}
	}]);

	return BodyView;
}(__WEBPACK_IMPORTED_MODULE_0_core_view_view__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = BodyView;

/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_column_column_factory__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_services_utility__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_services_path__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_services_convert__ = __webpack_require__(80);
/* harmony export (immutable) */ __webpack_exports__["a"] = generate;
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }






function generate(rows) {
	var deep = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

	if (!rows || rows.length === 0) {
		return [];
	}

	return build(rows[0], null, deep);
}

function build(graph, path, deep) {
	var props = Object.getOwnPropertyNames(graph);
	return props.reduce(function (columns, prop) {
		var value = graph[prop];
		var propPath = path ? path + '.' + prop : prop;
		var type = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_core_services_convert__["a" /* getType */])(value);
		switch (type) {
			case 'array':
				{
					var column = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_core_column_column_factory__["a" /* default */])(type).model;
					column.key = propPath;
					column.title = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_core_services_utility__["n" /* startCase */])(propPath);
					column.path = propPath;
					column.value = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_core_services_path__["a" /* compile */])(propPath);
					column.source = 'generation';
					columns.push(column);
					break;
				}
			case 'collection':
				{
					break;
				}
			case 'object':
				{
					if (deep) {
						columns.push.apply(columns, _toConsumableArray(build(value, propPath, true)));
					}
					break;
				}
			default:
				{
					var _column = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_core_column_column_factory__["a" /* default */])(type).model;
					_column.key = propPath;
					_column.title = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_core_services_utility__["n" /* startCase */])(propPath);
					_column.path = propPath;
					_column.value = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_core_services_path__["a" /* compile */])(propPath);
					_column.source = 'generation';
					columns.push(_column);
					break;
				}
		}

		return columns;
	}, []);
}

/***/ }),
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ColumnListModel = function ColumnListModel() {
	_classCallCheck(this, ColumnListModel);

	this.generation = null; // deep | shallow
};

/* harmony default export */ __webpack_exports__["a"] = ColumnListModel;

/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_column_type_column_view__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_column_model__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_template_template_path__ = __webpack_require__(2);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





__WEBPACK_IMPORTED_MODULE_2_core_template_template_path__["a" /* default */].register('array-cell', function (template, column) {
	return {
		model: template.for,
		resource: column.key
	};
});

__WEBPACK_IMPORTED_MODULE_2_core_template_template_path__["a" /* default */].register('array-cell-edit', function (template, column) {
	return {
		model: 'edit',
		resource: column.key
	};
});

var ArrayColumnModel = function (_DataColumnModel) {
	_inherits(ArrayColumnModel, _DataColumnModel);

	function ArrayColumnModel() {
		_classCallCheck(this, ArrayColumnModel);

		return _possibleConstructorReturn(this, (ArrayColumnModel.__proto__ || Object.getPrototypeOf(ArrayColumnModel)).call(this, 'array'));
	}

	return ArrayColumnModel;
}(__WEBPACK_IMPORTED_MODULE_1__data_column_model__["a" /* default */]);

var ArrayColumn = function (_ColumnView) {
	_inherits(ArrayColumn, _ColumnView);

	function ArrayColumn(model) {
		_classCallCheck(this, ArrayColumn);

		return _possibleConstructorReturn(this, (ArrayColumn.__proto__ || Object.getPrototypeOf(ArrayColumn)).call(this, model));
	}

	_createClass(ArrayColumn, null, [{
		key: 'model',
		value: function model() {
			return new ArrayColumnModel();
		}
	}]);

	return ArrayColumn;
}(__WEBPACK_IMPORTED_MODULE_0_core_column_type_column_view__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = ArrayColumn;

/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_column_type_column_view__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_column_model__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_template_template_path__ = __webpack_require__(2);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





__WEBPACK_IMPORTED_MODULE_2_core_template_template_path__["a" /* default */].register('bool-cell', function (template, column) {
	return {
		model: template.for,
		resource: column.key
	};
});

__WEBPACK_IMPORTED_MODULE_2_core_template_template_path__["a" /* default */].register('bool-cell-edit', function (template, column) {
	return {
		model: 'edit',
		resource: column.key
	};
});

var BoolColumnModel = function (_DataColumnModel) {
	_inherits(BoolColumnModel, _DataColumnModel);

	function BoolColumnModel() {
		_classCallCheck(this, BoolColumnModel);

		return _possibleConstructorReturn(this, (BoolColumnModel.__proto__ || Object.getPrototypeOf(BoolColumnModel)).call(this, 'bool'));
	}

	return BoolColumnModel;
}(__WEBPACK_IMPORTED_MODULE_1__data_column_model__["a" /* default */]);

var BoolColumn = function (_ColumnView) {
	_inherits(BoolColumn, _ColumnView);

	function BoolColumn(model) {
		_classCallCheck(this, BoolColumn);

		return _possibleConstructorReturn(this, (BoolColumn.__proto__ || Object.getPrototypeOf(BoolColumn)).call(this, model));
	}

	_createClass(BoolColumn, null, [{
		key: 'model',
		value: function model() {
			return new BoolColumnModel();
		}
	}]);

	return BoolColumn;
}(__WEBPACK_IMPORTED_MODULE_0_core_column_type_column_view__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = BoolColumn;

/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_column_type_column_view__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_column_model__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_template_template_path__ = __webpack_require__(2);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





__WEBPACK_IMPORTED_MODULE_2_core_template_template_path__["a" /* default */].register('date-cell', function (template, column) {
	return {
		model: template.for,
		resource: column.key
	};
});

__WEBPACK_IMPORTED_MODULE_2_core_template_template_path__["a" /* default */].register('date-cell-edit', function (template, column) {
	return {
		model: 'edit',
		resource: column.key
	};
});

var DateColumnModel = function (_DataColumnModel) {
	_inherits(DateColumnModel, _DataColumnModel);

	function DateColumnModel() {
		_classCallCheck(this, DateColumnModel);

		var _this = _possibleConstructorReturn(this, (DateColumnModel.__proto__ || Object.getPrototypeOf(DateColumnModel)).call(this, 'date'));

		_this.format = 'yyyy/MM/dd';
		return _this;
	}

	return DateColumnModel;
}(__WEBPACK_IMPORTED_MODULE_1__data_column_model__["a" /* default */]);

var DateColumn = function (_ColumnView) {
	_inherits(DateColumn, _ColumnView);

	function DateColumn(model) {
		_classCallCheck(this, DateColumn);

		return _possibleConstructorReturn(this, (DateColumn.__proto__ || Object.getPrototypeOf(DateColumn)).call(this, model));
	}

	_createClass(DateColumn, null, [{
		key: 'model',
		value: function model() {
			return new DateColumnModel();
		}
	}]);

	return DateColumn;
}(__WEBPACK_IMPORTED_MODULE_0_core_column_type_column_view__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = DateColumn;

/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_column_type_column_view__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_column_model__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_template_template_path__ = __webpack_require__(2);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





__WEBPACK_IMPORTED_MODULE_2_core_template_template_path__["a" /* default */].register('email-cell', function (template, column) {
	return {
		model: template.for,
		resource: column.key
	};
});

__WEBPACK_IMPORTED_MODULE_2_core_template_template_path__["a" /* default */].register('email-cell-edit', function (template, column) {
	return {
		model: 'edit',
		resource: column.key
	};
});

var EmailColumnModel = function (_DataColumnModel) {
	_inherits(EmailColumnModel, _DataColumnModel);

	function EmailColumnModel() {
		_classCallCheck(this, EmailColumnModel);

		return _possibleConstructorReturn(this, (EmailColumnModel.__proto__ || Object.getPrototypeOf(EmailColumnModel)).call(this, 'email'));
	}

	return EmailColumnModel;
}(__WEBPACK_IMPORTED_MODULE_1__data_column_model__["a" /* default */]);

var EmailColumn = function (_ColumnView) {
	_inherits(EmailColumn, _ColumnView);

	function EmailColumn(model) {
		_classCallCheck(this, EmailColumn);

		return _possibleConstructorReturn(this, (EmailColumn.__proto__ || Object.getPrototypeOf(EmailColumn)).call(this, model));
	}

	_createClass(EmailColumn, null, [{
		key: 'model',
		value: function model() {
			return new EmailColumnModel();
		}
	}]);

	return EmailColumn;
}(__WEBPACK_IMPORTED_MODULE_0_core_column_type_column_view__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = EmailColumn;

/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_column_type_column_view__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_template_template_path__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__column_model__ = __webpack_require__(20);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





__WEBPACK_IMPORTED_MODULE_1_core_template_template_path__["a" /* default */].register('group-cell', function (template) {
	return {
		model: 'node',
		resource: template.for === 'body' ? 'content' : null
	};
});

var GroupColumnModel = function (_ColumnModel) {
	_inherits(GroupColumnModel, _ColumnModel);

	function GroupColumnModel() {
		_classCallCheck(this, GroupColumnModel);

		var _this = _possibleConstructorReturn(this, (GroupColumnModel.__proto__ || Object.getPrototypeOf(GroupColumnModel)).call(this, 'group'));

		_this.key = '$group';
		_this.title = 'Group';
		_this.canEdit = false;
		_this.canSort = false;
		return _this;
	}

	return GroupColumnModel;
}(__WEBPACK_IMPORTED_MODULE_2__column_model__["a" /* default */]);

var GroupColumn = function (_ColumnView) {
	_inherits(GroupColumn, _ColumnView);

	function GroupColumn(model) {
		_classCallCheck(this, GroupColumn);

		return _possibleConstructorReturn(this, (GroupColumn.__proto__ || Object.getPrototypeOf(GroupColumn)).call(this, model));
	}

	_createClass(GroupColumn, null, [{
		key: 'model',
		value: function model() {
			return new GroupColumnModel();
		}
	}]);

	return GroupColumn;
}(__WEBPACK_IMPORTED_MODULE_0_core_column_type_column_view__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = GroupColumn;

/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_column_type_column_view__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_column_model__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_template_template_path__ = __webpack_require__(2);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





__WEBPACK_IMPORTED_MODULE_2_core_template_template_path__["a" /* default */].register('number-cell', function (template, column) {
	return {
		model: template.for,
		resource: column.key
	};
});

__WEBPACK_IMPORTED_MODULE_2_core_template_template_path__["a" /* default */].register('number-cell-edit', function (template, column) {
	return {
		model: 'edit',
		resource: column.key
	};
});

var NumberColumnModel = function (_DataColumnModel) {
	_inherits(NumberColumnModel, _DataColumnModel);

	function NumberColumnModel() {
		_classCallCheck(this, NumberColumnModel);

		return _possibleConstructorReturn(this, (NumberColumnModel.__proto__ || Object.getPrototypeOf(NumberColumnModel)).call(this, 'number'));
	}

	return NumberColumnModel;
}(__WEBPACK_IMPORTED_MODULE_1__data_column_model__["a" /* default */]);

var NumberColumn = function (_ColumnView) {
	_inherits(NumberColumn, _ColumnView);

	function NumberColumn(model) {
		_classCallCheck(this, NumberColumn);

		return _possibleConstructorReturn(this, (NumberColumn.__proto__ || Object.getPrototypeOf(NumberColumn)).call(this, model));
	}

	_createClass(NumberColumn, null, [{
		key: 'model',
		value: function model() {
			return new NumberColumnModel();
		}
	}]);

	return NumberColumn;
}(__WEBPACK_IMPORTED_MODULE_0_core_column_type_column_view__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = NumberColumn;

/***/ }),
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_column_type_column_view__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_template_template_path__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__column_model__ = __webpack_require__(20);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





__WEBPACK_IMPORTED_MODULE_1_core_template_template_path__["a" /* default */].register('pad-cell', function (template) {
	return {
		model: template.for,
		resource: template.for + '.' + template.type
	};
});

var PadColumnModel = function (_ColumnModel) {
	_inherits(PadColumnModel, _ColumnModel);

	function PadColumnModel() {
		_classCallCheck(this, PadColumnModel);

		var _this = _possibleConstructorReturn(this, (PadColumnModel.__proto__ || Object.getPrototypeOf(PadColumnModel)).call(this, 'pad'));

		_this.key = '$pad';
		_this.title = '';
		_this.canEdit = false;
		_this.canSort = false;
		_this.canResize = false;
		_this.source = 'generation';
		return _this;
	}

	return PadColumnModel;
}(__WEBPACK_IMPORTED_MODULE_2__column_model__["a" /* default */]);

var PadColumn = function (_ColumnView) {
	_inherits(PadColumn, _ColumnView);

	function PadColumn(model) {
		_classCallCheck(this, PadColumn);

		return _possibleConstructorReturn(this, (PadColumn.__proto__ || Object.getPrototypeOf(PadColumn)).call(this, model));
	}

	_createClass(PadColumn, null, [{
		key: 'model',
		value: function model() {
			return new PadColumnModel();
		}
	}]);

	return PadColumn;
}(__WEBPACK_IMPORTED_MODULE_0_core_column_type_column_view__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = PadColumn;

/***/ }),
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_column_type_column_view__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_column_model__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_template_template_path__ = __webpack_require__(2);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





__WEBPACK_IMPORTED_MODULE_2_core_template_template_path__["a" /* default */].register('password-cell', function (template, column) {
	return {
		model: template.for,
		resource: column.key
	};
});

__WEBPACK_IMPORTED_MODULE_2_core_template_template_path__["a" /* default */].register('password-cell-edit', function (template, column) {
	return {
		model: 'edit',
		resource: column.key
	};
});

var PasswordColumnModel = function (_DataColumnModel) {
	_inherits(PasswordColumnModel, _DataColumnModel);

	function PasswordColumnModel() {
		_classCallCheck(this, PasswordColumnModel);

		var _this = _possibleConstructorReturn(this, (PasswordColumnModel.__proto__ || Object.getPrototypeOf(PasswordColumnModel)).call(this, 'password'));

		_this.canSort = false;
		return _this;
	}

	return PasswordColumnModel;
}(__WEBPACK_IMPORTED_MODULE_1__data_column_model__["a" /* default */]);

var PasswordColumn = function (_ColumnView) {
	_inherits(PasswordColumn, _ColumnView);

	function PasswordColumn(model) {
		_classCallCheck(this, PasswordColumn);

		return _possibleConstructorReturn(this, (PasswordColumn.__proto__ || Object.getPrototypeOf(PasswordColumn)).call(this, model));
	}

	_createClass(PasswordColumn, null, [{
		key: 'model',
		value: function model() {
			return new PasswordColumnModel();
		}
	}]);

	return PasswordColumn;
}(__WEBPACK_IMPORTED_MODULE_0_core_column_type_column_view__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = PasswordColumn;

/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_column_type_column_view__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_template_template_path__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__column_model__ = __webpack_require__(20);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





__WEBPACK_IMPORTED_MODULE_1_core_template_template_path__["a" /* default */].register('pivot-cell', function (template) {
	return {
		model: 'pivot',
		resource: template.for
	};
});

var PivotColumnModel = function (_ColumnModel) {
	_inherits(PivotColumnModel, _ColumnModel);

	function PivotColumnModel() {
		_classCallCheck(this, PivotColumnModel);

		var _this = _possibleConstructorReturn(this, (PivotColumnModel.__proto__ || Object.getPrototypeOf(PivotColumnModel)).call(this, 'pivot'));

		_this.key = '$pivot';
		_this.title = 'Pivot';
		_this.source = 'generation';
		_this.canEdit = false;
		_this.canSort = false;
		_this.canResize = false;
		_this.width = 60;
		_this.rowIndex = 0;
		_this.columnIndex = 0;
		return _this;
	}

	return PivotColumnModel;
}(__WEBPACK_IMPORTED_MODULE_2__column_model__["a" /* default */]);

var PivotColumn = function (_ColumnView) {
	_inherits(PivotColumn, _ColumnView);

	function PivotColumn(model) {
		_classCallCheck(this, PivotColumn);

		return _possibleConstructorReturn(this, (PivotColumn.__proto__ || Object.getPrototypeOf(PivotColumn)).call(this, model));
	}

	_createClass(PivotColumn, null, [{
		key: 'model',
		value: function model() {
			return new PivotColumnModel();
		}
	}]);

	return PivotColumn;
}(__WEBPACK_IMPORTED_MODULE_0_core_column_type_column_view__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = PivotColumn;

/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_column_type_column_view__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_template_template_path__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__column_model__ = __webpack_require__(20);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





__WEBPACK_IMPORTED_MODULE_1_core_template_template_path__["a" /* default */].register('row-indicator-cell', function (template) {
	return {
		model: template.for,
		resource: template.for + '.' + template.type
	};
});

var RowIndicatorColumnModel = function (_ColumnModel) {
	_inherits(RowIndicatorColumnModel, _ColumnModel);

	function RowIndicatorColumnModel() {
		_classCallCheck(this, RowIndicatorColumnModel);

		var _this = _possibleConstructorReturn(this, (RowIndicatorColumnModel.__proto__ || Object.getPrototypeOf(RowIndicatorColumnModel)).call(this, 'row-indicator'));

		_this.key = '$row.indicator';
		_this.title = 'Row Indicator';
		_this.canEdit = false;
		_this.canSort = false;
		_this.canResize = false;
		return _this;
	}

	return RowIndicatorColumnModel;
}(__WEBPACK_IMPORTED_MODULE_2__column_model__["a" /* default */]);

var RowIndicatorColumn = function (_ColumnView) {
	_inherits(RowIndicatorColumn, _ColumnView);

	function RowIndicatorColumn(model) {
		_classCallCheck(this, RowIndicatorColumn);

		return _possibleConstructorReturn(this, (RowIndicatorColumn.__proto__ || Object.getPrototypeOf(RowIndicatorColumn)).call(this, model));
	}

	_createClass(RowIndicatorColumn, null, [{
		key: 'model',
		value: function model() {
			return new RowIndicatorColumnModel();
		}
	}]);

	return RowIndicatorColumn;
}(__WEBPACK_IMPORTED_MODULE_0_core_column_type_column_view__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = RowIndicatorColumn;

/***/ }),
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_column_type_column_view__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_template_template_path__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__column_model__ = __webpack_require__(20);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





__WEBPACK_IMPORTED_MODULE_1_core_template_template_path__["a" /* default */].register('row-number-cell', function (template) {
	return {
		model: template.for,
		resource: template.for + '.' + template.type
	};
});

var RowNumberColumnModel = function (_ColumnModel) {
	_inherits(RowNumberColumnModel, _ColumnModel);

	function RowNumberColumnModel() {
		_classCallCheck(this, RowNumberColumnModel);

		var _this = _possibleConstructorReturn(this, (RowNumberColumnModel.__proto__ || Object.getPrototypeOf(RowNumberColumnModel)).call(this, 'row-number'));

		_this.key = '$row.number';
		_this.title = '#';
		_this.canEdit = false;
		_this.canResize = false;
		return _this;
	}

	return RowNumberColumnModel;
}(__WEBPACK_IMPORTED_MODULE_2__column_model__["a" /* default */]);

var RowNumberColumn = function (_ColumnView) {
	_inherits(RowNumberColumn, _ColumnView);

	function RowNumberColumn(model) {
		_classCallCheck(this, RowNumberColumn);

		return _possibleConstructorReturn(this, (RowNumberColumn.__proto__ || Object.getPrototypeOf(RowNumberColumn)).call(this, model));
	}

	_createClass(RowNumberColumn, null, [{
		key: 'model',
		value: function model() {
			return new RowNumberColumnModel();
		}
	}]);

	return RowNumberColumn;
}(__WEBPACK_IMPORTED_MODULE_0_core_column_type_column_view__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = RowNumberColumn;

/***/ }),
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_column_type_column_view__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_template_template_path__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__column_model__ = __webpack_require__(20);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





__WEBPACK_IMPORTED_MODULE_1_core_template_template_path__["a" /* default */].register('select-cell', function (template) {
	return {
		model: 'selection',
		resource: template.for
	};
});

var SelectColumnModel = function (_ColumnModel) {
	_inherits(SelectColumnModel, _ColumnModel);

	function SelectColumnModel() {
		_classCallCheck(this, SelectColumnModel);

		var _this = _possibleConstructorReturn(this, (SelectColumnModel.__proto__ || Object.getPrototypeOf(SelectColumnModel)).call(this, 'select'));

		_this.key = '$select';
		_this.title = 'Select';
		_this.canEdit = false;
		_this.canResize = false;
		return _this;
	}

	return SelectColumnModel;
}(__WEBPACK_IMPORTED_MODULE_2__column_model__["a" /* default */]);

var SelectColumn = function (_ColumnView) {
	_inherits(SelectColumn, _ColumnView);

	function SelectColumn(model) {
		_classCallCheck(this, SelectColumn);

		return _possibleConstructorReturn(this, (SelectColumn.__proto__ || Object.getPrototypeOf(SelectColumn)).call(this, model));
	}

	_createClass(SelectColumn, null, [{
		key: 'model',
		value: function model() {
			return new SelectColumnModel();
		}
	}]);

	return SelectColumn;
}(__WEBPACK_IMPORTED_MODULE_0_core_column_type_column_view__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = SelectColumn;

/***/ }),
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_column_type_column_view__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_column_model__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_template_template_path__ = __webpack_require__(2);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





__WEBPACK_IMPORTED_MODULE_2_core_template_template_path__["a" /* default */].register('text-cell', function (template, column) {
	return {
		model: template.for,
		resource: column.key
	};
});

__WEBPACK_IMPORTED_MODULE_2_core_template_template_path__["a" /* default */].register('text-cell-edit', function (template, column) {
	return {
		model: 'edit',
		resource: column.key
	};
});

__WEBPACK_IMPORTED_MODULE_2_core_template_template_path__["a" /* default */].register('text-area-cell-edit', function (template, column) {
	return {
		model: 'edit',
		resource: column.key
	};
});

var TextColumnModel = function (_DataColumnModel) {
	_inherits(TextColumnModel, _DataColumnModel);

	function TextColumnModel() {
		_classCallCheck(this, TextColumnModel);

		return _possibleConstructorReturn(this, (TextColumnModel.__proto__ || Object.getPrototypeOf(TextColumnModel)).call(this, 'text'));
	}

	return TextColumnModel;
}(__WEBPACK_IMPORTED_MODULE_1__data_column_model__["a" /* default */]);

var TextColumn = function (_ColumnView) {
	_inherits(TextColumn, _ColumnView);

	function TextColumn(model) {
		_classCallCheck(this, TextColumn);

		return _possibleConstructorReturn(this, (TextColumn.__proto__ || Object.getPrototypeOf(TextColumn)).call(this, model));
	}

	_createClass(TextColumn, null, [{
		key: 'model',
		value: function model() {
			return new TextColumnModel();
		}
	}]);

	return TextColumn;
}(__WEBPACK_IMPORTED_MODULE_0_core_column_type_column_view__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = TextColumn;

/***/ }),
/* 139 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_pipe_pipe__ = __webpack_require__(76);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var DataModel = function DataModel() {
	_classCallCheck(this, DataModel);

	this.rows = [];
	this.columns = [];

	this.pipe = [__WEBPACK_IMPORTED_MODULE_0_core_pipe_pipe__["a" /* default */].data, __WEBPACK_IMPORTED_MODULE_0_core_pipe_pipe__["a" /* default */].filter, __WEBPACK_IMPORTED_MODULE_0_core_pipe_pipe__["a" /* default */].sort, __WEBPACK_IMPORTED_MODULE_0_core_pipe_pipe__["a" /* default */].pagination, __WEBPACK_IMPORTED_MODULE_0_core_pipe_pipe__["a" /* default */].memo, __WEBPACK_IMPORTED_MODULE_0_core_pipe_pipe__["a" /* default */].group, __WEBPACK_IMPORTED_MODULE_0_core_pipe_pipe__["a" /* default */].pivot, __WEBPACK_IMPORTED_MODULE_0_core_pipe_pipe__["a" /* default */].column, __WEBPACK_IMPORTED_MODULE_0_core_pipe_pipe__["a" /* default */].view];

	this.triggers = ['data', 'pagination', 'sort', 'filter', 'group', 'pivot'];
};

/* harmony default export */ __webpack_exports__["a"] = DataModel;

/***/ }),
/* 140 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DragModel = function DragModel() {
	_classCallCheck(this, DragModel);

	this.isActive = false;
};

/* harmony default export */ __webpack_exports__["a"] = DragModel;

/***/ }),
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_infrastructure_command__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_infrastructure_log__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_services_convert__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_services_utility__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_infrastructure_shortcut__ = __webpack_require__(73);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }







var EditCellView = function () {
	function EditCellView(model, setValue, markup, apply) {
		_classCallCheck(this, EditCellView);

		this.model = model;
		this.setValue = setValue;
		this.markup = markup;

		this.mode = 'view';
		this._value = null;

		var shortcut = new __WEBPACK_IMPORTED_MODULE_4_core_infrastructure_shortcut__["a" /* default */](markup.document, apply);
		var commands = this.commands;
		shortcut.register('editCellNavigation', commands);

		this.enter = commands.get('enter');
		this.commit = commands.get('commit');
		this.cancel = commands.get('cancel');
		this.reset = commands.get('reset');
	}

	_createClass(EditCellView, [{
		key: 'commands',
		get: function get() {
			var _this = this;

			var model = this.model;
			var commands = {
				enter: new __WEBPACK_IMPORTED_MODULE_0_core_infrastructure_command__["a" /* default */]({
					shortcut: 'F2|Enter',
					canExecute: function canExecute(cell) {
						cell = cell || model.navigation().active.cell;

						if (_this.mode !== 'edit' && model.edit().mode === 'cell') {
							// use shouldn't explicitly set it in the template, cause we have here canEdit !== false
							return cell.column.canEdit !== false;
						}

						return false;
					},
					execute: function execute(cell, e) {
						__WEBPACK_IMPORTED_MODULE_1_core_infrastructure_log__["a" /* default */].info('cell.edit', 'edit mode');
						if (e) {
							e.stopImmediatePropagation();
						}

						cell = cell || model.navigation().active.cell;

						var parse = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_core_services_convert__["b" /* parseFactory */])(cell.column.type);
						_this.value = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_core_services_utility__["e" /* isUndefined */])(cell.value) ? null : parse(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_core_services_utility__["c" /* clone */])(cell.value));
						_this.mode = 'edit';
						cell.mode(_this.mode);
					}
				}),
				commit: new __WEBPACK_IMPORTED_MODULE_0_core_infrastructure_command__["a" /* default */]({
					shortcut: 'Ctrl+S|Enter',
					// TODO: add validation support
					canExecute: function canExecute() {
						return _this.mode === 'edit' && model.edit().mode === 'cell';
					},
					execute: function execute(cell, e) {
						__WEBPACK_IMPORTED_MODULE_1_core_infrastructure_log__["a" /* default */].info('cell.edit', 'commit');
						if (e) {
							e.stopImmediatePropagation();
						}

						cell = cell || model.navigation().active.cell;

						var column = cell.column;
						var row = cell.row;
						_this.setValue(row, column, _this.value);

						_this.value = null;
						_this.mode = 'view';
						cell.mode(_this.mode);
					}
				}),
				cancel: new __WEBPACK_IMPORTED_MODULE_0_core_infrastructure_command__["a" /* default */]({
					shortcut: 'Escape',
					execute: function execute(cell, e) {
						__WEBPACK_IMPORTED_MODULE_1_core_infrastructure_log__["a" /* default */].info('cell.edit', 'cancel');
						if (e) {
							e.stopImmediatePropagation();
						}
						cell = cell || model.navigation().active.cell;

						_this.value = null;
						_this.mode = 'view';
						cell.mode(_this.mode);
					}
				}),
				reset: new __WEBPACK_IMPORTED_MODULE_0_core_infrastructure_command__["a" /* default */]({
					execute: function execute(cell, e) {
						__WEBPACK_IMPORTED_MODULE_1_core_infrastructure_log__["a" /* default */].info('cell.edit', 'reset');
						if (e) {
							e.stopImmediatePropagation();
						}

						cell = cell || model.navigation().active.cell;

						var parse = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_core_services_convert__["b" /* parseFactory */])(cell.column.type);
						_this.value = parse(cell.value);
						cell.mode(_this.mode);
						return false;
					}
				})
			};
			return new Map(Object.entries(commands));
		}
	}, {
		key: 'value',
		get: function get() {
			return this._value;
		},
		set: function set(value) {
			this._value = value;
		}
	}]);

	return EditCellView;
}();

/* harmony default export */ __webpack_exports__["a"] = EditCellView;

/***/ }),
/* 142 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_resource_resource__ = __webpack_require__(4);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var EditModel = function EditModel() {
	_classCallCheck(this, EditModel);

	this.resource = new __WEBPACK_IMPORTED_MODULE_0_core_resource_resource__["a" /* default */]();
	this.mode = null; // cell
};

/* harmony default export */ __webpack_exports__["a"] = EditModel;

/***/ }),
/* 143 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_view_view__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__edit_cell_view__ = __webpack_require__(141);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var EditView = function (_View) {
	_inherits(EditView, _View);

	function EditView(model, setValue, markup, apply) {
		_classCallCheck(this, EditView);

		var _this = _possibleConstructorReturn(this, (EditView.__proto__ || Object.getPrototypeOf(EditView)).call(this, model));

		_this.cell = new __WEBPACK_IMPORTED_MODULE_1__edit_cell_view__["a" /* default */](model, setValue, markup, apply);
		return _this;
	}

	return EditView;
}(__WEBPACK_IMPORTED_MODULE_0_core_view_view__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = EditView;

/***/ }),
/* 144 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resource_resource__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_utility__ = __webpack_require__(0);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var FilterModel = function FilterModel() {
	_classCallCheck(this, FilterModel);

	this.resource = new __WEBPACK_IMPORTED_MODULE_0__resource_resource__["a" /* default */]();
	this.by = {};
	this.match = function () {
		return __WEBPACK_IMPORTED_MODULE_1__services_utility__["g" /* yes */];
	};
};

/* harmony default export */ __webpack_exports__["a"] = FilterModel;

/***/ }),
/* 145 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resource_resource_enumerable__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_infrastructure_cache__ = __webpack_require__(53);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var FootModel = function FootModel() {
	_classCallCheck(this, FootModel);

	this.resource = new __WEBPACK_IMPORTED_MODULE_0__resource_resource_enumerable__["a" /* default */]();
	this.cache = new __WEBPACK_IMPORTED_MODULE_1_core_infrastructure_cache__["a" /* default */]();
};

/* harmony default export */ __webpack_exports__["a"] = FootModel;

/***/ }),
/* 146 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_view_view__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_column_column_service__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_services_aggregation__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_infrastructure_error__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_infrastructure_log__ = __webpack_require__(14);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var FootView = function (_View) {
	_inherits(FootView, _View);

	function FootView(model, valueFactory) {
		_classCallCheck(this, FootView);

		var _this = _possibleConstructorReturn(this, (FootView.__proto__ || Object.getPrototypeOf(FootView)).call(this, model));

		_this.rows = [];
		_this.columns = [];

		_this.valueFactory = valueFactory;
		model.viewChanged.watch(function () {
			return _this.invalidate(model);
		});
		return _this;
	}

	_createClass(FootView, [{
		key: 'invalidate',
		value: function invalidate(model) {
			__WEBPACK_IMPORTED_MODULE_4_core_infrastructure_log__["a" /* default */].info('view.foot', 'invalidate');

			var columns = model.view().columns;
			this.columns = __WEBPACK_IMPORTED_MODULE_1_core_column_column_service__["b" /* lineView */](columns);
			this.rows = new Array(this.count);
		}
	}, {
		key: 'value',
		value: function value(column) {
			if (column.aggregation) {
				if (!__WEBPACK_IMPORTED_MODULE_2_core_services_aggregation__["a" /* default */].hasOwnProperty(column.aggregation)) {
					throw new __WEBPACK_IMPORTED_MODULE_3_core_infrastructure_error__["a" /* default */]('foot', 'Aggregation ' + column.aggregation + ' is not registered');
				}

				var rows = this.model.data().rows;
				var getValue = this.valueFactory(column);
				return __WEBPACK_IMPORTED_MODULE_2_core_services_aggregation__["a" /* default */][column.aggregation](rows, getValue);
			}
			return null;
		}
	}, {
		key: 'count',
		get: function get() {
			var model = this.model;
			var columns = model.data().columns;
			var resourceCount = model.foot().resource.count;

			for (var i = 0, length = columns.length; i < length; i++) {
				if (columns[i].aggregation) {
					return Math.max(resourceCount, 1);
				}
			}

			return resourceCount;
		}
	}]);

	return FootView;
}(__WEBPACK_IMPORTED_MODULE_0_core_view_view__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = FootView;

/***/ }),
/* 147 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_services_guid__ = __webpack_require__(187);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var GridModel = function GridModel() {
	_classCallCheck(this, GridModel);

	this.id = 'q-grid-' + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_core_services_guid__["a" /* default */])();
};

/* harmony default export */ __webpack_exports__["a"] = GridModel;

/***/ }),
/* 148 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_column_column_service__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_infrastructure_error__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_services_aggregation__ = __webpack_require__(37);
/* harmony export (immutable) */ __webpack_exports__["a"] = GroupBuilder;




function GroupBuilder(model) {
	var viewState = model.view();
	var dataState = model.data();

	var pivot = model.view().pivot;
	var pivotRows = pivot.rows;
	var pivotRowLength = pivotRows[0].length;

	var groupBy = model.group().by;
	var groupByLength = groupBy.length;

	var columnMap = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_core_column_column_service__["a" /* map */])(dataState.columns);
	var rows = dataState.rows;
	var nodes = viewState.rows;

	return function (valueFactory) {
		var result = [];

		var _loop = function _loop(i, nodeLength) {
			var node = nodes[i];
			var key = groupBy[Math.min(node.level, groupByLength - 1)];
			var column = columnMap[key];
			if (!column) {
				throw new __WEBPACK_IMPORTED_MODULE_1_core_infrastructure_error__["a" /* default */]('view.pivot', 'Invalid key "' + key + '"');
			}

			var aggregation = column.aggregation || 'count';
			if (!__WEBPACK_IMPORTED_MODULE_2_core_services_aggregation__["a" /* default */].hasOwnProperty(aggregation)) {
				throw new __WEBPACK_IMPORTED_MODULE_1_core_infrastructure_error__["a" /* default */]('view.pivot', 'Aggregation ' + aggregation + ' is not registered');
			}

			var getValue = valueFactory(column);
			var aggregate = __WEBPACK_IMPORTED_MODULE_2_core_services_aggregation__["a" /* default */][aggregation];

			var aggRow = new Array(pivotRowLength);
			for (var j = 0, rowLength = node.rows.length; j < rowLength; j++) {
				var rowIndex = node.rows[j];
				var pivotRow = pivotRows[rowIndex];
				var row = rows[rowIndex];
				for (var k = 0; k < pivotRowLength; k++) {
					if (pivotRow[k]) {
						var value = aggRow[k];
						if (!value) {
							value = [];
							aggRow[k] = value;
						}
						value.push(row);
					}
				}
			}

			result.push(aggRow.map(function (rs) {
				return aggregate(rs, getValue);
			}));
		};

		for (var i = 0, nodeLength = nodes.length; i < nodeLength; i++) {
			_loop(i, nodeLength);
		}

		return result;
	};
}

/***/ }),
/* 149 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resource_resource__ = __webpack_require__(4);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var GroupModel = function GroupModel() {
	_classCallCheck(this, GroupModel);

	this.resource = new __WEBPACK_IMPORTED_MODULE_0__resource_resource__["a" /* default */]();
	this.by = [];
};

/* harmony default export */ __webpack_exports__["a"] = GroupModel;

/***/ }),
/* 150 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_view_view__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_infrastructure_command__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_node_node_service__ = __webpack_require__(74);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var GroupView = function (_View) {
	_inherits(GroupView, _View);

	function GroupView(model, valueFactory) {
		_classCallCheck(this, GroupView);

		var _this = _possibleConstructorReturn(this, (GroupView.__proto__ || Object.getPrototypeOf(GroupView)).call(this, model));

		_this.valueFactory = valueFactory;
		_this.toggleStatus = new __WEBPACK_IMPORTED_MODULE_1_core_infrastructure_command__["a" /* default */]({
			execute: function execute(node) {
				node.state.expand = !node.state.expand;
				var view = model.view;
				var nodes = view().nodes;
				view({ rows: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_core_node_node_service__["a" /* flatView */])(nodes) });
			},
			canExecute: function canExecute(node) {
				return node.type === 'group';
			}
		});
		return _this;
	}

	_createClass(GroupView, [{
		key: 'count',
		value: function count(node) {
			return node.children.length || node.rows.length;
		}
	}, {
		key: 'status',
		value: function status(node) {
			return node.state.expand ? 'expand' : 'collapse';
		}
	}, {
		key: 'offset',
		value: function offset(node) {
			var state = this.model.node();
			return state.offset * node.level;
		}
	}, {
		key: 'value',
		value: function value(node) {
			return node.key;
		}
	}]);

	return GroupView;
}(__WEBPACK_IMPORTED_MODULE_0_core_view_view__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = GroupView;

/***/ }),
/* 151 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resource_resource__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_infrastructure_cache__ = __webpack_require__(53);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var HeadModel = function HeadModel() {
	_classCallCheck(this, HeadModel);

	this.resource = new __WEBPACK_IMPORTED_MODULE_0__resource_resource__["a" /* default */]();
	this.cache = new __WEBPACK_IMPORTED_MODULE_1_core_infrastructure_cache__["a" /* default */]();
};

/* harmony default export */ __webpack_exports__["a"] = HeadModel;

/***/ }),
/* 152 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_view_view__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_infrastructure_log__ = __webpack_require__(14);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var HeadView = function (_View) {
	_inherits(HeadView, _View);

	function HeadView(model) {
		_classCallCheck(this, HeadView);

		var _this = _possibleConstructorReturn(this, (HeadView.__proto__ || Object.getPrototypeOf(HeadView)).call(this, model));

		_this.rows = [];
		model.viewChanged.watch(function () {
			return _this.invalidate(model);
		});
		return _this;
	}

	_createClass(HeadView, [{
		key: 'invalidate',
		value: function invalidate(model) {
			__WEBPACK_IMPORTED_MODULE_1_core_infrastructure_log__["a" /* default */].info('view.head', 'invalidate');

			var columns = model.view().columns;
			this.rows = columns;
		}
	}]);

	return HeadView;
}(__WEBPACK_IMPORTED_MODULE_0_core_view_view__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = HeadView;

/***/ }),
/* 153 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_view_view__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_infrastructure_command__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_column_column_service__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_sort_sort_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_services_utility__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_definition__ = __webpack_require__(17);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var HighlightView = function (_View) {
	_inherits(HighlightView, _View);

	function HighlightView(model, markup) {
		_classCallCheck(this, HighlightView);

		var _this = _possibleConstructorReturn(this, (HighlightView.__proto__ || Object.getPrototypeOf(HighlightView)).call(this, model));

		_this.model = model;
		_this.markup = markup;

		var blur = __WEBPACK_IMPORTED_MODULE_4_core_services_utility__["b" /* noop */];
		_this.column = new __WEBPACK_IMPORTED_MODULE_1_core_infrastructure_command__["a" /* default */]({
			execute: function execute(state, column) {
				if (state) {
					blur = _this.highlight(column.key, 'highlight');
				} else {
					blur();
					blur = __WEBPACK_IMPORTED_MODULE_4_core_services_utility__["b" /* noop */];
				}
			}
		});

		_this.onInit(_this.model);
		return _this;
	}

	_createClass(HighlightView, [{
		key: 'onInit',
		value: function onInit(model) {
			var _this2 = this;

			var blurs = [];
			model.sortChanged.watch(function (e) {
				if (e.changes.hasOwnProperty('by')) {
					blurs = _this2.invalidate(blurs);
				}
			});

			model.viewChanged.watch(function () {
				blurs = _this2.invalidate(blurs);
			});
		}
	}, {
		key: 'invalidate',
		value: function invalidate(dispose) {
			dispose.forEach(function (f) {
				return f();
			});

			dispose = [];
			var sortBy = this.model.sort().by;
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = sortBy[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var entry = _step.value;

					var key = __WEBPACK_IMPORTED_MODULE_3_core_sort_sort_service__["a" /* key */](entry);
					dispose.push(this.highlight(key, 'order'));
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}

			return dispose;
		}
	}, {
		key: 'columnIndex',
		value: function columnIndex(key) {
			var columnRows = this.model.view().columns;
			var columns = __WEBPACK_IMPORTED_MODULE_2_core_column_column_service__["b" /* lineView */](columnRows).map(function (v) {
				return v.model;
			});
			var index = __WEBPACK_IMPORTED_MODULE_2_core_column_column_service__["e" /* findIndex */](columns, key);
			if (index >= 0) {
				// TODO: add pivot col support
				var column = columns[index];
				if (column.type === 'pivot' || column.type === 'pad') {
					return -1;
				}
			}

			return index;
		}
	}, {
		key: 'highlight',
		value: function highlight(key, cls) {
			var _this3 = this;

			var index = this.columnIndex(key);
			if (index < 0) {
				return __WEBPACK_IMPORTED_MODULE_4_core_services_utility__["b" /* noop */];
			}

			var head = this.markup.head;
			if (head && head.rows.length) {
				var _iteratorNormalCompletion2 = true;
				var _didIteratorError2 = false;
				var _iteratorError2 = undefined;

				try {
					for (var _iterator2 = head.rows[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
						var row = _step2.value;

						row.cells[index].classList.add(__WEBPACK_IMPORTED_MODULE_5_core_definition__["a" /* GRID_PREFIX */] + '-' + cls);
						if (index > 0) {
							row.cells[index - 1].classList.add(__WEBPACK_IMPORTED_MODULE_5_core_definition__["a" /* GRID_PREFIX */] + '-' + cls + '-prev');
						}

						if (index < head.rows.length - 1) {
							row.cells[index + 1].classList.add(__WEBPACK_IMPORTED_MODULE_5_core_definition__["a" /* GRID_PREFIX */] + '-' + cls + '-next');
						}
					}
				} catch (err) {
					_didIteratorError2 = true;
					_iteratorError2 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion2 && _iterator2.return) {
							_iterator2.return();
						}
					} finally {
						if (_didIteratorError2) {
							throw _iteratorError2;
						}
					}
				}
			}

			var body = this.markup.body;
			if (body) {
				var _iteratorNormalCompletion3 = true;
				var _didIteratorError3 = false;
				var _iteratorError3 = undefined;

				try {
					for (var _iterator3 = body.rows[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
						var _row = _step3.value;

						_row.cells[index].classList.add(__WEBPACK_IMPORTED_MODULE_5_core_definition__["a" /* GRID_PREFIX */] + '-' + cls);
					}
				} catch (err) {
					_didIteratorError3 = true;
					_iteratorError3 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion3 && _iterator3.return) {
							_iterator3.return();
						}
					} finally {
						if (_didIteratorError3) {
							throw _iteratorError3;
						}
					}
				}
			}

			var foot = this.markup.foot;
			if (foot) {
				var _iteratorNormalCompletion4 = true;
				var _didIteratorError4 = false;
				var _iteratorError4 = undefined;

				try {
					for (var _iterator4 = foot.rows[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
						var _row2 = _step4.value;

						_row2.cells[index].classList.add(__WEBPACK_IMPORTED_MODULE_5_core_definition__["a" /* GRID_PREFIX */] + '-' + cls);
					}
				} catch (err) {
					_didIteratorError4 = true;
					_iteratorError4 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion4 && _iterator4.return) {
							_iterator4.return();
						}
					} finally {
						if (_didIteratorError4) {
							throw _iteratorError4;
						}
					}
				}
			}

			return function () {
				return _this3.blur(key, cls);
			};
		}
	}, {
		key: 'blur',
		value: function blur(key, cls) {
			var index = this.columnIndex(key);
			if (index < 0) {
				return __WEBPACK_IMPORTED_MODULE_4_core_services_utility__["b" /* noop */];
			}

			var head = this.markup.head;
			if (head && head.rows.length) {
				var _iteratorNormalCompletion5 = true;
				var _didIteratorError5 = false;
				var _iteratorError5 = undefined;

				try {
					for (var _iterator5 = head.rows[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
						var row = _step5.value;

						row.cells[index].classList.remove(__WEBPACK_IMPORTED_MODULE_5_core_definition__["a" /* GRID_PREFIX */] + '-' + cls);
						if (index > 0) {
							row.cells[index - 1].classList.remove(__WEBPACK_IMPORTED_MODULE_5_core_definition__["a" /* GRID_PREFIX */] + '-' + cls + '-prev');
						}

						if (index < head.rows.length - 1) {
							row.cells[index + 1].classList.remove(__WEBPACK_IMPORTED_MODULE_5_core_definition__["a" /* GRID_PREFIX */] + '-' + cls + '-next');
						}
					}
				} catch (err) {
					_didIteratorError5 = true;
					_iteratorError5 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion5 && _iterator5.return) {
							_iterator5.return();
						}
					} finally {
						if (_didIteratorError5) {
							throw _iteratorError5;
						}
					}
				}
			}

			var body = this.markup.body;
			if (body) {
				var _iteratorNormalCompletion6 = true;
				var _didIteratorError6 = false;
				var _iteratorError6 = undefined;

				try {
					for (var _iterator6 = body.rows[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
						var _row3 = _step6.value;

						_row3.cells[index].classList.remove(__WEBPACK_IMPORTED_MODULE_5_core_definition__["a" /* GRID_PREFIX */] + '-' + cls);
					}
				} catch (err) {
					_didIteratorError6 = true;
					_iteratorError6 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion6 && _iterator6.return) {
							_iterator6.return();
						}
					} finally {
						if (_didIteratorError6) {
							throw _iteratorError6;
						}
					}
				}
			}

			var foot = this.markup.foot;
			if (foot) {
				var _iteratorNormalCompletion7 = true;
				var _didIteratorError7 = false;
				var _iteratorError7 = undefined;

				try {
					for (var _iterator7 = foot.rows[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
						var _row4 = _step7.value;

						_row4.cells[index].classList.remove(__WEBPACK_IMPORTED_MODULE_5_core_definition__["a" /* GRID_PREFIX */] + '-' + cls);
					}
				} catch (err) {
					_didIteratorError7 = true;
					_iteratorError7 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion7 && _iterator7.return) {
							_iterator7.return();
						}
					} finally {
						if (_didIteratorError7) {
							throw _iteratorError7;
						}
					}
				}
			}
		}
	}]);

	return HighlightView;
}(__WEBPACK_IMPORTED_MODULE_0_core_view_view__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = HighlightView;

/***/ }),
/* 154 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LayoutModel = function LayoutModel() {
	_classCallCheck(this, LayoutModel);

	this.columns = {};
	this.scroll = {
		top: 0,
		left: 0,
		width: 0,
		height: 0
	};
};

/* harmony default export */ __webpack_exports__["a"] = LayoutModel;

/***/ }),
/* 155 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_view_view__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_services_css__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_column_column_service__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_infrastructure_log__ = __webpack_require__(14);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var LayoutView = function (_View) {
	_inherits(LayoutView, _View);

	function LayoutView(model, markup) {
		_classCallCheck(this, LayoutView);

		var _this = _possibleConstructorReturn(this, (LayoutView.__proto__ || Object.getPrototypeOf(LayoutView)).call(this, model));

		_this.model = model;
		_this.markup = markup;
		model.viewChanged.watch(function () {
			return _this.invalidateColumns();
		});
		_this.onInit();
		return _this;
	}

	_createClass(LayoutView, [{
		key: 'onInit',
		value: function onInit() {
			var _this2 = this;

			var model = this.model;
			model.layoutChanged.watch(function (e) {
				if (e.changes.hasOwnProperty('columns')) {
					_this2.invalidateColumns();
				}

				if (e.changes.hasOwnProperty('scroll')) {
					_this2.invalidateScroll();
				}
			});
		}
	}, {
		key: 'invalidateScroll',
		value: function invalidateScroll() {
			__WEBPACK_IMPORTED_MODULE_3_core_infrastructure_log__["a" /* default */].info('layout', 'invalidate scroll');

			var markup = this.markup;
			var scroll = this.model.layout().scroll;
			markup.head.scrollLeft = scroll.left;
			markup.foot.scrollLeft = scroll.left;
		}
	}, {
		key: 'invalidateColumns',
		value: function invalidateColumns() {
			__WEBPACK_IMPORTED_MODULE_3_core_infrastructure_log__["a" /* default */].info('layout', 'invalidate columns');

			var model = this.model;
			var getWidth = __WEBPACK_IMPORTED_MODULE_2_core_column_column_service__["f" /* widthFactory */](model);
			var columns = __WEBPACK_IMPORTED_MODULE_2_core_column_column_service__["b" /* lineView */](model.view().columns).map(function (v) {
				return v.model;
			});

			var style = {};
			var length = columns.length;
			while (length--) {
				var column = columns[length];
				var columnWidth = getWidth(column);
				if (null !== columnWidth) {
					// TODO: do it right
					var width = Math.max(columnWidth, parseInt(column.minWidth) || 20) + 'px';
					var key = __WEBPACK_IMPORTED_MODULE_1_core_services_css__["b" /* escape */](column.key);
					style['td.q-grid-' + key + ', th.q-grid-' + key] = {
						'width': width,
						'min-width': width,
						'max-width': width
					};
				}
			}

			var id = model.grid().id;
			__WEBPACK_IMPORTED_MODULE_1_core_services_css__["a" /* removeStyle */](id);
			__WEBPACK_IMPORTED_MODULE_1_core_services_css__["c" /* addStyle */](id, style);
		}
	}]);

	return LayoutView;
}(__WEBPACK_IMPORTED_MODULE_0_core_view_view__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = LayoutView;

/***/ }),
/* 156 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_infrastructure_command__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_column_column_service__ = __webpack_require__(5);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var Navigation = function () {
	function Navigation(model) {
		_classCallCheck(this, Navigation);

		this.model = model;
	}

	_createClass(Navigation, [{
		key: 'commands',
		get: function get() {
			var model = this.model;
			var commands = {
				goDown: new __WEBPACK_IMPORTED_MODULE_0_core_infrastructure_command__["a" /* default */]({
					shortcut: 'down',
					canExecute: function canExecute() {
						return model.navigation().row < model.view().rows.length - 1;
					},
					execute: function execute() {
						model.navigation({ row: model.navigation().row + 1 });
					}
				}),
				goUp: new __WEBPACK_IMPORTED_MODULE_0_core_infrastructure_command__["a" /* default */]({
					shortcut: 'up',
					canExecute: function canExecute() {
						return model.navigation().row > 0;
					},
					execute: function execute() {
						model.navigation({ row: model.navigation().row - 1 });
					}
				}),
				goRight: new __WEBPACK_IMPORTED_MODULE_0_core_infrastructure_command__["a" /* default */]({
					shortcut: 'tab|right',
					canExecute: function canExecute() {
						return model.navigation().column < __WEBPACK_IMPORTED_MODULE_1_core_column_column_service__["b" /* lineView */](model.view().columns).length - 1;
					},
					execute: function execute() {
						model.navigation({ column: model.navigation().column + 1 });
					}
				}),
				goLeft: new __WEBPACK_IMPORTED_MODULE_0_core_infrastructure_command__["a" /* default */]({
					shortcut: 'shift+tab|left',
					canExecute: function canExecute() {
						return model.navigation().column > 0;
					},
					execute: function execute() {
						model.navigation({ column: model.navigation().column - 1 });
					}
				})
			};
			return new Map(Object.entries(commands));
		}
	}]);

	return Navigation;
}();

/* harmony default export */ __webpack_exports__["a"] = Navigation;

/***/ }),
/* 157 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NavigationModel = function NavigationModel() {
	_classCallCheck(this, NavigationModel);

	this.row = -1;
	this.column = -1;
	this.active = {
		cell: null
	};
};

/* harmony default export */ __webpack_exports__["a"] = NavigationModel;

/***/ }),
/* 158 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_view_view__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_infrastructure_command__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_infrastructure_shortcut__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_navigation_navigation__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_definition__ = __webpack_require__(17);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var NavigationView = function (_View) {
	_inherits(NavigationView, _View);

	function NavigationView(model, markup, apply) {
		_classCallCheck(this, NavigationView);

		var _this = _possibleConstructorReturn(this, (NavigationView.__proto__ || Object.getPrototypeOf(NavigationView)).call(this, model));

		_this.markup = markup;
		_this.document = _this.markup.document;
		_this.newRow = 0;
		_this.newColumn = 0;
		_this.oldRow = 0;
		_this.oldColumn = 0;
		var shortcut = new __WEBPACK_IMPORTED_MODULE_2_core_infrastructure_shortcut__["a" /* default */](_this.document, apply);
		var navigation = new __WEBPACK_IMPORTED_MODULE_3_core_navigation_navigation__["a" /* default */](model);
		shortcut.register('navigation', navigation.commands);

		_this.blur = new __WEBPACK_IMPORTED_MODULE_1_core_infrastructure_command__["a" /* default */]({
			execute: function execute(row, column) {
				_this.rows[row].cells[column].classList.remove(__WEBPACK_IMPORTED_MODULE_4_core_definition__["a" /* GRID_PREFIX */] + '-focus');
			},
			canExecute: function canExecute() {
				return _this.rows.length > _this.newRow && _this.rows[_this.newRow].cells.length > _this.newColumn;
			}
		});
		_this.focus = new __WEBPACK_IMPORTED_MODULE_1_core_infrastructure_command__["a" /* default */]({
			execute: function execute(row, column) {
				_this.rows[row].cells[column].classList.add(__WEBPACK_IMPORTED_MODULE_4_core_definition__["a" /* GRID_PREFIX */] + '-focus');
			},
			canExecute: function canExecute() {
				return _this.rows.length > _this.newRow && _this.rows[_this.newRow].cells.length > _this.newColumn;
			}
		});

		model.navigationChanged.watch(function (e) {
			_this.newRow = e.state.row == -1 ? 0 : e.state.row;
			_this.newColumn = e.state.column == -1 ? 0 : e.state.column;
			_this.oldRow = e.changes.hasOwnProperty('row') ? e.changes.row.oldValue : _this.newRow;
			_this.oldColumn = e.changes.hasOwnProperty('column') ? e.changes.column.oldValue : _this.newColumn;

			if (_this.blur.canExecute() && _this.oldRow !== -1 && _this.oldColumn !== -1) {
				_this.blur.execute(_this.oldRow, _this.oldColumn);
			}

			if (_this.oldRow === -1 || _this.oldColumn === -1) {
				model.navigation({
					column: 0,
					row: 0
				});
			}
			if (_this.focus.canExecute()) {
				_this.focus.execute(_this.newRow, _this.newColumn);
			}
		});

		model.viewChanged.watch(function () {
			model.navigation({
				column: -1,
				row: -1
			});
		});
		return _this;
	}

	_createClass(NavigationView, [{
		key: 'rows',
		get: function get() {
			return this.markup.body.rows;
		}
	}]);

	return NavigationView;
}(__WEBPACK_IMPORTED_MODULE_0_core_view_view__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = NavigationView;

/***/ }),
/* 159 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__infrastructure_error__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node__ = __webpack_require__(36);
/* harmony export (immutable) */ __webpack_exports__["a"] = nodeBuilder;



function nodeBuilder(columnMap, groupBy, valueFactory) {
	var level = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

	if (groupBy.length === 0) {
		return function () {
			return [];
		};
	}

	var groupKey = groupBy[0];
	if (!columnMap.hasOwnProperty(groupKey)) {
		throw new __WEBPACK_IMPORTED_MODULE_0__infrastructure_error__["a" /* default */]('node.builder', 'can\'t find column "' + groupKey + '"');
	}

	var column = columnMap[groupKey];
	var getValue = valueFactory(column);
	return function (rows) {
		var getRowIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (i) {
			return i;
		};

		var keys = [];
		var nodes = [];
		var groups = {};
		for (var i = 0, length = rows.length; i < length; i++) {
			var row = rows[i];
			var index = getRowIndex(i);
			var key = getValue(row);
			if (!groups.hasOwnProperty(key)) {
				var node = new __WEBPACK_IMPORTED_MODULE_1__node__["a" /* default */](key, level);
				node.rows.push(index);
				keys.push(key);
				nodes.push(node);
				groups[key] = {
					node: node,
					rows: [row]
				};
			} else {
				var group = groups[key];
				group.node.rows.push(index);
				group.rows.push(row);
				keys.push(key);
			}
		}

		var nextGroupBy = groupBy.slice(1);
		if (nextGroupBy.length) {
			var build = nodeBuilder(columnMap, nextGroupBy, valueFactory, level + 1);

			var _loop = function _loop(_i, _length) {
				var key = keys[_i];
				var group = groups[key];
				var node = group.node;
				var rows = node.rows;
				node.children = build(group.rows, function (i) {
					return rows[i];
				});
			};

			for (var _i = 0, _length = keys.length; _i < _length; _i++) {
				_loop(_i, _length);
			}
		}

		return nodes;
	};
}

/***/ }),
/* 160 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resource_resource__ = __webpack_require__(4);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var NodeModel = function NodeModel() {
	_classCallCheck(this, NodeModel);

	this.resource = new __WEBPACK_IMPORTED_MODULE_0__resource_resource__["a" /* default */]();
	this.offset = 20;
};

/* harmony default export */ __webpack_exports__["a"] = NodeModel;

/***/ }),
/* 161 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resource_resource__ = __webpack_require__(4);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var PaginationModel = function PaginationModel() {
	_classCallCheck(this, PaginationModel);

	this.resource = new __WEBPACK_IMPORTED_MODULE_0__resource_resource__["a" /* default */]();
	this.current = 0;
	this.size = 50;
	this.sizeList = [5, 10, 20, 30, 40, 50];
};

/* harmony default export */ __webpack_exports__["a"] = PaginationModel;

/***/ }),
/* 162 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_services_middleware__ = __webpack_require__(189);
/* harmony export (immutable) */ __webpack_exports__["a"] = build;


function build(model, valueFactory) {
	return function run(source, changes, pipe) {
		var pipes = pipe || model.data().pipe;
		var middleware = new __WEBPACK_IMPORTED_MODULE_0_core_services_middleware__["a" /* default */](pipes);
		var context = {
			model: model,
			source: source,
			valueFactory: valueFactory,
			changes: changes
		};

		return middleware.run(context);
	};
}

/***/ }),
/* 163 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = pipeData;
function pipeData(data, context, next) {
	var model = context.model;
	var result = data.length ? data : model.data().rows;
	next(Array.from(result));
}

/***/ }),
/* 164 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = pipeFilter;
function pipeFilter(data, context, next) {
	var model = context.model;
	var filterState = model.filter();
	var match = filterState.match(context);
	var result = [];

	for (var i = 0, length = data.length; i < length; i++) {
		var item = data[i];
		if (match(item)) {
			result.push(item);
		}
	}

	next(result);
}

/***/ }),
/* 165 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_column_column_service__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_node_node_builder__ = __webpack_require__(159);
/* harmony export (immutable) */ __webpack_exports__["a"] = pipeGroup;



function pipeGroup(memo, context, next) {
	var model = context.model;
	var dataState = model.data();
	var groupState = model.group();

	var build = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_core_node_node_builder__["a" /* default */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_core_column_column_service__["a" /* map */])(dataState.columns), groupState.by, context.valueFactory);

	memo.nodes = build(memo.rows);
	next(memo);
}

/***/ }),
/* 166 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = pipeGroup;
function pipeGroup(data, ctx, next) {
	next({
		rows: data,
		pivot: { heads: [], rows: [] },
		nodes: []
	});
}

/***/ }),
/* 167 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = pipePagination;
function pipePagination(data, context, next) {
	var model = context.model;
	var pagination = model.pagination();
	var size = pagination.size;
	var start = (pagination.current || 0) * size;

	next(data.slice(start, start + size));
}

/***/ }),
/* 168 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_column_column_service__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_pivot_pivot_build__ = __webpack_require__(172);
/* harmony export (immutable) */ __webpack_exports__["a"] = pipePivot;



function pipePivot(memo, context, next) {
	var model = context.model;
	var dataState = model.data();
	var pivotState = model.pivot();
	var build = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_core_pivot_pivot_build__["a" /* default */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_core_column_column_service__["a" /* map */])(dataState.columns), pivotState.by, context.valueFactory);

	memo.pivot = build(memo.rows);
	next(memo);
}

/***/ }),
/* 169 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__infrastructure_error__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_utility__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sort_sort_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__column_column_service__ = __webpack_require__(5);
/* harmony export (immutable) */ __webpack_exports__["a"] = pipeSort;





function pipeSort(data, context, next) {
	var values = [];
	var directions = [];
	var model = context.model;
	var dataState = model.data();
	var columns = dataState.columns;
	var sort = model.sort();
	var by = sort.by;

	for (var i = 0, length = by.length; i < length; i++) {
		var item = by[i],
		    key = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__sort_sort_service__["a" /* key */])(item),
		    value = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__sort_sort_service__["c" /* direction */])(item),
		    column = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__column_column_service__["d" /* find */])(columns, key);

		if (!column) {
			throw new __WEBPACK_IMPORTED_MODULE_0__infrastructure_error__["a" /* default */]('column.service', 'Column "' + key + '" is not found');
		}

		values.push(context.valueFactory(column));
		directions.push(value);
	}

	var result = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__services_utility__["m" /* orderBy */])(data, values, directions);

	next(result);
}

/***/ }),
/* 170 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_node_node_service__ = __webpack_require__(74);
/* harmony export (immutable) */ __webpack_exports__["a"] = pipeView;


function pipeView(memo, context, next) {
	var model = context.model;
	var rows = memo.nodes.length ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_core_node_node_service__["a" /* flatView */])(memo.nodes) : memo.rows;

	model.view({
		rows: rows,
		nodes: memo.nodes,
		pivot: memo.pivot,
		columns: memo.columns
	});

	next(memo);
}

/***/ }),
/* 171 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pipe_column_unit__ = __webpack_require__(77);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var PipeUnit = function () {
	function PipeUnit() {
		_classCallCheck(this, PipeUnit);
	}

	_createClass(PipeUnit, null, [{
		key: 'column',
		get: function get() {
			return __WEBPACK_IMPORTED_MODULE_0__pipe_column_unit__["a" /* default */];
		}
	}]);

	return PipeUnit;
}();

/* harmony default export */ __webpack_exports__["a"] = PipeUnit;

/***/ }),
/* 172 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_services_utility__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pivot__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pivot_form__ = __webpack_require__(173);




function build(columnMap, valueFactory) {
	return function run(pivot, pivotBy) {
		var level = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

		var key = pivotBy[0];
		var column = columnMap[key];
		var getValue = valueFactory(column);

		return pivot({
			factory: function factory() {
				return {};
			},
			selector: function selector(row) {
				return [getValue(row)];
			},
			name: __WEBPACK_IMPORTED_MODULE_0_core_services_utility__["k" /* identity */],
			value: function value(parent, row, pivot) {
				var nextPivotBy = pivotBy.slice(1);
				if (nextPivotBy.length) {
					return run(pivot, nextPivotBy, level + 1)(row);
				}

				return true;
			}
		});
	};
}

/* harmony default export */ __webpack_exports__["a"] = function (columnMap, pivotBy, valueFactory) {
	var doPivot = null;
	if (pivotBy.length) {
		var doBuild = build(columnMap, valueFactory);
		doPivot = doBuild(__WEBPACK_IMPORTED_MODULE_1__pivot__["a" /* default */], pivotBy);
	}

	return function (rows) {
		if (doPivot) {
			var data = doPivot(rows);
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__pivot_form__["a" /* default */])(data);
		}

		return { heads: [], rows: [] };
	};
};

/***/ }),
/* 173 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_services_utility__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["a"] = view;
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }



function injectData(schema, source, target) {
	return Object.keys(source).filter(function (key) {
		return !schema.hasOwnProperty(key);
	}).reduce(function (memo, key) {
		memo[key] = source[key];
		return memo;
	}, target);
}

function expandData(schema, source) {
	var baseline = Object.keys(schema).map(function (key) {
		var node = schema[key];
		return source && source.hasOwnProperty(key) ? expandData(node, source[key]) : expandData(node);
	});

	return baseline.length ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_core_services_utility__["l" /* flatten */])(baseline, true) : [source];
}

function liftSchema(schema) {
	var baseline = [];

	function lift(schema, depth) {
		var derivatives = schema ? Object.keys(schema).map(function (key) {
			var node = schema[key];
			return {
				key: key,
				value: lift(node, depth + 1)
			};
		}) : [];

		if (derivatives.length > 0) if (!baseline[depth]) {
			baseline[depth] = derivatives;
		} else {
			var _baseline$depth;

			(_baseline$depth = baseline[depth]).push.apply(_baseline$depth, _toConsumableArray(derivatives));
		}

		return derivatives.length && derivatives.reduce(function (memo, d) {
			return memo + d.value;
		}, 0) || 1;
	}

	lift(schema, 0);
	return baseline;
}

function sortSchema(schema, comparator) {
	return Object.keys(schema).sort(comparator).reduce(function (memo, key) {
		memo[key] = sortSchema(schema[key], comparator);
		return memo;
	}, {});
}

function view(source, comparator) {
	if (source.schema && source.data) {
		var _ret = function () {
			var schema = sortSchema(source.schema, comparator);
			var rows = source.data.map(function (row) {
				return injectData(schema, row, expandData(schema, row));
			});
			var heads = liftSchema(schema);
			return {
				v: { heads: heads, rows: rows }
			};
		}();

		if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	}

	return { heads: [], rows: [] };
}

/***/ }),
/* 174 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = pivot;
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Plan = function () {
	function Plan(schema) {
		_classCallCheck(this, Plan);

		this.isRoot = !arguments.length;
		this.current = this.schema = schema || {};
	}

	_createClass(Plan, [{
		key: "branch",
		value: function branch() {
			return new Plan(this.current);
		}
	}, {
		key: "cursor",
		value: function cursor(name) {
			var schema = this.schema;
			this.current = schema.hasOwnProperty(name) ? schema[name] : schema[name] = {};
		}
	}, {
		key: "compile",
		value: function compile(data) {
			if (this.isRoot) {
				return {
					schema: this.schema,
					data: data
				};
			} else {
				return data;
			}
		}
	}]);

	return Plan;
}();

function factory(plan) {
	return function (name) {
		plan.cursor(name);
		return function (settings) {
			return pivot(settings, plan.branch());
		};
	};
}

function pivot(settings, plan) {
	plan = plan || new Plan();

	var pivot = factory(plan);
	var aggregate = function aggregate(row) {
		return settings.selector(row).reduce(function (memo, selection) {
			var name = settings.name(selection);
			memo[name] = settings.value(selection, row, pivot(name));
			return memo;
		}, settings.factory(row));
	};

	return function (rows) {
		return plan.compile(plan.isRoot ? rows.map(aggregate) : aggregate(rows));
	};
}

/***/ }),
/* 175 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resource_resource__ = __webpack_require__(4);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var PivotModel = function PivotModel() {
	_classCallCheck(this, PivotModel);

	this.resource = new __WEBPACK_IMPORTED_MODULE_0__resource_resource__["a" /* default */]();
	this.by = [];
};

/* harmony default export */ __webpack_exports__["a"] = PivotModel;

/***/ }),
/* 176 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_view_view__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_group_group_build__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_infrastructure_log__ = __webpack_require__(14);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var PivotView = function (_View) {
	_inherits(PivotView, _View);

	function PivotView(model, valueFactory) {
		_classCallCheck(this, PivotView);

		var _this = _possibleConstructorReturn(this, (PivotView.__proto__ || Object.getPrototypeOf(PivotView)).call(this, model));

		_this.rows = [];
		_this.valueFactory = valueFactory;

		model.viewChanged.watch(function () {
			return _this.invalidate(model);
		});
		return _this;
	}

	_createClass(PivotView, [{
		key: 'invalidate',
		value: function invalidate(model) {
			__WEBPACK_IMPORTED_MODULE_2_core_infrastructure_log__["a" /* default */].info('view.pivot', 'invalidate');

			var pivot = model.view().pivot;
			var pivotRows = pivot.rows;
			if (pivotRows.length && model.group().by.length) {
				var build = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_core_group_group_build__["a" /* default */])(model);
				this.rows = build(this.valueFactory);
			} else {
				this.rows = pivotRows;
			}
		}
	}, {
		key: 'value',
		value: function value(row, column) {
			var rowIndex = this.model.view().rows.indexOf(row);
			return this.rows[rowIndex][column.columnIndex];
		}
	}]);

	return PivotView;
}(__WEBPACK_IMPORTED_MODULE_0_core_view_view__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = PivotView;

/***/ }),
/* 177 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resource_resource__ = __webpack_require__(4);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var PluginModel = function PluginModel() {
	_classCallCheck(this, PluginModel);

	this.resource = new __WEBPACK_IMPORTED_MODULE_0__resource_resource__["a" /* default */]();
};

/* harmony default export */ __webpack_exports__["a"] = PluginModel;

/***/ }),
/* 178 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resource_resource__ = __webpack_require__(4);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var ProgressModel = function ProgressModel() {
	_classCallCheck(this, ProgressModel);

	this.resource = new __WEBPACK_IMPORTED_MODULE_0__resource_resource__["a" /* default */]();
	this.isBusy = false;
};

/* harmony default export */ __webpack_exports__["a"] = ProgressModel;

/***/ }),
/* 179 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_resource_resource__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_resource_resource_enumerable__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_infrastructure_error__ = __webpack_require__(3);
/* harmony export (immutable) */ __webpack_exports__["a"] = factory;
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };





function factory(resource, key) {
	var data = resource.data;
	if (resource instanceof __WEBPACK_IMPORTED_MODULE_1_core_resource_resource_enumerable__["a" /* default */]) {
		var _ret = function () {
			var keyIndex = 1;
			var count = resource.count;
			var originKey = key;
			while (data.hasOwnProperty(key)) {
				key = originKey + keyIndex++;
			}

			if (count < keyIndex) {
				count = keyIndex;
			}

			return {
				v: function v(content, scope) {
					// TODO: do we need full clone here?
					data[key] = content;
					return new __WEBPACK_IMPORTED_MODULE_1_core_resource_resource_enumerable__["a" /* default */](data, scope, count);
				}
			};
		}();

		if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	}

	if (data.hasOwnProperty(key)) {
		throw new __WEBPACK_IMPORTED_MODULE_2_core_infrastructure_error__["a" /* default */]('resource.factory', 'Ambiguous key "' + key + '"');
	}

	return function (content, scope) {
		// TODO: do we need full clone here?
		data[key] = content;
		return new __WEBPACK_IMPORTED_MODULE_0_core_resource_resource__["a" /* default */](data, scope);
	};
}

/***/ }),
/* 180 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resource_resource__ = __webpack_require__(4);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var RowModel = function RowModel() {
	_classCallCheck(this, RowModel);

	this.resource = new __WEBPACK_IMPORTED_MODULE_0__resource_resource__["a" /* default */]();
};

/* harmony default export */ __webpack_exports__["a"] = RowModel;

/***/ }),
/* 181 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__selection__ = __webpack_require__(79);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var MultipleSelection = function (_Selection) {
	_inherits(MultipleSelection, _Selection);

	function MultipleSelection(model) {
		_classCallCheck(this, MultipleSelection);

		var _this = _possibleConstructorReturn(this, (MultipleSelection.__proto__ || Object.getPrototypeOf(MultipleSelection)).call(this, model));

		_this.items = new Set();
		return _this;
	}

	_createClass(MultipleSelection, [{
		key: 'selectCore',
		value: function selectCore(item, state) {
			if (state) {
				this.items.add(item);
			} else {
				this.items.delete(item);
			}
		}
	}, {
		key: 'stateCore',
		value: function stateCore(item) {
			return this.items.has(item);
		}
	}, {
		key: 'view',
		get: function get() {
			return Array.from(this.items);
		}
	}]);

	return MultipleSelection;
}(__WEBPACK_IMPORTED_MODULE_0__selection__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = MultipleSelection;

/***/ }),
/* 182 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__selection__ = __webpack_require__(79);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var SingleSelection = function (_Selection) {
	_inherits(SingleSelection, _Selection);

	function SingleSelection(model) {
		_classCallCheck(this, SingleSelection);

		var _this = _possibleConstructorReturn(this, (SingleSelection.__proto__ || Object.getPrototypeOf(SingleSelection)).call(this, model));

		_this.item = null;
		return _this;
	}

	_createClass(SingleSelection, [{
		key: 'selectCore',
		value: function selectCore(item, state) {
			if (state) {
				this.item = item;
			} else {
				this.item = null;
			}
		}
	}, {
		key: 'stateCore',
		value: function stateCore(item) {
			return item === this.item;
		}
	}, {
		key: 'view',
		get: function get() {
			return [this.item];
		}
	}]);

	return SingleSelection;
}(__WEBPACK_IMPORTED_MODULE_0__selection__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = SingleSelection;

/***/ }),
/* 183 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_infrastructure_error__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__behaviors_single_selection__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__behaviors_multiple_selection__ = __webpack_require__(181);




/* harmony default export */ __webpack_exports__["a"] = function (model) {
	var mode = model.selection().mode;
	switch (mode) {
		case 'single':
			return new __WEBPACK_IMPORTED_MODULE_1__behaviors_single_selection__["a" /* default */](model);
		case 'multiple':
			return new __WEBPACK_IMPORTED_MODULE_2__behaviors_multiple_selection__["a" /* default */](model);
		default:
			throw new __WEBPACK_IMPORTED_MODULE_0_core_infrastructure_error__["a" /* default */]('selection.factory', 'Invalid selection mode "' + mode + '"');
	}
};

/***/ }),
/* 184 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_resource_resource__ = __webpack_require__(4);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var SelectionModel = function SelectionModel() {
	_classCallCheck(this, SelectionModel);

	this.resource = new __WEBPACK_IMPORTED_MODULE_0_core_resource_resource__["a" /* default */]();
	this.unit = 'cell'; //row|cell|column
	this.mode = 'single'; //single|multiple
	this.items = [];
};

/* harmony default export */ __webpack_exports__["a"] = SelectionModel;

/***/ }),
/* 185 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view_view__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_infrastructure_command__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__selection_factory__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_services_utility__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var SelectionView = function (_View) {
	_inherits(SelectionView, _View);

	function SelectionView(model) {
		_classCallCheck(this, SelectionView);

		var _this = _possibleConstructorReturn(this, (SelectionView.__proto__ || Object.getPrototypeOf(SelectionView)).call(this, model));

		_this.behavior = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__selection_factory__["a" /* default */])(model);

		_this.toggle = new __WEBPACK_IMPORTED_MODULE_1_core_infrastructure_command__["a" /* default */]({
			execute: function execute(item, state) {
				if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_core_services_utility__["e" /* isUndefined */])(item)) {
					item = model.view().rows;
				}

				if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_core_services_utility__["e" /* isUndefined */])(state)) {
					state = _this.behavior.state(item);
					_this.behavior.select(item, state === null || !state);
				} else {
					_this.behavior.select(item, state);
				}

				model.selection({ items: _this.behavior.view }, { source: 'toggle' });
			}
		});

		model.viewChanged.watch(function () {
			return _this.behavior = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__selection_factory__["a" /* default */])(model);
		});

		model.selectionChanged.watch(function (e) {
			if (e.tag.source !== 'toggle' && e.changes.hasOwnProperty('items')) {
				_this.behavior.select(e.state.items, true);
			}

			if (e.changes.hasOwnProperty('unit') || e.changes.hasOwnProperty('mode')) {
				_this.behavior = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__selection_factory__["a" /* default */])(model);
			}
		});
		return _this;
	}

	_createClass(SelectionView, [{
		key: 'state',
		value: function state(item) {
			if (!arguments.length) {
				item = this.model.view().rows;
			}

			return this.behavior.state(item) === true;
		}
	}, {
		key: 'isIndeterminate',
		value: function isIndeterminate(item) {
			if (!arguments.length) {
				item = this.model.view().rows;
			}

			return this.behavior.state(item) === null;
		}
	}]);

	return SelectionView;
}(__WEBPACK_IMPORTED_MODULE_0__view_view__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = SelectionView;

/***/ }),
/* 186 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_pipe_pipe_build__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_infrastructure_log__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_services_utility__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





var GridService = function () {
	function GridService(model, valueFactory) {
		var apply = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : __WEBPACK_IMPORTED_MODULE_2_core_services_utility__["b" /* noop */];

		_classCallCheck(this, GridService);

		this.model = model;
		this.valueFactory = valueFactory;
		this.apply = apply;
	}

	_createClass(GridService, [{
		key: 'invalidate',
		value: function invalidate() {
			var source = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'invalidate';
			var changes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
			var pipe = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

			__WEBPACK_IMPORTED_MODULE_1_core_infrastructure_log__["a" /* default */].info('invalidate', source);

			var model = this.model;
			model.head().cache.clear();
			model.body().cache.clear();
			model.foot().cache.clear();

			model.progress({ isBusy: true });
			var run = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_core_pipe_pipe_build__["a" /* default */])(model, this.valueFactory);
			return run(source, changes, pipe).then(this.apply).then(function () {
				return model.progress({ isBusy: false });
			}).catch(function () {
				return model.progress({ isBusy: false });
			});
		}
	}]);

	return GridService;
}();

/* harmony default export */ __webpack_exports__["a"] = GridService;

/***/ }),
/* 187 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = guid;
function guid() {
	function p8(s) {
		var p = (Math.random().toString(16) + '000000000').substr(2, 8);
		return s ? '-' + p.substr(0, 4) + '-' + p.substr(4, 4) : p;
	}

	return p8() + p8(true) + p8(true) + p8();
}

/***/ }),
/* 188 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = build;
function build(style) {
	return Object.keys(style).reduce(function (memo, key) {
		var entry = style[key];
		var body = Object.keys(entry).reduce(function (memo, key) {
			memo.push(key + ':' + entry[key] + ' !important;');
			return memo;
		}, []);

		memo.push(key + '{' + body.join('') + '}');
		return memo;
	}, []).join('');
}

/***/ }),
/* 189 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Middleware = function () {
	function Middleware(pipes) {
		_classCallCheck(this, Middleware);

		this.pipes = pipes;
	}

	_createClass(Middleware, [{
		key: "run",
		value: function run(context) {
			var memo = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

			var pipes = this.pipes.map(function (pipe) {
				return function (memo) {
					return new Promise(function (resolve, reject) {
						return pipe(memo, context, resolve, reject);
					});
				};
			});

			return start(pipes, memo);
		}
	}]);

	return Middleware;
}();

/* harmony default export */ __webpack_exports__["a"] = Middleware;


function start(pipes, memo) {
	pipes = Array.from(pipes);
	return new Promise(function (resolve, reject) {
		invoke(memo);

		function invoke(memo) {
			if (pipes.length) {
				var pipe = pipes.shift();
				var promise = pipe(memo);
				promise.then(invoke).catch(reject);
			} else {
				resolve(memo);
			}
		}
	});
}

/***/ }),
/* 190 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_infrastructure_error__ = __webpack_require__(3);
/* harmony export (immutable) */ __webpack_exports__["a"] = key;
/* harmony export (immutable) */ __webpack_exports__["b"] = index;
/* harmony export (immutable) */ __webpack_exports__["c"] = value;
/* harmony export (immutable) */ __webpack_exports__["d"] = map;


function key(pair) {
	var key = Object.keys(pair)[0];
	if (!key) {
		throw new __WEBPACK_IMPORTED_MODULE_0_core_infrastructure_error__["a" /* default */]('pair', 'Key is not defined in "' + pair + '"');
	}

	return key;
}

function index(pairs, pairKey) {
	return pairs.map(key).findIndex(function (k) {
		return k === pairKey;
	});
}

function value(pair) {
	var pairKey = key(pair);
	return pair[pairKey];
}

function map(pairs) {
	return pairs.reduce(function (memo, pair) {
		var pairKey = key(pair);
		memo[pairKey] = pair[pairKey];
		return memo;
	}, {});
}

/***/ }),
/* 191 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resource_resource__ = __webpack_require__(4);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var SortModel = function SortModel() {
	_classCallCheck(this, SortModel);

	this.resource = new __WEBPACK_IMPORTED_MODULE_0__resource_resource__["a" /* default */]();
	this.by = [];
	this.mode = 'multiple';
};

/* harmony default export */ __webpack_exports__["a"] = SortModel;

/***/ }),
/* 192 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_view_view__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_infrastructure_error__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_infrastructure_command__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_column_column_service__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_sort_sort_service__ = __webpack_require__(39);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var SortView = function (_View) {
	_inherits(SortView, _View);

	function SortView(model) {
		_classCallCheck(this, SortView);

		var _this = _possibleConstructorReturn(this, (SortView.__proto__ || Object.getPrototypeOf(SortView)).call(this, model));

		_this.toggle = new __WEBPACK_IMPORTED_MODULE_2_core_infrastructure_command__["a" /* default */]({
			canExecute: function canExecute(key) {
				var map = __WEBPACK_IMPORTED_MODULE_3_core_column_column_service__["a" /* map */](model.data().columns);
				return map.hasOwnProperty(key) && map[key].canSort !== false;
			},
			execute: function execute(key) {
				var sort = model.sort;
				var sortState = sort();
				var by = Array.from(sortState.by);
				var index = __WEBPACK_IMPORTED_MODULE_4_core_sort_sort_service__["b" /* index */](by, key);
				if (index >= 0) {
					var dir = __WEBPACK_IMPORTED_MODULE_4_core_sort_sort_service__["c" /* direction */](by[index]);
					switch (dir) {
						case 'desc':
							{
								by.splice(index, 1);
								break;
							}
						case 'asc':
							{
								var entry = _defineProperty({}, key, 'desc');
								by.splice(index, 1);
								by.splice(index, 0, entry);
								break;
							}
						default:
							throw __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_core_infrastructure_error__["a" /* default */])('head.core', 'Invalid sort direction ' + dir);
					}
				} else {
					if (sortState.mode === 'single') {
						by.length = 0;
					}

					var _entry2 = _defineProperty({}, key, 'asc');
					by.push(_entry2);
				}

				sort({ by: by });
			}
		});
		return _this;
	}

	_createClass(SortView, [{
		key: 'direction',
		value: function direction(key) {
			var state = this.model.sort();
			var by = state.by;
			return __WEBPACK_IMPORTED_MODULE_4_core_sort_sort_service__["d" /* map */](by)[key];
		}
	}, {
		key: 'order',
		value: function order(key) {
			var state = this.model.sort();
			var by = state.by;
			return __WEBPACK_IMPORTED_MODULE_4_core_sort_sort_service__["b" /* index */](by, key);
		}
	}]);

	return SortView;
}(__WEBPACK_IMPORTED_MODULE_0_core_view_view__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = SortView;

/***/ }),
/* 193 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resource_resource__ = __webpack_require__(4);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var ToolbarModel = function ToolbarModel() {
	_classCallCheck(this, ToolbarModel);

	this.resource = new __WEBPACK_IMPORTED_MODULE_0__resource_resource__["a" /* default */]();
};

/* harmony default export */ __webpack_exports__["a"] = ToolbarModel;

/***/ }),
/* 194 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ViewModel = function ViewModel() {
	_classCallCheck(this, ViewModel);

	this.items = [];
	this.rows = [];
	this.columns = [];
	this.nodes = [];
	this.pivot = { heads: [], rows: [] };
};

/* harmony default export */ __webpack_exports__["a"] = ViewModel;

/***/ }),
/* 195 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resource_resource__ = __webpack_require__(4);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var VisibilityModel = function VisibilityModel() {
	_classCallCheck(this, VisibilityModel);

	this.resource = new __WEBPACK_IMPORTED_MODULE_0__resource_resource__["a" /* default */]();
	this.head = true;
	this.foot = true;
	this.body = true;
	this.toolbar = {
		top: true,
		bottom: true,
		right: false,
		left: false
	};
	this.plugin = {};
};

/* harmony default export */ __webpack_exports__["a"] = VisibilityModel;

/***/ }),
/* 196 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ng_directives_directive__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng_definition__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_infrastructure_event_listener__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_services_path_find__ = __webpack_require__(241);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var BodyCore = function (_Directive) {
	_inherits(BodyCore, _Directive);

	function BodyCore($scope, $element) {
		_classCallCheck(this, BodyCore);

		var _this = _possibleConstructorReturn(this, (BodyCore.__proto__ || Object.getPrototypeOf(BodyCore)).call(this));

		_this.$scope = $scope;
		_this.element = $element[0];
		_this.listener = new __WEBPACK_IMPORTED_MODULE_2_core_infrastructure_event_listener__["a" /* default */](_this, _this.element);
		_this.listener.on('scroll', _this.onScroll);

		Object.defineProperty($scope, '$view', { get: function get() {
				return _this.view;
			} });
		return _this;
	}

	_createClass(BodyCore, [{
		key: 'onScroll',
		value: function onScroll() {
			var element = this.element;
			var layout = this.view.model.layout;

			layout({
				scroll: {
					top: element.scrollTop,
					left: element.scrollLeft,
					width: element.scrollWidth,
					height: element.scrollHeight
				}
			});
		}
	}, {
		key: 'onInit',
		value: function onInit() {
			this.listener.on('click', this.onClick);
		}
	}, {
		key: 'onDestroy',
		value: function onDestroy() {
			this.listener.off();
		}
	}, {
		key: 'onClick',
		value: function onClick(e) {
			var _this2 = this;

			var cell = __WEBPACK_IMPORTED_MODULE_3_ng_services_path_find__["a" /* cell */](e.path);
			if (cell) {
				this.view.model.navigation({
					active: {
						cell: cell
					},
					column: cell.$element[0].cellIndex,
					row: cell.$element[0].parentNode.rowIndex - 1
				});
				if (this.view.edit.cell.enter.canExecute(cell)) {
					this.$scope.$evalAsync(function () {
						return _this2.view.edit.cell.enter.execute(cell);
					});
				}

				if (cell.column.type !== 'select') {
					(function () {
						var model = _this2.view.model;
						var row = model.view().rows[cell.rowIndex];
						if (row && _this2.view.selection.toggle.canExecute(row)) {
							_this2.$scope.$evalAsync(function () {
								return _this2.view.selection.toggle.execute(row);
							});
						}
					})();
				}
			}
		}
	}]);

	return BodyCore;
}(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_ng_directives_directive__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1_ng_definition__["A" /* BODY_CORE_NAME */], { view: '^^' + __WEBPACK_IMPORTED_MODULE_1_ng_definition__["m" /* VIEW_CORE_NAME */] }));

BodyCore.$inject = ['$scope', '$element'];

/* harmony default export */ __webpack_exports__["a"] = {
	restrict: 'A',
	bindToController: true,
	controllerAs: '$body',
	controller: BodyCore,
	require: BodyCore.require,
	link: BodyCore.link,
	scope: true
};

/***/ }),
/* 197 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ng_directives_directive__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__template_template_link__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cell_cell_build__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_infrastructure_error__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_definition__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_definition__ = __webpack_require__(17);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var TdCore = function (_Directive) {
	_inherits(TdCore, _Directive);

	function TdCore($scope, $element, $compile, $templateCache) {
		_classCallCheck(this, TdCore);

		var _this = _possibleConstructorReturn(this, (TdCore.__proto__ || Object.getPrototypeOf(TdCore)).call(this));

		_this.$scope = $scope;
		_this.$element = $element;
		_this.$templateScope = null;
		_this.template = new __WEBPACK_IMPORTED_MODULE_1__template_template_link__["a" /* default */]($compile, $templateCache);
		return _this;
	}

	_createClass(TdCore, [{
		key: 'onInit',
		value: function onInit() {
			var column = this.column;
			var element = this.$element[0];

			element.classList.add(__WEBPACK_IMPORTED_MODULE_5_core_definition__["a" /* GRID_PREFIX */] + '-' + column.key);
			element.classList.add(__WEBPACK_IMPORTED_MODULE_5_core_definition__["a" /* GRID_PREFIX */] + '-' + column.type);
			if (column.hasOwnProperty('editor')) {
				element.classList.add(__WEBPACK_IMPORTED_MODULE_5_core_definition__["a" /* GRID_PREFIX */] + '-' + column.editor);
			}

			this.mode('init');
		}
	}, {
		key: 'mode',
		value: function mode(value) {
			var model = this.view.model;
			var column = this.column;
			var templateScope = this.setup();
			var cache = model.body().cache;
			var element = this.$element[0];

			switch (value) {
				case 'view':
				case 'init':
					{
						var link = cache.find(column.key);
						if (!link) {
							var build = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__cell_cell_build__["a" /* default */])(this.template);
							link = build('body', model, column);
							cache.set(column.key, link);
						}

						link(this.$element, templateScope);
						if (value !== 'init') {
							element.classList.remove(__WEBPACK_IMPORTED_MODULE_5_core_definition__["a" /* GRID_PREFIX */] + '-edit');
						}
						break;
					}
				case 'edit':
					{
						var _link = cache.find(column.key + '.edit');
						if (!_link) {
							var _build = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__cell_cell_build__["a" /* default */])(this.template, 'edit');
							_link = _build('body', model, column);
							cache.set(column.key + '.edit', _link);
						}

						_link(this.$element, templateScope);
						element.classList.add(__WEBPACK_IMPORTED_MODULE_5_core_definition__["a" /* GRID_PREFIX */] + '-edit');
					}
					break;
				default:
					throw new __WEBPACK_IMPORTED_MODULE_3_core_infrastructure_error__["a" /* default */]('td.core', 'Invalid mode ' + value);
			}
		}
	}, {
		key: 'setup',
		value: function setup() {
			if (this.$templateScope) {
				this.$templateScope.$destroy();
			}

			this.$templateScope = this.$scope.$new();
			return this.$templateScope;
		}
	}, {
		key: 'value',
		get: function get() {
			var column = this.column;
			var row = this.row;
			return this.view.body.value(row, column);
		}
	}, {
		key: 'rowIndex',
		get: function get() {
			// use vscroll.row + vscroll.position in the future
			return this.$scope.$parent.$parent.$index;
		}
	}, {
		key: 'columnIndex',
		get: function get() {
			// use vscroll.column + vscroll.position in the future
			return this.$scope.$index;
		}
	}, {
		key: 'column',
		get: function get() {
			return this.$scope.$column.model;
		}
	}, {
		key: 'row',
		get: function get() {
			return this.$scope.$row;
		}
	}]);

	return TdCore;
}(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_ng_directives_directive__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_4_ng_definition__["w" /* TD_CORE_NAME */], { view: '^^' + __WEBPACK_IMPORTED_MODULE_4_ng_definition__["m" /* VIEW_CORE_NAME */] }));

TdCore.$inject = ['$scope', '$element', '$compile', '$templateCache'];

/* harmony default export */ __webpack_exports__["a"] = {
	restrict: 'A',
	bindToController: true,
	controllerAs: '$cell',
	controller: TdCore,
	require: TdCore.require,
	link: TdCore.link
};

/***/ }),
/* 198 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng_definition__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_services_utility__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_template_template_path__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_services_ng__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_services_path__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_column_column_service__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_column_column_factory__ = __webpack_require__(52);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










__WEBPACK_IMPORTED_MODULE_3_core_template_template_path__["a" /* default */].register(__WEBPACK_IMPORTED_MODULE_1_ng_definition__["q" /* COLUMN_NAME */], function (template, column) {
	return {
		model: template.for,
		resource: column.key
	};
});

var Column = function (_Component) {
	_inherits(Column, _Component);

	function Column($attrs) {
		_classCallCheck(this, Column);

		var _this = _possibleConstructorReturn(this, (Column.__proto__ || Object.getPrototypeOf(Column)).call(this));

		_this.$attrs = $attrs;
		return _this;
	}

	_createClass(Column, [{
		key: 'copy',
		value: function copy(source, target) {
			Object.keys(target).filter(function (key) {
				return !__WEBPACK_IMPORTED_MODULE_4_ng_services_ng__["a" /* isSystem */](key) && key != 'value';
			}).forEach(function (attr) {
				var accessor = __WEBPACK_IMPORTED_MODULE_5_core_services_path__["a" /* compile */](attr);
				accessor(source, target[attr]);
			});

			if (target.hasOwnProperty('value')) {
				// HACK: to understand if need to pass {$row: row} instead of just row in cell.core.js
				source.$value = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_core_services_utility__["e" /* isUndefined */])(this.value) ? null : this.value;
			}
		}
	}, {
		key: 'onInit',
		value: function onInit() {
			var $attrs = this.$attrs;
			if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_core_services_utility__["e" /* isUndefined */])(this.key)) {
				if ($attrs.hasOwnProperty('type')) {
					this.key = '$default.' + $attrs.type;
				} else {
					this.key = '$default';
				}
			}

			var data = this.root.model.data;
			var dataState = data();
			var columns = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_core_services_utility__["c" /* clone */])(dataState.columns);
			var column = __WEBPACK_IMPORTED_MODULE_6_core_column_column_service__["d" /* find */](columns, this.key);
			if (!column) {
				column = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_core_column_column_factory__["a" /* default */])($attrs.type || 'text').model;
				column.key = this.key;
				columns.source = 'template';
				columns.push(column);
			}

			this.copy(column, $attrs);
			this.columnList.add(column);
		}
	}]);

	return Column;
}(__WEBPACK_IMPORTED_MODULE_0__component__["a" /* default */]);

Column.$inject = ['$attrs'];

/* harmony default export */ __webpack_exports__["a"] = {
	require: {
		root: '^^' + __WEBPACK_IMPORTED_MODULE_1_ng_definition__["k" /* GRID_NAME */],
		columnList: '^^' + __WEBPACK_IMPORTED_MODULE_1_ng_definition__["p" /* COLUMN_LIST_NAME */]
	},
	controller: Column,
	bindings: {
		value: '&',
		key: '@'
	}
};

/***/ }),
/* 199 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_component__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_column_list_column_list_generate__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_infrastructure_error__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_services_utility__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_services_merge__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_column_column_service__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng_definition__ = __webpack_require__(1);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var ColumnList = function (_ModelComponent) {
	_inherits(ColumnList, _ModelComponent);

	function ColumnList() {
		_classCallCheck(this, ColumnList);

		var _this = _possibleConstructorReturn(this, (ColumnList.__proto__ || Object.getPrototypeOf(ColumnList)).call(this, 'columnList'));

		_this.columns = [];
		return _this;
	}

	// Use onLink to wait while this.columns will be filled by column components


	_createClass(ColumnList, [{
		key: 'onLink',
		value: function onLink() {
			var _this2 = this;

			var model = this.root.model;
			var data = model.data;
			var generation = this.columnListGeneration;
			if (generation) {
				model.dataChanged.watch(function (e) {
					if (e.changes.hasOwnProperty('rows')) {
						(function () {
							var generatedColumns = [];
							switch (generation) {
								case 'deep':
									generatedColumns.push.apply(generatedColumns, _toConsumableArray(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_core_column_list_column_list_generate__["a" /* generate */])(e.state.rows, true)));
									break;
								case 'shallow':
									generatedColumns.push.apply(generatedColumns, _toConsumableArray(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_core_column_list_column_list_generate__["a" /* generate */])(e.state.rows, false)));
									break;
								default:
									throw new __WEBPACK_IMPORTED_MODULE_2_core_infrastructure_error__["a" /* default */]('column.list', 'Invalid generation mode "' + generation + '"');
							}

							var generatedColumnMap = __WEBPACK_IMPORTED_MODULE_5_core_column_column_service__["a" /* map */](generatedColumns);
							var templateColumnMap = __WEBPACK_IMPORTED_MODULE_5_core_column_column_service__["a" /* map */](_this2.columns);
							var dataColumns = data().columns.filter(function (c) {
								return !generatedColumnMap.hasOwnProperty(c.key) && !templateColumnMap.hasOwnProperty(c.key);
							});
							data({ columns: _this2.merge(_this2.merge(generatedColumns, dataColumns), _this2.columns) });
						})();
					}
				});
			} else {
				data({ columns: this.merge(data().columns, this.columns) });
			}
		}
	}, {
		key: 'merge',
		value: function merge(left, right) {
			var doMerge = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_core_services_merge__["a" /* default */])({
				equals: function equals(l, r) {
					return l.key === r.key;
				},
				update: function update(l, r) {
					return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_core_services_utility__["j" /* assignWith */])(l, r, function (source, target) {
						return !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_core_services_utility__["e" /* isUndefined */])(target) && target !== null ? target : source;
					});
				},
				insert: function insert(r, left) {
					return left.unshift(r);
				},
				remove: __WEBPACK_IMPORTED_MODULE_3_core_services_utility__["b" /* noop */]
			});

			doMerge(left, right);
			return left;
		}
	}, {
		key: 'add',
		value: function add(column) {
			this.columns.push(column);
		}
	}]);

	return ColumnList;
}(__WEBPACK_IMPORTED_MODULE_0__model_component__["a" /* default */]);

ColumnList.$inject = [];

/* harmony default export */ __webpack_exports__["a"] = {
	require: {
		root: '^^' + __WEBPACK_IMPORTED_MODULE_6_ng_definition__["k" /* GRID_NAME */]
	},
	controller: ColumnList,
	bindings: {
		columnListGeneration: '@generation'
	}
};

/***/ }),
/* 200 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ng_directives_directive__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_infrastructure_event_listener__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__drag_service__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_definition__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_definition__ = __webpack_require__(17);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var Drag = function (_Directive) {
	_inherits(Drag, _Directive);

	function Drag($element) {
		_classCallCheck(this, Drag);

		var _this = _possibleConstructorReturn(this, (Drag.__proto__ || Object.getPrototypeOf(Drag)).call(this));

		_this.element = $element[0];
		_this.listener = new __WEBPACK_IMPORTED_MODULE_1_core_infrastructure_event_listener__["a" /* default */](_this, _this.element);
		return _this;
	}

	_createClass(Drag, [{
		key: 'onInit',
		value: function onInit() {
			this.element.classList.add(__WEBPACK_IMPORTED_MODULE_4_core_definition__["a" /* GRID_PREFIX */] + '-can-drag');
			this.listener.on('dragstart', this.start);
			this.listener.on('dragend', this.end.bind(this));
		}
	}, {
		key: 'onDestroy',
		value: function onDestroy() {
			this.element.classList.remove(__WEBPACK_IMPORTED_MODULE_4_core_definition__["a" /* GRID_PREFIX */] + '-can-drag');
			this.listener.off();
		}
	}, {
		key: 'start',
		value: function start(e) {
			var transfer = e.dataTransfer;
			if (this.canDrag(this.event()) === false) {
				e.preventDefault();
				transfer.effectAllowed = 'none';
				return false;
			}

			var source = this.transfer();
			this.element.classList.add(__WEBPACK_IMPORTED_MODULE_4_core_definition__["a" /* GRID_PREFIX */] + '-drag');
			transfer.setData(__WEBPACK_IMPORTED_MODULE_2__drag_service__["a" /* default */].mimeType, __WEBPACK_IMPORTED_MODULE_2__drag_service__["a" /* default */].encode(source));
			transfer.effectAllowed = this.effect || 'move';
			__WEBPACK_IMPORTED_MODULE_2__drag_service__["a" /* default */].transfer = source;

			if (this.view) {
				var model = this.view.model;
				model.drag({ isActive: true });
			}
		}
	}, {
		key: 'end',
		value: function end() {
			this.element.classList.remove(__WEBPACK_IMPORTED_MODULE_4_core_definition__["a" /* GRID_PREFIX */] + '-drag');
			__WEBPACK_IMPORTED_MODULE_2__drag_service__["a" /* default */].transfer = null;

			if (this.view) {
				var model = this.view.model;
				model.drag({ isActive: false });
			}
		}
	}, {
		key: 'event',
		value: function event() {
			var source = this.transfer();
			return {
				$event: {
					source: source,
					target: null
				}
			};
		}
	}]);

	return Drag;
}(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_ng_directives_directive__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_3_ng_definition__["b" /* DRAG_NAME */], { view: '^^?' + __WEBPACK_IMPORTED_MODULE_3_ng_definition__["m" /* VIEW_CORE_NAME */] }));

Drag.$inject = ['$element'];

/* harmony default export */ __webpack_exports__["a"] = {
	restrict: 'A',
	bindToController: {
		'transfer': '&' + __WEBPACK_IMPORTED_MODULE_3_ng_definition__["b" /* DRAG_NAME */],
		'effect': '@' + __WEBPACK_IMPORTED_MODULE_3_ng_definition__["H" /* DROP_EFFECT_NAME */],
		'canDrag': '&' + __WEBPACK_IMPORTED_MODULE_3_ng_definition__["I" /* CAN_DRAG_NAME */]
	},
	controllerAs: '$drag',
	controller: Drag,
	require: Drag.require,
	link: Drag.link
};

/***/ }),
/* 201 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ng_directives_directive__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_infrastructure_event_listener__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__drag_service__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_definition__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_definition__ = __webpack_require__(17);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var Drop = function (_Directive) {
	_inherits(Drop, _Directive);

	function Drop($scope, $element) {
		_classCallCheck(this, Drop);

		var _this = _possibleConstructorReturn(this, (Drop.__proto__ || Object.getPrototypeOf(Drop)).call(this));

		_this.$scope = $scope;
		_this.element = $element[0];
		_this.listener = new __WEBPACK_IMPORTED_MODULE_1_core_infrastructure_event_listener__["a" /* default */](_this, _this.element);
		return _this;
	}

	_createClass(Drop, [{
		key: 'onInit',
		value: function onInit() {
			this.element.classList.add(__WEBPACK_IMPORTED_MODULE_4_core_definition__["a" /* GRID_PREFIX */] + '-can-drop');
			this.listener.on('dragenter', this.enter);
			this.listener.on('dragover', this.over);
			this.listener.on('dragleave', this.leave);
			this.listener.on('drop', this.drop);
		}
	}, {
		key: 'onDestroy',
		value: function onDestroy() {
			this.element.classList.remove(__WEBPACK_IMPORTED_MODULE_4_core_definition__["a" /* GRID_PREFIX */] + '-can-drop');
			this.listener.off();
		}
	}, {
		key: 'drop',
		value: function drop(e) {
			var _this2 = this;

			e.stopPropagation();

			this.element.classList.remove(__WEBPACK_IMPORTED_MODULE_4_core_definition__["a" /* GRID_PREFIX */] + '-dragover');
			var event = this.event(e.dataTransfer);
			if (this.canDrop(event)) {
				this.$scope.$evalAsync(function () {
					return _this2.onDrop(event);
				});
			}

			return false;
		}
	}, {
		key: 'enter',
		value: function enter(e) {
			e.preventDefault();

			this.element.classList.add(__WEBPACK_IMPORTED_MODULE_4_core_definition__["a" /* GRID_PREFIX */] + '-dragover');
			e.dataTransfer.dropEffect = this.effect || 'move';
			return false;
		}
	}, {
		key: 'over',
		value: function over(e) {
			e.preventDefault();

			var effect = this.effect || 'move';
			if (this.element.classList.contains(__WEBPACK_IMPORTED_MODULE_4_core_definition__["a" /* GRID_PREFIX */] + '-drag') || this.canDrop(this.event()) === false) {
				effect = 'none';
			}

			e.dataTransfer.dropEffect = effect;
			return false;
		}
	}, {
		key: 'leave',
		value: function leave() {
			this.element.classList.remove(__WEBPACK_IMPORTED_MODULE_4_core_definition__["a" /* GRID_PREFIX */] + '-dragover');
		}
	}, {
		key: 'event',
		value: function event(e) {
			var target = this.transfer();
			var source = arguments.length ? __WEBPACK_IMPORTED_MODULE_2__drag_service__["a" /* default */].decode(e.getData(__WEBPACK_IMPORTED_MODULE_2__drag_service__["a" /* default */].mimeType)) : __WEBPACK_IMPORTED_MODULE_2__drag_service__["a" /* default */].transfer;

			return {
				$event: {
					source: source,
					target: target
				}
			};
		}
	}]);

	return Drop;
}(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_ng_directives_directive__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_3_ng_definition__["c" /* DROP_NAME */]));

Drop.$inject = ['$scope', '$element'];

/* harmony default export */ __webpack_exports__["a"] = {
	restrict: 'A',
	bindToController: {
		'transfer': '&' + __WEBPACK_IMPORTED_MODULE_3_ng_definition__["c" /* DROP_NAME */],
		'onDrop': '&' + __WEBPACK_IMPORTED_MODULE_3_ng_definition__["F" /* ON_DROP_NAME */],
		'canDrop': '&' + __WEBPACK_IMPORTED_MODULE_3_ng_definition__["G" /* CAN_DROP_NAME */],
		'effect': '@' + __WEBPACK_IMPORTED_MODULE_3_ng_definition__["H" /* DROP_EFFECT_NAME */]
	},
	controllerAs: '$drop',
	controller: Drop,
	require: Drop.require,
	link: Drop.link
};

/***/ }),
/* 202 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ng_directives_directive__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng_definition__ = __webpack_require__(1);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var FootCore = function (_Directive) {
	_inherits(FootCore, _Directive);

	function FootCore($scope, $element) {
		_classCallCheck(this, FootCore);

		var _this = _possibleConstructorReturn(this, (FootCore.__proto__ || Object.getPrototypeOf(FootCore)).call(this));

		_this.$scope = $scope;
		_this.element = $element[0];
		Object.defineProperty($scope, '$view', { get: function get() {
				return _this.view;
			} });
		return _this;
	}

	return FootCore;
}(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_ng_directives_directive__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1_ng_definition__["B" /* FOOT_CORE_NAME */], { view: '^^' + __WEBPACK_IMPORTED_MODULE_1_ng_definition__["m" /* VIEW_CORE_NAME */] }));

FootCore.$inject = ['$scope', '$element'];

/* harmony default export */ __webpack_exports__["a"] = {
	restrict: 'A',
	bindToController: true,
	controllerAs: '$foot',
	controller: FootCore,
	require: FootCore.require,
	link: FootCore.link,
	scope: true
};

/***/ }),
/* 203 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_component__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng_definition__ = __webpack_require__(1);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Head = function (_ModelComponent) {
	_inherits(Head, _ModelComponent);

	function Head() {
		_classCallCheck(this, Head);

		return _possibleConstructorReturn(this, (Head.__proto__ || Object.getPrototypeOf(Head)).call(this, 'foot'));
	}

	return Head;
}(__WEBPACK_IMPORTED_MODULE_0__model_component__["a" /* default */]);

Head.$inject = [];

/* harmony default export */ __webpack_exports__["a"] = {
	require: {
		root: '^^' + __WEBPACK_IMPORTED_MODULE_1_ng_definition__["k" /* GRID_NAME */]
	},
	controller: Head,
	bindings: {}
};

/***/ }),
/* 204 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ng_directives_directive__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__template_template_link__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cell_cell_build__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_definition__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_definition__ = __webpack_require__(17);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var TfCore = function (_Directive) {
	_inherits(TfCore, _Directive);

	function TfCore($scope, $element, $compile, $templateCache) {
		_classCallCheck(this, TfCore);

		var _this = _possibleConstructorReturn(this, (TfCore.__proto__ || Object.getPrototypeOf(TfCore)).call(this));

		_this.$element = $element;
		_this.$scope = $scope;
		_this.template = new __WEBPACK_IMPORTED_MODULE_1__template_template_link__["a" /* default */]($compile, $templateCache);
		return _this;
	}

	_createClass(TfCore, [{
		key: 'onInit',
		value: function onInit() {
			var column = this.column;
			var element = this.$element[0];

			element.classList.add(__WEBPACK_IMPORTED_MODULE_4_core_definition__["a" /* GRID_PREFIX */] + '-' + column.key);
			element.classList.add(__WEBPACK_IMPORTED_MODULE_4_core_definition__["a" /* GRID_PREFIX */] + '-' + column.type);
			if (column.hasOwnProperty('editor')) {
				element.classList.add(__WEBPACK_IMPORTED_MODULE_4_core_definition__["a" /* GRID_PREFIX */] + '-' + column.editor);
			}

			var model = this.view.model;
			var cache = model.foot().cache;
			var rowIndex = this.rowIndex;
			var key = rowIndex > 0 ? column.key + rowIndex : column.key;
			var link = cache.find(key);
			if (!link) {
				var build = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__cell_cell_build__["a" /* default */])(this.template);
				link = build('foot', this.view.model, this.column);
				cache.set(key, link);
			}

			link(this.$element, this.$scope);
		}
	}, {
		key: 'value',
		get: function get() {
			var column = this.column;
			return this.view.foot.value(column);
		}
	}, {
		key: 'rowIndex',
		get: function get() {
			return this.$scope.$parent.$index;
		}
	}, {
		key: 'column',
		get: function get() {
			return this.$scope.$column.model;
		}
	}]);

	return TfCore;
}(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_ng_directives_directive__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_3_ng_definition__["y" /* TF_CORE_NAME */], { view: '^^' + __WEBPACK_IMPORTED_MODULE_3_ng_definition__["m" /* VIEW_CORE_NAME */] }));

TfCore.$inject = ['$scope', '$element', '$compile', '$templateCache'];

/* harmony default export */ __webpack_exports__["a"] = {
	restrict: 'A',
	bindToController: true,
	controllerAs: '$cell',
	controller: TfCore,
	require: TfCore.require,
	link: TfCore.link
};

/***/ }),
/* 205 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng_definition__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_definition__ = __webpack_require__(17);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var BoxCore = function (_Component) {
	_inherits(BoxCore, _Component);

	function BoxCore($element, theme) {
		_classCallCheck(this, BoxCore);

		var _this = _possibleConstructorReturn(this, (BoxCore.__proto__ || Object.getPrototypeOf(BoxCore)).call(this));

		_this.element = $element[0];
		_this.theme = theme;
		return _this;
	}

	_createClass(BoxCore, [{
		key: 'onInit',
		value: function onInit() {
			var _this2 = this;

			this.initTheme();

			var model = this.model;
			model.dragChanged.watch(function (e) {
				if (e.changes.hasOwnProperty('isActive')) {
					if (e.state.isActive) {
						_this2.element.classList.add(__WEBPACK_IMPORTED_MODULE_2_core_definition__["a" /* GRID_PREFIX */] + '-drag');
					} else {
						_this2.element.classList.remove(__WEBPACK_IMPORTED_MODULE_2_core_definition__["a" /* GRID_PREFIX */] + '-drag');
					}
				}
			});
		}
	}, {
		key: 'initTheme',
		value: function initTheme() {
			var element = this.element;

			element.classList.add(__WEBPACK_IMPORTED_MODULE_2_core_definition__["a" /* GRID_PREFIX */]);
			element.classList.add(__WEBPACK_IMPORTED_MODULE_2_core_definition__["a" /* GRID_PREFIX */] + '-theme-' + this.theme.name);
			this.theme.changed.watch(function (e) {
				element.classList.remove(__WEBPACK_IMPORTED_MODULE_2_core_definition__["a" /* GRID_PREFIX */] + '-theme-' + e.oldValue);
				element.classList.add(__WEBPACK_IMPORTED_MODULE_2_core_definition__["a" /* GRID_PREFIX */] + '-theme-' + e.newValue);
			});
		}
	}, {
		key: 'model',
		get: function get() {
			return this._model || this.root.model;
		}
	}]);

	return BoxCore;
}(__WEBPACK_IMPORTED_MODULE_0__component__["a" /* default */]);

BoxCore.$inject = ['$element', 'qgridTheme'];

/* harmony default export */ __webpack_exports__["a"] = {
	controller: BoxCore,
	controllerAs: '$box',
	require: {
		'root': '^^?' + __WEBPACK_IMPORTED_MODULE_1_ng_definition__["k" /* GRID_NAME */]
	},
	bindings: {
		'_model': '<model'
	}
};

/***/ }),
/* 206 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ng_directives_directive__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_infrastructure_command__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_services_utility__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_column_column_service__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_definition__ = __webpack_require__(1);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var HeadCore = function (_Directive) {
	_inherits(HeadCore, _Directive);

	function HeadCore($scope, $element) {
		_classCallCheck(this, HeadCore);

		var _this = _possibleConstructorReturn(this, (HeadCore.__proto__ || Object.getPrototypeOf(HeadCore)).call(this));

		_this.element = $element[0];
		_this.$scope = $scope;
		Object.defineProperty($scope, '$view', { get: function get() {
				return _this.view;
			} });

		_this.drop = new __WEBPACK_IMPORTED_MODULE_1_core_infrastructure_command__["a" /* default */]({
			canExecute: function canExecute(e) {
				if (e.source && e.source.key === __WEBPACK_IMPORTED_MODULE_4_ng_definition__["x" /* TH_CORE_NAME */]) {
					var map = __WEBPACK_IMPORTED_MODULE_3_core_column_column_service__["a" /* map */](_this.view.model.data().columns);
					return map.hasOwnProperty(e.target.value);
				}

				return false;
			},
			execute: function execute(e) {
				var view = _this.view.model.view;
				var columnRows = view().columns;
				var _iteratorNormalCompletion = true;
				var _didIteratorError = false;
				var _iteratorError = undefined;

				try {
					for (var _iterator = columnRows[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
						var columns = _step.value;

						var targetIndex = columns.findIndex(function (c) {
							return c.model.key === e.target.value;
						});
						var sourceIndex = columns.findIndex(function (c) {
							return c.model.key === e.source.value;
						});
						if (targetIndex >= 0 && sourceIndex >= 0) {
							// TODO: full copy? impacting pef. on pivoting?
							var sourceColumn = columns[sourceIndex];
							columns.splice(sourceIndex, 1);
							columns.splice(targetIndex, 0, sourceColumn);
							view({ columns: Array.from(columnRows) });
						}
					}
				} catch (err) {
					_didIteratorError = true;
					_iteratorError = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion && _iterator.return) {
							_iterator.return();
						}
					} finally {
						if (_didIteratorError) {
							throw _iteratorError;
						}
					}
				}
			}
		});

		_this.drag = new __WEBPACK_IMPORTED_MODULE_1_core_infrastructure_command__["a" /* default */]({
			canExecute: function canExecute(e) {
				if (e.source.key === __WEBPACK_IMPORTED_MODULE_4_ng_definition__["x" /* TH_CORE_NAME */]) {
					var map = __WEBPACK_IMPORTED_MODULE_3_core_column_column_service__["a" /* map */](_this.view.model.data().columns);
					return map.hasOwnProperty(e.source.value) && map[e.source.value].canMove !== false;
				}

				return false;
			},
			execute: __WEBPACK_IMPORTED_MODULE_2_core_services_utility__["b" /* noop */]
		});

		_this.resize = new __WEBPACK_IMPORTED_MODULE_1_core_infrastructure_command__["a" /* default */]({
			canExecute: function canExecute(e) {
				if (e.source.key === __WEBPACK_IMPORTED_MODULE_4_ng_definition__["x" /* TH_CORE_NAME */]) {
					var columns = __WEBPACK_IMPORTED_MODULE_3_core_column_column_service__["b" /* lineView */](_this.view.model.view().columns).map(function (v) {
						return v.model;
					});
					var map = __WEBPACK_IMPORTED_MODULE_3_core_column_column_service__["a" /* map */](columns);
					return map.hasOwnProperty(e.source.value) && map[e.source.value].canResize !== false;
				}

				return false;
			},
			execute: __WEBPACK_IMPORTED_MODULE_2_core_services_utility__["b" /* noop */]
		});
		return _this;
	}

	_createClass(HeadCore, [{
		key: 'transfer',
		value: function transfer(cell) {
			return {
				key: __WEBPACK_IMPORTED_MODULE_4_ng_definition__["x" /* TH_CORE_NAME */],
				value: cell.column.key
			};
		}
	}]);

	return HeadCore;
}(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_ng_directives_directive__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_4_ng_definition__["z" /* HEAD_CORE_NAME */], { view: '^^' + __WEBPACK_IMPORTED_MODULE_4_ng_definition__["m" /* VIEW_CORE_NAME */] }));

HeadCore.$inject = ['$scope', '$element'];

/* harmony default export */ __webpack_exports__["a"] = {
	restrict: 'A',
	bindToController: {},
	controllerAs: '$head',
	controller: HeadCore,
	require: HeadCore.require,
	link: HeadCore.link,
	scope: true
};

/***/ }),
/* 207 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_component__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng_definition__ = __webpack_require__(1);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Head = function (_ModelComponent) {
	_inherits(Head, _ModelComponent);

	function Head() {
		_classCallCheck(this, Head);

		return _possibleConstructorReturn(this, (Head.__proto__ || Object.getPrototypeOf(Head)).call(this, 'head'));
	}

	return Head;
}(__WEBPACK_IMPORTED_MODULE_0__model_component__["a" /* default */]);

Head.$inject = [];

/* harmony default export */ __webpack_exports__["a"] = {
	require: {
		root: '^^' + __WEBPACK_IMPORTED_MODULE_1_ng_definition__["k" /* GRID_NAME */]
	},
	controller: Head,
	bindings: {}
};

/***/ }),
/* 208 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ng_directives_directive__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__template_template_link__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cell_cell_build__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_definition__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_definition__ = __webpack_require__(17);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var ThCore = function (_Directive) {
	_inherits(ThCore, _Directive);

	function ThCore($scope, $element, $compile, $templateCache, $attrs) {
		_classCallCheck(this, ThCore);

		var _this = _possibleConstructorReturn(this, (ThCore.__proto__ || Object.getPrototypeOf(ThCore)).call(this));

		_this.$element = $element;
		_this.$scope = $scope;
		_this.$attrs = $attrs;
		_this.template = new __WEBPACK_IMPORTED_MODULE_1__template_template_link__["a" /* default */]($compile, $templateCache);
		return _this;
	}

	_createClass(ThCore, [{
		key: 'onInit',
		value: function onInit() {
			var column = this.column;
			var element = this.$element[0];

			element.classList.add(__WEBPACK_IMPORTED_MODULE_4_core_definition__["a" /* GRID_PREFIX */] + '-' + column.key);
			element.classList.add(__WEBPACK_IMPORTED_MODULE_4_core_definition__["a" /* GRID_PREFIX */] + '-' + column.type);
			if (column.hasOwnProperty('editor')) {
				element.classList.add(__WEBPACK_IMPORTED_MODULE_4_core_definition__["a" /* GRID_PREFIX */] + '-' + column.editor);
			}

			if (this.$attrs[__WEBPACK_IMPORTED_MODULE_3_ng_definition__["x" /* TH_CORE_NAME */]] !== 'body') {
				var model = this.view.model;
				var cache = model.head().cache;
				var link = cache.find(column.key);
				if (!link) {
					var build = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__cell_cell_build__["a" /* default */])(this.template);
					link = build('head', model, this.column);
					cache.set(column.key, link);
				}

				link(this.$element, this.$scope);
			}
		}
	}, {
		key: 'column',
		get: function get() {
			return this.$scope.$column.model;
		}
	}]);

	return ThCore;
}(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_ng_directives_directive__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_3_ng_definition__["x" /* TH_CORE_NAME */], { view: '^^' + __WEBPACK_IMPORTED_MODULE_3_ng_definition__["m" /* VIEW_CORE_NAME */] }));

ThCore.$inject = ['$scope', '$element', '$compile', '$templateCache', '$attrs'];

/* harmony default export */ __webpack_exports__["a"] = {
	restrict: 'A',
	bindToController: true,
	controllerAs: '$cell',
	controller: ThCore,
	require: ThCore.require,
	link: ThCore.link
};

/***/ }),
/* 209 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_component__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng_definition__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_template_template_path__ = __webpack_require__(2);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





__WEBPACK_IMPORTED_MODULE_2_core_template_template_path__["a" /* default */].register(__WEBPACK_IMPORTED_MODULE_1_ng_definition__["r" /* NODE_NAME */], function () {
	return {
		model: 'node',
		resource: 'content'
	};
});

var Node = function (_ModelComponent) {
	_inherits(Node, _ModelComponent);

	function Node() {
		_classCallCheck(this, Node);

		return _possibleConstructorReturn(this, (Node.__proto__ || Object.getPrototypeOf(Node)).call(this, 'node'));
	}

	_createClass(Node, [{
		key: 'onInit',
		value: function onInit() {}
	}]);

	return Node;
}(__WEBPACK_IMPORTED_MODULE_0__model_component__["a" /* default */]);

Node.$inject = [];

/* harmony default export */ __webpack_exports__["a"] = {
	require: {
		root: '^^' + __WEBPACK_IMPORTED_MODULE_1_ng_definition__["k" /* GRID_NAME */]
	},
	controller: Node,
	bindings: {
		'nodeOffset': '<offset'
	}
};

/***/ }),
/* 210 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_infrastructure_model__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_infrastructure_model_bind__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_services_utility__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_infrastructure_event__ = __webpack_require__(35);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }






var RootComponent = function () {
	function RootComponent() {
		for (var _len = arguments.length, names = Array(_len), _key = 0; _key < _len; _key++) {
			names[_key] = arguments[_key];
		}

		_classCallCheck(this, RootComponent);

		var self = this;
		var binder = new __WEBPACK_IMPORTED_MODULE_1_core_infrastructure_model_bind__["a" /* default */](self);
		var commit = __WEBPACK_IMPORTED_MODULE_2_core_services_utility__["b" /* noop */];

		function setup() {
			var run = true;
			if (!self.model) {
				self.model = new __WEBPACK_IMPORTED_MODULE_0_core_infrastructure_model__["a" /* default */]();
				run = false;
			}

			return binder.bind(self.model, names, run);
		}

		self.modelChanged = new __WEBPACK_IMPORTED_MODULE_3_core_infrastructure_event__["a" /* default */]();

		self.$onChanges = function (e) {
			if (e.hasOwnProperty('model')) {
				commit = setup();
				commit();

				self.modelChanged.emit(self.model);
				self.onInit();
				return;
			}

			commit();
		};

		self.$onDestroy = function () {
			binder.bind(null);
			self.onDestroy();
		};
	}

	_createClass(RootComponent, [{
		key: 'onInit',
		value: function onInit() {}
	}, {
		key: 'onDestroy',
		value: function onDestroy() {}
	}]);

	return RootComponent;
}();

/* harmony default export */ __webpack_exports__["a"] = RootComponent;

/***/ }),
/* 211 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ng_directives_directive__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_infrastructure_error__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template_scope__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_template_template_path__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_resource_resource_factory__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_services_utility__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng_definition__ = __webpack_require__(1);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var Template = function (_Directive) {
	_inherits(Template, _Directive);

	function Template($scope, $element) {
		_classCallCheck(this, Template);

		var _this = _possibleConstructorReturn(this, (Template.__proto__ || Object.getPrototypeOf(Template)).call(this));

		_this.$scope = $scope;
		_this.$element = $element;
		return _this;
	}

	_createClass(Template, [{
		key: 'onInit',
		value: function onInit() {
			var path = __WEBPACK_IMPORTED_MODULE_3_core_template_template_path__["a" /* default */].get(this);
			if (!this.root.model.hasOwnProperty(path.model)) {
				throw new __WEBPACK_IMPORTED_MODULE_1_core_infrastructure_error__["a" /* default */]('template', 'Appropriate model for "' + path.model + '" is not found');
			}

			var model = this.root.model[path.model];
			var state = model();
			if (!state.hasOwnProperty('resource')) {
				throw new __WEBPACK_IMPORTED_MODULE_1_core_infrastructure_error__["a" /* default */]('template', 'Can\'t use "' + path.model + '" model, resource property is missed');
			}

			var content = this.$element.html();
			var contentScope = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__template_scope__["a" /* default */])(this.$scope, [this.let]);
			var createResource = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_core_resource_resource_factory__["a" /* default */])(state.resource, path.resource);
			var newResource = createResource(content, contentScope);
			model({ resource: newResource });
		}
	}]);

	return Template;
}(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_ng_directives_directive__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_6_ng_definition__["u" /* TEMPLATE_NAME */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_core_services_utility__["d" /* merge */])({ root: '^^' + __WEBPACK_IMPORTED_MODULE_6_ng_definition__["k" /* GRID_NAME */] }, __WEBPACK_IMPORTED_MODULE_3_core_template_template_path__["a" /* default */].require)));

Template.$inject = ['$scope', '$element'];

/* harmony default export */ __webpack_exports__["a"] = {
	terminal: true,
	restrict: 'E',
	require: Template.require,
	link: Template.link,
	controller: Template,
	bindToController: {
		for: '@',
		let: '@'
	}
};

/***/ }),
/* 212 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__grid_grid__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_infrastructure_error__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_services_utility__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["a"] = create;




function create(scope, args) {
	var env = {};
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = args[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var arg = _step.value;

			if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_core_services_utility__["e" /* isUndefined */])(arg)) {
				if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_core_services_utility__["e" /* isUndefined */])(scope[arg])) {
					throw new __WEBPACK_IMPORTED_MODULE_1_core_infrastructure_error__["a" /* default */]('template.scope', '"' + arg + '" is not defined"');
				}

				var argScope = find(scope);
				if (argScope === null) {
					throw new __WEBPACK_IMPORTED_MODULE_1_core_infrastructure_error__["a" /* default */]('template.scope', 'Let scope is not found for "' + arg + '"');
				}
				env[arg] = argScope[arg];
			}
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}

	return env;
}

function find(scope) {
	// When trasclusion applies, transclusion scope is a sibling for the owner scope,
	// so we searching in siblings of parents
	var current = scope;
	while (current) {
		var letScope = test(current.$$prevSibling) || test(current.$$nextSibling); // eslint-disable-line angular/no-private-call
		if (letScope) {
			return letScope;
		}

		current = current.$parent;
	}

	return null;
}

function test(scope) {
	if (scope && scope.hasOwnProperty('$grid') && scope.$grid instanceof __WEBPACK_IMPORTED_MODULE_0__grid_grid__["b" /* Grid */]) {
		return scope.$parent;
	}

	return null;
}

/***/ }),
/* 213 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__template_template_link__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_definition__ = __webpack_require__(1);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var ToolbarCore = function (_Component) {
	_inherits(ToolbarCore, _Component);

	function ToolbarCore($scope, $element, $compile, $templateCache) {
		_classCallCheck(this, ToolbarCore);

		var _this = _possibleConstructorReturn(this, (ToolbarCore.__proto__ || Object.getPrototypeOf(ToolbarCore)).call(this));

		_this.$element = $element;
		_this.$scope = $scope;
		_this.template = new __WEBPACK_IMPORTED_MODULE_1__template_template_link__["a" /* default */]($compile, $templateCache);
		return _this;
	}

	_createClass(ToolbarCore, [{
		key: 'onInit',
		value: function onInit() {
			var target = this.position;
			var state = this.root.model.toolbar();
			var link = this.template.link('qgrid.toolbar.' + target + '.tpl.html', state.resource, [target, '$default']);

			link(this.$element, this.$scope);
		}
	}]);

	return ToolbarCore;
}(__WEBPACK_IMPORTED_MODULE_0__component__["a" /* default */]);

ToolbarCore.$inject = ['$scope', '$element', '$compile', '$templateCache', '$attrs'];

/* harmony default export */ __webpack_exports__["a"] = {
	controllerAs: '$toolbar',
	controller: ToolbarCore,
	require: {
		root: '^^' + __WEBPACK_IMPORTED_MODULE_2_ng_definition__["k" /* GRID_NAME */]
	},
	bindings: {
		position: '@'
	}
};

/***/ }),
/* 214 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng_definition__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_template_template_path__ = __webpack_require__(2);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





__WEBPACK_IMPORTED_MODULE_2_core_template_template_path__["a" /* default */].register(__WEBPACK_IMPORTED_MODULE_1_ng_definition__["s" /* TOOLBAR_NAME */], function (template) {
	return {
		model: 'toolbar',
		resource: template.for
	};
});

var Toolbar = function (_Component) {
	_inherits(Toolbar, _Component);

	function Toolbar() {
		_classCallCheck(this, Toolbar);

		return _possibleConstructorReturn(this, (Toolbar.__proto__ || Object.getPrototypeOf(Toolbar)).call(this));
	}

	_createClass(Toolbar, [{
		key: 'onInit',
		value: function onInit() {}
	}]);

	return Toolbar;
}(__WEBPACK_IMPORTED_MODULE_0__component__["a" /* default */]);

Toolbar.$inject = [];

/* harmony default export */ __webpack_exports__["a"] = {
	require: {
		root: '^^' + __WEBPACK_IMPORTED_MODULE_1_ng_definition__["k" /* GRID_NAME */]
	},
	controller: Toolbar
};

/***/ }),
/* 215 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng_services_value__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_services_css__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_body_body_view__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_head_head_view__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_foot_foot_view__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_layout_layout_view__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_group_group_view__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_pivot_pivot_view__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_navigation_navigation_view__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_highlight_highlight_view__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_sort_sort_view__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_edit_edit_view__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_selection_selection_view__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng_definition__ = __webpack_require__(1);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

















var ViewCore = function (_Component) {
	_inherits(ViewCore, _Component);

	function ViewCore($scope, $element, $document) {
		_classCallCheck(this, ViewCore);

		var _this = _possibleConstructorReturn(this, (ViewCore.__proto__ || Object.getPrototypeOf(ViewCore)).call(this));

		_this.$scope = $scope;
		_this.element = $element[0];
		_this.document = $document[0];
		return _this;
	}

	_createClass(ViewCore, [{
		key: 'onInit',
		value: function onInit() {
			var model = this.model;
			var markup = this.root.markup;

			this.head = new __WEBPACK_IMPORTED_MODULE_4_core_head_head_view__["a" /* default */](model);
			this.body = new __WEBPACK_IMPORTED_MODULE_3_core_body_body_view__["a" /* default */](model, __WEBPACK_IMPORTED_MODULE_1_ng_services_value__["a" /* getFactory */]);
			this.foot = new __WEBPACK_IMPORTED_MODULE_5_core_foot_foot_view__["a" /* default */](model, __WEBPACK_IMPORTED_MODULE_1_ng_services_value__["a" /* getFactory */]);
			this.layout = new __WEBPACK_IMPORTED_MODULE_6_core_layout_layout_view__["a" /* default */](model, markup);
			this.selection = new __WEBPACK_IMPORTED_MODULE_13_core_selection_selection_view__["a" /* default */](model);
			this.group = new __WEBPACK_IMPORTED_MODULE_7_core_group_group_view__["a" /* default */](model, __WEBPACK_IMPORTED_MODULE_1_ng_services_value__["a" /* getFactory */]);
			this.pivot = new __WEBPACK_IMPORTED_MODULE_8_core_pivot_pivot_view__["a" /* default */](model, __WEBPACK_IMPORTED_MODULE_1_ng_services_value__["a" /* getFactory */]);
			this.nav = new __WEBPACK_IMPORTED_MODULE_9_core_navigation_navigation_view__["a" /* default */](model, markup, this.$scope.$evalAsync.bind(this.$scope));
			this.highlight = new __WEBPACK_IMPORTED_MODULE_10_core_highlight_highlight_view__["a" /* default */](model, markup);
			this.sort = new __WEBPACK_IMPORTED_MODULE_11_core_sort_sort_view__["a" /* default */](model);
			this.edit = new __WEBPACK_IMPORTED_MODULE_12_core_edit_edit_view__["a" /* default */](model, __WEBPACK_IMPORTED_MODULE_1_ng_services_value__["b" /* set */], markup, this.$scope.$evalAsync.bind(this.$scope));
		}
	}, {
		key: 'onDestroy',
		value: function onDestroy() {
			var id = this.model.grid().id;
			__WEBPACK_IMPORTED_MODULE_2_core_services_css__["a" /* removeStyle */](id);
		}
	}, {
		key: 'templateUrl',
		value: function templateUrl(key) {
			return 'qgrid.' + key + '.tpl.html';
		}
	}, {
		key: 'model',
		get: function get() {
			return this.root.model;
		}
	}, {
		key: 'visibility',
		get: function get() {
			return this.model.visibility();
		}
	}, {
		key: 'pagination',
		get: function get() {
			return this.model.pagination();
		}
	}, {
		key: 'rows',
		get: function get() {
			return this.model.data().rows;
		}
	}]);

	return ViewCore;
}(__WEBPACK_IMPORTED_MODULE_0__component__["a" /* default */]);

ViewCore.$inject = ['$scope', '$element', '$document'];

/* harmony default export */ __webpack_exports__["a"] = {
	controller: ViewCore,
	controllerAs: '$view',
	templateUrl: 'qgrid.view.tpl.html',
	require: {
		'root': '^^' + __WEBPACK_IMPORTED_MODULE_14_ng_definition__["k" /* GRID_NAME */]
	}
};

/***/ }),
/* 216 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__directive__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng_definition__ = __webpack_require__(1);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Focus = function (_Directive) {
	_inherits(Focus, _Directive);

	function Focus($scope, $element, $attrs) {
		_classCallCheck(this, Focus);

		var _this = _possibleConstructorReturn(this, (Focus.__proto__ || Object.getPrototypeOf(Focus)).call(this));

		_this.$scope = $scope;
		_this.element = $element[0];
		_this.$attrs = $attrs;
		return _this;
	}

	_createClass(Focus, [{
		key: 'onInit',
		value: function onInit() {
			var _this2 = this;

			if (!this.$attrs.tabindex) {
				this.element.setAttribute('tabindex', -1);
			}
			this.$scope.$evalAsync(function () {
				return _this2.element.focus();
			});
		}
	}]);

	return Focus;
}(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__directive__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1_ng_definition__["e" /* FOCUS_NAME */]));

Focus.$inject = ['$scope', '$element', '$attrs'];

/* harmony default export */ __webpack_exports__["a"] = {
	restrict: 'A',
	bindToController: true,
	controllerAs: '$focus',
	controller: Focus,
	require: Focus.require,
	link: Focus.link
};

/***/ }),
/* 217 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__directive__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng_definition__ = __webpack_require__(1);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Indeterminate = function (_Directive) {
	_inherits(Indeterminate, _Directive);

	function Indeterminate($scope, $element, $attrs) {
		_classCallCheck(this, Indeterminate);

		var _this = _possibleConstructorReturn(this, (Indeterminate.__proto__ || Object.getPrototypeOf(Indeterminate)).call(this));

		_this.$scope = $scope;
		_this.$element = $element;
		_this.$attrs = $attrs;
		return _this;
	}

	_createClass(Indeterminate, [{
		key: 'onInit',
		value: function onInit() {
			var _this2 = this;

			this.$scope.$watch(this.$attrs[__WEBPACK_IMPORTED_MODULE_1_ng_definition__["d" /* INDETERMINATE_NAME */]], function (newVal) {
				_this2.$element[0].indeterminate = !!newVal;
			});
		}
	}]);

	return Indeterminate;
}(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__directive__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1_ng_definition__["d" /* INDETERMINATE_NAME */]));

Indeterminate.$inject = ['$scope', '$element', '$attrs'];

/* harmony default export */ __webpack_exports__["a"] = {
	restrict: 'A',
	controller: Indeterminate,
	require: Indeterminate.require,
	link: Indeterminate.link
};

/***/ }),
/* 218 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__directive__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng_definition__ = __webpack_require__(1);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var markup = function (_Directive) {
	_inherits(markup, _Directive);

	function markup($element) {
		_classCallCheck(this, markup);

		var _this = _possibleConstructorReturn(this, (markup.__proto__ || Object.getPrototypeOf(markup)).call(this));

		_this.element = $element[0];
		return _this;
	}

	_createClass(markup, [{
		key: 'onInit',
		value: function onInit() {
			this.root.markup[this.name] = this.element;
		}
	}, {
		key: 'onDestroy',
		value: function onDestroy() {}
	}]);

	return markup;
}(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__directive__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1_ng_definition__["v" /* MARKUP_NAME */], { root: '^^' + __WEBPACK_IMPORTED_MODULE_1_ng_definition__["k" /* GRID_NAME */] }));

markup.$inject = ['$element'];

/* harmony default export */ __webpack_exports__["a"] = {
	restrict: 'A',
	bindToController: {
		'name': '@' + __WEBPACK_IMPORTED_MODULE_1_ng_definition__["v" /* MARKUP_NAME */]
	},
	controllerAs: '$resize',
	controller: markup,
	require: markup.require,
	link: markup.link
};

/***/ }),
/* 219 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__directive__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng_definition__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_definition__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_infrastructure_event_listener__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_services_utility__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var Resize = function (_Directive) {
	_inherits(Resize, _Directive);

	function Resize($scope, $element, $document, $timeout, $window) {
		_classCallCheck(this, Resize);

		var _this = _possibleConstructorReturn(this, (Resize.__proto__ || Object.getPrototypeOf(Resize)).call(this));

		_this.$scope = $scope;
		_this.$element = $element;
		_this.$document = $document;
		_this.$window = $window;
		_this.$timeout = $timeout;
		_this.divider = angular.element('<div class="' + __WEBPACK_IMPORTED_MODULE_2_core_definition__["a" /* GRID_PREFIX */] + '-divider"></div>');

		_this.listener = {
			divider: new __WEBPACK_IMPORTED_MODULE_3_core_infrastructure_event_listener__["a" /* default */](_this, _this.divider[0]),
			document: new __WEBPACK_IMPORTED_MODULE_3_core_infrastructure_event_listener__["a" /* default */](_this, _this.$document[0])
		};

		_this.context = {
			x: 0,
			width: 0
		};
		return _this;
	}

	_createClass(Resize, [{
		key: 'onInit',
		value: function onInit() {
			var _this2 = this;

			if (this.canResize(this.event())) {
				this.listener.divider.on('mousedown', this.dragStart);
				this.$timeout(function () {
					return _this2.$element.append(_this2.divider);
				}); // TODO: WTF?
			}
		}
	}, {
		key: 'onDestroy',
		value: function onDestroy() {
			this.listener.divider.off();
			this.listener.document.off();
		}
	}, {
		key: 'dragStart',
		value: function dragStart(e) {
			e.preventDefault();

			var context = this.context;
			var style = this.$window.getComputedStyle(this.$element[0], null);
			context.width = parseFloat(style.getPropertyValue('width'));
			context.x = e.screenX;

			this.listener.document.on('mousemove', this.drag);
			this.listener.document.on('mouseup', this.dragEnd);

			var model = this.view.model;
			model.drag({ isActive: true });
		}
	}, {
		key: 'drag',
		value: function drag(e) {
			var model = this.view.model;
			var context = this.context;
			var layout = model.layout;
			var state = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_core_services_utility__["c" /* clone */])(layout()[this.path]);

			state[this.key] = { width: context.width + e.screenX - context.x };
			layout(_defineProperty({}, this.path, state));
		}
	}, {
		key: 'dragEnd',
		value: function dragEnd() {
			this.listener.document.off();

			var model = this.view.model;
			model.drag({ isActive: false });
		}
	}, {
		key: 'event',
		value: function event() {
			var source = this.transfer();
			return {
				$event: {
					source: source,
					target: null
				}
			};
		}
	}]);

	return Resize;
}(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__directive__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1_ng_definition__["f" /* RESIZE_NAME */], { view: '^^' + __WEBPACK_IMPORTED_MODULE_1_ng_definition__["m" /* VIEW_CORE_NAME */] }));

Resize.$inject = ['$scope', '$element', '$document', '$timeout', '$window'];

/* harmony default export */ __webpack_exports__["a"] = {
	restrict: 'A',
	bindToController: {
		'key': '<' + __WEBPACK_IMPORTED_MODULE_1_ng_definition__["f" /* RESIZE_NAME */],
		'path': '@' + __WEBPACK_IMPORTED_MODULE_1_ng_definition__["f" /* RESIZE_NAME */] + 'Path',
		'canResize': '&' + __WEBPACK_IMPORTED_MODULE_1_ng_definition__["k" /* GRID_NAME */] + 'CanResize',
		'transfer': '&' + __WEBPACK_IMPORTED_MODULE_1_ng_definition__["b" /* DRAG_NAME */]
	},
	controllerAs: '$resize',
	controller: Resize,
	require: Resize.require,
	link: Resize.link
};

/***/ }),
/* 220 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = range;
function range(count) {
	return new Array(count);
}

/***/ }),
/* 221 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_grid_grid__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_grid__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_template_template_path__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_head_head__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_foot_foot__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_column_column_list__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_column_column__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_node_node__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_toolbar_toolbar__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_dnd_drag__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_dnd_drop__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_grid_box_core__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_view_view_core__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_body_td_core__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_head_th_core__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_foot_tf_core__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_head_head_core__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_body_body_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_foot_foot_core__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_toolbar_toolbar_core__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__directives_indeterminate__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__directives_focus__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__directives_resize__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__directives_markup__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_theme__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__filters_range__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__definition__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__plugins__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_template_template__ = __webpack_require__(211);

































var coreModule = angular.module(__WEBPACK_IMPORTED_MODULE_26__definition__["a" /* MODULE_CORE_NAME */], []).directive(__WEBPACK_IMPORTED_MODULE_26__definition__["b" /* DRAG_NAME */], function () {
	return __WEBPACK_IMPORTED_MODULE_9__components_dnd_drag__["a" /* default */];
}).directive(__WEBPACK_IMPORTED_MODULE_26__definition__["c" /* DROP_NAME */], function () {
	return __WEBPACK_IMPORTED_MODULE_10__components_dnd_drop__["a" /* default */];
}).directive(__WEBPACK_IMPORTED_MODULE_26__definition__["d" /* INDETERMINATE_NAME */], function () {
	return __WEBPACK_IMPORTED_MODULE_20__directives_indeterminate__["a" /* default */];
}).directive(__WEBPACK_IMPORTED_MODULE_26__definition__["e" /* FOCUS_NAME */], function () {
	return __WEBPACK_IMPORTED_MODULE_21__directives_focus__["a" /* default */];
}).directive(__WEBPACK_IMPORTED_MODULE_26__definition__["f" /* RESIZE_NAME */], function () {
	return __WEBPACK_IMPORTED_MODULE_22__directives_resize__["a" /* default */];
}).provider(__WEBPACK_IMPORTED_MODULE_26__definition__["g" /* THEME_NAME */], function () {
	return new __WEBPACK_IMPORTED_MODULE_24__services_theme__["a" /* default */]();
}).service(__WEBPACK_IMPORTED_MODULE_26__definition__["h" /* TEMPLATE_PATH_NAME */], function () {
	return function () {
		return __WEBPACK_IMPORTED_MODULE_2_core_template_template_path__["a" /* default */];
	};
}).filter(__WEBPACK_IMPORTED_MODULE_26__definition__["i" /* RANGE_NAME */], function () {
	return __WEBPACK_IMPORTED_MODULE_25__filters_range__["a" /* default */];
}).name;



// For now should be the last in import list cause use TemplatePath.require
// that should be filled before importing this
// TODO: get rid of static require


var layoutModel = angular.module(__WEBPACK_IMPORTED_MODULE_26__definition__["j" /* MODULE_LAYOUT_NAME */], [coreModule]).component(__WEBPACK_IMPORTED_MODULE_26__definition__["k" /* GRID_NAME */], __WEBPACK_IMPORTED_MODULE_0__components_grid_grid__["a" /* default */]).component(__WEBPACK_IMPORTED_MODULE_26__definition__["l" /* BOX_CORE_NAME */], __WEBPACK_IMPORTED_MODULE_11__components_grid_box_core__["a" /* default */]).component(__WEBPACK_IMPORTED_MODULE_26__definition__["m" /* VIEW_CORE_NAME */], __WEBPACK_IMPORTED_MODULE_12__components_view_view_core__["a" /* default */]).component(__WEBPACK_IMPORTED_MODULE_26__definition__["n" /* HEAD_NAME */], __WEBPACK_IMPORTED_MODULE_3__components_head_head__["a" /* default */]).component(__WEBPACK_IMPORTED_MODULE_26__definition__["o" /* FOOT_NAME */], __WEBPACK_IMPORTED_MODULE_4__components_foot_foot__["a" /* default */]).component(__WEBPACK_IMPORTED_MODULE_26__definition__["p" /* COLUMN_LIST_NAME */], __WEBPACK_IMPORTED_MODULE_5__components_column_column_list__["a" /* default */]).component(__WEBPACK_IMPORTED_MODULE_26__definition__["q" /* COLUMN_NAME */], __WEBPACK_IMPORTED_MODULE_6__components_column_column__["a" /* default */]).component(__WEBPACK_IMPORTED_MODULE_26__definition__["r" /* NODE_NAME */], __WEBPACK_IMPORTED_MODULE_7__components_node_node__["a" /* default */]).component(__WEBPACK_IMPORTED_MODULE_26__definition__["s" /* TOOLBAR_NAME */], __WEBPACK_IMPORTED_MODULE_8__components_toolbar_toolbar__["a" /* default */]).component(__WEBPACK_IMPORTED_MODULE_26__definition__["t" /* TOOLBAR_CORE_NAME */], __WEBPACK_IMPORTED_MODULE_19__components_toolbar_toolbar_core__["a" /* default */]).directive(__WEBPACK_IMPORTED_MODULE_26__definition__["u" /* TEMPLATE_NAME */], function () {
	return __WEBPACK_IMPORTED_MODULE_28__components_template_template__["a" /* default */];
}).directive(__WEBPACK_IMPORTED_MODULE_26__definition__["v" /* MARKUP_NAME */], function () {
	return __WEBPACK_IMPORTED_MODULE_23__directives_markup__["a" /* default */];
}).directive(__WEBPACK_IMPORTED_MODULE_26__definition__["w" /* TD_CORE_NAME */], function () {
	return __WEBPACK_IMPORTED_MODULE_13__components_body_td_core__["a" /* default */];
}).directive(__WEBPACK_IMPORTED_MODULE_26__definition__["x" /* TH_CORE_NAME */], function () {
	return __WEBPACK_IMPORTED_MODULE_14__components_head_th_core__["a" /* default */];
}).directive(__WEBPACK_IMPORTED_MODULE_26__definition__["y" /* TF_CORE_NAME */], function () {
	return __WEBPACK_IMPORTED_MODULE_15__components_foot_tf_core__["a" /* default */];
}).directive(__WEBPACK_IMPORTED_MODULE_26__definition__["z" /* HEAD_CORE_NAME */], function () {
	return __WEBPACK_IMPORTED_MODULE_16__components_head_head_core__["a" /* default */];
}).directive(__WEBPACK_IMPORTED_MODULE_26__definition__["A" /* BODY_CORE_NAME */], function () {
	return __WEBPACK_IMPORTED_MODULE_17__components_body_body_core__["a" /* default */];
}).directive(__WEBPACK_IMPORTED_MODULE_26__definition__["B" /* FOOT_CORE_NAME */], function () {
	return __WEBPACK_IMPORTED_MODULE_18__components_foot_foot_core__["a" /* default */];
}).service(__WEBPACK_IMPORTED_MODULE_26__definition__["C" /* SERVICE_NAME */], __WEBPACK_IMPORTED_MODULE_1__services_grid__["a" /* default */]).config(Setup).name;

/* harmony default export */ __webpack_exports__["a"] = angular.module(__WEBPACK_IMPORTED_MODULE_26__definition__["D" /* MODULE_NAME */], [coreModule, layoutModel, __WEBPACK_IMPORTED_MODULE_27__plugins__["a" /* default */]]).name;

Setup.$inject = ['qgridThemeProvider'];
function Setup(qgridThemeProvider) {
	var EMPTY = '';

	qgridThemeProvider.register('default', function (theme) {
		theme.put('qgrid.grid.tpl.html', __webpack_require__(399));
		theme.put('qgrid.view.tpl.html', __webpack_require__(405));
		theme.put('qgrid.head.tpl.html', __webpack_require__(400));
		theme.put('qgrid.body.tpl.html', __webpack_require__(378));
		theme.put('qgrid.foot.tpl.html', __webpack_require__(398));
		theme.put('qgrid.toolbar.top.tpl.html', __webpack_require__(404));
		theme.put('qgrid.toolbar.bottom.tpl.html', __webpack_require__(401));
		theme.put('qgrid.toolbar.right.tpl.html', __webpack_require__(403));
		theme.put('qgrid.toolbar.left.tpl.html', __webpack_require__(402));

		theme.put('qgrid.head.cell.pad.tpl.html', EMPTY);
		theme.put('qgrid.body.cell.pad.tpl.html', EMPTY);
		theme.put('qgrid.foot.cell.pad.tpl.html', EMPTY);

		theme.put('qgrid.head.cell.pivot.tpl.html', __webpack_require__(392));
		theme.put('qgrid.body.cell.pivot.tpl.html', __webpack_require__(391));
		theme.put('qgrid.foot.cell.pivot.tpl.html', EMPTY);

		theme.put('qgrid.head.cell.group.tpl.html', __webpack_require__(387));
		theme.put('qgrid.body.cell.group.tpl.html', __webpack_require__(386));
		theme.put('qgrid.cell.foot.group.tpl.html', EMPTY);

		theme.put('qgrid.head.cell.text.tpl.html', __webpack_require__(25));
		theme.put('qgrid.body.cell.text.tpl.html', __webpack_require__(118));
		theme.put('qgrid.foot.cell.text.tpl.html', __webpack_require__(24));
		theme.put('qgrid.body.cell.text.edit.tpl.html', __webpack_require__(70));
		theme.put('qgrid.body.cell.text-area.edit.tpl.html', __webpack_require__(70));

		theme.put('qgrid.head.cell.row-number.tpl.html', __webpack_require__(395));
		theme.put('qgrid.body.cell.row-number.tpl.html', __webpack_require__(394));
		theme.put('qgrid.foot.cell.row-number.tpl.html', EMPTY);

		theme.put('qgrid.head.cell.row-indicator.tpl.html', EMPTY);
		theme.put('qgrid.body.cell.row-indicator.tpl.html', __webpack_require__(393));
		theme.put('qgrid.foot.cell.row-indicator.tpl.html', EMPTY);

		theme.put('qgrid.head.cell.date.tpl.html', __webpack_require__(25));
		theme.put('qgrid.body.cell.date.tpl.html', __webpack_require__(384));
		theme.put('qgrid.foot.cell.date.tpl.html', __webpack_require__(24));
		theme.put('qgrid.body.cell.date.edit.tpl.html', __webpack_require__(383));

		theme.put('qgrid.head.cell.password.tpl.html', __webpack_require__(25));
		theme.put('qgrid.body.cell.password.tpl.html', __webpack_require__(390));
		theme.put('qgrid.foot.cell.password.tpl.html', __webpack_require__(24));
		theme.put('qgrid.body.cell.password.edit.tpl.html', __webpack_require__(389));

		theme.put('qgrid.head.cell.bool.tpl.html', __webpack_require__(25));
		theme.put('qgrid.body.cell.bool.tpl.html', __webpack_require__(382));
		theme.put('qgrid.foot.cell.bool.tpl.html', __webpack_require__(24));
		theme.put('qgrid.body.cell.bool.edit.tpl.html', __webpack_require__(381));

		theme.put('qgrid.head.cell.number.tpl.html', __webpack_require__(25));
		theme.put('qgrid.body.cell.number.tpl.html', __webpack_require__(118));
		theme.put('qgrid.foot.cell.number.tpl.html', __webpack_require__(24));
		theme.put('qgrid.body.cell.number.edit.tpl.html', __webpack_require__(388));

		theme.put('qgrid.head.cell.array.tpl.html', __webpack_require__(25));
		theme.put('qgrid.body.cell.array.tpl.html', __webpack_require__(380));
		theme.put('qgrid.foot.cell.array.tpl.html', __webpack_require__(24));
		theme.put('qgrid.body.cell.array.edit.tpl.html', __webpack_require__(379));

		theme.put('qgrid.head.cell.email.tpl.html', __webpack_require__(25));
		theme.put('qgrid.body.cell.email.tpl.html', __webpack_require__(385));
		theme.put('qgrid.foot.cell.email.tpl.html', __webpack_require__(24));
		theme.put('qgrid.body.cell.email.edit.tpl.html', __webpack_require__(70));

		theme.put('qgrid.head.cell.select.tpl.html', __webpack_require__(397));
		theme.put('qgrid.body.cell.select.tpl.html', __webpack_require__(396));
		theme.put('qgrid.foot.cell.select.tpl.html', EMPTY);
	});
}

/***/ }),
/* 222 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__plugin_component__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_infrastructure_command__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_template_template_path__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_services_aggregation__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_column_column_service__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_services_utility__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__definition__ = __webpack_require__(9);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









__WEBPACK_IMPORTED_MODULE_2_core_template_template_path__["a" /* default */].register(__WEBPACK_IMPORTED_MODULE_6__definition__["i" /* COLUMNCHOOSER_NAME */], function () {
	return {
		model: 'columnchooser',
		resource: 'content'
	};
});

var ColumnChooser = function (_PluginComponent) {
	_inherits(ColumnChooser, _PluginComponent);

	function ColumnChooser() {
		_classCallCheck(this, ColumnChooser);

		var _this = _possibleConstructorReturn(this, (ColumnChooser.__proto__ || Object.getPrototypeOf(ColumnChooser)).apply(this, arguments));

		_this.toggle = new __WEBPACK_IMPORTED_MODULE_1_core_infrastructure_command__["a" /* default */]({
			execute: function execute(column) {
				column.isVisible = !_this.state(column);
				var data = _this.model.data;

				data({ columns: Array.from(data().columns) });
			}
		});

		_this.toggleAggregation = new __WEBPACK_IMPORTED_MODULE_1_core_infrastructure_command__["a" /* default */]({
			execute: function execute() {
				var data = _this.model.data;
				data({ columns: Array.from(data().columns) });
			}
		});

		_this.drop = new __WEBPACK_IMPORTED_MODULE_1_core_infrastructure_command__["a" /* default */]({
			canExecute: function canExecute(e) {
				if (e.source && e.source.key === __WEBPACK_IMPORTED_MODULE_6__definition__["i" /* COLUMNCHOOSER_NAME */]) {
					var map = __WEBPACK_IMPORTED_MODULE_4_core_column_column_service__["a" /* map */](_this.model.data().columns);
					return map.hasOwnProperty(e.target.value);
				}

				return false;
			},
			execute: function execute(e) {
				var view = _this.model.view;
				var columnRows = view().columns;
				var _iteratorNormalCompletion = true;
				var _didIteratorError = false;
				var _iteratorError = undefined;

				try {
					for (var _iterator = columnRows[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
						var columns = _step.value;

						var targetIndex = columns.findIndex(function (c) {
							return c.model.key === e.target.value;
						});
						var sourceIndex = columns.findIndex(function (c) {
							return c.model.key === e.source.value;
						});
						if (targetIndex >= 0 && sourceIndex >= 0) {
							// TODO: full copy? impacting pef. on pivoting?
							var sourceColumn = columns[sourceIndex];
							columns.splice(sourceIndex, 1);
							columns.splice(targetIndex, 0, sourceColumn);
							view({ columns: Array.from(columnRows) });
						}
					}
				} catch (err) {
					_didIteratorError = true;
					_iteratorError = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion && _iterator.return) {
							_iterator.return();
						}
					} finally {
						if (_didIteratorError) {
							throw _iteratorError;
						}
					}
				}
			}
		});

		_this.drag = new __WEBPACK_IMPORTED_MODULE_1_core_infrastructure_command__["a" /* default */]({
			canExecute: function canExecute(e) {
				if (e.source.key === __WEBPACK_IMPORTED_MODULE_6__definition__["i" /* COLUMNCHOOSER_NAME */]) {
					var map = __WEBPACK_IMPORTED_MODULE_4_core_column_column_service__["a" /* map */](_this.model.data().columns);
					return map.hasOwnProperty(e.source.value) && map[e.source.value].canMove !== false;
				}

				return false;
			},
			execute: __WEBPACK_IMPORTED_MODULE_5_core_services_utility__["b" /* noop */]
		});

		_this.submit = new __WEBPACK_IMPORTED_MODULE_1_core_infrastructure_command__["a" /* default */]({
			execute: function execute() {
				_this.onSubmit();
			}
		});

		_this.cancel = new __WEBPACK_IMPORTED_MODULE_1_core_infrastructure_command__["a" /* default */]({
			execute: function execute() {
				_this.onCancel();
			}
		});

		_this.reset = new __WEBPACK_IMPORTED_MODULE_1_core_infrastructure_command__["a" /* default */]({
			execute: function execute() {}
		});
		return _this;
	}

	_createClass(ColumnChooser, [{
		key: 'onInit',
		value: function onInit() {
			this.aggregations = Object.getOwnPropertyNames(__WEBPACK_IMPORTED_MODULE_3_core_services_aggregation__["a" /* default */]).filter(function (key) {
				return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_core_services_utility__["a" /* isFunction */])(__WEBPACK_IMPORTED_MODULE_3_core_services_aggregation__["a" /* default */][key]);
			});
		}
	}, {
		key: 'state',
		value: function state(column) {
			return column.isVisible !== false;
		}
	}, {
		key: 'transfer',
		value: function transfer(column) {
			return {
				key: __WEBPACK_IMPORTED_MODULE_6__definition__["i" /* COLUMNCHOOSER_NAME */],
				value: column.key
			};
		}
	}, {
		key: 'canAggregate',
		get: function get() {
			return this.columnChooserCanAggregate;
		}
	}, {
		key: 'columns',
		get: function get() {
			return __WEBPACK_IMPORTED_MODULE_4_core_column_column_service__["b" /* lineView */](this.model.view().columns).map(function (v) {
				return v.model;
			}).filter(function (v) {
				return v.type !== 'pivot' && v.type !== 'pad';
			});
		}
	}, {
		key: 'resource',
		get: function get() {
			return this.model.visibility().resource;
		}
	}]);

	return ColumnChooser;
}(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__plugin_component__["a" /* default */])('columnchooser'));

/* harmony default export */ __webpack_exports__["a"] = ColumnChooser.component({
	controller: ColumnChooser,
	controllerAs: '$columnChooser',
	bindings: {
		'columnChooserCanAggregate': '<canAggregate',
		'onSubmit': '&',
		'onCancel': '&'
	}
});

/***/ }),
/* 223 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_resource_resource__ = __webpack_require__(4);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var ColumnChooserModel = function ColumnChooserModel() {
	_classCallCheck(this, ColumnChooserModel);

	this.resource = new __WEBPACK_IMPORTED_MODULE_0__core_resource_resource__["a" /* default */]();

	this.canAggregate = false;
};

/* harmony default export */ __webpack_exports__["a"] = ColumnChooserModel;

/***/ }),
/* 224 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__plugin_component__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_infrastructure_command__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_definition__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__definition__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_template_template_path__ = __webpack_require__(2);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







__WEBPACK_IMPORTED_MODULE_4_core_template_template_path__["a" /* default */].register(__WEBPACK_IMPORTED_MODULE_3__definition__["e" /* GROUPBAR_NAME */], function () {
	return {
		model: 'group',
		resource: 'content'
	};
});

var Groupbar = function (_PluginComponent) {
	_inherits(Groupbar, _PluginComponent);

	function Groupbar() {
		_classCallCheck(this, Groupbar);

		var _this = _possibleConstructorReturn(this, (Groupbar.__proto__ || Object.getPrototypeOf(Groupbar)).apply(this, arguments));

		_this.newGroup = null;
		_this.add = new __WEBPACK_IMPORTED_MODULE_1_core_infrastructure_command__["a" /* default */]({
			execute: function execute(key) {
				var group = _this.model.group;
				var state = group();
				group({
					by: state.by.concat(key)
				});

				_this.newGroup = null;
			},
			canExecute: function canExecute() {
				return _this.columns.length > 0;
			}
		});

		_this.remove = new __WEBPACK_IMPORTED_MODULE_1_core_infrastructure_command__["a" /* default */]({
			execute: function execute(key) {
				var group = _this.model.group;
				var state = group();
				var index = state.by.findIndex(function (g) {
					return g === key;
				});
				if (index >= 0) {
					var temp = Array.from(state.by);
					temp.splice(index, 1);
					group({
						by: temp
					});
				}
			}
		});

		_this.drop = new __WEBPACK_IMPORTED_MODULE_1_core_infrastructure_command__["a" /* default */]({
			canExecute: function canExecute(e) {
				return e.source && e.source.key === __WEBPACK_IMPORTED_MODULE_2_ng_definition__["x" /* TH_CORE_NAME */] && _this.add.canExecute(e.source.value);
			},
			execute: function execute(e) {
				return _this.add.execute(e.source.value);
			}
		});
		return _this;
	}

	_createClass(Groupbar, [{
		key: 'title',
		value: function title(key) {
			var columns = this.columns;
			var index = columns.findIndex(function (c) {
				return c.key === key;
			});
			return index >= 0 ? columns[index].title : '';
		}
	}, {
		key: 'resource',
		get: function get() {
			return this.model.group().resource;
		}
	}, {
		key: 'columns',
		get: function get() {
			return this.model.data().columns;
		}
	}, {
		key: 'groups',
		get: function get() {
			return this.model.group().by;
		}
	}]);

	return Groupbar;
}(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__plugin_component__["a" /* default */])('groupbar'));

/* harmony default export */ __webpack_exports__["a"] = Groupbar.component({
	controller: Groupbar,
	controllerAs: '$groupbar'
});

/***/ }),
/* 225 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pagination_pager__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sortbar_sortbar__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__groupbar_groupbar__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pivotbar_pivotbar__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__selectionbar_selectionbar__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__visibility_visibility__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__column_chooser_column_chooser__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__progress_progress__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__popup_popup__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__popup_popup_trigger__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__popup_popup_head__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__popup_popup_body__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__popup_popup_panel__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__popup_popup_service__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__definition__ = __webpack_require__(9);

















/* harmony default export */ __webpack_exports__["a"] = angular.module(__WEBPACK_IMPORTED_MODULE_14__definition__["a" /* MODULE_NAME */], [__WEBPACK_IMPORTED_MODULE_14__definition__["b" /* MODULE_CORE_NAME */]]).component(__WEBPACK_IMPORTED_MODULE_14__definition__["c" /* PAGER_NAME */], __WEBPACK_IMPORTED_MODULE_0__pagination_pager__["a" /* default */]).component(__WEBPACK_IMPORTED_MODULE_14__definition__["d" /* SORTBAR_NAME */], __WEBPACK_IMPORTED_MODULE_1__sortbar_sortbar__["a" /* default */]).component(__WEBPACK_IMPORTED_MODULE_14__definition__["e" /* GROUPBAR_NAME */], __WEBPACK_IMPORTED_MODULE_2__groupbar_groupbar__["a" /* default */]).component(__WEBPACK_IMPORTED_MODULE_14__definition__["f" /* PIVOTBAR_NAME */], __WEBPACK_IMPORTED_MODULE_3__pivotbar_pivotbar__["a" /* default */]).component(__WEBPACK_IMPORTED_MODULE_14__definition__["g" /* SELECTIONBAR_NAME */], __WEBPACK_IMPORTED_MODULE_4__selectionbar_selectionbar__["a" /* default */]).component(__WEBPACK_IMPORTED_MODULE_14__definition__["h" /* VISIBILITY_NAME */], __WEBPACK_IMPORTED_MODULE_5__visibility_visibility__["a" /* default */]).component(__WEBPACK_IMPORTED_MODULE_14__definition__["i" /* COLUMNCHOOSER_NAME */], __WEBPACK_IMPORTED_MODULE_6__column_chooser_column_chooser__["a" /* default */]).component(__WEBPACK_IMPORTED_MODULE_14__definition__["j" /* PROGRESS_NAME */], __WEBPACK_IMPORTED_MODULE_7__progress_progress__["a" /* default */]).component(__WEBPACK_IMPORTED_MODULE_14__definition__["k" /* POPUP_NAME */], __WEBPACK_IMPORTED_MODULE_8__popup_popup__["a" /* default */]).component(__WEBPACK_IMPORTED_MODULE_14__definition__["l" /* POPUP_TRIGGER_NAME */], __WEBPACK_IMPORTED_MODULE_9__popup_popup_trigger__["a" /* default */]).component(__WEBPACK_IMPORTED_MODULE_14__definition__["m" /* POPUP_HEAD_NAME */], __WEBPACK_IMPORTED_MODULE_10__popup_popup_head__["a" /* default */]).component(__WEBPACK_IMPORTED_MODULE_14__definition__["n" /* POPUP_BODY_NAME */], __WEBPACK_IMPORTED_MODULE_11__popup_popup_body__["a" /* default */]).component(__WEBPACK_IMPORTED_MODULE_14__definition__["o" /* POPUP_PANEL_NAME */], __WEBPACK_IMPORTED_MODULE_12__popup_popup_panel__["a" /* default */]).service(__WEBPACK_IMPORTED_MODULE_14__definition__["p" /* POPUP_SERVICE */], __WEBPACK_IMPORTED_MODULE_13__popup_popup_service__["a" /* default */]).config(Setup).name;

Setup.$inject = ['qgridThemeProvider'];
function Setup(qgridThemeProvider) {
	var EMPTY = '';

	qgridThemeProvider.register('default', function (theme) {
		theme.put('qgrid.plugin.pager.tpl.html', __webpack_require__(408));
		theme.put('qgrid.plugin.progress.tpl.html', __webpack_require__(412));
		theme.put('qgrid.plugin.sortbar.tpl.html', __webpack_require__(414));
		theme.put('qgrid.plugin.groupbar.tpl.html', __webpack_require__(407));
		theme.put('qgrid.plugin.pivotbar.tpl.html', __webpack_require__(409));
		theme.put('qgrid.plugin.selectionbar.tpl.html', __webpack_require__(413));
		theme.put('qgrid.plugin.visibility.tpl.html', __webpack_require__(415));
		theme.put('qgrid.plugin.columnchooser.tpl.html', __webpack_require__(406));

		theme.put('qgrid.plugin.popup.tpl.html', __webpack_require__(410));
		theme.put('qgrid.plugin.popup-panel.tpl.html', __webpack_require__(411));
		theme.put('qgrid.plugin.popup-trigger.tpl.html', EMPTY);
		theme.put('qgrid.plugin.popup-head.tpl.html', EMPTY);
		theme.put('qgrid.plugin.popup-body.tpl.html', EMPTY);
	});
}

/***/ }),
/* 226 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__plugin_component__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__definition__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_infrastructure_command__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_template_template_path__ = __webpack_require__(2);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






__WEBPACK_IMPORTED_MODULE_3_core_template_template_path__["a" /* default */].register(__WEBPACK_IMPORTED_MODULE_1__definition__["c" /* PAGER_NAME */], function () {
	return {
		model: 'pagination',
		resource: 'content'
	};
});

var Pager = function (_PluginComponent) {
	_inherits(Pager, _PluginComponent);

	function Pager() {
		_classCallCheck(this, Pager);

		var _this = _possibleConstructorReturn(this, (Pager.__proto__ || Object.getPrototypeOf(Pager)).apply(this, arguments));

		var ctrl = _this;
		_this.next = new __WEBPACK_IMPORTED_MODULE_2_core_infrastructure_command__["a" /* default */]({
			execute: function execute() {
				return ctrl.current = ctrl.current + 1;
			},
			canExecute: function canExecute() {
				return (ctrl.current + 1) * ctrl.size < ctrl.total;
			}
		});

		_this.prev = new __WEBPACK_IMPORTED_MODULE_2_core_infrastructure_command__["a" /* default */]({
			execute: function execute() {
				return ctrl.current = ctrl.current - 1;
			},
			canExecute: function canExecute() {
				return ctrl.current > 0;
			}
		});
		return _this;
	}

	_createClass(Pager, [{
		key: 'resource',
		get: function get() {
			return this.model.pagination().resource;
		}
	}, {
		key: 'size',
		get: function get() {
			return this.model.pagination().size;
		},
		set: function set(value) {
			this.model.pagination({ size: value });
		}
	}, {
		key: 'sizeList',
		get: function get() {
			return this.model.pagination().sizeList;
		}
	}, {
		key: 'current',
		get: function get() {
			return this.model.pagination().current;
		},
		set: function set(value) {
			return this.model.pagination({ current: value });
		}
	}, {
		key: 'from',
		get: function get() {
			return Math.min(this.total, this.current * this.size + 1);
		}
	}, {
		key: 'to',
		get: function get() {
			return Math.min(this.total, (this.current + 1) * this.size);
		}
	}, {
		key: 'total',
		get: function get() {
			return this.model.data().rows.length;
		}
	}]);

	return Pager;
}(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__plugin_component__["a" /* default */])('pager', ['pagination']));

/* harmony default export */ __webpack_exports__["a"] = Pager.component({
	controller: Pager,
	controllerAs: '$pager',
	bindings: {
		'paginationSize': '<size',
		'paginationSizeList': '<sizeList'
	}
});

/***/ }),
/* 227 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__plugin_component__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_infrastructure_command__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_definition__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__definition__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_template_template_path__ = __webpack_require__(2);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







__WEBPACK_IMPORTED_MODULE_4_core_template_template_path__["a" /* default */].register(__WEBPACK_IMPORTED_MODULE_3__definition__["f" /* PIVOTBAR_NAME */], function () {
	return {
		model: 'pivot',
		resource: 'content'
	};
});

var Pivotbar = function (_PluginComponent) {
	_inherits(Pivotbar, _PluginComponent);

	function Pivotbar() {
		_classCallCheck(this, Pivotbar);

		var _this = _possibleConstructorReturn(this, (Pivotbar.__proto__ || Object.getPrototypeOf(Pivotbar)).apply(this, arguments));

		_this.newGroup = null;
		_this.add = new __WEBPACK_IMPORTED_MODULE_1_core_infrastructure_command__["a" /* default */]({
			execute: function execute(key) {
				var pivot = _this.model.pivot;
				var state = pivot();
				pivot({
					by: state.by.concat(key)
				});

				_this.newGroup = null;
			},
			canExecute: function canExecute() {
				return _this.columns.length > 0;
			}
		});

		_this.remove = new __WEBPACK_IMPORTED_MODULE_1_core_infrastructure_command__["a" /* default */]({
			execute: function execute(key) {
				var pivot = _this.model.pivot;
				var state = pivot();
				var index = state.by.findIndex(function (g) {
					return g === key;
				});
				if (index >= 0) {
					var temp = Array.from(state.by);
					temp.splice(index, 1);
					pivot({
						by: temp
					});
				}
			}
		});

		_this.drop = new __WEBPACK_IMPORTED_MODULE_1_core_infrastructure_command__["a" /* default */]({
			canExecute: function canExecute(e) {
				return e.source && e.source.key === __WEBPACK_IMPORTED_MODULE_2_ng_definition__["x" /* TH_CORE_NAME */] && _this.add.canExecute(e.source.value);
			},
			execute: function execute(e) {
				return _this.add.execute(e.source.value);
			}
		});
		return _this;
	}

	_createClass(Pivotbar, [{
		key: 'title',
		value: function title(key) {
			var columns = this.columns;
			var index = columns.findIndex(function (c) {
				return c.key === key;
			});
			return index >= 0 ? columns[index].title : '';
		}
	}, {
		key: 'resource',
		get: function get() {
			return this.model.pivot().resource;
		}
	}, {
		key: 'columns',
		get: function get() {
			return this.model.data().columns;
		}
	}, {
		key: 'groups',
		get: function get() {
			return this.model.pivot().by;
		}
	}]);

	return Pivotbar;
}(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__plugin_component__["a" /* default */])('pivotbar'));

/* harmony default export */ __webpack_exports__["a"] = Pivotbar.component({
	controller: Pivotbar,
	controllerAs: '$pivotbar'
});

/***/ }),
/* 228 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ng_components_component__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng_components_template_template_link__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__definition__ = __webpack_require__(9);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var PopupBody = function (_Component) {
	_inherits(PopupBody, _Component);

	function PopupBody($scope, $element, $compile, $templateCache, qGridPopupService) {
		_classCallCheck(this, PopupBody);

		var _this = _possibleConstructorReturn(this, (PopupBody.__proto__ || Object.getPrototypeOf(PopupBody)).call(this));

		_this.$scope = $scope;
		_this.$element = $element;
		_this.qGridPopupService = qGridPopupService;
		_this.$templateScope = null;
		_this.template = new __WEBPACK_IMPORTED_MODULE_1_ng_components_template_template_link__["a" /* default */]($compile, $templateCache);
		return _this;
	}

	_createClass(PopupBody, [{
		key: 'onInit',
		value: function onInit() {
			this.$popup = this.popup;

			var model = this.model;
			var templateUrl = 'qgrid.plugin.popup-body.tpl.html';
			var templateScope = this.$scope.$new();
			var link = this.template.link(templateUrl, model.popup().resource, [this.id + ':body']);

			link(this.$element, templateScope);
			this.$templateScope = templateScope;
		}
	}, {
		key: 'onDestroy',
		value: function onDestroy() {
			if (this.$templateScope) {
				this.$templateScope.$destroy();
			}
		}
	}, {
		key: 'close',
		value: function close() {
			this.popup.close();
		}
	}]);

	return PopupBody;
}(__WEBPACK_IMPORTED_MODULE_0_ng_components_component__["a" /* default */]);

PopupBody.$inject = ['$scope', '$element', '$compile', '$templateCache', 'qGridPopupService'];

/* harmony default export */ __webpack_exports__["a"] = {
	controller: PopupBody,
	controllerAs: '$popupBody',
	require: {
		popup: '^^' + __WEBPACK_IMPORTED_MODULE_2__definition__["o" /* POPUP_PANEL_NAME */]
	},
	bindings: {
		model: '<',
		id: '<'
	}
};

/***/ }),
/* 229 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ng_components_component__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng_components_template_template_link__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__definition__ = __webpack_require__(9);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var PopupHead = function (_Component) {
	_inherits(PopupHead, _Component);

	function PopupHead($scope, $element, $document, $window, $compile, $templateCache, qGridPopupService) {
		_classCallCheck(this, PopupHead);

		var _this = _possibleConstructorReturn(this, (PopupHead.__proto__ || Object.getPrototypeOf(PopupHead)).call(this));

		_this.position = {
			x: 0,
			y: 0
		};

		_this.$scope = $scope;
		_this.$element = $element;
		_this.$document = $document;
		_this.$window = $window;
		_this.qGridPopupService = qGridPopupService;
		_this.$templateScope = null;
		_this.template = new __WEBPACK_IMPORTED_MODULE_1_ng_components_template_template_link__["a" /* default */]($compile, $templateCache);

		_this.$element.attr('draggable', true);
		return _this;
	}

	_createClass(PopupHead, [{
		key: 'onInit',
		value: function onInit() {
			var _this2 = this;

			var popup = this.popup;
			var popupElement = popup.$element;
			var model = this.model;
			var templateUrl = 'qgrid.plugin.popup-head.tpl.html';
			var templateScope = this.$scope.$new();
			var link = this.template.link(templateUrl, model.popup().resource, [this.id + ':head']);

			link(this.$element, templateScope);
			this.$templateScope = templateScope;

			this.$element.on('dragstart', function (e) {
				_this2.position.x = e.offsetX;
				_this2.position.y = e.offsetY;

				popupElement.addClass('drag');
				e.dataTransfer.setDragImage(angular.element('<div></div>')[0], 0, 0);
			});

			this.$element.on('drag', function (event) {
				var cx = event.clientX,
				    cy = event.clientY,
				    x = _this2.position.x,
				    y = _this2.position.y;

				if (cx || cy) {
					var l = cx - x,
					    t = cy - y,
					    w = _this2.$element.clientWidth,
					    h = _this2.$element.clientHeight,
					    el = 0,
					    er = _this2.$window.innerWidth - w,
					    et = 0,
					    eb = _this2.$window.innerHeight - h;

					l = l <= el ? el : l >= er ? er : l;
					t = t <= et ? et : t >= eb ? eb : t;

					popupElement.css('left', l + 'px');
					popupElement.css('top', t + 'px');
				}
			});

			this.$element.on('dragend', function () {
				_this2.$element.removeClass('drag');
			});

			this.$document.find('body').bind('dragover', this.onDragOver);
		}
	}, {
		key: 'onDragOver',
		value: function onDragOver(e) {
			e.preventDefault();
		}
	}, {
		key: 'onDestroy',
		value: function onDestroy() {
			if (this.$templateScope) {
				this.$templateScope.$destroy();
			}

			this.$document.find('body').unbind('dragover', this.onDragOver);
		}
	}]);

	return PopupHead;
}(__WEBPACK_IMPORTED_MODULE_0_ng_components_component__["a" /* default */]);

PopupHead.$inject = ['$scope', '$element', '$document', '$window', '$compile', '$templateCache', 'qGridPopupService'];

/* harmony default export */ __webpack_exports__["a"] = {
	controller: PopupHead,
	controllerAs: '$popupHead',
	require: {
		popup: '^^' + __WEBPACK_IMPORTED_MODULE_2__definition__["o" /* POPUP_PANEL_NAME */]
	},
	bindings: {
		model: '<',
		id: '<'
	}
};

/***/ }),
/* 230 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__plugin_component__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__definition__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_template_template_path__ = __webpack_require__(2);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





__webpack_require__(243);

__WEBPACK_IMPORTED_MODULE_2_core_template_template_path__["a" /* default */].register(__WEBPACK_IMPORTED_MODULE_1__definition__["k" /* POPUP_NAME */], function (template, popup) {
	return {
		model: 'popup',
		resource: popup.id + ':' + template.for
	};
});

var Popup = function (_PluginComponent) {
	_inherits(Popup, _PluginComponent);

	function Popup() {
		_classCallCheck(this, Popup);

		return _possibleConstructorReturn(this, (Popup.__proto__ || Object.getPrototypeOf(Popup)).apply(this, arguments));
	}

	_createClass(Popup, [{
		key: 'onInit',
		value: function onInit() {}
	}, {
		key: 'show',
		value: function show() {
			var _this2 = this;

			var template = null;
			var templateScope = null;

			this.$transclude(function (clone, scope) {
				template = clone;
				templateScope = scope;

				_this2.$element.append(clone);
			});

			template.remove();
			templateScope.$destroy();

			_get(Popup.prototype.__proto__ || Object.getPrototypeOf(Popup.prototype), 'show', this).call(this);
		}
	}, {
		key: 'open',
		value: function open() {
			var settings = { id: this.id };
			this.qGridPopupService.open(settings, this.model, this.$scope, this.$element);
		}
	}, {
		key: 'resource',
		get: function get() {
			return this.model.popup().resource;
		}
	}]);

	return Popup;
}(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__plugin_component__["a" /* default */])('popup', ['popup'], ['$transclude', 'qGridPopupService']));

/* harmony default export */ __webpack_exports__["a"] = Popup.component({
	transclude: true,
	controller: Popup,
	controllerAs: '$popup',
	bindings: {
		id: '@'
	}
});

/***/ }),
/* 231 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_infrastructure_event__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_services_utility__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var Popup = function () {
	function Popup(element, settings, body) {
		_classCallCheck(this, Popup);

		this.element = element;
		this.event = new __WEBPACK_IMPORTED_MODULE_0_core_infrastructure_event__["a" /* default */]();
		this.state = {
			expanded: false,
			active: false
		};
		this.body = body;
		this.layout = {
			position: {},
			size: {}
		};
		this.settings = settings;

		this.onClose = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_core_services_utility__["a" /* isFunction */])(settings.close) ? settings.close : __WEBPACK_IMPORTED_MODULE_1_core_services_utility__["b" /* noop */];
	}

	_createClass(Popup, [{
		key: 'close',
		value: function close() {
			this.onClose();
			this.element.remove();
		}
	}, {
		key: 'expand',
		value: function expand() {
			var position = {
				top: this.element.style.top,
				left: this.element.style.left
			},
			    size = {
				width: this.element.offsetWidth,
				height: this.element.offsetHeight
			};
			this.layout = {
				position: position,
				size: size
			};
			this.element.addClass('expanded');
			this.state.expanded = true;

			this.event.emit('expand');
		}
	}, {
		key: 'collapse',
		value: function collapse() {
			var popupElement = this.element[0];

			this.element.removeClass('expanded');
			this.state.expanded = false;

			popupElement.style.width = this.layout.size.width;
			popupElement.style.height = this.layout.size.height;
			popupElement.style.top = this.layout.position.top;
			popupElement.style.left = this.layout.position.left;

			this.event.emit('collapse');
		}
	}, {
		key: 'focus',
		value: function focus() {
			this.state.active = true;
			this.element.addClass('active');
			this.element.attr('tabindex', 0);
			this.element.focus();

			this.event.emit('focus');
		}
	}, {
		key: 'unfocus',
		value: function unfocus() {
			this.state.active = false;
			this.element.removeClass('active');
			this.element.removeAttr('tabindex');
		}
	}, {
		key: 'resize',
		value: function resize(settings) {
			this.element.css({
				width: Math.min(settings.width, this.body.clientWidth - this.element.offsetLeft) + "px",
				height: Math.min(settings.height, this.body.clientHeight - this.element.offsetTop) + "px"
			});
			this.event.emit('resize');
		}
	}]);

	return Popup;
}();

/* harmony default export */ __webpack_exports__["a"] = Popup;

/***/ }),
/* 232 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_resource_resource__ = __webpack_require__(4);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var PluginModel = function PluginModel() {
	_classCallCheck(this, PluginModel);

	this.resource = new __WEBPACK_IMPORTED_MODULE_0__core_resource_resource__["a" /* default */]();
	this.items = new Set();
};

/* harmony default export */ __webpack_exports__["a"] = PluginModel;

/***/ }),
/* 233 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ng_components_component__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng_components_template_template_link__ = __webpack_require__(16);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var PopupPanel = function (_Component) {
	_inherits(PopupPanel, _Component);

	function PopupPanel($scope, $element, $compile, $templateCache, qGridPopupService) {
		_classCallCheck(this, PopupPanel);

		var _this = _possibleConstructorReturn(this, (PopupPanel.__proto__ || Object.getPrototypeOf(PopupPanel)).call(this));

		_this.$scope = $scope;
		_this.$element = $element;
		_this.qGridPopupService = qGridPopupService;
		_this.$templateScope = null;
		_this.template = new __WEBPACK_IMPORTED_MODULE_1_ng_components_template_template_link__["a" /* default */]($compile, $templateCache);
		return _this;
	}

	_createClass(PopupPanel, [{
		key: 'onInit',
		value: function onInit() {
			var model = this.model;
			var templateUrl = 'qgrid.plugin.popup-panel.tpl.html';
			var templateScope = this.$scope.$new();
			var link = this.template.link(templateUrl, model.popup().resource);

			link(this.$element, templateScope);
			this.$templateScope = templateScope;
			this.$element.addClass('q-grid-popup');
		}
	}, {
		key: 'onDestroy',
		value: function onDestroy() {
			if (this.$templateScope) {
				this.$templateScope.$destroy();
			}
		}
	}, {
		key: 'close',
		value: function close() {
			this.qGridPopupService.close(this.id);
		}
	}]);

	return PopupPanel;
}(__WEBPACK_IMPORTED_MODULE_0_ng_components_component__["a" /* default */]);

PopupPanel.$inject = ['$scope', '$element', '$compile', '$templateCache', 'qGridPopupService'];

/* harmony default export */ __webpack_exports__["a"] = {
	controller: PopupPanel,
	controllerAs: '$popup',
	bindings: {
		id: '<',
		model: '<'
	}
};

/***/ }),
/* 234 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ng_components_template_template_link__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__popup_manager__ = __webpack_require__(231);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var PopupService = function () {
	function PopupService() {
		var _this = this;

		_classCallCheck(this, PopupService);

		Array.from(arguments).forEach(function (arg, index) {
			return _this[PopupService.$inject[index]] = arg;
		});

		this.template = new __WEBPACK_IMPORTED_MODULE_0_ng_components_template_template_link__["a" /* default */](this.$compile, this.$templateCache);
		this.popups = {};
	}

	_createClass(PopupService, [{
		key: 'close',
		value: function close(id) {
			var item = this.popups[id];
			item.close();

			delete this.popups[id];
		}
	}, {
		key: 'closeAll',
		value: function closeAll() {
			var popups = Object.keys(this.popups);
			for (var i = 0, length = popups.length; i < length; i++) {
				popups[i].close();
			}
		}
	}, {
		key: 'open',
		value: function open(settings, model, parent, target) {
			if (this.popups.hasOwnProperty(settings.id)) {
				return;
			}

			target = this.targetize(null, settings);

			var scope = this.$rootScope.$new(false, parent);

			scope.model = model;
			scope.id = settings.id;

			var popup = angular.element('<q-grid:popup-panel id="id" model="model"></q-grid:popup-panel>');

			this.$document[0].body.append(popup[0]);
			this.$compile(popup)(scope);

			var pos = this.position(target, settings);

			popup.attr('id', settings.id);
			popup.css({ left: pos.left + 'px', top: pos.top + 'px', zIndex: 79 });

			if (settings.resizable) {
				popup.addClass('resizable');
			}
			if (settings.collapsible) {
				popup.addClass('collapsible');
			}
			if (settings.cls) {
				popup.addClass(settings.cls);
			}

			// var container = this.$document[0].body;
			// if (settings.container) {
			// 	container =
			// 		container.querySelector(settings.container)
			// 		|| container;
			// }

			this.popups[settings.id] = new __WEBPACK_IMPORTED_MODULE_1__popup_manager__["a" /* default */](popup, settings, this.$document[0].body);

			this.popups[settings.id].focus();
			//
			// this.$timeout(function () {
			// 	//Added this $timeout to keep the popup from flickering the position every time,
			// 	//it enters the DOM
			// 	angular.element(container).append(popup);
			// });
		}
	}, {
		key: 'expand',
		value: function expand(id) {
			var item = this.popups[id];
			item.expand();
		}
	}, {
		key: 'collapse',
		value: function collapse(id) {
			var item = self.popups[id];
			item.collapse();
		}
	}, {
		key: 'focus',
		value: function focus(id) {
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = this.popups[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var _step$value = _slicedToArray(_step.value, 2),
					    _popup = _step$value[1];

					_popup.unfocus();
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}

			var popup = this.popups[id];
			popup.focus();
		}
	}, {
		key: 'resize',
		value: function resize(id, settings) {
			var item = this.popups[id];
			item.resize(settings);
		}
	}, {
		key: 'targetize',
		value: function targetize(target, settings) {
			var _this2 = this;

			if (!target) {
				return {
					offset: function offset() {
						return {
							left: _this2.$window.innerWidth / 2,
							top: (_this2.$window.innerHeight - (parseInt(settings.height) || 0)) / 2
						};
					},
					height: function height() {
						return 500;
					},
					width: function width() {
						return 400;
					}
				};
			} else {
				//TODO: get rid of jQuery
				return angular.element(target);
			}
		}
	}, {
		key: 'position',
		value: function position(target, settings) {
			var dy = parseInt(settings.offsetTop) || 0;
			var dx = parseInt(settings.offsetLeft) || 0;
			var w = this.$window.innerWidth;
			var h = this.$window.innerHeight;
			var p = target.offset();
			var x = p.left;
			var y = p.top;
			var eh = parseInt(settings.height) || target.height();
			var ew = parseInt(settings.width) || target.width();
			var eh2 = eh / 2;
			var ew2 = ew / 2;
			var gtx1 = x + ew2 > w;
			var ltx0 = x - ew2 < 0;
			var gty1 = y + eh > h;
			var lty0 = y - eh < 0;
			var l = ltx0 && gtx1 ? w / 2 - ew2 : gtx1 ? x - ew - dx : ltx0 ? x + dx : x - ew2 + dx;
			var t = lty0 && gty1 ? h / 2 - eh2 : gty1 ? y - eh - dy : lty0 ? y + dy : y + dy;

			return {
				left: l,
				top: t
			};
		}
	}]);

	return PopupService;
}();

/* harmony default export */ __webpack_exports__["a"] = PopupService;


PopupService.$inject = ['$rootScope', '$window', '$document', '$templateCache', '$compile', '$timeout'];

/***/ }),
/* 235 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ng_components_component__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng_components_template_template_link__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__definition__ = __webpack_require__(9);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var PopupTrigger = function (_Component) {
	_inherits(PopupTrigger, _Component);

	function PopupTrigger($scope, $element, $compile, $templateCache) {
		_classCallCheck(this, PopupTrigger);

		var _this = _possibleConstructorReturn(this, (PopupTrigger.__proto__ || Object.getPrototypeOf(PopupTrigger)).call(this));

		_this.$scope = $scope;
		_this.$element = $element;
		_this.$templateScope = null;
		_this.template = new __WEBPACK_IMPORTED_MODULE_1_ng_components_template_template_link__["a" /* default */]($compile, $templateCache);
		return _this;
	}

	_createClass(PopupTrigger, [{
		key: 'onInit',
		value: function onInit() {
			var model = this.popup.model;
			var templateUrl = 'qgrid.plugin.popup-trigger.tpl.html';
			var templateScope = this.$scope.$new();
			var link = this.template.link(templateUrl, model.popup().resource, [this.popup.id + ':trigger']);

			link(this.$element, templateScope);
			this.$templateScope = templateScope;
		}
	}, {
		key: 'onDestroy',
		value: function onDestroy() {
			if (this.$templateScope) {
				this.$templateScope.$destroy();
			}
		}
	}, {
		key: 'open',
		value: function open() {
			this.popup.open();
		}
	}]);

	return PopupTrigger;
}(__WEBPACK_IMPORTED_MODULE_0_ng_components_component__["a" /* default */]);

PopupTrigger.$inject = ['$scope', '$element', '$compile', '$templateCache'];

/* harmony default export */ __webpack_exports__["a"] = {
	controller: PopupTrigger,
	require: {
		popup: '^^' + __WEBPACK_IMPORTED_MODULE_2__definition__["k" /* POPUP_NAME */]
	},
	controllerAs: '$popup'
};

/***/ }),
/* 236 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__plugin_component__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__definition__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_template_template_path__ = __webpack_require__(2);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





__WEBPACK_IMPORTED_MODULE_2_core_template_template_path__["a" /* default */].register(__WEBPACK_IMPORTED_MODULE_1__definition__["j" /* PROGRESS_NAME */], function () {
	return {
		model: 'progress',
		resource: 'content'
	};
});

var Progress = function (_PluginComponent) {
	_inherits(Progress, _PluginComponent);

	function Progress() {
		_classCallCheck(this, Progress);

		return _possibleConstructorReturn(this, (Progress.__proto__ || Object.getPrototypeOf(Progress)).apply(this, arguments));
	}

	_createClass(Progress, [{
		key: 'isBusy',
		get: function get() {
			return this.model.progress().isBusy;
		}
	}]);

	return Progress;
}(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__plugin_component__["a" /* default */])('progress', ['progress']));

/* harmony default export */ __webpack_exports__["a"] = Progress.component({
	controller: Progress,
	controllerAs: '$progress'
});

/***/ }),
/* 237 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__plugin_component__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_infrastructure_command__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__definition__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_template_template_path__ = __webpack_require__(2);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






__WEBPACK_IMPORTED_MODULE_3_core_template_template_path__["a" /* default */].register(__WEBPACK_IMPORTED_MODULE_2__definition__["g" /* SELECTIONBAR_NAME */], function () {
	return {
		model: 'selection',
		resource: 'content'
	};
});

var Selectionbar = function (_PluginComponent) {
	_inherits(Selectionbar, _PluginComponent);

	function Selectionbar() {
		_classCallCheck(this, Selectionbar);

		var _this = _possibleConstructorReturn(this, (Selectionbar.__proto__ || Object.getPrototypeOf(Selectionbar)).apply(this, arguments));

		_this.unit = 'row';
		_this.units = ['row', 'column', 'cell', 'checkbox'];

		_this.mode = 'single';
		_this.modes = ['single', 'multiple'];

		_this.toggleMode = new __WEBPACK_IMPORTED_MODULE_1_core_infrastructure_command__["a" /* default */]({
			execute: function execute(mode) {
				var selection = _this.model.selection;
				selection({ mode: mode });
			}
		});

		_this.toggleUnit = new __WEBPACK_IMPORTED_MODULE_1_core_infrastructure_command__["a" /* default */]({
			execute: function execute(unit) {
				var selection = _this.model.selection;
				selection({ unit: unit });
			}
		});
		return _this;
	}

	_createClass(Selectionbar, [{
		key: 'onInit',
		value: function onInit() {
			var _this2 = this;

			var selection = this.model.selection();
			this.mode = selection.mode;
			this.unit = selection.unit;

			this.model.selectionChanged.watch(function (e) {
				_this2.unit = e.state.unit;
				_this2.mode = e.state.mode;
			});
		}
	}, {
		key: 'count',
		get: function get() {
			return this.model.selection().items.length;
		}
	}, {
		key: 'resource',
		get: function get() {
			return this.model.visibility().resource;
		}
	}]);

	return Selectionbar;
}(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__plugin_component__["a" /* default */])('selectionbar'));

/* harmony default export */ __webpack_exports__["a"] = Selectionbar.component({
	controller: Selectionbar,
	controllerAs: '$selectionbar'
});

/***/ }),
/* 238 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__plugin_component__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_infrastructure_command__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_sort_sort_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__definition__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_definition__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_template_template_path__ = __webpack_require__(2);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








__WEBPACK_IMPORTED_MODULE_5_core_template_template_path__["a" /* default */].register(__WEBPACK_IMPORTED_MODULE_3__definition__["d" /* SORTBAR_NAME */], function () {
	return {
		model: 'sort',
		resource: 'content'
	};
});

var Sortbar = function (_PluginComponent) {
	_inherits(Sortbar, _PluginComponent);

	function Sortbar() {
		_classCallCheck(this, Sortbar);

		var _this = _possibleConstructorReturn(this, (Sortbar.__proto__ || Object.getPrototypeOf(Sortbar)).apply(this, arguments));

		_this.newSort = null;
		_this.add = new __WEBPACK_IMPORTED_MODULE_1_core_infrastructure_command__["a" /* default */]({
			execute: function execute(key) {
				var sort = _this.model.sort;
				var state = sort();
				var entry = _defineProperty({}, key, 'asc');
				sort({ by: state.by.concat(entry) });
				_this.newSort = null;
			},
			canExecute: function canExecute() {
				return _this.columns.length > 0;
			}
		});

		_this.remove = new __WEBPACK_IMPORTED_MODULE_1_core_infrastructure_command__["a" /* default */]({
			execute: function execute(entry) {
				var sort = _this.model.sort;
				var state = sort();
				var key = __WEBPACK_IMPORTED_MODULE_2_core_sort_sort_service__["a" /* key */](entry);
				var index = __WEBPACK_IMPORTED_MODULE_2_core_sort_sort_service__["b" /* index */](state.by, key);
				var temp = Array.from(state.by);
				temp.splice(index, 1);

				sort({
					by: temp
				});
			}
		});

		_this.drop = new __WEBPACK_IMPORTED_MODULE_1_core_infrastructure_command__["a" /* default */]({
			canExecute: function canExecute(e) {
				return e.source && e.source.key === __WEBPACK_IMPORTED_MODULE_4_ng_definition__["x" /* TH_CORE_NAME */] && _this.add.canExecute(e.source.value);
			},
			execute: function execute(e) {
				return _this.add.execute(e.source.value);
			}
		});
		return _this;
	}

	_createClass(Sortbar, [{
		key: 'title',
		value: function title(entry) {
			var key = __WEBPACK_IMPORTED_MODULE_2_core_sort_sort_service__["a" /* key */](entry);
			var columns = this.columns;
			var index = columns.findIndex(function (c) {
				return c.key === key;
			});
			return index >= 0 ? columns[index].title : '';
		}
	}, {
		key: 'resource',
		get: function get() {
			return this.model.sort().resource;
		}
	}, {
		key: 'columns',
		get: function get() {
			return this.model.data().columns;
		}
	}, {
		key: 'sorts',
		get: function get() {
			return this.model.sort().by;
		}
	}]);

	return Sortbar;
}(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__plugin_component__["a" /* default */])('sortbar'));

/* harmony default export */ __webpack_exports__["a"] = Sortbar.component({
	controller: Sortbar,
	controllerAs: '$sortbar'
});

/***/ }),
/* 239 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__plugin_component__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_infrastructure_command__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_node_node__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_services_path__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_services_ng__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__definition__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_template_template_path__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_services_utility__ = __webpack_require__(0);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










__WEBPACK_IMPORTED_MODULE_6_core_template_template_path__["a" /* default */].register(__WEBPACK_IMPORTED_MODULE_5__definition__["h" /* VISIBILITY_NAME */], function () {
	return {
		model: 'visibility',
		resource: 'content'
	};
});

var Visibility = function (_PluginComponent) {
	_inherits(Visibility, _PluginComponent);

	function Visibility() {
		_classCallCheck(this, Visibility);

		var _this = _possibleConstructorReturn(this, (Visibility.__proto__ || Object.getPrototypeOf(Visibility)).apply(this, arguments));

		_this.toggle = new __WEBPACK_IMPORTED_MODULE_1_core_infrastructure_command__["a" /* default */]({
			execute: function execute(node) {
				node.value = !node.value;
				node.setValue(node.value);

				// Trigger change event for the visibility model
				// TODO: trigger only changed parts
				var visibility = _this.model.visibility;
				visibility(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_core_services_utility__["h" /* cloneDeep */])(visibility()));
			},
			canExecute: function canExecute(node) {
				return !node.children.length;
			}
		});
		return _this;
	}

	_createClass(Visibility, [{
		key: 'build',
		value: function build(graph) {
			var _this2 = this;

			var nodes = [];
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				var _loop = function _loop() {
					var _step$value = _slicedToArray(_step.value, 2),
					    key = _step$value[0],
					    value = _step$value[1];

					if (key === 'resource') {
						return 'continue';
					}

					var node = new __WEBPACK_IMPORTED_MODULE_2_core_node_node__["a" /* default */](key);
					node.setValue = function (value) {
						return graph()[key] = value;
					};
					if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_core_services_utility__["i" /* isObject */])(value)) {
						node.children = _this2.build(function () {
							return graph()[key];
						});
					} else {
						node.value = value;
					}

					nodes.push(node);
				};

				for (var _iterator = Object.entries(graph())[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var _ret = _loop();

					if (_ret === 'continue') continue;
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}

			return nodes;
		}
	}, {
		key: 'onInit',
		value: function onInit() {
			var _this3 = this;

			var visibility = this.model.visibility;
			var visibilityState = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_core_services_utility__["h" /* cloneDeep */])(visibility());
			Object.keys(this.$attrs).filter(function (key) {
				return !__WEBPACK_IMPORTED_MODULE_4_ng_services_ng__["a" /* isSystem */](key) && key !== 'model';
			}).forEach(function (attr) {
				var accessor = __WEBPACK_IMPORTED_MODULE_3_core_services_path__["a" /* compile */](attr);
				accessor(visibilityState, _this3.$attrs[attr] === 'true');
			});

			visibility(visibilityState);
			this.items = this.build(function () {
				return visibility();
			});
		}
	}, {
		key: 'resource',
		get: function get() {
			return this.model.visibility().resource;
		}
	}]);

	return Visibility;
}(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__plugin_component__["a" /* default */])('visibility'));

/* harmony default export */ __webpack_exports__["a"] = Visibility.component({
	controller: Visibility,
	controllerAs: '$visibility'
});

/***/ }),
/* 240 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_infrastructure_model__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_services_grid__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_pipe_pipe__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_pipe_units_pipe_unit__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_infrastructure_log__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_services_utility__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__value__ = __webpack_require__(86);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }









var Grid = function () {
	function Grid($rootScope) {
		_classCallCheck(this, Grid);

		this.$rootScope = $rootScope;
	}

	_createClass(Grid, [{
		key: 'model',
		value: function model() {
			return new __WEBPACK_IMPORTED_MODULE_0_core_infrastructure_model__["a" /* default */]();
		}
	}, {
		key: 'service',
		value: function service(model) {
			var $rootScope = this.$rootScope;
			var apply = function apply() {
				__WEBPACK_IMPORTED_MODULE_4_core_infrastructure_log__["a" /* default */].info('service', '$digest apply');
				$rootScope.$evalAsync(__WEBPACK_IMPORTED_MODULE_5_core_services_utility__["b" /* noop */]);
			};

			return new __WEBPACK_IMPORTED_MODULE_1_core_services_grid__["a" /* default */](model, __WEBPACK_IMPORTED_MODULE_6__value__["a" /* getFactory */], apply);
		}
	}, {
		key: 'pipe',
		get: function get() {
			return __WEBPACK_IMPORTED_MODULE_2_core_pipe_pipe__["a" /* default */];
		}
	}, {
		key: 'pipeUnit',
		get: function get() {
			return __WEBPACK_IMPORTED_MODULE_3_core_pipe_units_pipe_unit__["a" /* default */];
		}
	}]);

	return Grid;
}();

/* harmony default export */ __webpack_exports__["a"] = Grid;


Grid.$inject = ['$rootScope'];

/***/ }),
/* 241 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = cell;
/* unused harmony export row */
function cell(path) {
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = path[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var node = _step.value;

			if (node.nodeName === 'TD') {
				var scope = angular.element(node).scope();
				if (scope.hasOwnProperty('$cell')) {
					return scope.$cell;
				}
			}
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}

	return null;
}

function row(path) {
	var _iteratorNormalCompletion2 = true;
	var _didIteratorError2 = false;
	var _iteratorError2 = undefined;

	try {
		for (var _iterator2 = path[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
			var node = _step2.value;

			if (node.nodeName === 'TR') {
				var scope = angular.element(node).scope();
				if (scope.hasOwnProperty('$row')) {
					return scope.$row;
				}
			}
		}
	} catch (err) {
		_didIteratorError2 = true;
		_iteratorError2 = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion2 && _iterator2.return) {
				_iterator2.return();
			}
		} finally {
			if (_didIteratorError2) {
				throw _iteratorError2;
			}
		}
	}

	return null;
}

/***/ }),
/* 242 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_infrastructure_event__ = __webpack_require__(35);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var DefaultTheme = 'default';

var ThemeProvider = function () {
	function ThemeProvider() {
		_classCallCheck(this, ThemeProvider);

		this.themes = new Map();
		this.$get.$inject = ['$templateCache'];
	}

	_createClass(ThemeProvider, [{
		key: 'register',
		value: function register(theme, apply) {
			var _this = this;

			if (this.themes.has(theme)) {
				(function () {
					var prevApply = _this.themes.get(theme);
					_this.themes.set(theme, function () {
						prevApply.apply(undefined, arguments);
						apply.apply(undefined, arguments);
					});
				})();
			} else {
				this.themes.set(theme, apply);
			}
		}
	}, {
		key: '$get',
		value: function $get($templateCache) {
			return new Theme(this.themes, $templateCache);
		}
	}]);

	return ThemeProvider;
}();

/* harmony default export */ __webpack_exports__["a"] = ThemeProvider;

var Theme = function () {
	function Theme(themes, cache) {
		_classCallCheck(this, Theme);

		this._name = '';
		this.changed = new __WEBPACK_IMPORTED_MODULE_0_core_infrastructure_event__["a" /* default */]();
		this.themes = themes;
		this.cache = cache;

		this.name = DefaultTheme;
	}

	_createClass(Theme, [{
		key: 'name',
		get: function get() {
			return this._name;
		},
		set: function set(value) {
			if (value !== this._name) {
				var oldValue = this._name;
				var apply = this.themes.get(value);

				if (this._name !== DefaultTheme && value !== DefaultTheme) {
					this.themes.get(DefaultTheme)(this.cache);
				}

				this._name = value;

				apply(this.cache);

				this.changed.emit({
					newValue: value,
					oldValue: oldValue
				});
			}
		}
	}]);

	return Theme;
}();

/***/ }),
/* 243 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 244 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(23),
    root = __webpack_require__(13);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(314),
    hashDelete = __webpack_require__(315),
    hashGet = __webpack_require__(316),
    hashHas = __webpack_require__(317),
    hashSet = __webpack_require__(318);

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(23),
    root = __webpack_require__(13);

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(23),
    root = __webpack_require__(13);

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(58),
    setCacheAdd = __webpack_require__(341),
    setCacheHas = __webpack_require__(342);

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(23),
    root = __webpack_require__(13);

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),
/* 251 */
/***/ (function(module, exports) {

/**
 * Adds the key-value `pair` to `map`.
 *
 * @private
 * @param {Object} map The map to modify.
 * @param {Array} pair The key-value pair to add.
 * @returns {Object} Returns `map`.
 */
function addMapEntry(map, pair) {
  // Don't return `map.set` because it's not chainable in IE 11.
  map.set(pair[0], pair[1]);
  return map;
}

module.exports = addMapEntry;


/***/ }),
/* 252 */
/***/ (function(module, exports) {

/**
 * Adds `value` to `set`.
 *
 * @private
 * @param {Object} set The set to modify.
 * @param {*} value The value to add.
 * @returns {Object} Returns `set`.
 */
function addSetEntry(set, value) {
  // Don't return `set.add` because it's not chainable in IE 11.
  set.add(value);
  return set;
}

module.exports = addSetEntry;


/***/ }),
/* 253 */
/***/ (function(module, exports) {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),
/* 254 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;


/***/ }),
/* 255 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),
/* 256 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;


/***/ }),
/* 257 */
/***/ (function(module, exports) {

/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function asciiToArray(string) {
  return string.split('');
}

module.exports = asciiToArray;


/***/ }),
/* 258 */
/***/ (function(module, exports) {

/** Used to match words composed of alphanumeric characters. */
var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

/**
 * Splits an ASCII `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */
function asciiWords(string) {
  return string.match(reAsciiWord) || [];
}

module.exports = asciiWords;


/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(28),
    keys = __webpack_require__(30);

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

module.exports = baseAssign;


/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(28),
    keysIn = __webpack_require__(50);

/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn(object, source) {
  return object && copyObject(source, keysIn(source), object);
}

module.exports = baseAssignIn;


/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(12);

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

module.exports = baseCreate;


/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

var baseForOwn = __webpack_require__(264),
    createBaseEach = __webpack_require__(301);

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

module.exports = baseEach;


/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(59),
    isFlattenable = __webpack_require__(321);

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

module.exports = baseFlatten;


/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

var baseFor = __webpack_require__(93),
    keys = __webpack_require__(30);

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;


/***/ }),
/* 265 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

module.exports = baseHasIn;


/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(22),
    isObjectLike = __webpack_require__(19);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(41),
    equalArrays = __webpack_require__(104),
    equalByTag = __webpack_require__(306),
    equalObjects = __webpack_require__(307),
    getTag = __webpack_require__(108),
    isArray = __webpack_require__(10),
    isBuffer = __webpack_require__(48),
    isTypedArray = __webpack_require__(69);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;


/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(41),
    baseIsEqual = __webpack_require__(96);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

module.exports = baseIsMatch;


/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(49),
    isMasked = __webpack_require__(324),
    isObject = __webpack_require__(12),
    toSource = __webpack_require__(116);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(22),
    isLength = __webpack_require__(68),
    isObjectLike = __webpack_require__(19);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

var baseMatches = __webpack_require__(275),
    baseMatchesProperty = __webpack_require__(276),
    identity = __webpack_require__(46),
    isArray = __webpack_require__(10),
    property = __webpack_require__(371);

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

module.exports = baseIteratee;


/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(67),
    nativeKeys = __webpack_require__(336);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(12),
    isPrototype = __webpack_require__(67),
    nativeKeysIn = __webpack_require__(337);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;


/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {

var baseEach = __webpack_require__(262),
    isArrayLike = __webpack_require__(29);

/**
 * The base implementation of `_.map` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function baseMap(collection, iteratee) {
  var index = -1,
      result = isArrayLike(collection) ? Array(collection.length) : [];

  baseEach(collection, function(value, key, collection) {
    result[++index] = iteratee(value, key, collection);
  });
  return result;
}

module.exports = baseMap;


/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsMatch = __webpack_require__(268),
    getMatchData = __webpack_require__(309),
    matchesStrictComparable = __webpack_require__(113);

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

module.exports = baseMatches;


/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__(96),
    get = __webpack_require__(361),
    hasIn = __webpack_require__(362),
    isKey = __webpack_require__(66),
    isStrictComparable = __webpack_require__(111),
    matchesStrictComparable = __webpack_require__(113),
    toKey = __webpack_require__(45);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

module.exports = baseMatchesProperty;


/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(41),
    assignMergeValue = __webpack_require__(90),
    baseFor = __webpack_require__(93),
    baseMergeDeep = __webpack_require__(278),
    isObject = __webpack_require__(12),
    keysIn = __webpack_require__(50);

/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  baseFor(source, function(srcValue, key) {
    if (isObject(srcValue)) {
      stack || (stack = new Stack);
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    }
    else {
      var newValue = customizer
        ? customizer(object[key], srcValue, (key + ''), object, source, stack)
        : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  }, keysIn);
}

module.exports = baseMerge;


/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

var assignMergeValue = __webpack_require__(90),
    cloneBuffer = __webpack_require__(99),
    cloneTypedArray = __webpack_require__(100),
    copyArray = __webpack_require__(101),
    initCloneObject = __webpack_require__(110),
    isArguments = __webpack_require__(47),
    isArray = __webpack_require__(10),
    isArrayLikeObject = __webpack_require__(363),
    isBuffer = __webpack_require__(48),
    isFunction = __webpack_require__(49),
    isObject = __webpack_require__(12),
    isPlainObject = __webpack_require__(365),
    isTypedArray = __webpack_require__(69),
    toPlainObject = __webpack_require__(375);

/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = object[key],
      srcValue = source[key],
      stacked = stack.get(srcValue);

  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer
    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
    : undefined;

  var isCommon = newValue === undefined;

  if (isCommon) {
    var isArr = isArray(srcValue),
        isBuff = !isArr && isBuffer(srcValue),
        isTyped = !isArr && !isBuff && isTypedArray(srcValue);

    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray(objValue)) {
        newValue = objValue;
      }
      else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      }
      else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      }
      else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      }
      else {
        newValue = [];
      }
    }
    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      newValue = objValue;
      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      }
      else if (!isObject(objValue) || (srcIndex && isFunction(objValue))) {
        newValue = initCloneObject(srcValue);
      }
    }
    else {
      isCommon = false;
    }
  }
  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }
  assignMergeValue(object, key, newValue);
}

module.exports = baseMergeDeep;


/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(89),
    baseIteratee = __webpack_require__(271),
    baseMap = __webpack_require__(274),
    baseSortBy = __webpack_require__(286),
    baseUnary = __webpack_require__(97),
    compareMultiple = __webpack_require__(297),
    identity = __webpack_require__(46);

/**
 * The base implementation of `_.orderBy` without param guards.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
 * @param {string[]} orders The sort orders of `iteratees`.
 * @returns {Array} Returns the new sorted array.
 */
function baseOrderBy(collection, iteratees, orders) {
  var index = -1;
  iteratees = arrayMap(iteratees.length ? iteratees : [identity], baseUnary(baseIteratee));

  var result = baseMap(collection, function(value, key, collection) {
    var criteria = arrayMap(iteratees, function(iteratee) {
      return iteratee(value);
    });
    return { 'criteria': criteria, 'index': ++index, 'value': value };
  });

  return baseSortBy(result, function(object, other) {
    return compareMultiple(object, other, orders);
  });
}

module.exports = baseOrderBy;


/***/ }),
/* 280 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

module.exports = baseProperty;


/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(94);

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

module.exports = basePropertyDeep;


/***/ }),
/* 282 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.propertyOf` without support for deep paths.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyOf(object) {
  return function(key) {
    return object == null ? undefined : object[key];
  };
}

module.exports = basePropertyOf;


/***/ }),
/* 283 */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(46),
    overRest = __webpack_require__(340),
    setToString = __webpack_require__(343);

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;


/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

var constant = __webpack_require__(357),
    defineProperty = __webpack_require__(103),
    identity = __webpack_require__(46);

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;


/***/ }),
/* 285 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

module.exports = baseSlice;


/***/ }),
/* 286 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.sortBy` which uses `comparer` to define the
 * sort order of `array` and replaces criteria objects with their corresponding
 * values.
 *
 * @private
 * @param {Array} array The array to sort.
 * @param {Function} comparer The function to define sort order.
 * @returns {Array} Returns `array`.
 */
function baseSortBy(array, comparer) {
  var length = array.length;

  array.sort(comparer);
  while (length--) {
    array[length] = array[length].value;
  }
  return array;
}

module.exports = baseSortBy;


/***/ }),
/* 287 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),
/* 288 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(27),
    arrayMap = __webpack_require__(89),
    isArray = __webpack_require__(10),
    isSymbol = __webpack_require__(34);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),
/* 289 */
/***/ (function(module, exports) {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ }),
/* 290 */
/***/ (function(module, exports, __webpack_require__) {

var baseSlice = __webpack_require__(285);

/**
 * Casts `array` to a slice if it's needed.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {number} start The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the cast slice.
 */
function castSlice(array, start, end) {
  var length = array.length;
  end = end === undefined ? length : end;
  return (!start && end >= length) ? array : baseSlice(array, start, end);
}

module.exports = castSlice;


/***/ }),
/* 291 */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(62);

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

module.exports = cloneDataView;


/***/ }),
/* 292 */
/***/ (function(module, exports, __webpack_require__) {

var addMapEntry = __webpack_require__(251),
    arrayReduce = __webpack_require__(60),
    mapToArray = __webpack_require__(112);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1;

/**
 * Creates a clone of `map`.
 *
 * @private
 * @param {Object} map The map to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned map.
 */
function cloneMap(map, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(mapToArray(map), CLONE_DEEP_FLAG) : mapToArray(map);
  return arrayReduce(array, addMapEntry, new map.constructor);
}

module.exports = cloneMap;


/***/ }),
/* 293 */
/***/ (function(module, exports) {

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

module.exports = cloneRegExp;


/***/ }),
/* 294 */
/***/ (function(module, exports, __webpack_require__) {

var addSetEntry = __webpack_require__(252),
    arrayReduce = __webpack_require__(60),
    setToArray = __webpack_require__(115);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1;

/**
 * Creates a clone of `set`.
 *
 * @private
 * @param {Object} set The set to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned set.
 */
function cloneSet(set, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(setToArray(set), CLONE_DEEP_FLAG) : setToArray(set);
  return arrayReduce(array, addSetEntry, new set.constructor);
}

module.exports = cloneSet;


/***/ }),
/* 295 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(27);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

module.exports = cloneSymbol;


/***/ }),
/* 296 */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(34);

/**
 * Compares values to sort them in ascending order.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {number} Returns the sort order indicator for `value`.
 */
function compareAscending(value, other) {
  if (value !== other) {
    var valIsDefined = value !== undefined,
        valIsNull = value === null,
        valIsReflexive = value === value,
        valIsSymbol = isSymbol(value);

    var othIsDefined = other !== undefined,
        othIsNull = other === null,
        othIsReflexive = other === other,
        othIsSymbol = isSymbol(other);

    if ((!othIsNull && !othIsSymbol && !valIsSymbol && value > other) ||
        (valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol) ||
        (valIsNull && othIsDefined && othIsReflexive) ||
        (!valIsDefined && othIsReflexive) ||
        !valIsReflexive) {
      return 1;
    }
    if ((!valIsNull && !valIsSymbol && !othIsSymbol && value < other) ||
        (othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol) ||
        (othIsNull && valIsDefined && valIsReflexive) ||
        (!othIsDefined && valIsReflexive) ||
        !othIsReflexive) {
      return -1;
    }
  }
  return 0;
}

module.exports = compareAscending;


/***/ }),
/* 297 */
/***/ (function(module, exports, __webpack_require__) {

var compareAscending = __webpack_require__(296);

/**
 * Used by `_.orderBy` to compare multiple properties of a value to another
 * and stable sort them.
 *
 * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
 * specify an order of "desc" for descending or "asc" for ascending sort order
 * of corresponding values.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {boolean[]|string[]} orders The order to sort by for each property.
 * @returns {number} Returns the sort order indicator for `object`.
 */
function compareMultiple(object, other, orders) {
  var index = -1,
      objCriteria = object.criteria,
      othCriteria = other.criteria,
      length = objCriteria.length,
      ordersLength = orders.length;

  while (++index < length) {
    var result = compareAscending(objCriteria[index], othCriteria[index]);
    if (result) {
      if (index >= ordersLength) {
        return result;
      }
      var order = orders[index];
      return result * (order == 'desc' ? -1 : 1);
    }
  }
  // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
  // that causes it, under certain circumstances, to provide the same value for
  // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
  // for more details.
  //
  // This also ensures a stable sort in V8 and other engines.
  // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
  return object.index - other.index;
}

module.exports = compareMultiple;


/***/ }),
/* 298 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(28),
    getSymbols = __webpack_require__(64);

/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

module.exports = copySymbols;


/***/ }),
/* 299 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(28),
    getSymbolsIn = __webpack_require__(107);

/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return copyObject(source, getSymbolsIn(source), object);
}

module.exports = copySymbolsIn;


/***/ }),
/* 300 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(13);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),
/* 301 */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(29);

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

module.exports = createBaseEach;


/***/ }),
/* 302 */
/***/ (function(module, exports) {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),
/* 303 */
/***/ (function(module, exports, __webpack_require__) {

var castSlice = __webpack_require__(290),
    hasUnicode = __webpack_require__(109),
    stringToArray = __webpack_require__(350),
    toString = __webpack_require__(51);

/**
 * Creates a function like `_.lowerFirst`.
 *
 * @private
 * @param {string} methodName The name of the `String` case method to use.
 * @returns {Function} Returns the new case function.
 */
function createCaseFirst(methodName) {
  return function(string) {
    string = toString(string);

    var strSymbols = hasUnicode(string)
      ? stringToArray(string)
      : undefined;

    var chr = strSymbols
      ? strSymbols[0]
      : string.charAt(0);

    var trailing = strSymbols
      ? castSlice(strSymbols, 1).join('')
      : string.slice(1);

    return chr[methodName]() + trailing;
  };
}

module.exports = createCaseFirst;


/***/ }),
/* 304 */
/***/ (function(module, exports, __webpack_require__) {

var arrayReduce = __webpack_require__(60),
    deburr = __webpack_require__(359),
    words = __webpack_require__(377);

/** Used to compose unicode capture groups. */
var rsApos = "['\u2019]";

/** Used to match apostrophes. */
var reApos = RegExp(rsApos, 'g');

/**
 * Creates a function like `_.camelCase`.
 *
 * @private
 * @param {Function} callback The function to combine each word.
 * @returns {Function} Returns the new compounder function.
 */
function createCompounder(callback) {
  return function(string) {
    return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');
  };
}

module.exports = createCompounder;


/***/ }),
/* 305 */
/***/ (function(module, exports, __webpack_require__) {

var basePropertyOf = __webpack_require__(282);

/** Used to map Latin Unicode letters to basic Latin letters. */
var deburredLetters = {
  // Latin-1 Supplement block.
  '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
  '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
  '\xc7': 'C',  '\xe7': 'c',
  '\xd0': 'D',  '\xf0': 'd',
  '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
  '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
  '\xcc': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
  '\xec': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
  '\xd1': 'N',  '\xf1': 'n',
  '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
  '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
  '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
  '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
  '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
  '\xc6': 'Ae', '\xe6': 'ae',
  '\xde': 'Th', '\xfe': 'th',
  '\xdf': 'ss',
  // Latin Extended-A block.
  '\u0100': 'A',  '\u0102': 'A', '\u0104': 'A',
  '\u0101': 'a',  '\u0103': 'a', '\u0105': 'a',
  '\u0106': 'C',  '\u0108': 'C', '\u010a': 'C', '\u010c': 'C',
  '\u0107': 'c',  '\u0109': 'c', '\u010b': 'c', '\u010d': 'c',
  '\u010e': 'D',  '\u0110': 'D', '\u010f': 'd', '\u0111': 'd',
  '\u0112': 'E',  '\u0114': 'E', '\u0116': 'E', '\u0118': 'E', '\u011a': 'E',
  '\u0113': 'e',  '\u0115': 'e', '\u0117': 'e', '\u0119': 'e', '\u011b': 'e',
  '\u011c': 'G',  '\u011e': 'G', '\u0120': 'G', '\u0122': 'G',
  '\u011d': 'g',  '\u011f': 'g', '\u0121': 'g', '\u0123': 'g',
  '\u0124': 'H',  '\u0126': 'H', '\u0125': 'h', '\u0127': 'h',
  '\u0128': 'I',  '\u012a': 'I', '\u012c': 'I', '\u012e': 'I', '\u0130': 'I',
  '\u0129': 'i',  '\u012b': 'i', '\u012d': 'i', '\u012f': 'i', '\u0131': 'i',
  '\u0134': 'J',  '\u0135': 'j',
  '\u0136': 'K',  '\u0137': 'k', '\u0138': 'k',
  '\u0139': 'L',  '\u013b': 'L', '\u013d': 'L', '\u013f': 'L', '\u0141': 'L',
  '\u013a': 'l',  '\u013c': 'l', '\u013e': 'l', '\u0140': 'l', '\u0142': 'l',
  '\u0143': 'N',  '\u0145': 'N', '\u0147': 'N', '\u014a': 'N',
  '\u0144': 'n',  '\u0146': 'n', '\u0148': 'n', '\u014b': 'n',
  '\u014c': 'O',  '\u014e': 'O', '\u0150': 'O',
  '\u014d': 'o',  '\u014f': 'o', '\u0151': 'o',
  '\u0154': 'R',  '\u0156': 'R', '\u0158': 'R',
  '\u0155': 'r',  '\u0157': 'r', '\u0159': 'r',
  '\u015a': 'S',  '\u015c': 'S', '\u015e': 'S', '\u0160': 'S',
  '\u015b': 's',  '\u015d': 's', '\u015f': 's', '\u0161': 's',
  '\u0162': 'T',  '\u0164': 'T', '\u0166': 'T',
  '\u0163': 't',  '\u0165': 't', '\u0167': 't',
  '\u0168': 'U',  '\u016a': 'U', '\u016c': 'U', '\u016e': 'U', '\u0170': 'U', '\u0172': 'U',
  '\u0169': 'u',  '\u016b': 'u', '\u016d': 'u', '\u016f': 'u', '\u0171': 'u', '\u0173': 'u',
  '\u0174': 'W',  '\u0175': 'w',
  '\u0176': 'Y',  '\u0177': 'y', '\u0178': 'Y',
  '\u0179': 'Z',  '\u017b': 'Z', '\u017d': 'Z',
  '\u017a': 'z',  '\u017c': 'z', '\u017e': 'z',
  '\u0132': 'IJ', '\u0133': 'ij',
  '\u0152': 'Oe', '\u0153': 'oe',
  '\u0149': "'n", '\u017f': 's'
};

/**
 * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
 * letters to basic Latin letters.
 *
 * @private
 * @param {string} letter The matched letter to deburr.
 * @returns {string} Returns the deburred letter.
 */
var deburrLetter = basePropertyOf(deburredLetters);

module.exports = deburrLetter;


/***/ }),
/* 306 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(27),
    Uint8Array = __webpack_require__(87),
    eq = __webpack_require__(33),
    equalArrays = __webpack_require__(104),
    mapToArray = __webpack_require__(112),
    setToArray = __webpack_require__(115);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;


/***/ }),
/* 307 */
/***/ (function(module, exports, __webpack_require__) {

var getAllKeys = __webpack_require__(106);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;


/***/ }),
/* 308 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(95),
    getSymbolsIn = __webpack_require__(107),
    keysIn = __webpack_require__(50);

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn);
}

module.exports = getAllKeysIn;


/***/ }),
/* 309 */
/***/ (function(module, exports, __webpack_require__) {

var isStrictComparable = __webpack_require__(111),
    keys = __webpack_require__(30);

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

module.exports = getMatchData;


/***/ }),
/* 310 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(27);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),
/* 311 */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),
/* 312 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(98),
    isArguments = __webpack_require__(47),
    isArray = __webpack_require__(10),
    isIndex = __webpack_require__(65),
    isLength = __webpack_require__(68),
    toKey = __webpack_require__(45);

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

module.exports = hasPath;


/***/ }),
/* 313 */
/***/ (function(module, exports) {

/** Used to detect strings that need a more robust regexp to match words. */
var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

/**
 * Checks if `string` contains a word composed of Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a word is found, else `false`.
 */
function hasUnicodeWord(string) {
  return reHasUnicodeWord.test(string);
}

module.exports = hasUnicodeWord;


/***/ }),
/* 314 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(44);

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),
/* 315 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),
/* 316 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(44);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),
/* 317 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(44);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),
/* 318 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(44);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),
/* 319 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

module.exports = initCloneArray;


/***/ }),
/* 320 */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(62),
    cloneDataView = __webpack_require__(291),
    cloneMap = __webpack_require__(292),
    cloneRegExp = __webpack_require__(293),
    cloneSet = __webpack_require__(294),
    cloneSymbol = __webpack_require__(295),
    cloneTypedArray = __webpack_require__(100);

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, cloneFunc, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return cloneMap(object, isDeep, cloneFunc);

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return cloneSet(object, isDeep, cloneFunc);

    case symbolTag:
      return cloneSymbol(object);
  }
}

module.exports = initCloneByTag;


/***/ }),
/* 321 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(27),
    isArguments = __webpack_require__(47),
    isArray = __webpack_require__(10);

/** Built-in value references. */
var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

module.exports = isFlattenable;


/***/ }),
/* 322 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(33),
    isArrayLike = __webpack_require__(29),
    isIndex = __webpack_require__(65),
    isObject = __webpack_require__(12);

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

module.exports = isIterateeCall;


/***/ }),
/* 323 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),
/* 324 */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(300);

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),
/* 325 */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),
/* 326 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(42);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),
/* 327 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(42);

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),
/* 328 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(42);

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),
/* 329 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(42);

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),
/* 330 */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(246),
    ListCache = __webpack_require__(40),
    Map = __webpack_require__(57);

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),
/* 331 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(43);

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),
/* 332 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(43);

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),
/* 333 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(43);

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),
/* 334 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(43);

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),
/* 335 */
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__(367);

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),
/* 336 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(114);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),
/* 337 */
/***/ (function(module, exports) {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),
/* 338 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(105);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(71)(module)))

/***/ }),
/* 339 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 340 */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(253);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ }),
/* 341 */
/***/ (function(module, exports) {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ }),
/* 342 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ }),
/* 343 */
/***/ (function(module, exports, __webpack_require__) {

var baseSetToString = __webpack_require__(284),
    shortOut = __webpack_require__(344);

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;


/***/ }),
/* 344 */
/***/ (function(module, exports) {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;


/***/ }),
/* 345 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(40);

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),
/* 346 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),
/* 347 */
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),
/* 348 */
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),
/* 349 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(40),
    Map = __webpack_require__(57),
    MapCache = __webpack_require__(58);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),
/* 350 */
/***/ (function(module, exports, __webpack_require__) {

var asciiToArray = __webpack_require__(257),
    hasUnicode = __webpack_require__(109),
    unicodeToArray = __webpack_require__(352);

/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function stringToArray(string) {
  return hasUnicode(string)
    ? unicodeToArray(string)
    : asciiToArray(string);
}

module.exports = stringToArray;


/***/ }),
/* 351 */
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(335);

/** Used to match property names within property paths. */
var reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),
/* 352 */
/***/ (function(module, exports) {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsAstral = '[' + rsAstralRange + ']',
    rsCombo = '[' + rsComboRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

/**
 * Converts a Unicode `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function unicodeToArray(string) {
  return string.match(reUnicode) || [];
}

module.exports = unicodeToArray;


/***/ }),
/* 353 */
/***/ (function(module, exports) {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsDingbatRange = '\\u2700-\\u27bf',
    rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
    rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
    rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
    rsPunctuationRange = '\\u2000-\\u206f',
    rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
    rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
    rsVarRange = '\\ufe0e\\ufe0f',
    rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;

/** Used to compose unicode capture groups. */
var rsApos = "['\u2019]",
    rsBreak = '[' + rsBreakRange + ']',
    rsCombo = '[' + rsComboRange + ']',
    rsDigits = '\\d+',
    rsDingbat = '[' + rsDingbatRange + ']',
    rsLower = '[' + rsLowerRange + ']',
    rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsUpper = '[' + rsUpperRange + ']',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')',
    rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')',
    rsOptContrLower = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?',
    rsOptContrUpper = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?',
    reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsOrdLower = '\\d*(?:(?:1st|2nd|3rd|(?![123])\\dth)\\b)',
    rsOrdUpper = '\\d*(?:(?:1ST|2ND|3RD|(?![123])\\dTH)\\b)',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq;

/** Used to match complex or compound words. */
var reUnicodeWord = RegExp([
  rsUpper + '?' + rsLower + '+' + rsOptContrLower + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')',
  rsMiscUpper + '+' + rsOptContrUpper + '(?=' + [rsBreak, rsUpper + rsMiscLower, '$'].join('|') + ')',
  rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower,
  rsUpper + '+' + rsOptContrUpper,
  rsOrdUpper,
  rsOrdLower,
  rsDigits,
  rsEmoji
].join('|'), 'g');

/**
 * Splits a Unicode `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */
function unicodeWords(string) {
  return string.match(reUnicodeWord) || [];
}

module.exports = unicodeWords;


/***/ }),
/* 354 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(28),
    createAssigner = __webpack_require__(102),
    keys = __webpack_require__(30);

/**
 * This method is like `_.assign` except that it accepts `customizer`
 * which is invoked to produce the assigned values. If `customizer` returns
 * `undefined`, assignment is handled by the method instead. The `customizer`
 * is invoked with five arguments: (objValue, srcValue, key, object, source).
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} sources The source objects.
 * @param {Function} [customizer] The function to customize assigned values.
 * @returns {Object} Returns `object`.
 * @see _.assignInWith
 * @example
 *
 * function customizer(objValue, srcValue) {
 *   return _.isUndefined(objValue) ? srcValue : objValue;
 * }
 *
 * var defaults = _.partialRight(_.assignWith, customizer);
 *
 * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
 * // => { 'a': 1, 'b': 2 }
 */
var assignWith = createAssigner(function(object, source, srcIndex, customizer) {
  copyObject(source, keys(source), object, customizer);
});

module.exports = assignWith;


/***/ }),
/* 355 */
/***/ (function(module, exports, __webpack_require__) {

var baseClone = __webpack_require__(92);

/** Used to compose bitmasks for cloning. */
var CLONE_SYMBOLS_FLAG = 4;

/**
 * Creates a shallow clone of `value`.
 *
 * **Note:** This method is loosely based on the
 * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
 * and supports cloning arrays, array buffers, booleans, date objects, maps,
 * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
 * arrays. The own enumerable properties of `arguments` objects are cloned
 * as plain objects. An empty object is returned for uncloneable values such
 * as error objects, functions, DOM nodes, and WeakMaps.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to clone.
 * @returns {*} Returns the cloned value.
 * @see _.cloneDeep
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var shallow = _.clone(objects);
 * console.log(shallow[0] === objects[0]);
 * // => true
 */
function clone(value) {
  return baseClone(value, CLONE_SYMBOLS_FLAG);
}

module.exports = clone;


/***/ }),
/* 356 */
/***/ (function(module, exports, __webpack_require__) {

var baseClone = __webpack_require__(92);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_SYMBOLS_FLAG = 4;

/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */
function cloneDeep(value) {
  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}

module.exports = cloneDeep;


/***/ }),
/* 357 */
/***/ (function(module, exports) {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ }),
/* 358 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(12),
    now = __webpack_require__(369),
    toNumber = __webpack_require__(374);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;


/***/ }),
/* 359 */
/***/ (function(module, exports, __webpack_require__) {

var deburrLetter = __webpack_require__(305),
    toString = __webpack_require__(51);

/** Used to match Latin Unicode letters (excluding mathematical operators). */
var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;

/** Used to compose unicode character classes. */
var rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;

/** Used to compose unicode capture groups. */
var rsCombo = '[' + rsComboRange + ']';

/**
 * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
 * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
 */
var reComboMark = RegExp(rsCombo, 'g');

/**
 * Deburrs `string` by converting
 * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
 * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
 * letters to basic Latin letters and removing
 * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to deburr.
 * @returns {string} Returns the deburred string.
 * @example
 *
 * _.deburr('déjà vu');
 * // => 'deja vu'
 */
function deburr(string) {
  string = toString(string);
  return string && string.replace(reLatin, deburrLetter).replace(reComboMark, '');
}

module.exports = deburr;


/***/ }),
/* 360 */
/***/ (function(module, exports, __webpack_require__) {

var baseFlatten = __webpack_require__(263);

/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */
function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten(array, 1) : [];
}

module.exports = flatten;


/***/ }),
/* 361 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(94);

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),
/* 362 */
/***/ (function(module, exports, __webpack_require__) {

var baseHasIn = __webpack_require__(265),
    hasPath = __webpack_require__(312);

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

module.exports = hasIn;


/***/ }),
/* 363 */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(29),
    isObjectLike = __webpack_require__(19);

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

module.exports = isArrayLikeObject;


/***/ }),
/* 364 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(22),
    isObjectLike = __webpack_require__(19);

/** `Object#toString` result references. */
var boolTag = '[object Boolean]';

/**
 * Checks if `value` is classified as a boolean primitive or object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
 * @example
 *
 * _.isBoolean(false);
 * // => true
 *
 * _.isBoolean(null);
 * // => false
 */
function isBoolean(value) {
  return value === true || value === false ||
    (isObjectLike(value) && baseGetTag(value) == boolTag);
}

module.exports = isBoolean;


/***/ }),
/* 365 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(22),
    getPrototype = __webpack_require__(63),
    isObjectLike = __webpack_require__(19);

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;


/***/ }),
/* 366 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is `undefined`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
 * @example
 *
 * _.isUndefined(void 0);
 * // => true
 *
 * _.isUndefined(null);
 * // => false
 */
function isUndefined(value) {
  return value === undefined;
}

module.exports = isUndefined;


/***/ }),
/* 367 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(58);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),
/* 368 */
/***/ (function(module, exports, __webpack_require__) {

var baseMerge = __webpack_require__(277),
    createAssigner = __webpack_require__(102);

/**
 * This method is like `_.assign` except that it recursively merges own and
 * inherited enumerable string keyed properties of source objects into the
 * destination object. Source properties that resolve to `undefined` are
 * skipped if a destination value exists. Array and plain object properties
 * are merged recursively. Other objects and value types are overridden by
 * assignment. Source objects are applied from left to right. Subsequent
 * sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * };
 *
 * var other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * };
 *
 * _.merge(object, other);
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */
var merge = createAssigner(function(object, source, srcIndex) {
  baseMerge(object, source, srcIndex);
});

module.exports = merge;


/***/ }),
/* 369 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(13);

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;


/***/ }),
/* 370 */
/***/ (function(module, exports, __webpack_require__) {

var baseOrderBy = __webpack_require__(279),
    isArray = __webpack_require__(10);

/**
 * This method is like `_.sortBy` except that it allows specifying the sort
 * orders of the iteratees to sort by. If `orders` is unspecified, all values
 * are sorted in ascending order. Otherwise, specify an order of "desc" for
 * descending or "asc" for ascending sort order of corresponding values.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Array[]|Function[]|Object[]|string[]} [iteratees=[_.identity]]
 *  The iteratees to sort by.
 * @param {string[]} [orders] The sort orders of `iteratees`.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
 * @returns {Array} Returns the new sorted array.
 * @example
 *
 * var users = [
 *   { 'user': 'fred',   'age': 48 },
 *   { 'user': 'barney', 'age': 34 },
 *   { 'user': 'fred',   'age': 40 },
 *   { 'user': 'barney', 'age': 36 }
 * ];
 *
 * // Sort by `user` in ascending order and by `age` in descending order.
 * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
 * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
 */
function orderBy(collection, iteratees, orders, guard) {
  if (collection == null) {
    return [];
  }
  if (!isArray(iteratees)) {
    iteratees = iteratees == null ? [] : [iteratees];
  }
  orders = guard ? undefined : orders;
  if (!isArray(orders)) {
    orders = orders == null ? [] : [orders];
  }
  return baseOrderBy(collection, iteratees, orders);
}

module.exports = orderBy;


/***/ }),
/* 371 */
/***/ (function(module, exports, __webpack_require__) {

var baseProperty = __webpack_require__(280),
    basePropertyDeep = __webpack_require__(281),
    isKey = __webpack_require__(66),
    toKey = __webpack_require__(45);

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = property;


/***/ }),
/* 372 */
/***/ (function(module, exports, __webpack_require__) {

var createCompounder = __webpack_require__(304),
    upperFirst = __webpack_require__(376);

/**
 * Converts `string` to
 * [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).
 *
 * @static
 * @memberOf _
 * @since 3.1.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the start cased string.
 * @example
 *
 * _.startCase('--foo-bar--');
 * // => 'Foo Bar'
 *
 * _.startCase('fooBar');
 * // => 'Foo Bar'
 *
 * _.startCase('__FOO_BAR__');
 * // => 'FOO BAR'
 */
var startCase = createCompounder(function(result, word, index) {
  return result + (index ? ' ' : '') + upperFirst(word);
});

module.exports = startCase;


/***/ }),
/* 373 */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),
/* 374 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(12),
    isSymbol = __webpack_require__(34);

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),
/* 375 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(28),
    keysIn = __webpack_require__(50);

/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */
function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}

module.exports = toPlainObject;


/***/ }),
/* 376 */
/***/ (function(module, exports, __webpack_require__) {

var createCaseFirst = __webpack_require__(303);

/**
 * Converts the first character of `string` to upper case.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.upperFirst('fred');
 * // => 'Fred'
 *
 * _.upperFirst('FRED');
 * // => 'FRED'
 */
var upperFirst = createCaseFirst('toUpperCase');

module.exports = upperFirst;


/***/ }),
/* 377 */
/***/ (function(module, exports, __webpack_require__) {

var asciiWords = __webpack_require__(258),
    hasUnicodeWord = __webpack_require__(313),
    toString = __webpack_require__(51),
    unicodeWords = __webpack_require__(353);

/**
 * Splits `string` into an array of its words.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to inspect.
 * @param {RegExp|string} [pattern] The pattern to match words.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the words of `string`.
 * @example
 *
 * _.words('fred, barney, & pebbles');
 * // => ['fred', 'barney', 'pebbles']
 *
 * _.words('fred, barney, & pebbles', /[^, ]+/g);
 * // => ['fred', 'barney', '&', 'pebbles']
 */
function words(string, pattern, guard) {
  string = toString(string);
  pattern = guard ? undefined : pattern;

  if (pattern === undefined) {
    return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
  }
  return string.match(pattern) || [];
}

module.exports = words;


/***/ }),
/* 378 */
/***/ (function(module, exports) {

module.exports = "<tr ng-repeat=\"$row in $view.body.rows track by $index\"\n\t ng-class=\"{'q-grid-selected': $view.selection.state($row).isSelected}\">\n\t<td ng-repeat=\"$column in $view.body.columns track by $column.model.key\"\n\t\t ng-if=\"$column.model.isVisible !== false\"\n\t\t q-grid-core:td>\n\t</td>\n</tr>\n\n<!--<tr ng-repeat=\"$row in $view.body.rows track by $index\"\n\t ng-class=\"{'selected': $view.selection.unit('row') && !$view.selection.mode('checkbox') && $view.selection.state($row)}\"\n\t ng-click=\"$view.selection.unit('row') && !$view.selection.mode('checkbox') && $view.selection.toggle.execute($row)\">\n\t<td ng-repeat=\"$column in $view.body.columns track by $column.model.key\"\n\t\t ng-class=\"[\n\t\t\t$column.model.key, \n\t\t\t$column.model.type, \n\t\t \t{\n\t\t\t\t 'selected': $view.selection.unit('column') && $view.selection.state($column) ||\n\t\t\t\t\t\t\t\t $view.selection.unit('cell') && $view.selection.state($cell),\n\t\t\t}]\"\n\t\t ng-click=\"$view.selection.unit('column') && $view.selection.toggle.execute($column) || \n\t\t \t\t\t  $view.selection.unit('cell') && $view.selection.toggle.execute($cell)\"\n\t\t ng-if=\"$column.model.isVisible !== false\"\n\t\t q-grid-core:td>\n\t</td>\n</tr>-->"

/***/ }),
/* 379 */
/***/ (function(module, exports) {

module.exports = "<button type=\"button\"\n\t\t  ng-click=\"$view.edit.cell.cancel.execute($cell, $event)\">\n\tNot implemented\n</button>"

/***/ }),
/* 380 */
/***/ (function(module, exports) {

module.exports = "{{$cell.value && $cell.value.join('; ')}}"

/***/ }),
/* 381 */
/***/ (function(module, exports) {

module.exports = "<input type=\"checkbox\"\n\t\t q-grid:focus\n\t\t ng-blur=\"$view.edit.cell.commit.execute($cell)\"\n\t\t ng-model=\"$view.edit.cell.value\"\t/>"

/***/ }),
/* 382 */
/***/ (function(module, exports) {

module.exports = "{{$cell.value ? '&#10003;': ''}}"

/***/ }),
/* 383 */
/***/ (function(module, exports) {

module.exports = "<input type=\"date\"\n\t\t q-grid:focus\n\t\t ng-blur=\"$view.edit.cell.commit.execute($cell)\"\n\t\t ng-model=\"$view.edit.cell.value\"\t/>"

/***/ }),
/* 384 */
/***/ (function(module, exports) {

module.exports = "{{$cell.value | date: $cell.column.format || 'yyyy/MM/dd'}}"

/***/ }),
/* 385 */
/***/ (function(module, exports) {

module.exports = "<a ng-href=\"mailto: {{$cell.value}}\" ng-bind=\"$cell.value\"></a>"

/***/ }),
/* 386 */
/***/ (function(module, exports) {

module.exports = "<div ng-style=\"{'padding-left': $view.group.offset($cell.row) + 'px'}\">\n\t<button ng-click=\"$view.group.toggleStatus.execute($cell.row)\"\n\t\t\t  ng-if=\"$view.group.toggleStatus.canExecute($cell.row)\">\n\t\t<span ng-bind=\"$view.group.status($cell.row) === 'expand' ? '-' : '+'\"></span>\n\t</button>\n\t<span>{{$view.group.value($cell.row)}}</span>\n\t<span ng-if=\"$view.group.toggleStatus.canExecute($cell.row)\">({{$view.group.count($cell.row)}})</span>\n</div>"

/***/ }),
/* 387 */
/***/ (function(module, exports) {

module.exports = "Group"

/***/ }),
/* 388 */
/***/ (function(module, exports) {

module.exports = "<input type=\"number\"\n\t\t q-grid:focus\n\t\t ng-blur=\"$view.edit.cell.commit.execute($cell)\"\n\t\t ng-model=\"$view.edit.cell.value\"\t/>"

/***/ }),
/* 389 */
/***/ (function(module, exports) {

module.exports = "<input type=\"password\"\n\t\t q-grid:focus\n\t\t ng-blur=\"$view.edit.cell.commit.execute($cell)\"\n\t\t ng-model=\"$view.edit.cell.value\"\t/>"

/***/ }),
/* 390 */
/***/ (function(module, exports) {

module.exports = "{{$cell.value ? '******' : ''}}"

/***/ }),
/* 391 */
/***/ (function(module, exports) {

module.exports = "{{$view.pivot.value($cell.row, $cell.column)}}"

/***/ }),
/* 392 */
/***/ (function(module, exports) {

module.exports = "{{$cell.column.title}}"

/***/ }),
/* 393 */
/***/ (function(module, exports) {

module.exports = "&rt;"

/***/ }),
/* 394 */
/***/ (function(module, exports) {

module.exports = "{{$view.pagination.current * $view.pagination.size + $cell.rowIndex + 1}}"

/***/ }),
/* 395 */
/***/ (function(module, exports) {

module.exports = "#"

/***/ }),
/* 396 */
/***/ (function(module, exports) {

module.exports = "<label>\n\t<input type=\"checkbox\"\n\t\t\t q-grid:indeterminate=\"$view.selection.isIndeterminate($row)\"\n\t\t\t ng-checked=\"$view.selection.state($row)\"\n\t\t\t ng-click=\"$view.selection.toggle.execute($row)\"\n\t\t\t ng-disabled=\"!$view.selection.toggle.canExecute($row)\"/>\n</label>"

/***/ }),
/* 397 */
/***/ (function(module, exports) {

module.exports = "<label>\n\t<input type=\"checkbox\"\n\t\t\t q-grid:indeterminate=\"$view.selection.isIndeterminate()\"\n\t\t\t ng-checked=\"$view.selection.state()\"\n\t\t\t ng-click=\"$view.selection.toggle.execute()\"\n\t\t\t ng-disabled=\"!$view.selection.toggle.canExecute()\" />\n</label>"

/***/ }),
/* 398 */
/***/ (function(module, exports) {

module.exports = "<tr ng-repeat=\"$row in $view.foot.rows track by $index\">\n\t<td ng-repeat=\"$column in $view.foot.columns track by $column.model.key\"\n\t\t rowspan=\"{{$column.rowspan}}\"\n\t\t colspan=\"{{$column.colspan}}\"\n\t\t q-grid-core:tf>\n\t</td>\n</tr>"

/***/ }),
/* 399 */
/***/ (function(module, exports) {

module.exports = "<q-grid-core:box ng-cloak\n\t\t\t\t\t  class=\"q-grid-box layout-column flex-100\">\n\t<q-grid-core:toolbar position=\"top\"\n\t\t\t\t\t\t\t\tclass=\"q-grid-toolbar q-grid-toolbar-top flex-auto\"\n\t\t\t\t\t\t\t\tng-if=\"$grid.visibility.toolbar.top\">\n\t</q-grid-core:toolbar>\n\t<div flex=\"100\" layout=\"row\">\n\t\t<q-grid-core:toolbar position=\"left\"\n\t\t\t\t\t\t\t\t\tclass=\"q-grid-toolbar q-grid-toolbar-left flex-auto\"\n\t\t\t\t\t\t\t\t\tng-if=\"$grid.visibility.toolbar.left\">\n\t\t</q-grid-core:toolbar>\n\t\t<q-grid-core:view class=\"q-grid-view layout-column flex\"\n\t\t\t\t\t\t\t\tq-grid:markup=\"view\">\n\t\t</q-grid-core:view>\n\t\t<q-grid-core:toolbar position=\"right\"\n\t\t\t\t\t\t\t\t\tclass=\"q-grid-toolbar q-grid-toolbar-right flex-auto\"\n\t\t\t\t\t\t\t\t\tng-if=\"$grid.visibility.toolbar.right\">\n\t\t</q-grid-core:toolbar>\n\t</div>\n\t<q-grid-core:toolbar position=\"bottom\"\n\t\t\t\t\t\t\t\tclass=\"q-grid-toolbar q-grid-toolbar-bottom flex-auto\"\n\t\t\t\t\t\t\t\tng-if=\"$grid.visibility.toolbar.bottom\">\n\t</q-grid-core:toolbar>\n</q-grid-core:box>\n"

/***/ }),
/* 400 */
/***/ (function(module, exports) {

module.exports = "<tr ng-repeat=\"$row in $view.head.rows track by $index\">\n\t<th ng-repeat=\"$column in $row track by $column.model.key\"\n\t\t ng-mouseover=\"$view.highlight.column.execute(true, $column.model)\"\n\t\t ng-mouseleave=\"$view.highlight.column.execute(false, $column.model)\"\n\t\t rowspan=\"{{$column.rowspan}}\"\n\t\t colspan=\"{{$column.colspan}}\"\n\t\t q-grid:drag=\"$head.transfer($cell)\"\n\t\t q-grid:drop=\"$head.transfer($cell)\"\n\t\t q-grid:on-drop=\"$head.drop.execute($event)\"\n\t\t q-grid:can-drop=\"$head.drop.canExecute($event)\"\n\t\t q-grid:can-drag=\"$head.drag.canExecute($event)\"\n\t\t q-grid:resizable=\"$head.resize.canExecute($event)\"\n\t\t q-grid:resize=\"$column.model.key\"\n\t\t q-grid:resize-path=\"columns\"\n\t\t q-grid:can-resize=\"$head.resize.canExecute($event)\"\n\t\t q-grid-core:th>\n\t</th>\n</tr>"

/***/ }),
/* 401 */
/***/ (function(module, exports) {

module.exports = "<q-grid:pager></q-grid:pager>"

/***/ }),
/* 402 */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),
/* 403 */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),
/* 404 */
/***/ (function(module, exports) {

module.exports = "<div class=\"q-grid-progress\">\n\t<q-grid:progress></q-grid:progress>\n</div>\n"

/***/ }),
/* 405 */
/***/ (function(module, exports) {

module.exports = "<table>\n\t<thead ng-if=\"$view.visibility.head\"\n\t\t\t ng-include=\"$view.templateUrl('head')\"\n\t\t\t q-grid-core:head\n\t\t\t q-grid:markup=\"head\">\n\t</thead>\n\t<tbody ng-include=\"$view.templateUrl('body')\"\n\t\t\t ng-if=\"$view.visibility.body\"\n\t\t\t q-grid-core:body\n\t\t\t q-grid:markup=\"body\">\n\t</tbody>\n\t<tfoot ng-if=\"$view.visibility.foot\"\n\t\t\t ng-include=\"$view.templateUrl('foot')\"\n\t\t\t q-grid-core:foot\n\t\t\t q-grid:markup=\"foot\">\n\t</tfoot>\n</table>"

/***/ }),
/* 406 */
/***/ (function(module, exports) {

module.exports = "<div class=\"q-grid-column-chooser\">\n\t<label>Columns:</label>\n\t<ul>\n\t\t<li ng-repeat=\"column in $columnChooser.columns\">\n\t\t\t<label>\n\t\t\t\t<input type=\"checkbox\"\n\t\t\t\t       ng-checked=\"$columnChooser.state(column)\"\n\t\t\t\t       ng-if=\"$columnChooser.toggle.canExecute(column)\"\n\t\t\t\t       ng-click=\"$columnChooser.toggle.execute(column)\"/>\n\t\t\t\t{{column.title}}:\n\t\t\t</label>\n\t\t\t<select ng-model=\"column.aggregation\"\n\t\t\t        ng-change=\"$columnChooser.toggleAggregation.execute(column)\">\n\t\t\t\t<option value=\"\" disabled>Aggregation</option>\n\t\t\t\t<option value=\"{{aggregation}}\"\n\t\t\t\t        ng-repeat=\"aggregation in $columnChooser.aggregations\"\n\t\t\t\t        ng-bind=\"aggregation\">\n\t\t\t\t</option>\n\t\t\t</select>\n\t\t</li>\n\t</ul>\n</div>"

/***/ }),
/* 407 */
/***/ (function(module, exports) {

module.exports = "<div class=\"q-grid-groupbar\"\n\t  q-grid:drop\n\t  q-grid:on-drop=\"$groupbar.drop.execute($event)\"\n\t  q-grid:can-drop=\"$groupbar.drop.canExecute($event)\">\n\t<label>Group By: </label>\n\t<ul>\n\t\t<li ng-repeat=\"group in $groupbar.groups track by $index\">\n\t\t\t<span ng-bind=\"$groupbar.title(group)\"></span>\n\t\t\t<button ng-disabled=\"!$groupbar.remove.canExecute()\"\n\t\t\t\t\t  ng-click=\"$groupbar.remove.execute(group)\">\n\t\t\t\tx\n\t\t\t</button>\n\t\t</li>\n\t\t<li>\n\t\t\t<select ng-disabled=\"!$groupbar.add.canExecute()\"\n\t\t\t\t\t  ng-model=\"$groupbar.newGroup\"\n\t\t\t\t\t  ng-change=\"$groupbar.add.execute($groupbar.newGroup)\">\n\t\t\t\t<option value=\"\" disabled>Add Group</option>\n\t\t\t\t<option value=\"{{column.key}}\"\n\t\t\t\t\t\t  ng-repeat=\"column in $groupbar.columns track by column.key\"\n\t\t\t\t\t\t  ng-bind=\"column.title\">\n\t\t\t\t</option>\n\t\t\t</select>\n\t\t</li>\n\t</ul>\n</div>"

/***/ }),
/* 408 */
/***/ (function(module, exports) {

module.exports = "<div class=\"q-grid-pager\">\n\t<label class=\"q-grid-page-size\">Rows per page:</label>\n\t<select class=\"q-grid-page-size\" ng-model=\"$pager.size\"\n\t\t\t  ng-options=\"size for size in $pager.sizeList\">\n\t</select>\n\t<label class=\"q-grid-page\">{{$pager.from}}-{{$pager.to}} of {{$pager.total}}</label>\n\t<button class=\"q-grid-prev-page\" ng-disabled=\"!$pager.prev.canExecute()\" ng-click=\"$pager.prev.execute();\">&lt;</button>\n\t<button class=\"q-grid-next-page\" ng-disabled=\"!$pager.next.canExecute()\" ng-click=\"$pager.next.execute();\">&gt;</button>\n</div>"

/***/ }),
/* 409 */
/***/ (function(module, exports) {

module.exports = "<div class=\"q-grid-pivotbar\"\n\t  q-grid:drop\n\t  q-grid:on-drop=\"$pivotbar.drop.execute($event)\"\n\t  q-grid:can-drop=\"$pivotbar.drop.canExecute($event)\">\n\t<label>Pivot By: </label>\n\t<ul>\n\t\t<li ng-repeat=\"group in $pivotbar.groups track by $index\">\n\t\t\t<span ng-bind=\"$pivotbar.title(group)\"></span>\n\t\t\t<button ng-disabled=\"!$pivotbar.remove.canExecute()\"\n\t\t\t\t\t  ng-click=\"$pivotbar.remove.execute(group)\">\n\t\t\t\tx\n\t\t\t</button>\n\t\t</li>\n\t\t<li>\n\t\t\t<select ng-disabled=\"!$pivotbar.add.canExecute()\"\n\t\t\t\t\t  ng-model=\"$pivotbar.newGroup\"\n\t\t\t\t\t  ng-change=\"$pivotbar.add.execute($pivotbar.newGroup)\">\n\t\t\t\t<option value=\"\" disabled>Add Pivot</option>\n\t\t\t\t<option value=\"{{column.key}}\"\n\t\t\t\t\t\t  ng-repeat=\"column in $pivotbar.columns track by column.key\"\n\t\t\t\t\t\t  ng-bind=\"column.title\">\n\t\t\t\t</option>\n\t\t\t</select>\n\t\t</li>\n\t</ul>\n</div>"

/***/ }),
/* 410 */
/***/ (function(module, exports) {

module.exports = "<q-grid:popup-trigger>\n</q-grid:popup-trigger>"

/***/ }),
/* 411 */
/***/ (function(module, exports) {

module.exports = "<q-grid-core:box model=\"$popup.model\">\n\t<q-grid:popup-head model=\"$popup.model\" id=\"$popup.id\"></q-grid:popup-head>\n\t<q-grid:popup-body model=\"$popup.model\" id=\"$popup.id\"></q-grid:popup-body>\n</q-grid-core:box>"

/***/ }),
/* 412 */
/***/ (function(module, exports) {

module.exports = "<div class=\"q-grid-progress\">\n\t<span ng-if=\"$progress.isBusy\">Progress...</span>\n</div>"

/***/ }),
/* 413 */
/***/ (function(module, exports) {

module.exports = "<div class=\"q-grid-selectionbar\">\n\t<label>Unit</label>\n\t<select ng-model=\"$selectionbar.unit\" \n\t\t\t  ng-change=\"$selectionbar.toggleUnit.execute($selectionbar.unit)\"\n\t\t\t  ng-disabled=\"!$selectionbar.toggleUnit.canExecute()\">\n\t\t<option value=\"{{unit}}\"\n\t\t\t\t\tng-repeat=\"unit in $selectionbar.units\"\n\t\t\t\t\tng-bind=\"unit\">\n\t\t</option>\n\t</select>\n\t<label>Mode</label>\n\t<select ng-model=\"$selectionbar.mode\" \n\t\t\t  ng-change=\"$selectionbar.toggleMode.execute($selectionbar.mode)\"\n\t\t\t  ng-disabled=\"!$selectionbar.toggleMode.canExecute()\">\n\t\t<option value=\"{{mode}}\"\n\t\t\t\t\tng-repeat=\"mode in $selectionbar.modes\"\n\t\t\t\t\tng-bind=\"mode\">\n\t\t</option>\n\t</select>\n\t<label>Selection Count: </label><em>{{$selectionbar.count}}</em>\n</div>"

/***/ }),
/* 414 */
/***/ (function(module, exports) {

module.exports = "<div class=\"q-grid-sortbar\"\n\t  q-grid:drop\n\t  q-grid:on-drop=\"$sortbar.drop.execute($event)\"\n\t  q-grid:can-drop=\"$sortbar.drop.canExecute($event)\">\n\t<label>Sort By: </label>\n\t<ul>\n\t\t<li ng-repeat=\"sort in $sortbar.sorts track by $index\">\n\t\t\t<span ng-bind=\"$sortbar.title(sort)\"></span>\n\t\t\t<button ng-disabled=\"!$sortbar.remove.canExecute()\"\n\t\t\t\t\t  ng-click=\"$sortbar.remove.execute(sort)\">\n\t\t\t\tx\n\t\t\t</button>\n\t\t</li>\n\t\t<li>\n\t\t\t<select ng-disabled=\"!$sortbar.add.canExecute()\"\n\t\t\t\t\t  ng-model=\"$sortbar.newSort\"\n\t\t\t\t\t  ng-change=\"$sortbar.add.execute($sortbar.newSort)\">\n\t\t\t\t<option value=\"\" disabled>Add Sort</option>\n\t\t\t\t<option value=\"{{column.key}}\"\n\t\t\t\t\t\t  ng-repeat=\"column in $sortbar.columns track by column.key\"\n\t\t\t\t\t\t  ng-bind=\"column.title\">\n\t\t\t\t</option>\n\t\t\t</select>\n\t\t</li>\n\t</ul>\n</div>"

/***/ }),
/* 415 */
/***/ (function(module, exports) {

module.exports = "<div class=\"q-grid-visibility\">\n\t<label>Visibility:</label>\n\t<ul>\n\t\t<li ng-repeat=\"item in $visibility.items\">\n\t\t\t<label>\n\t\t\t\t<input type=\"checkbox\"\n\t\t\t\t\t\t ng-checked=\"item.value\"\n\t\t\t\t\t\t ng-if=\"$visibility.toggle.canExecute(item)\"\n\t\t\t\t\t\t ng-click=\"$visibility.toggle.execute(item)\"/>\n\t\t\t\t{{item.key}}\n\t\t\t</label>\n\t\t\t<ul ng-if=\"item.children.length\">\n\t\t\t\t<li ng-repeat=\"child in item.children\">\n\t\t\t\t\t<label>\n\t\t\t\t\t\t<input type=\"checkbox\"\n\t\t\t\t\t\t\t\t ng-if=\"$visibility.toggle.canExecute(child)\"\n\t\t\t\t\t\t\t\t ng-checked=\"child.value\"\n\t\t\t\t\t\t\t\t ng-click=\"$visibility.toggle.execute(child)\"/>\n\t\t\t\t\t\t{{child.key}}\n\t\t\t\t\t</label>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</li>\n\t</ul>\n</div>"

/***/ }),
/* 416 */
/***/ (function(module, exports) {

module.exports = "<div ng-cloak class=\"q-grid-editor q-grid-array\">\n\t<h2 class=\"md-title\">Edit {{::$cell.column.title}}</h2>\n\t<md-chips ng-model=\"$view.edit.cell.value\"\n\t\t\t\t md-removable=\"'true'\"\n\t\t\t\t md-enable-chip-edit=\"'true'\">\n\t</md-chips>\n\t<div class=\"q-grid-actions\">\n\t\t<md-button class=\"md-primary md-confirm-button\" ng-click=\"$view.edit.cell.commit.execute($cell, $event)\">Save</md-button>\n\t\t<md-button class=\"md-primary md-cancel-button\" ng-click=\"$view.edit.cell.cancel.execute($cell, $event)\">Cancel</md-button>\n\t</div>\n</div>"

/***/ }),
/* 417 */
/***/ (function(module, exports) {

module.exports = "<md-checkbox aria-label=\"Bool cell edit\"\n\t\t\t\t class=\"md-primary\"\n\t\t\t\t q-grid:focus\n\t\t\t\t ng-blur=\"$view.edit.cell.commit.execute($cell)\"\n\t\t\t\t ng-model=\"$view.edit.cell.value\">\n</md-checkbox>"

/***/ }),
/* 418 */
/***/ (function(module, exports) {

module.exports = "<md-icon ng-if=\"$cell.value\">check</md-icon>"

/***/ }),
/* 419 */
/***/ (function(module, exports) {

module.exports = "<div class=\"q-grid-editor q-grid-date\">\n\t<md-input-container>\n\t\t<input type=\"date\"\n\t\t\t\t q-grid:focus\n\t\t\t\t ng-blur=\"$view.edit.cell.commit.execute($cell)\"\n\t\t\t\t ng-model=\"$view.edit.cell.value\"/>\n\t</md-input-container>\n</div>"

/***/ }),
/* 420 */
/***/ (function(module, exports) {

module.exports = "<div class=\"q-grid-editor q-grid-number\">\n\t<md-input-container>\n\t\t<input type=\"number\"\n\t\t\t\t q-grid:focus\n\t\t\t\t ng-blur=\"$view.edit.cell.commit.execute($cell)\"\n\t\t\t\t ng-model=\"$view.edit.cell.value\"/>\n\t</md-input-container>\n</div>"

/***/ }),
/* 421 */
/***/ (function(module, exports) {

module.exports = "<div class=\"q-grid-editor q-grid-password\">\n\t<md-input-container>\n\t\t<input type=\"password\"\n\t\t\t\t q-grid:focus\n\t\t\t\t ng-blur=\"$view.edit.cell.commit.execute($cell)\"\n\t\t\t\t ng-model=\"$view.edit.cell.value\"/>\n\t</md-input-container>\n</div>"

/***/ }),
/* 422 */
/***/ (function(module, exports) {

module.exports = "<md-checkbox md-indeterminate=\"$view.selection.isIndeterminate($row)\"\n\t\t\t\t ng-checked=\"$view.selection.state($row)\"\n\t\t\t\t ng-click=\"$view.selection.toggle.execute($row)\"\n\t\t\t\t ng-disabled=\"!$view.selection.toggle.canExecute($row)\"\n\t\t\t\t aria-label=\"Selection\"/>\n"

/***/ }),
/* 423 */
/***/ (function(module, exports) {

module.exports = "<div class=\"q-grid-editor q-grid-text-area\">\n\t<md-input-container>\n\t\t<textarea type=\"text\"\n\t\t\t\t\t rows=\"8\"\n\t\t\t\t\t cols=\"45\"\n\t\t\t\t\t wrap=\"soft\"\n\t\t\t\t\t q-grid:focus\n\t\t\t\t\t ng-blur=\"$view.edit.cell.commit.execute($cell)\"\n\t\t\t\t\t ng-model=\"$view.edit.cell.value\"/>\n\t</md-input-container>\n</div>"

/***/ }),
/* 424 */
/***/ (function(module, exports) {

module.exports = "<div class=\"q-grid-editor q-grid-text\">\n\t<md-input-container>\n\t\t<input type=\"text\"\n\t\t\t\t q-grid:focus\n\t\t\t\t ng-blur=\"$view.edit.cell.commit.execute($cell)\"\n\t\t\t\t ng-model=\"$view.edit.cell.value\"/>\n\t</md-input-container>\n</div>"

/***/ }),
/* 425 */
/***/ (function(module, exports) {

module.exports = "<div>\n\t<md-tooltip md-delay=\"1000\">\n\t{{$cell.column.title}}\n\t</md-tooltip>\n\t{{$cell.column.title}}\n</div>"

/***/ }),
/* 426 */
/***/ (function(module, exports) {

module.exports = "<md-checkbox md-indeterminate=\"$view.selection.isIndeterminate()\"\n\t\t\t\t ng-checked=\"$view.selection.state()\"\n\t\t\t\t ng-click=\"$view.selection.toggle.execute()\"\n\t\t\t\t ng-disabled=\"!$view.selection.toggle.canExecute()\"\n\t\t\t\t aria-label=\"Selection\"/>"

/***/ }),
/* 427 */
/***/ (function(module, exports) {

module.exports = "<div class=\"q-grid-column-chooser\" layout=\"column\">\n\t<md-input-container flex=\"none\" class=\"q-grid-column-chooser-filter\">\n\t\t<label>Search</label>\n\t\t<input type=\"text\" ng-model=\"$columnChooser.filter\"/>\n\t</md-input-container>\n\t<ul flex>\n\t\t<li>\n\t\t\t<md-checkbox ng-click=\"$columnChooser.toggleAll.execute()\"\n\t\t\t\t\t\t\t md-indeterminate=\"$columnChoooser.isIndeterminate()\">\n\t\t\t\tSelect All\n\t\t\t</md-checkbox>\n\t\t</li>\n\t\t<li>\n\t\t\t<md-checkbox ng-click=\"$columnChooser.defaults.execute()\">\n\t\t\t\tSelect Defaults\n\t\t\t</md-checkbox>\n\t\t</li>\n\t</ul>\n\t<ul class=\"q-grid-column-chooser-list\" flex>\n\t\t<li ng-repeat=\"column in $columnChooser.columns | filter: $columnChooser.filter\"\n\t\t\t q-grid:drag=\"$columnChooser.transfer(column)\"\n\t\t\t q-grid:drop=\"$columnChooser.transfer(column)\"\n\t\t\t q-grid:on-drop=\"$columnChooser.drop.execute($event)\"\n\t\t\t q-grid:can-drop=\"$columnChooser.drop.canExecute($event)\"\n\t\t\t q-grid:can-drag=\"$columnChooser.drag.canExecute($event)\">\n\n\t\t\t<md-checkbox ng-checked=\"$columnChooser.state(column)\"\n\t\t\t\t\t\t\t ng-if=\"$columnChooser.toggle.canExecute(column)\"\n\t\t\t\t\t\t\t ng-click=\"$columnChooser.toggle.execute(column)\">\n\t\t\t\t{{column.title}}\n\t\t\t</md-checkbox>\n\n\n\t\t\t<md-input-container ng-if=\"$columnChooser.canAggregate\">\n\t\t\t\t<md-select aria-label=\"Aggregation\" ng-model=\"column.aggregation\"\n\t\t\t\t\t\t\t  ng-change=\"$columnChooser.toggleAggregation.execute(column)\">\n\t\t\t\t\t<md-option value=\"\"><em>Aggregation</em></md-option>\n\t\t\t\t\t<md-option ng-repeat=\"aggregation in $columnChooser.aggregations\"\n\t\t\t\t\t\t\t\t  ng-value=\"aggregation\">\n\t\t\t\t\t\t{{::aggregation}}\n\t\t\t\t\t</md-option>\n\t\t\t\t</md-select>\n\t\t\t</md-input-container>\n\n\t\t</li>\n\t</ul>\n\t<div flex=\"none\">\n\t\t<md-button ng-click=\"$columnChooser.cancel.execute()\">\n\t\t\tCancel\n\t\t</md-button>\n\t\t<md-button ng-click=\"$columnChooser.reset.execute()\">\n\t\t\tReset\n\t\t</md-button>\n\t\t<md-button class=\"md-primary\"\n\t\t\t\t\t  ng-click=\"$columnChooser.submit.execute()\"\n\t\t\t\t\t  ng-disabled=\"!$columnChooser.submit.canExecute()\">\n\t\t\tSave\n\t\t</md-button>\n\t</div>\n</div>"

/***/ }),
/* 428 */
/***/ (function(module, exports) {

module.exports = "<md-progress-linear ng-if=\"$progress.isBusy\"\n\t\t\t\t\t\t  md-mode=\"indeterminate\">\n</md-progress-linear>"

/***/ }),
/* 429 */
/***/ (function(module, exports) {

module.exports = "<div layout=\"row\">\n\t<div flex=\"100\"\n\t\t  layout=\"row\"\n\t\t  layout-align=\"start center\"\n\t\t  layout-align-xs=\"start start\"\n\t\t  layout-align-sm=\"start start\"\n\t\t  layout-xs=\"column\"\n\t\t  layout-sm=\"column\">\n\t\t<div>\n\t\t\t<q-grid:sortbar>\n\t\t\t</q-grid:sortbar>\n\t\t</div>\n\t\t<div>\n\t\t\t<q-grid:groupbar>\n\t\t\t</q-grid:groupbar>\n\t\t</div>\n\t\t<div>\n\t\t\t<q-grid:pivotbar>\n\t\t\t</q-grid:pivotbar>\n\t\t</div>\n\t</div>\n\t<div class=\"q-grid-actions\" flex=\"none\" layout=\"row\" layout-align=\"end center\">\n\t\t<div>\n\t\t\t<q-grid:popup id=\"q-grid-filter-popup\">\n\t\t\t\t<q-grid:template for=\"trigger\">\n\t\t\t\t\t<md-button ng-click=\"$popup.open()\" class=\"md-icon-button\">\n\t\t\t\t\t\t<md-icon>filter_list</md-icon>\n\t\t\t\t\t</md-button>\n\t\t\t\t</q-grid:template>\n\t\t\t\t<q-grid:template for=\"body\">\n\t\t\t\t\t<q-grid:expression-builder on:submit=\"$popup.close()\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\ton:cancel=\"$popup.close()\">\n\t\t\t\t\t</q-grid:expression-builder>\n\t\t\t\t</q-grid:template>\n\t\t\t\t<q-grid:template for=\"head\">\n\t\t\t\t\tFilter\n\t\t\t\t</q-grid:template>\n\t\t\t</q-grid:popup>\n\t\t</div>\n\t\t<div>\n\t\t\t<q-grid:popup id=\"q-grid-column-chooser-popup\">\n\t\t\t\t<q-grid:template for=\"trigger\">\n\t\t\t\t\t<md-button ng-click=\"$popup.open()\" class=\"md-icon-button\">\n\t\t\t\t\t\t<md-icon>more_vert</md-icon>\n\t\t\t\t\t</md-button>\n\t\t\t\t</q-grid:template>\n\t\t\t\t<q-grid:template for=\"body\">\n\t\t\t\t\t<q-grid:column-chooser on:submit=\"$popupBody.close()\"\n\t\t\t\t\t\t\t\t\t\t\t\t  on:cancel=\"$popupBody.close()\">\n\t\t\t\t\t</q-grid:column-chooser>\n\t\t\t\t</q-grid:template>\n\t\t\t\t<q-grid:template for=\"head\">\n\t\t\t\t\tColumn Chooser\n\t\t\t\t</q-grid:template>\n\t\t\t</q-grid:popup>\n\t\t</div>\n\t</div>\n</div>\n<div class=\"q-grid-progress\">\n\t<q-grid:progress>\n\t</q-grid:progress>\n</div>"

/***/ }),
/* 430 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 431 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(119);
__webpack_require__(121);
__webpack_require__(120);

/***/ })
/******/ ]);