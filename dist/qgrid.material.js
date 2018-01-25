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
/******/ 	return __webpack_require__(__webpack_require__.s = 709);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utility__ = __webpack_require__(147);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__utility__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__utility__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__utility__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__utility__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_0__utility__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_0__utility__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_0__utility__["g"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_0__utility__["h"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_0__utility__["i"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_0__utility__["j"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_0__utility__["k"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_0__utility__["l"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_0__utility__["m"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_0__utility__["n"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_0__utility__["o"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_0__utility__["p"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_0__utility__["q"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_0__utility__["r"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "s", function() { return __WEBPACK_IMPORTED_MODULE_0__utility__["s"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "t", function() { return __WEBPACK_IMPORTED_MODULE_0__utility__["t"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "u", function() { return __WEBPACK_IMPORTED_MODULE_0__utility__["u"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "v", function() { return __WEBPACK_IMPORTED_MODULE_0__utility__["v"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "w", function() { return __WEBPACK_IMPORTED_MODULE_0__utility__["w"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "x", function() { return __WEBPACK_IMPORTED_MODULE_0__utility__["x"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "y", function() { return __WEBPACK_IMPORTED_MODULE_0__utility__["y"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "z", function() { return __WEBPACK_IMPORTED_MODULE_0__utility__["z"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "A", function() { return __WEBPACK_IMPORTED_MODULE_0__utility__["A"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "B", function() { return __WEBPACK_IMPORTED_MODULE_0__utility__["B"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "C", function() { return __WEBPACK_IMPORTED_MODULE_0__utility__["C"]; });


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cache__ = __webpack_require__(146);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__cache__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__error__ = __webpack_require__(30);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__error__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event__ = __webpack_require__(71);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_2__event__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__event_listener__ = __webpack_require__(293);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_3__event_listener__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fetch__ = __webpack_require__(294);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_4__fetch__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__guard__ = __webpack_require__(122);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_5__guard__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__log__ = __webpack_require__(53);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_6__log__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__model_bind__ = __webpack_require__(295);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_7__model_bind__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__model__ = __webpack_require__(296);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_8__model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__event_manager__ = __webpack_require__(297);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_9__event_manager__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__range__ = __webpack_require__(298);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_10__range__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__composite__ = __webpack_require__(77);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_11__composite__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__defer__ = __webpack_require__(134);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_12__defer__["a"]; });














/***/ }),
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__command__ = __webpack_require__(72);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__command__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__command_manager__ = __webpack_require__(79);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__command_manager__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__composite_command_manager__ = __webpack_require__(300);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__composite_command_manager__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__table_command_manager__ = __webpack_require__(136);
/* unused harmony namespace reexport */





/***/ }),
/* 5 */
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
/* 6 */,
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resource__ = __webpack_require__(74);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__resource__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resource_enumerable__ = __webpack_require__(125);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__resource_enumerable__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resource_factory__ = __webpack_require__(307);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__resource_factory__["a"]; });




/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__disposable_view__ = __webpack_require__(124);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__disposable_view__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__view__ = __webpack_require__(35);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__view__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view_model__ = __webpack_require__(306);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__view_model__["a"]; });




/***/ }),
/* 9 */,
/* 10 */
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
/* 11 */,
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(81);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 13 */
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
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(26),
    getRawTag = __webpack_require__(148),
    objectToString = __webpack_require__(149);

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
/* 17 */,
/* 18 */
/***/ (function(module, exports) {

module.exports = "<q-grid:column-sort column=\"$cell.column\"\n                    class=\"q-grid-sort\">\n    <label>\n        <md-tooltip md-delay=\"1000\">{{$cell.column.title}}</md-tooltip>\n        {{$cell.column.title}}\n    </label>\n</q-grid:column-sort>\n<q-grid:column-filter ng-if=\"::$cell.column.canFilter\"\n                      class=\"q-grid-column-filter-trigger\"\n                      key=\"$cell.column.key\"\n                      title=\"{{$cell.column.title}}\"\n                      ng-class=\"{'q-grid-active': $view.filter.has($cell.column)}\">\n</q-grid:column-filter>"

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = "<span ng-if=\"$cell.column.aggregation\">{{$cell.column.title}}: </span><span>{{$cell.value}}</span>"

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = get;
/* harmony export (immutable) */ __webpack_exports__["b"] = getFactory;
/* harmony export (immutable) */ __webpack_exports__["c"] = set;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utility__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__path__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__infrastructure__ = __webpack_require__(1);




function get(row, column) {
	return column.$value ? column.$value({ $row: row, $column: column }) : column.value ? column.value(row) : column.path ? Object(__WEBPACK_IMPORTED_MODULE_1__path__["b" /* compileGet */])(column.path)(row) : row[column.key];
}

function getFactory(column) {
	var get = column.$value ? function (row) {
		return column.$value({ $row: row, $column: column });
	} : column.value ? function (row) {
		return column.value(row);
	} : column.path ? Object(__WEBPACK_IMPORTED_MODULE_1__path__["b" /* compileGet */])(column.path) : function (row) {
		return row[column.key];
	};

	return get;
}

function set(row, column, value) {
	if (Object(__WEBPACK_IMPORTED_MODULE_0__utility__["m" /* isFunction */])(column.$value)) {
		return column.$value({ $row: row, $value: value, $column: column });
	}

	if (Object(__WEBPACK_IMPORTED_MODULE_0__utility__["m" /* isFunction */])(column.value)) {
		return column.value(row, value);
	}

	if (column.path) {
		return Object(__WEBPACK_IMPORTED_MODULE_1__path__["c" /* compileSet */])(column.path)(row, value);
	}

	if (row.hasOwnProperty(column.key)) {
		return row[column.key] = value;
	}

	throw new __WEBPACK_IMPORTED_MODULE_2__infrastructure__["a" /* AppError */]('value', 'Row can\'t be edit on "' + column.key + '" column');
}

/***/ }),
/* 21 */,
/* 22 */,
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GRID_PREFIX; });
var GRID_PREFIX = 'q-grid';

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(162),
    getValue = __webpack_require__(165);

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
/* 25 */,
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(12);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(92),
    baseKeys = __webpack_require__(186),
    isArrayLike = __webpack_require__(32);

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
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(100),
    baseAssignValue = __webpack_require__(46);

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

var baseMatches = __webpack_require__(264),
    baseMatchesProperty = __webpack_require__(267),
    identity = __webpack_require__(69),
    isArray = __webpack_require__(5),
    property = __webpack_require__(275);

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
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppError; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utility__ = __webpack_require__(0);
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
		if (Object(__WEBPACK_IMPORTED_MODULE_0__utility__["m" /* isFunction */])(Error.captureStackTrace)) {
			Error.captureStackTrace(_this, _this.constructor);
		} else {
			_this.stack = new Error(message).stack;
		}
		return _this;
	}

	return AppError;
}(Error);

/***/ }),
/* 31 */
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
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(37),
    isLength = __webpack_require__(64);

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
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(16),
    isObjectLike = __webpack_require__(13);

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
/* 34 */,
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return View; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__disposable_view__ = __webpack_require__(124);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var View = function (_DisposableView) {
	_inherits(View, _DisposableView);

	function View(model) {
		_classCallCheck(this, View);

		var _this = _possibleConstructorReturn(this, (View.__proto__ || Object.getPrototypeOf(View)).call(this));

		_this.model = model;
		return _this;
	}

	return View;
}(__WEBPACK_IMPORTED_MODULE_0__disposable_view__["a" /* DisposableView */]);

/***/ }),
/* 36 */,
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(16),
    isObject = __webpack_require__(10);

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
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(39),
    stackClear = __webpack_require__(157),
    stackDelete = __webpack_require__(158),
    stackGet = __webpack_require__(159),
    stackHas = __webpack_require__(160),
    stackSet = __webpack_require__(161);

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
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(152),
    listCacheDelete = __webpack_require__(153),
    listCacheGet = __webpack_require__(154),
    listCacheHas = __webpack_require__(155),
    listCacheSet = __webpack_require__(156);

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
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(31);

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
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(24);

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(174);

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
/* 43 */
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
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(183),
    isObjectLike = __webpack_require__(13);

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
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(12),
    stubFalse = __webpack_require__(184);

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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(61)(module)))

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(101);

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
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(92),
    baseKeysIn = __webpack_require__(200),
    isArrayLike = __webpack_require__(32);

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
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(241);

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
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(33);

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
/* 50 */,
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node__ = __webpack_require__(73);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__node__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_build__ = __webpack_require__(302);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__node_build__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_service__ = __webpack_require__(138);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__node_service__["a"]; });




/***/ }),
/* 52 */,
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Log; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*eslint-disable  no-console*/

var Log = function () {
	function Log() {
		_classCallCheck(this, Log);
	}

	_createClass(Log, null, [{
		key: "info",
		value: function info() /*source, message*/{
			// console.info(`qgrid.${source}: ${message}`);
		}
	}, {
		key: "warn",
		value: function warn() /*source, message*/{
			// console.warn(`qgrid.${source}: ${message}`);
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

/***/ }),
/* 54 */,
/* 55 */,
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqualDeep = __webpack_require__(151),
    isObjectLike = __webpack_require__(13);

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
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(24),
    root = __webpack_require__(12);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(166),
    mapCacheDelete = __webpack_require__(173),
    mapCacheGet = __webpack_require__(175),
    mapCacheHas = __webpack_require__(176),
    mapCacheSet = __webpack_require__(177);

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
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(90),
    stubArray = __webpack_require__(91);

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
/* 61 */
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
/* 62 */
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
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(185),
    baseUnary = __webpack_require__(94),
    nodeUtil = __webpack_require__(95);

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
/* 64 */
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
/* 65 */
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
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(96);

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var Uint8Array = __webpack_require__(86);

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
/* 68 */
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
/* 69 */
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
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(5),
    isSymbol = __webpack_require__(33);

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
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Event; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Event = function () {
	function Event() {
		var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {
			return null;
		};

		_classCallCheck(this, Event);

		this.handlers = [];
		this.isDirty = false;
		this.e = e;
	}

	_createClass(Event, [{
		key: 'on',
		value: function on(f) {
			var lifecycle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'app';

			var handlers = this.handlers;
			var handler = { f: f };
			var off = function off() {
				var index = handlers.indexOf(handler);
				if (index >= 0) {
					handlers.splice(index, 1);
				}
			};

			handler.off = off;
			handler.lifecycle = lifecycle;
			handlers.push(handler);
			return off;
		}
	}, {
		key: 'watch',
		value: function watch(f) {
			var lifecycle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'app';

			var off = this.on(f, lifecycle);
			if (this.isDirty) {
				f(this.e(), off);
			}

			return off;
		}
	}, {
		key: 'emit',
		value: function emit(e) {
			this.isDirty = true;
			var temp = Array.from(this.handlers);
			for (var i = 0, length = temp.length; i < length; i++) {
				var handler = temp[i];
				handler.f(e, handler.off);
			}
		}
	}, {
		key: 'dispose',
		value: function dispose() {
			var lifecycle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

			var temp = Array.from(this.handlers);
			for (var i = 0, length = temp.length; i < length; i++) {
				var handler = temp[i];
				if (!lifecycle || handler.lifecycle === lifecycle) {
					handler.off();
				}
			}
		}
	}]);

	return Event;
}();

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Command; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utility_index__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Command = function () {
	function Command() {
		var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		_classCallCheck(this, Command);

		this.execute = __WEBPACK_IMPORTED_MODULE_0__utility_index__["B" /* yes */];
		this.canExecute = __WEBPACK_IMPORTED_MODULE_0__utility_index__["B" /* yes */];
		this.shortcut = '';
		this.priority = 0;
		this.source = '';

		Object.assign(this, context);
	}

	_createClass(Command, [{
		key: 'clone',
		value: function clone() {
			var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

			var cmd = new Command(this);
			Object.assign(cmd, context);
			return cmd;
		}
	}]);

	return Command;
}();

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Node; });
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

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Resource; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Resource = function Resource() {
	var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	var scope = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	_classCallCheck(this, Resource);

	this.data = data;
	this.scope = scope;
};

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultipleSelectionState; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__selection_state__ = __webpack_require__(76);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var MultipleSelectionState = function (_SelectionState) {
	_inherits(MultipleSelectionState, _SelectionState);

	function MultipleSelectionState(model, service) {
		_classCallCheck(this, MultipleSelectionState);

		var _this = _possibleConstructorReturn(this, (MultipleSelectionState.__proto__ || Object.getPrototypeOf(MultipleSelectionState)).call(this, model, service));

		_this.items = new Map();
		return _this;
	}

	_createClass(MultipleSelectionState, [{
		key: 'entries',
		value: function entries() {
			return Array.from(this.items.values());
		}
	}, {
		key: 'selectCore',
		value: function selectCore(item, state, key) {
			if (state) {
				this.items.set(key(item), item);
			} else {
				this.items.delete(key(item));
			}
		}
	}, {
		key: 'stateCore',
		value: function stateCore(item, key) {
			return this.items.has(key(item));
		}
	}, {
		key: 'clearCore',
		value: function clearCore() {
			this.items = new Map();
		}
	}]);

	return MultipleSelectionState;
}(__WEBPACK_IMPORTED_MODULE_0__selection_state__["a" /* SelectionState */]);

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectionState; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utility__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node__ = __webpack_require__(51);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var SelectionState = function () {
	function SelectionState(model, service) {
		_classCallCheck(this, SelectionState);

		this.model = model;
		this.service = service;
	}

	_createClass(SelectionState, [{
		key: 'select',
		value: function select(item) {
			var _this = this;

			var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
			var key = arguments[2];

			key = key || this.keyFactory();
			if (Object(__WEBPACK_IMPORTED_MODULE_0__utility__["h" /* isArray */])(item)) {
				item.forEach(function (item) {
					return _this.select(item, state, key);
				});
				return;
			}

			if (item instanceof __WEBPACK_IMPORTED_MODULE_1__node__["a" /* Node */]) {
				var rows = this.model.data().rows;
				if (rows.length) {
					item.rows.forEach(function (index) {
						return _this.select(rows[index], state, key);
					});
					return;
				}
			}

			this.selectCore(item, state, key);
		}
	}, {
		key: 'toggle',
		value: function toggle(item) {
			var state = this.state(item);
			return this.select(item, state === null || !state);
		}
	}, {
		key: 'state',
		value: function state(item, key) {
			var _this2 = this;

			key = key || this.keyFactory();
			if (Object(__WEBPACK_IMPORTED_MODULE_0__utility__["h" /* isArray */])(item)) {
				var all = item.every(function (item) {
					return _this2.state(item, key);
				});
				return all ? true : item.some(function (item) {
					return _this2.state(item, key);
				}) ? null : false;
			}

			if (item instanceof __WEBPACK_IMPORTED_MODULE_1__node__["a" /* Node */]) {
				var rows = this.model.data().rows;
				if (rows.length) {
					var _all = item.rows.length && item.rows.every(function (index) {
						return _this2.state(rows[index], key);
					});
					return _all ? true : item.rows.some(function (index) {
						return _this2.state(rows[index], key);
					}) ? null : false;
				}
			}

			return this.stateCore(item, key);
		}
	}, {
		key: 'stateAll',
		value: function stateAll(items) {
			var entries = this.entries();
			if (items.length === entries.length) {
				return true;
			}

			return entries.length > 0 ? null : false;
		}
	}, {
		key: 'keyFactory',
		value: function keyFactory() {
			return this.service.hashFactory();
		}
	}, {
		key: 'clear',
		value: function clear() {
			this.clearCore();
		}
	}, {
		key: 'entries',
		value: function entries() {
			return [];
		}
	}, {
		key: 'selectCore',
		value: function selectCore() {}
	}, {
		key: 'clearCore',
		value: function clearCore() {}
	}, {
		key: 'stateCore',
		value: function stateCore() {
			return false;
		}
	}]);

	return SelectionState;
}();

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Composite; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__command_command__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utility__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var Composite = function () {
	function Composite() {
		_classCallCheck(this, Composite);
	}

	_createClass(Composite, null, [{
		key: 'func',
		value: function func(list) {
			var reduce = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : __WEBPACK_IMPORTED_MODULE_1__utility__["u" /* noop */];
			var memo = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

			return function () {
				var _iteratorNormalCompletion = true;
				var _didIteratorError = false;
				var _iteratorError = undefined;

				try {
					for (var _iterator = list[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
						var f = _step.value;

						memo = reduce(memo, f.apply(undefined, arguments));
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

				return memo;
			};
		}
	}, {
		key: 'command',
		value: function command(list) {
			return new __WEBPACK_IMPORTED_MODULE_0__command_command__["a" /* Command */]({
				source: 'composite',
				canExecute: function canExecute() {
					for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
						args[_key] = arguments[_key];
					}

					return list.reduce(function (memo, cmd) {
						return memo || cmd.canExecute.apply(cmd, args);
					}, false);
				},
				execute: function execute() {
					for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
						args[_key2] = arguments[_key2];
					}

					return list.filter(function (cmd) {
						return cmd.canExecute.apply(cmd, args);
					}).reduce(function (memo, cmd) {
						return cmd.execute.apply(cmd, args) || memo;
					}, undefined);
				}
			});
		}
	}, {
		key: 'list',
		value: function list(_list) {
			return _list.reduce(function (memo, xs) {
				return memo.concat(xs);
			}, []);
		}
	}, {
		key: 'object',
		value: function object(list) {
			var memo = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

			return Object.assign.apply(Object, [memo].concat(_toConsumableArray(list)));
		}
	}]);

	return Composite;
}();



/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = compile;
/* harmony export (immutable) */ __webpack_exports__["b"] = compileGet;
/* harmony export (immutable) */ __webpack_exports__["c"] = compileSet;
function compile(path) {
	var parts = path.split('.');
	var last = parts.length - 1;
	var accessor = getAccessor(parts, last);
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

function compileGet(path) {
	var parts = path.split('.');
	var last = parts.length - 1;
	var accessor = getAccessor(parts, last);
	var key = parts[last];
	if (accessor) {
		return function (entry) {
			return accessor(entry)[key];
		};
	}

	return function (entry) {
		return entry[key];
	};
}

function compileSet(path) {
	var parts = path.split('.');
	var last = parts.length - 1;
	var accessor = getAccessor(parts, last);
	var key = parts[last];
	if (accessor) {
		return function (entry, value) {
			accessor(entry)[key] = value;
		};
	}

	return function (entry, value) {
		entry[key] = value;
	};
}

function getAccessor(parts, last) {
	return parts.filter(function (part, index) {
		return index !== last;
	}).reduce(function (accessor, part) {
		return accessor ? function (entry) {
			return accessor(entry)[part];
		} : function (entry) {
			return entry[part];
		};
	}, null);
}

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommandManager; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CommandManager = function () {
	function CommandManager() {
		var apply = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (f) {
			return f();
		};

		_classCallCheck(this, CommandManager);

		this.apply = apply;
	}

	_createClass(CommandManager, [{
		key: "invoke",
		value: function invoke(commands) {
			this.apply(function () {
				var priorityCommands = Array.from(commands);
				priorityCommands.sort(function (x, y) {
					return y.priority - x.priority;
				});

				var _iteratorNormalCompletion = true;
				var _didIteratorError = false;
				var _iteratorError = undefined;

				try {
					for (var _iterator = priorityCommands[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
						var cmd = _step.value;

						if (cmd.execute() === false) {
							break;
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
			});

			return commands.length > 0;
		}
	}, {
		key: "filter",
		value: function filter(commands) {
			return commands.filter(function (cmd) {
				return cmd.canExecute();
			});
		}
	}]);

	return CommandManager;
}();

/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Shortcut; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__io__ = __webpack_require__(141);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Shortcut = function () {
	function Shortcut(dispatcher) {
		_classCallCheck(this, Shortcut);

		this.dispatcher = dispatcher;
		this.keyCode = {
			key: null,
			code: null
		};
	}

	_createClass(Shortcut, [{
		key: 'factory',
		value: function factory(manager) {
			var self = this;
			return {
				register: function register(commands) {
					return self.register(manager, commands);
				}
			};
		}
	}, {
		key: 'keyDown',
		value: function keyDown(e, source) {
			var code = Shortcut.translate(e);
			this.keyCode = {
				key: e.key,
				code: code
			};

			return this.dispatcher.execute(code, source);
		}
	}, {
		key: 'register',
		value: function register(manager, commands) {
			return this.dispatcher.register(manager, commands);
		}
	}], [{
		key: 'isControl',
		value: function isControl(keyCode) {
			if (!keyCode) {
				return false;
			}

			var code = keyCode.code;
			var parts = code.split('+');
			return parts.some(function (part) {
				return part === 'ctrl' || part === 'alt';
			}) || parts.every(function (part) {
				return __WEBPACK_IMPORTED_MODULE_0__io__["b" /* Keyboard */].isControl(part);
			});
		}
	}, {
		key: 'isPrintable',
		value: function isPrintable(keyCode) {
			if (!keyCode) {
				return false;
			}

			var code = keyCode.code;
			var parts = code.split('+');
			return parts.some(function (part) {
				return __WEBPACK_IMPORTED_MODULE_0__io__["b" /* Keyboard */].isPrintable(part);
			});
		}
	}, {
		key: 'stringify',
		value: function stringify(keyCode) {
			if (!keyCode) {
				return '';
			}

			return __WEBPACK_IMPORTED_MODULE_0__io__["b" /* Keyboard */].stringify(keyCode.code, keyCode.key);
		}
	}, {
		key: 'translate',
		value: function translate(e) {
			var codes = [];
			var code = __WEBPACK_IMPORTED_MODULE_0__io__["b" /* Keyboard */].translate(e.keyCode).toLowerCase();
			if (e.ctrlKey) {
				codes.push('ctrl');
			}

			if (e.shiftKey) {
				codes.push('shift');
			}

			if (e.altKey) {
				codes.push('alt');
			}

			if (code !== 'ctrl' && code !== 'shift' && code !== 'alt') {
				codes.push(code);
			}

			return codes.join('+');
		}
	}]);

	return Shortcut;
}();

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(133)))

/***/ }),
/* 82 */
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
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(84),
    arraySome = __webpack_require__(180),
    cacheHas = __webpack_require__(85);

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
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(58),
    setCacheAdd = __webpack_require__(178),
    setCacheHas = __webpack_require__(179);

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
/* 85 */
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
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(12);

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),
/* 87 */
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
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(89),
    getSymbols = __webpack_require__(60),
    keys = __webpack_require__(27);

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
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(59),
    isArray = __webpack_require__(5);

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
/* 90 */
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
/* 91 */
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
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(93),
    isArguments = __webpack_require__(44),
    isArray = __webpack_require__(5),
    isBuffer = __webpack_require__(45),
    isIndex = __webpack_require__(62),
    isTypedArray = __webpack_require__(63);

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
/* 93 */
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
/* 94 */
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
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(81);

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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(61)(module)))

/***/ }),
/* 96 */
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
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__(188),
    Map = __webpack_require__(57),
    Promise = __webpack_require__(189),
    Set = __webpack_require__(98),
    WeakMap = __webpack_require__(190),
    baseGetTag = __webpack_require__(16),
    toSource = __webpack_require__(82);

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
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(24),
    root = __webpack_require__(12);

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(38),
    arrayEach = __webpack_require__(197),
    assignValue = __webpack_require__(100),
    baseAssign = __webpack_require__(198),
    baseAssignIn = __webpack_require__(199),
    cloneBuffer = __webpack_require__(102),
    copyArray = __webpack_require__(103),
    copySymbols = __webpack_require__(202),
    copySymbolsIn = __webpack_require__(203),
    getAllKeys = __webpack_require__(88),
    getAllKeysIn = __webpack_require__(204),
    getTag = __webpack_require__(97),
    initCloneArray = __webpack_require__(205),
    initCloneByTag = __webpack_require__(206),
    initCloneObject = __webpack_require__(106),
    isArray = __webpack_require__(5),
    isBuffer = __webpack_require__(45),
    isObject = __webpack_require__(10),
    keys = __webpack_require__(27);

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
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(46),
    eq = __webpack_require__(31);

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
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(24);

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(12);

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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(61)(module)))

/***/ }),
/* 103 */
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
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(59),
    getPrototype = __webpack_require__(66),
    getSymbols = __webpack_require__(60),
    stubArray = __webpack_require__(91);

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
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(67);

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
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(214),
    getPrototype = __webpack_require__(66),
    isPrototype = __webpack_require__(65);

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
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(46),
    eq = __webpack_require__(31);

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
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

var createBaseFor = __webpack_require__(222);

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
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(32),
    isObjectLike = __webpack_require__(13);

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
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

var baseRest = __webpack_require__(111),
    isIterateeCall = __webpack_require__(232);

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
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(69),
    overRest = __webpack_require__(226),
    setToString = __webpack_require__(228);

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
/* 112 */
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
/* 113 */
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
/* 114 */
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
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(10);

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
/* 116 */
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
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(118),
    toKey = __webpack_require__(49);

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
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(5),
    isKey = __webpack_require__(70),
    stringToPath = __webpack_require__(269),
    toString = __webpack_require__(48);

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
/* 119 */
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
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(33);

/**
 * The base implementation of methods like `_.max` and `_.min` which accepts a
 * `comparator` to determine the extremum value.
 *
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The iteratee invoked per iteration.
 * @param {Function} comparator The comparator used to compare values.
 * @returns {*} Returns the extremum value.
 */
function baseExtremum(array, iteratee, comparator) {
  var index = -1,
      length = array.length;

  while (++index < length) {
    var value = array[index],
        current = iteratee(value);

    if (current != null && (computed === undefined
          ? (current === current && !isSymbol(current))
          : comparator(current, computed)
        )) {
      var computed = current,
          result = value;
    }
  }
  return result;
}

module.exports = baseExtremum;


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

var baseSlice = __webpack_require__(113);

/**
 * The base implementation of methods like `_.dropWhile` and `_.takeWhile`
 * without support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to query.
 * @param {Function} predicate The function invoked per iteration.
 * @param {boolean} [isDrop] Specify dropping elements instead of taking them.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Array} Returns the slice of `array`.
 */
function baseWhile(array, predicate, isDrop, fromRight) {
  var length = array.length,
      index = fromRight ? length : -1;

  while ((fromRight ? index-- : ++index < length) &&
    predicate(array[index], index, array)) {}

  return isDrop
    ? baseSlice(array, (fromRight ? 0 : index), (fromRight ? index + 1 : length))
    : baseSlice(array, (fromRight ? index + 1 : 0), (fromRight ? length : index));
}

module.exports = baseWhile;


/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Guard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__error__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utility__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var Guard = function () {
	function Guard() {
		_classCallCheck(this, Guard);
	}

	_createClass(Guard, null, [{
		key: 'notUndefined',

		/**
   * If value is undefined exception will be thrown
   * @param {any} value - Value to check
   * @param {string} name - Argument name
   */
		value: function notUndefined(value, name) {
			if (Object(__WEBPACK_IMPORTED_MODULE_1__utility__["q" /* isUndefined */])(value)) {
				throw new __WEBPACK_IMPORTED_MODULE_0__error__["a" /* AppError */]('guard.notUndefined', name);
			}
		}

		/**
   * If value is null or undefined exception will be thrown
   * @param {any} value - Value to check
   * @param {string} name - Argument name
   */

	}, {
		key: 'notNull',
		value: function notNull(value, name) {
			if (value === null || Object(__WEBPACK_IMPORTED_MODULE_1__utility__["q" /* isUndefined */])(value)) {
				throw new __WEBPACK_IMPORTED_MODULE_0__error__["a" /* AppError */]('guard.notNull', name);
			}
		}

		/**
   * If value is null or undefined or empty exception will be thrown
   * @param {any} value - Value to check
   * @param {string} name - Argument name
   */

	}, {
		key: 'notNullOrEmpty',
		value: function notNullOrEmpty(value, name) {
			if (value === null || Object(__WEBPACK_IMPORTED_MODULE_1__utility__["q" /* isUndefined */])(value) || value === '') {
				throw new __WEBPACK_IMPORTED_MODULE_0__error__["a" /* AppError */]('guard.notNullOrEmpty', name);
			}
		}

		/**
   * If value is not a function exception will be thrown
   * @param {any} value - Value to check
   * @param {string} name - Argument name
   */

	}, {
		key: 'invokable',
		value: function invokable(value, name) {
			if (!Object(__WEBPACK_IMPORTED_MODULE_1__utility__["m" /* isFunction */])(value)) {
				throw new __WEBPACK_IMPORTED_MODULE_0__error__["a" /* AppError */]('guard.invokable', name);
			}
		}
	}]);

	return Guard;
}();

/***/ }),
/* 123 */,
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisposableView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__infrastructure__ = __webpack_require__(1);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var DisposableView = function () {
	function DisposableView() {
		_classCallCheck(this, DisposableView);

		this.disposes = [];
	}

	_createClass(DisposableView, [{
		key: 'using',
		value: function using(dispose) {
			__WEBPACK_IMPORTED_MODULE_0__infrastructure__["i" /* Guard */].invokable(dispose, 'dispose');

			this.disposes.push(dispose);
			return this.dispose.bind(this);
		}
	}, {
		key: 'dispose',
		value: function dispose() {
			var temp = this.disposes;
			this.disposes = [];
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = temp[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var dispose = _step.value;

					dispose();
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

	return DisposableView;
}();

/***/ }),
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnumerableResource; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resource__ = __webpack_require__(74);
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
}(__WEBPACK_IMPORTED_MODULE_0__resource__["a" /* Resource */]);

/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__selection_range__ = __webpack_require__(127);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selection_model__ = __webpack_require__(310);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__selection_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__selection_view__ = __webpack_require__(311);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__selection_view__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__selection_service__ = __webpack_require__(129);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__selection_service__["a"]; });





/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectionRange; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__infrastructure__ = __webpack_require__(1);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var SelectionRange = function () {
	function SelectionRange(model) {
		_classCallCheck(this, SelectionRange);

		this.model = model;
	}

	_createClass(SelectionRange, [{
		key: 'build',
		value: function build() {
			var rangeMap = {
				'row': this.buildRows.bind(this),
				'column': this.buildColumns.bind(this),
				'cell': this.buildCells.bind(this),
				'mix': this.buildMix.bind(this)
			};

			var model = this.model;
			return function () {
				var selection = model.selection();
				var buildRange = rangeMap[selection.unit];
				if (!buildRange) {
					throw new __WEBPACK_IMPORTED_MODULE_0__infrastructure__["a" /* AppError */]('range.builder', 'Invalid unit ' + selection.unit);
				}

				return buildRange.apply(undefined, arguments);
			};
		}
	}, {
		key: 'buildRows',
		value: function buildRows(startCell, endCell) {
			var model = this.model;
			var rows = model.view().rows;
			if (!endCell) {
				return [rows[startCell.rowIndex]];
			}

			var startIndex = Math.min(startCell.rowIndex, endCell.rowIndex);
			var endIndex = Math.max(startCell.rowIndex, endCell.rowIndex);
			return rows.slice(startIndex, endIndex + 1);
		}
	}, {
		key: 'buildColumns',
		value: function buildColumns(startCell, endCell) {
			if (!endCell) {
				return [startCell.column];
			}

			var columns = this.model.data().columns;
			var startIndex = Math.min(startCell.columnIndex, endCell.columnIndex);
			var endIndex = Math.max(startCell.columnIndex, endCell.columnIndex);
			return columns.slice(startIndex, endIndex + 1);
		}
	}, {
		key: 'buildCells',
		value: function buildCells(startCell, endCell) {
			if (!endCell) {
				return [{
					column: startCell.column,
					row: startCell.row
				}];
			}

			var model = this.model;
			var rows = model.view().rows;
			var columns = model.view().columns;

			var startRowIndex = Math.min(startCell.rowIndex, endCell.rowIndex);
			var endRowIndex = Math.max(startCell.rowIndex, endCell.rowIndex);

			var startColumnIndex = Math.min(startCell.columnIndex, endCell.columnIndex);
			var endColumnIndex = Math.max(startCell.columnIndex, endCell.columnIndex);

			var selectedRows = rows.slice(startRowIndex, endRowIndex + 1);
			var selectedColumns = columns.slice(startColumnIndex, endColumnIndex + 1);

			var items = [];
			selectedRows.forEach(function (row) {
				selectedColumns.filter(function (column) {
					return column.class === 'data';
				}).forEach(function (column) {
					items.push({
						column: column,
						row: row
					});
				});
			});

			return items;
		}
	}, {
		key: 'buildMix',
		value: function buildMix(startCell, endCell) {
			var mixUnit = startCell.column.type === 'row-indicator' ? 'row' : 'cell';
			var range = mixUnit === 'row' ? this.buildRows(startCell, endCell) : this.buildCells(startCell, endCell);
			return range.map(function (item) {
				return {
					item: item,
					unit: mixUnit
				};
			});
		}
	}]);

	return SelectionRange;
}();

/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleSelectionState; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__selection_state__ = __webpack_require__(76);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var SingleSelectionState = function (_SelectionState) {
	_inherits(SingleSelectionState, _SelectionState);

	function SingleSelectionState(model, service) {
		_classCallCheck(this, SingleSelectionState);

		var _this = _possibleConstructorReturn(this, (SingleSelectionState.__proto__ || Object.getPrototypeOf(SingleSelectionState)).call(this, model, service));

		_this.item = null;
		return _this;
	}

	_createClass(SingleSelectionState, [{
		key: 'entries',
		value: function entries() {
			return this.item ? [this.item] : [];
		}
	}, {
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
		value: function stateCore(item, key) {
			return this.item !== null && key(item) === key(this.item);
		}
	}, {
		key: 'clearCore',
		value: function clearCore() {
			this.item = null;
		}
	}]);

	return SingleSelectionState;
}(__WEBPACK_IMPORTED_MODULE_0__selection_state__["a" /* SelectionState */]);

/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utility__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__infrastructure__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_value__ = __webpack_require__(20);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





function hashColumnKeyFactory(model) {
	var selectionState = model.selection();
	var selectionKey = selectionState.key;
	if (selectionKey.column === __WEBPACK_IMPORTED_MODULE_0__utility__["g" /* identity */]) {
		return function (column) {
			return column.key;
		};
	}

	// TODO: investigate if is it necessary to use JSON.stringify here
	return __WEBPACK_IMPORTED_MODULE_0__utility__["g" /* identity */];
}

function hashRowKeyFactory(model) {
	var selectionState = model.selection();
	var selectionKey = selectionState.key;
	if (selectionKey.row === __WEBPACK_IMPORTED_MODULE_0__utility__["g" /* identity */]) {
		var columns = model.data().columns;
		var index = columns.findIndex(function (column) {
			return column.type === 'id';
		});
		if (index >= 0) {
			var idColumn = columns[index];
			var getId = Object(__WEBPACK_IMPORTED_MODULE_2__services_value__["b" /* getFactory */])(idColumn);
			return getId;
		} else {
			var rows = model.data().rows;
			return function (row) {
				return rows.indexOf(row);
			};
		}
	}

	// TODO: investigate if is it necessary to use JSON.stringify here
	return __WEBPACK_IMPORTED_MODULE_0__utility__["g" /* identity */];
}

function hashKeyFactory(model) {
	var selectionState = model.selection();
	switch (selectionState.unit) {
		case 'row':
			return hashRowKeyFactory(model);
		case 'column':
			return hashColumnKeyFactory(model);
		case 'cell':
			{
				var hashColumnKey = hashColumnKeyFactory(model);
				var hashRowKey = hashRowKeyFactory(model);
				return function (key) {
					return hashColumnKey(key.column) + '[' + hashRowKey(key.row) + ']';
				};
			}
		case 'mix':
			{
				var _hashColumnKey = hashColumnKeyFactory(model);
				var _hashRowKey = hashRowKeyFactory(model);
				return function (key, entry) {
					if (!entry.unit) {
						return key;
					}

					switch (entry.unit) {
						case 'column':
							return _hashColumnKey(key);
						case 'row':
							return _hashRowKey(key);
						case 'cell':
							return _hashColumnKey(key.column) + '[' + _hashRowKey(key.row) + ']';
						default:
							throw new __WEBPACK_IMPORTED_MODULE_1__infrastructure__["a" /* AppError */]('selection.service', 'Invalid unit ' + entry.unit);
					}
				};
			}
		default:
			throw new __WEBPACK_IMPORTED_MODULE_1__infrastructure__["a" /* AppError */]('selection.service', 'Invalid unit ' + selectionState.unit);
	}
}

function cellMatchFactory() {
	return function (x, y) {
		return x.column === y.column && x.row === y.row;
	};
}

function keySelector(unit, selector) {
	switch (unit) {
		case 'row':
			return selector.row;
		case 'column':
			return selector.column;
		case 'cell':
			return function (entry) {
				if (entry.row && entry.column) {
					return {
						row: selector.row(entry.row),
						column: selector.column(entry.column)
					};
				}

				return entry;
			};
		default:
			throw new __WEBPACK_IMPORTED_MODULE_1__infrastructure__["a" /* AppError */]('selection.state', 'Invalid unit ' + unit);
	}
}

function lookupColumnFactory(model, selectKey) {
	var selectionState = model.selection();
	if (selectionState.key.column === __WEBPACK_IMPORTED_MODULE_0__utility__["g" /* identity */]) {
		return __WEBPACK_IMPORTED_MODULE_0__utility__["g" /* identity */];
	}

	var dataState = model.data();
	var columns = dataState.columns;
	return function (items) {
		var result = [];
		columns.forEach(function (column) {
			var colKey = selectKey(column);
			var found = items.indexOf(colKey) > -1;
			if (found) {
				result.push(column);
			}
		});

		return result;
	};
}

function lookupRowFactory(model, selectKey) {
	var selectionState = model.selection();
	if (selectionState.key.row === __WEBPACK_IMPORTED_MODULE_0__utility__["g" /* identity */]) {
		return __WEBPACK_IMPORTED_MODULE_0__utility__["g" /* identity */];
	}

	var dataState = model.data();
	var rows = dataState.rows;
	return function (items) {
		var result = [];
		rows.forEach(function (row) {
			var rowKey = selectKey(row);
			var found = items.indexOf(rowKey) > -1;
			if (found) {
				result.push(row);
			}
		});
		return result;
	};
}

function lookupCellFactory(model, selectKey) {
	var selectionState = model.selection();
	if (selectionState.key.row === __WEBPACK_IMPORTED_MODULE_0__utility__["g" /* identity */] && selectionState.key.column === __WEBPACK_IMPORTED_MODULE_0__utility__["g" /* identity */]) {
		return __WEBPACK_IMPORTED_MODULE_0__utility__["g" /* identity */];
	}

	var dataState = model.data();
	var rows = dataState.rows;
	var columns = dataState.columns;
	var match = cellMatchFactory();
	return function (items) {
		var result = [];
		columns.forEach(function (column) {
			rows.forEach(function (row) {
				var cell = {
					column: column,
					row: row
				};

				var index = items.findIndex(function (item) {
					return match(item, selectKey(cell));
				});
				if (index >= 0) {
					result.push(cell);
				}
			});
		});
		return result;
	};
}

var SelectionService = function () {
	function SelectionService(model) {
		_classCallCheck(this, SelectionService);

		this.model = model;
	}

	_createClass(SelectionService, [{
		key: 'lookup',
		value: function lookup(items, unit) {
			var entries = [];
			if (items.length === 0) {
				return entries;
			}

			var model = this.model;
			if (Object(__WEBPACK_IMPORTED_MODULE_0__utility__["q" /* isUndefined */])(unit)) {
				unit = model.selection().unit;
			}

			switch (unit) {
				case 'column':
					{
						var selectKey = this.keyFactory('column');
						var lookup = lookupColumnFactory(model, selectKey);
						entries = lookup(items);
						break;
					}
				case 'row':
					{
						var _selectKey = this.keyFactory('row');
						var _lookup = lookupRowFactory(model, _selectKey);
						entries = _lookup(items);
						break;
					}
				case 'cell':
					{
						var _selectKey2 = this.keyFactory('cell');
						var _lookup2 = lookupCellFactory(model, _selectKey2);
						entries = _lookup2(items);
						break;
					}
				case 'mix':
					{
						var _entries, _entries2, _entries3;

						var rowKeys = items.filter(function (key) {
							return key.unit === 'row';
						}).map(function (key) {
							return key.item;
						});
						var columnKeys = items.filter(function (key) {
							return key.unit === 'column';
						}).map(function (key) {
							return key.item;
						});
						var cellKeys = items.filter(function (key) {
							return key.unit === 'cell';
						}).map(function (key) {
							return key.item;
						});

						(_entries = entries).push.apply(_entries, _toConsumableArray(this.lookup(rowKeys, 'row').map(function (entry) {
							return { item: entry, unit: 'row' };
						})));
						(_entries2 = entries).push.apply(_entries2, _toConsumableArray(this.lookup(columnKeys, 'column').map(function (entry) {
							return { item: entry, unit: 'column' };
						})));
						(_entries3 = entries).push.apply(_entries3, _toConsumableArray(this.lookup(cellKeys, 'cell').map(function (entry) {
							return { item: entry, unit: 'cell' };
						})));
						break;
					}
				default:
					throw new __WEBPACK_IMPORTED_MODULE_1__infrastructure__["a" /* AppError */]('selection.state', 'Invalid unit ' + unit);
			}

			return entries;
		}
	}, {
		key: 'map',
		value: function map(entries) {
			var selectionState = this.model.selection();
			var selectKey = this.keyFactory();
			switch (selectionState.unit) {
				case 'column':
				case 'row':
				case 'cell':
					return entries.map(selectKey);
				case 'mix':
					return entries.map(function (entry) {
						return {
							unit: entry.unit,
							item: selectKey(entry)
						};
					});
				default:
					throw new __WEBPACK_IMPORTED_MODULE_1__infrastructure__["a" /* AppError */]('selection.state', 'Invalid unit ' + selectionState.unit);
			}
		}
	}, {
		key: 'keyFactory',
		value: function keyFactory(unit) {
			var selectionState = this.model.selection();
			unit = unit || selectionState.unit;
			switch (unit) {
				case 'column':
				case 'row':
				case 'cell':
					return keySelector(unit, selectionState.key);
				case 'mix':
					{
						var cellKey = keySelector('cell', selectionState.key);
						var rowKey = keySelector('row', selectionState.key);
						var columnKey = keySelector('column', selectionState.key);

						return function (entry) {
							if (!entry.unit) {
								return __WEBPACK_IMPORTED_MODULE_0__utility__["g" /* identity */];
							}

							switch (entry.unit) {
								case 'column':
									return columnKey(entry.item);
								case 'row':
									return rowKey(entry.item);
								case 'cell':
									return cellKey(entry.item);
								default:
									throw new __WEBPACK_IMPORTED_MODULE_1__infrastructure__["a" /* AppError */]('selection.service', 'Invalid unit ' + entry.unit);
							}
						};
					}
				default:
					throw new __WEBPACK_IMPORTED_MODULE_1__infrastructure__["a" /* AppError */]('selection.service', 'Invalid unit ' + unit);
			}
		}
	}, {
		key: 'hashFactory',
		value: function hashFactory() {
			var selectKey = this.keyFactory();
			var selectHash = hashKeyFactory(this.model);
			return function (entry) {
				var key = selectKey(entry);
				var hashKey = selectHash(key, entry);
				return hashKey;
			};
		}
	}]);

	return SelectionService;
}();

/***/ }),
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */
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
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Defer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__event__ = __webpack_require__(71);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Defer = function () {
	function Defer() {
		_classCallCheck(this, Defer);

		this.promise = new DeferPromise();
	}

	_createClass(Defer, [{
		key: 'reject',
		value: function reject() {
			this.promise.reject();
		}
	}, {
		key: 'resolve',
		value: function resolve() {
			this.promise.resolve();
		}
	}]);

	return Defer;
}();

var DeferPromise = function () {
	function DeferPromise() {
		_classCallCheck(this, DeferPromise);

		this.catchEvent = new __WEBPACK_IMPORTED_MODULE_0__event__["a" /* Event */]();
		this.thenEvent = new __WEBPACK_IMPORTED_MODULE_0__event__["a" /* Event */]();
	}

	_createClass(DeferPromise, [{
		key: 'reject',
		value: function reject() {
			this.catchEvent.emit();
		}
	}, {
		key: 'resolve',
		value: function resolve() {
			this.thenEvent.emit();
		}
	}, {
		key: 'catch',
		value: function _catch(handler) {
			this.catchEvent.on(handler);
		}
	}, {
		key: 'then',
		value: function then(handler) {
			this.thenEvent.on(handler);
		}
	}]);

	return DeferPromise;
}();

/***/ }),
/* 135 */,
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableCommandManager; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__command_manager__ = __webpack_require__(79);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var TableCommandManager = function (_CommandManager) {
	_inherits(TableCommandManager, _CommandManager);

	function TableCommandManager(apply, table) {
		_classCallCheck(this, TableCommandManager);

		var _this = _possibleConstructorReturn(this, (TableCommandManager.__proto__ || Object.getPrototypeOf(TableCommandManager)).call(this, apply));

		_this.table = table;
		return _this;
	}

	_createClass(TableCommandManager, [{
		key: 'filter',
		value: function filter(commands, source) {
			if (source === 'editor' || this.isViewActive()) {
				return _get(TableCommandManager.prototype.__proto__ || Object.getPrototypeOf(TableCommandManager.prototype), 'filter', this).call(this, commands, source);
			}

			return [];
		}
	}, {
		key: 'isViewActive',
		value: function isViewActive() {
			return this.table.view.isFocused();
		}
	}]);

	return TableCommandManager;
}(__WEBPACK_IMPORTED_MODULE_0__command_manager__["a" /* CommandManager */]);

/***/ }),
/* 137 */,
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = flatView;
/* unused harmony export some */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node__ = __webpack_require__(73);


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
					var rowNode = new __WEBPACK_IMPORTED_MODULE_0__node__["a" /* Node */](node.key, node.level + 1, 'row');
					rowNode.rows = [row];
					children.push(rowNode);
					result.push(rowNode);
				}
			}
		}
	}

	return result;
}

function some(nodes, test) {
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = nodes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var node = _step.value;

			if (test(node)) {
				return true;
			}

			if (some(node.children, test)) {
				return true;
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

	return false;
}

/***/ }),
/* 139 */,
/* 140 */,
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__char_reader__ = __webpack_require__(318);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__char_reader__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__keyboard__ = __webpack_require__(319);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__keyboard__["a"]; });



/***/ }),
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cache; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__error__ = __webpack_require__(30);
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
				throw new __WEBPACK_IMPORTED_MODULE_0__error__["a" /* AppError */]('cache.get', 'Entry with key was not found "' + key + '"');
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
				throw new __WEBPACK_IMPORTED_MODULE_0__error__["a" /* AppError */]('cache.remove', 'Entry with key was not found "' + key + '"');
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

/***/ }),
/* 147 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return isEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return yes; });
/* unused harmony export no */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return toCamelCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return compare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return orderBy; });
/* unused harmony export htmlEncode */
/* unused harmony export escapeRegexp */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_isObject__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_isObject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_isObject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_isFunction__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_isFunction___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_isFunction__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_isArray__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_isArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_isArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_isEqual__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_isEqual___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash_isEqual__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_isString__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_isString___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash_isString__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_isBoolean__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_isBoolean___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash_isBoolean__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_isNumber__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_isNumber___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash_isNumber__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_isDate__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_isDate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash_isDate__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_clone__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_clone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lodash_clone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_cloneDeepWith__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_cloneDeepWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_lodash_cloneDeepWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash_isUndefined__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash_isUndefined___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_lodash_isUndefined__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_lodash_debounce__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_lodash_debounce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_lodash_debounce__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_lodash_merge__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_lodash_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_lodash_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_lodash_flatten__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_lodash_flatten___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_lodash_flatten__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_lodash_startCase__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_lodash_startCase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_lodash_startCase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_lodash_assignWith__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_lodash_assignWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_lodash_assignWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_lodash_uniq__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_lodash_uniq___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_lodash_uniq__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_lodash_sumBy__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_lodash_sumBy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_lodash_sumBy__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_lodash_maxBy__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_lodash_maxBy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_lodash_maxBy__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_lodash_minBy__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_lodash_minBy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_lodash_minBy__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_lodash_zip__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_lodash_zip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_lodash_zip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_lodash_takeWhile__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_lodash_takeWhile___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_lodash_takeWhile__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_lodash_dropWhile__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_lodash_dropWhile___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_lodash_dropWhile__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_lodash_groupBy__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_lodash_groupBy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23_lodash_groupBy__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_0_lodash_isObject___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_1_lodash_isFunction___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_2_lodash_isArray___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_3_lodash_isEqual___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_4_lodash_isString___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_10_lodash_isUndefined___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_5_lodash_isBoolean___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_7_lodash_isDate___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_6_lodash_isNumber___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_8_lodash_clone___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_9_lodash_cloneDeepWith___default.a; });
/* unused harmony reexport debounce */
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "s", function() { return __WEBPACK_IMPORTED_MODULE_12_lodash_merge___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_13_lodash_flatten___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "w", function() { return __WEBPACK_IMPORTED_MODULE_14_lodash_startCase___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_15_lodash_assignWith___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "A", function() { return __WEBPACK_IMPORTED_MODULE_16_lodash_uniq___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_18_lodash_maxBy___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "t", function() { return __WEBPACK_IMPORTED_MODULE_19_lodash_minBy___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "x", function() { return __WEBPACK_IMPORTED_MODULE_17_lodash_sumBy___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "C", function() { return __WEBPACK_IMPORTED_MODULE_20_lodash_zip___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "y", function() { return __WEBPACK_IMPORTED_MODULE_21_lodash_takeWhile___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_22_lodash_dropWhile___default.a; });
/* unused harmony reexport groupBy */

























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
	var nameList = names.map(function (name) {
		return '' + name;
	});
	if (length > 0) {
		return nameList[0] + nameList.slice(1).map(function (name) {
			return name[0].toUpperCase() + name.substring(1, name.length);
		}).join('');
	}

	return '';
};

var isEmail = function isEmail(value) {
	if (value) {
		var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i; // eslint-disable-line no-useless-escape
		return re.test(value);
	}

	return false;
};

function compare(x, y) {
	if (x === y) {
		return 0;
	}

	if (x > y) {
		return 1;
	}

	return -1;
}

function orderBy(data, selectors, compares) {
	var length = selectors.length;
	var result = [];
	var count = data.length;

	// iterate through data to create array with applied selectors
	var index = count;
	while (index--) {
		var row = data[index];
		var criteria = [];
		for (var i = 0; i < length; i++) {
			var select = selectors[i];
			criteria.push(select(row));
		}

		result.push({ row: row, criteria: criteria, index: index });
	}

	// multi selector comparator
	var compare = function compare(x, y) {
		var result = 0;
		for (var _i = 0; _i < length; _i++) {
			var _compare = compares[_i];
			var xv = x.criteria[_i];
			var yv = y.criteria[_i];

			result = _compare(xv, yv, x.row, y.row);
			if (result !== 0) {
				return result;
			}
		}

		// ensures a stable sort
		return x.index - y.index;
	};

	result.sort(compare);

	// copy origin values to result array
	index = count;
	while (index--) {
		result[index] = result[index].row;
	}

	return result;
}

function htmlEncode(s) {
	return String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function escapeRegexp(text) {
	if (!text) return text;

	return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}



/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(26);

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
/* 149 */
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
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__(56);

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return baseIsEqual(value, other);
}

module.exports = isEqual;


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(38),
    equalArrays = __webpack_require__(83),
    equalByTag = __webpack_require__(181),
    equalObjects = __webpack_require__(182),
    getTag = __webpack_require__(97),
    isArray = __webpack_require__(5),
    isBuffer = __webpack_require__(45),
    isTypedArray = __webpack_require__(63);

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
/* 152 */
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
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(40);

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
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(40);

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
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(40);

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
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(40);

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
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(39);

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
/* 158 */
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
/* 159 */
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
/* 160 */
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
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(39),
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
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(37),
    isMasked = __webpack_require__(163),
    isObject = __webpack_require__(10),
    toSource = __webpack_require__(82);

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
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(164);

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
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(12);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),
/* 165 */
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
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(167),
    ListCache = __webpack_require__(39),
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
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(168),
    hashDelete = __webpack_require__(169),
    hashGet = __webpack_require__(170),
    hashHas = __webpack_require__(171),
    hashSet = __webpack_require__(172);

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
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(41);

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
/* 169 */
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
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(41);

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
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(41);

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
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(41);

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
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(42);

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
/* 174 */
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
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(42);

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
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(42);

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
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(42);

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
/* 178 */
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
/* 179 */
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
/* 180 */
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
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(26),
    Uint8Array = __webpack_require__(86),
    eq = __webpack_require__(31),
    equalArrays = __webpack_require__(83),
    mapToArray = __webpack_require__(87),
    setToArray = __webpack_require__(43);

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
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

var getAllKeys = __webpack_require__(88);

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
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(16),
    isObjectLike = __webpack_require__(13);

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
/* 184 */
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
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(16),
    isLength = __webpack_require__(64),
    isObjectLike = __webpack_require__(13);

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
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(65),
    nativeKeys = __webpack_require__(187);

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
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(96);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(24),
    root = __webpack_require__(12);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(24),
    root = __webpack_require__(12);

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(24),
    root = __webpack_require__(12);

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(16),
    isArray = __webpack_require__(5),
    isObjectLike = __webpack_require__(13);

/** `Object#toString` result references. */
var stringTag = '[object String]';

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' ||
    (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
}

module.exports = isString;


/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(16),
    isObjectLike = __webpack_require__(13);

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
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(16),
    isObjectLike = __webpack_require__(13);

/** `Object#toString` result references. */
var numberTag = '[object Number]';

/**
 * Checks if `value` is classified as a `Number` primitive or object.
 *
 * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
 * classified as numbers, use the `_.isFinite` method.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a number, else `false`.
 * @example
 *
 * _.isNumber(3);
 * // => true
 *
 * _.isNumber(Number.MIN_VALUE);
 * // => true
 *
 * _.isNumber(Infinity);
 * // => true
 *
 * _.isNumber('3');
 * // => false
 */
function isNumber(value) {
  return typeof value == 'number' ||
    (isObjectLike(value) && baseGetTag(value) == numberTag);
}

module.exports = isNumber;


/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsDate = __webpack_require__(195),
    baseUnary = __webpack_require__(94),
    nodeUtil = __webpack_require__(95);

/* Node.js helper references. */
var nodeIsDate = nodeUtil && nodeUtil.isDate;

/**
 * Checks if `value` is classified as a `Date` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
 * @example
 *
 * _.isDate(new Date);
 * // => true
 *
 * _.isDate('Mon April 23 2012');
 * // => false
 */
var isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;

module.exports = isDate;


/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(16),
    isObjectLike = __webpack_require__(13);

/** `Object#toString` result references. */
var dateTag = '[object Date]';

/**
 * The base implementation of `_.isDate` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
 */
function baseIsDate(value) {
  return isObjectLike(value) && baseGetTag(value) == dateTag;
}

module.exports = baseIsDate;


/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

var baseClone = __webpack_require__(99);

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
/* 197 */
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
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(28),
    keys = __webpack_require__(27);

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
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(28),
    keysIn = __webpack_require__(47);

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
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(10),
    isPrototype = __webpack_require__(65),
    nativeKeysIn = __webpack_require__(201);

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
/* 201 */
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
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(28),
    getSymbols = __webpack_require__(60);

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
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(28),
    getSymbolsIn = __webpack_require__(104);

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
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(89),
    getSymbolsIn = __webpack_require__(104),
    keysIn = __webpack_require__(47);

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
/* 205 */
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
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(67),
    cloneDataView = __webpack_require__(207),
    cloneMap = __webpack_require__(208),
    cloneRegExp = __webpack_require__(210),
    cloneSet = __webpack_require__(211),
    cloneSymbol = __webpack_require__(213),
    cloneTypedArray = __webpack_require__(105);

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
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(67);

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
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

var addMapEntry = __webpack_require__(209),
    arrayReduce = __webpack_require__(68),
    mapToArray = __webpack_require__(87);

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
/* 209 */
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
/* 210 */
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
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

var addSetEntry = __webpack_require__(212),
    arrayReduce = __webpack_require__(68),
    setToArray = __webpack_require__(43);

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
/* 212 */
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
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(26);

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
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(10);

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
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

var baseClone = __webpack_require__(99);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_SYMBOLS_FLAG = 4;

/**
 * This method is like `_.cloneWith` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @param {Function} [customizer] The function to customize cloning.
 * @returns {*} Returns the deep cloned value.
 * @see _.cloneWith
 * @example
 *
 * function customizer(value) {
 *   if (_.isElement(value)) {
 *     return value.cloneNode(true);
 *   }
 * }
 *
 * var el = _.cloneDeepWith(document.body, customizer);
 *
 * console.log(el === document.body);
 * // => false
 * console.log(el.nodeName);
 * // => 'BODY'
 * console.log(el.childNodes.length);
 * // => 20
 */
function cloneDeepWith(value, customizer) {
  customizer = typeof customizer == 'function' ? customizer : undefined;
  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, customizer);
}

module.exports = cloneDeepWith;


/***/ }),
/* 216 */
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
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(10),
    now = __webpack_require__(218),
    toNumber = __webpack_require__(219);

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
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(12);

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
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(10),
    isSymbol = __webpack_require__(33);

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
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

var baseMerge = __webpack_require__(221),
    createAssigner = __webpack_require__(110);

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
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(38),
    assignMergeValue = __webpack_require__(107),
    baseFor = __webpack_require__(108),
    baseMergeDeep = __webpack_require__(223),
    isObject = __webpack_require__(10),
    keysIn = __webpack_require__(47);

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
/* 222 */
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
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

var assignMergeValue = __webpack_require__(107),
    cloneBuffer = __webpack_require__(102),
    cloneTypedArray = __webpack_require__(105),
    copyArray = __webpack_require__(103),
    initCloneObject = __webpack_require__(106),
    isArguments = __webpack_require__(44),
    isArray = __webpack_require__(5),
    isArrayLikeObject = __webpack_require__(109),
    isBuffer = __webpack_require__(45),
    isFunction = __webpack_require__(37),
    isObject = __webpack_require__(10),
    isPlainObject = __webpack_require__(224),
    isTypedArray = __webpack_require__(63),
    toPlainObject = __webpack_require__(225);

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
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(16),
    getPrototype = __webpack_require__(66),
    isObjectLike = __webpack_require__(13);

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
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(28),
    keysIn = __webpack_require__(47);

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
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(227);

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
/* 227 */
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
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

var baseSetToString = __webpack_require__(229),
    shortOut = __webpack_require__(231);

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
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

var constant = __webpack_require__(230),
    defineProperty = __webpack_require__(101),
    identity = __webpack_require__(69);

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
/* 230 */
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
/* 231 */
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
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(31),
    isArrayLike = __webpack_require__(32),
    isIndex = __webpack_require__(62),
    isObject = __webpack_require__(10);

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
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

var baseFlatten = __webpack_require__(234);

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
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(59),
    isFlattenable = __webpack_require__(235);

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
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(26),
    isArguments = __webpack_require__(44),
    isArray = __webpack_require__(5);

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
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

var createCompounder = __webpack_require__(237),
    upperFirst = __webpack_require__(246);

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
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

var arrayReduce = __webpack_require__(68),
    deburr = __webpack_require__(238),
    words = __webpack_require__(242);

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
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

var deburrLetter = __webpack_require__(239),
    toString = __webpack_require__(48);

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
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

var basePropertyOf = __webpack_require__(240);

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
/* 240 */
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
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(26),
    arrayMap = __webpack_require__(112),
    isArray = __webpack_require__(5),
    isSymbol = __webpack_require__(33);

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
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

var asciiWords = __webpack_require__(243),
    hasUnicodeWord = __webpack_require__(244),
    toString = __webpack_require__(48),
    unicodeWords = __webpack_require__(245);

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
/* 243 */
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
/* 244 */
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
/* 245 */
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
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

var createCaseFirst = __webpack_require__(247);

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
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

var castSlice = __webpack_require__(248),
    hasUnicode = __webpack_require__(114),
    stringToArray = __webpack_require__(249),
    toString = __webpack_require__(48);

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
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

var baseSlice = __webpack_require__(113);

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
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

var asciiToArray = __webpack_require__(250),
    hasUnicode = __webpack_require__(114),
    unicodeToArray = __webpack_require__(251);

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
/* 250 */
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
/* 251 */
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
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(28),
    createAssigner = __webpack_require__(110),
    keys = __webpack_require__(27);

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
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

var baseUniq = __webpack_require__(254);

/**
 * Creates a duplicate-free version of an array, using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons, in which only the first occurrence of each element
 * is kept. The order of result values is determined by the order they occur
 * in the array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * _.uniq([2, 1, 2]);
 * // => [2, 1]
 */
function uniq(array) {
  return (array && array.length) ? baseUniq(array) : [];
}

module.exports = uniq;


/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(84),
    arrayIncludes = __webpack_require__(255),
    arrayIncludesWith = __webpack_require__(260),
    cacheHas = __webpack_require__(85),
    createSet = __webpack_require__(261),
    setToArray = __webpack_require__(43);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 */
function baseUniq(array, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      length = array.length,
      isCommon = true,
      result = [],
      seen = result;

  if (comparator) {
    isCommon = false;
    includes = arrayIncludesWith;
  }
  else if (length >= LARGE_ARRAY_SIZE) {
    var set = iteratee ? null : createSet(array);
    if (set) {
      return setToArray(set);
    }
    isCommon = false;
    includes = cacheHas;
    seen = new SetCache;
  }
  else {
    seen = iteratee ? [] : result;
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var seenIndex = seen.length;
      while (seenIndex--) {
        if (seen[seenIndex] === computed) {
          continue outer;
        }
      }
      if (iteratee) {
        seen.push(computed);
      }
      result.push(value);
    }
    else if (!includes(seen, computed, comparator)) {
      if (seen !== result) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

module.exports = baseUniq;


/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

var baseIndexOf = __webpack_require__(256);

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

module.exports = arrayIncludes;


/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

var baseFindIndex = __webpack_require__(257),
    baseIsNaN = __webpack_require__(258),
    strictIndexOf = __webpack_require__(259);

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNaN, fromIndex);
}

module.exports = baseIndexOf;


/***/ }),
/* 257 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseFindIndex;


/***/ }),
/* 258 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

module.exports = baseIsNaN;


/***/ }),
/* 259 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

module.exports = strictIndexOf;


/***/ }),
/* 260 */
/***/ (function(module, exports) {

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

module.exports = arrayIncludesWith;


/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

var Set = __webpack_require__(98),
    noop = __webpack_require__(262),
    setToArray = __webpack_require__(43);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Creates a set object of `values`.
 *
 * @private
 * @param {Array} values The values to add to the set.
 * @returns {Object} Returns the new set.
 */
var createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY) ? noop : function(values) {
  return new Set(values);
};

module.exports = createSet;


/***/ }),
/* 262 */
/***/ (function(module, exports) {

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

module.exports = noop;


/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

var baseIteratee = __webpack_require__(29),
    baseSum = __webpack_require__(277);

/**
 * This method is like `_.sum` except that it accepts `iteratee` which is
 * invoked for each element in `array` to generate the value to be summed.
 * The iteratee is invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Math
 * @param {Array} array The array to iterate over.
 * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
 * @returns {number} Returns the sum.
 * @example
 *
 * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
 *
 * _.sumBy(objects, function(o) { return o.n; });
 * // => 20
 *
 * // The `_.property` iteratee shorthand.
 * _.sumBy(objects, 'n');
 * // => 20
 */
function sumBy(array, iteratee) {
  return (array && array.length)
    ? baseSum(array, baseIteratee(iteratee, 2))
    : 0;
}

module.exports = sumBy;


/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsMatch = __webpack_require__(265),
    getMatchData = __webpack_require__(266),
    matchesStrictComparable = __webpack_require__(116);

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
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(38),
    baseIsEqual = __webpack_require__(56);

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
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

var isStrictComparable = __webpack_require__(115),
    keys = __webpack_require__(27);

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
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__(56),
    get = __webpack_require__(268),
    hasIn = __webpack_require__(272),
    isKey = __webpack_require__(70),
    isStrictComparable = __webpack_require__(115),
    matchesStrictComparable = __webpack_require__(116),
    toKey = __webpack_require__(49);

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
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(117);

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
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(270);

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
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__(271);

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
/* 271 */
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
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

var baseHasIn = __webpack_require__(273),
    hasPath = __webpack_require__(274);

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
/* 273 */
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
/* 274 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(118),
    isArguments = __webpack_require__(44),
    isArray = __webpack_require__(5),
    isIndex = __webpack_require__(62),
    isLength = __webpack_require__(64),
    toKey = __webpack_require__(49);

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
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

var baseProperty = __webpack_require__(119),
    basePropertyDeep = __webpack_require__(276),
    isKey = __webpack_require__(70),
    toKey = __webpack_require__(49);

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
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(117);

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
/* 277 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.sum` and `_.sumBy` without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {number} Returns the sum.
 */
function baseSum(array, iteratee) {
  var result,
      index = -1,
      length = array.length;

  while (++index < length) {
    var current = iteratee(array[index]);
    if (current !== undefined) {
      result = result === undefined ? current : (result + current);
    }
  }
  return result;
}

module.exports = baseSum;


/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

var baseExtremum = __webpack_require__(120),
    baseGt = __webpack_require__(279),
    baseIteratee = __webpack_require__(29);

/**
 * This method is like `_.max` except that it accepts `iteratee` which is
 * invoked for each element in `array` to generate the criterion by which
 * the value is ranked. The iteratee is invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Math
 * @param {Array} array The array to iterate over.
 * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
 * @returns {*} Returns the maximum value.
 * @example
 *
 * var objects = [{ 'n': 1 }, { 'n': 2 }];
 *
 * _.maxBy(objects, function(o) { return o.n; });
 * // => { 'n': 2 }
 *
 * // The `_.property` iteratee shorthand.
 * _.maxBy(objects, 'n');
 * // => { 'n': 2 }
 */
function maxBy(array, iteratee) {
  return (array && array.length)
    ? baseExtremum(array, baseIteratee(iteratee, 2), baseGt)
    : undefined;
}

module.exports = maxBy;


/***/ }),
/* 279 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.gt` which doesn't coerce arguments.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if `value` is greater than `other`,
 *  else `false`.
 */
function baseGt(value, other) {
  return value > other;
}

module.exports = baseGt;


/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

var baseExtremum = __webpack_require__(120),
    baseIteratee = __webpack_require__(29),
    baseLt = __webpack_require__(281);

/**
 * This method is like `_.min` except that it accepts `iteratee` which is
 * invoked for each element in `array` to generate the criterion by which
 * the value is ranked. The iteratee is invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Math
 * @param {Array} array The array to iterate over.
 * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
 * @returns {*} Returns the minimum value.
 * @example
 *
 * var objects = [{ 'n': 1 }, { 'n': 2 }];
 *
 * _.minBy(objects, function(o) { return o.n; });
 * // => { 'n': 1 }
 *
 * // The `_.property` iteratee shorthand.
 * _.minBy(objects, 'n');
 * // => { 'n': 1 }
 */
function minBy(array, iteratee) {
  return (array && array.length)
    ? baseExtremum(array, baseIteratee(iteratee, 2), baseLt)
    : undefined;
}

module.exports = minBy;


/***/ }),
/* 281 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.lt` which doesn't coerce arguments.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if `value` is less than `other`,
 *  else `false`.
 */
function baseLt(value, other) {
  return value < other;
}

module.exports = baseLt;


/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

var baseRest = __webpack_require__(111),
    unzip = __webpack_require__(283);

/**
 * Creates an array of grouped elements, the first of which contains the
 * first elements of the given arrays, the second of which contains the
 * second elements of the given arrays, and so on.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {...Array} [arrays] The arrays to process.
 * @returns {Array} Returns the new array of grouped elements.
 * @example
 *
 * _.zip(['a', 'b'], [1, 2], [true, false]);
 * // => [['a', 1, true], ['b', 2, false]]
 */
var zip = baseRest(unzip);

module.exports = zip;


/***/ }),
/* 283 */
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(90),
    arrayMap = __webpack_require__(112),
    baseProperty = __webpack_require__(119),
    baseTimes = __webpack_require__(93),
    isArrayLikeObject = __webpack_require__(109);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * This method is like `_.zip` except that it accepts an array of grouped
 * elements and creates an array regrouping the elements to their pre-zip
 * configuration.
 *
 * @static
 * @memberOf _
 * @since 1.2.0
 * @category Array
 * @param {Array} array The array of grouped elements to process.
 * @returns {Array} Returns the new array of regrouped elements.
 * @example
 *
 * var zipped = _.zip(['a', 'b'], [1, 2], [true, false]);
 * // => [['a', 1, true], ['b', 2, false]]
 *
 * _.unzip(zipped);
 * // => [['a', 'b'], [1, 2], [true, false]]
 */
function unzip(array) {
  if (!(array && array.length)) {
    return [];
  }
  var length = 0;
  array = arrayFilter(array, function(group) {
    if (isArrayLikeObject(group)) {
      length = nativeMax(group.length, length);
      return true;
    }
  });
  return baseTimes(length, function(index) {
    return arrayMap(array, baseProperty(index));
  });
}

module.exports = unzip;


/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

var baseIteratee = __webpack_require__(29),
    baseWhile = __webpack_require__(121);

/**
 * Creates a slice of `array` with elements taken from the beginning. Elements
 * are taken until `predicate` returns falsey. The predicate is invoked with
 * three arguments: (value, index, array).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to query.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': true }
 * ];
 *
 * _.takeWhile(users, function(o) { return !o.active; });
 * // => objects for ['barney', 'fred']
 *
 * // The `_.matches` iteratee shorthand.
 * _.takeWhile(users, { 'user': 'barney', 'active': false });
 * // => objects for ['barney']
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.takeWhile(users, ['active', false]);
 * // => objects for ['barney', 'fred']
 *
 * // The `_.property` iteratee shorthand.
 * _.takeWhile(users, 'active');
 * // => []
 */
function takeWhile(array, predicate) {
  return (array && array.length)
    ? baseWhile(array, baseIteratee(predicate, 3))
    : [];
}

module.exports = takeWhile;


/***/ }),
/* 285 */
/***/ (function(module, exports, __webpack_require__) {

var baseIteratee = __webpack_require__(29),
    baseWhile = __webpack_require__(121);

/**
 * Creates a slice of `array` excluding elements dropped from the beginning.
 * Elements are dropped until `predicate` returns falsey. The predicate is
 * invoked with three arguments: (value, index, array).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to query.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': true }
 * ];
 *
 * _.dropWhile(users, function(o) { return !o.active; });
 * // => objects for ['pebbles']
 *
 * // The `_.matches` iteratee shorthand.
 * _.dropWhile(users, { 'user': 'barney', 'active': false });
 * // => objects for ['fred', 'pebbles']
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.dropWhile(users, ['active', false]);
 * // => objects for ['pebbles']
 *
 * // The `_.property` iteratee shorthand.
 * _.dropWhile(users, 'active');
 * // => objects for ['barney', 'fred', 'pebbles']
 */
function dropWhile(array, predicate) {
  return (array && array.length)
    ? baseWhile(array, baseIteratee(predicate, 3), true)
    : [];
}

module.exports = dropWhile;


/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(46),
    createAggregator = __webpack_require__(287);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an object composed of keys generated from the results of running
 * each element of `collection` thru `iteratee`. The order of grouped values
 * is determined by the order they occur in `collection`. The corresponding
 * value of each key is an array of elements responsible for generating the
 * key. The iteratee is invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
 * @returns {Object} Returns the composed aggregate object.
 * @example
 *
 * _.groupBy([6.1, 4.2, 6.3], Math.floor);
 * // => { '4': [4.2], '6': [6.1, 6.3] }
 *
 * // The `_.property` iteratee shorthand.
 * _.groupBy(['one', 'two', 'three'], 'length');
 * // => { '3': ['one', 'two'], '5': ['three'] }
 */
var groupBy = createAggregator(function(result, value, key) {
  if (hasOwnProperty.call(result, key)) {
    result[key].push(value);
  } else {
    baseAssignValue(result, key, [value]);
  }
});

module.exports = groupBy;


/***/ }),
/* 287 */
/***/ (function(module, exports, __webpack_require__) {

var arrayAggregator = __webpack_require__(288),
    baseAggregator = __webpack_require__(289),
    baseIteratee = __webpack_require__(29),
    isArray = __webpack_require__(5);

/**
 * Creates a function like `_.groupBy`.
 *
 * @private
 * @param {Function} setter The function to set accumulator values.
 * @param {Function} [initializer] The accumulator object initializer.
 * @returns {Function} Returns the new aggregator function.
 */
function createAggregator(setter, initializer) {
  return function(collection, iteratee) {
    var func = isArray(collection) ? arrayAggregator : baseAggregator,
        accumulator = initializer ? initializer() : {};

    return func(collection, setter, baseIteratee(iteratee, 2), accumulator);
  };
}

module.exports = createAggregator;


/***/ }),
/* 288 */
/***/ (function(module, exports) {

/**
 * A specialized version of `baseAggregator` for arrays.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} setter The function to set `accumulator` values.
 * @param {Function} iteratee The iteratee to transform keys.
 * @param {Object} accumulator The initial aggregated object.
 * @returns {Function} Returns `accumulator`.
 */
function arrayAggregator(array, setter, iteratee, accumulator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    var value = array[index];
    setter(accumulator, value, iteratee(value), array);
  }
  return accumulator;
}

module.exports = arrayAggregator;


/***/ }),
/* 289 */
/***/ (function(module, exports, __webpack_require__) {

var baseEach = __webpack_require__(290);

/**
 * Aggregates elements of `collection` on `accumulator` with keys transformed
 * by `iteratee` and values set by `setter`.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} setter The function to set `accumulator` values.
 * @param {Function} iteratee The iteratee to transform keys.
 * @param {Object} accumulator The initial aggregated object.
 * @returns {Function} Returns `accumulator`.
 */
function baseAggregator(collection, setter, iteratee, accumulator) {
  baseEach(collection, function(value, key, collection) {
    setter(accumulator, value, iteratee(value), collection);
  });
  return accumulator;
}

module.exports = baseAggregator;


/***/ }),
/* 290 */
/***/ (function(module, exports, __webpack_require__) {

var baseForOwn = __webpack_require__(291),
    createBaseEach = __webpack_require__(292);

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
/* 291 */
/***/ (function(module, exports, __webpack_require__) {

var baseFor = __webpack_require__(108),
    keys = __webpack_require__(27);

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
/* 292 */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(32);

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
/* 293 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventListener; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventListener = function () {
	function EventListener(element, manager) {
		_classCallCheck(this, EventListener);

		this.element = element;
		this.manager = manager;
		this.handlers = {};
	}

	_createClass(EventListener, [{
		key: "on",
		value: function on(name, f) {
			var _this = this;

			var settings = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

			var manager = this.manager;
			var handler = manager.bind(f);
			var handlerSet = this.handlers[name] || (this.handlers[name] = []);
			handlerSet.push(handler);
			this.element.addEventListener(name, handler, settings);
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

/***/ }),
/* 294 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Fetch; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utility__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Fetch = function () {
	function Fetch(select) {
		_classCallCheck(this, Fetch);

		this.select = select;
		this.busy = null;
		this.result = null;
	}

	_createClass(Fetch, [{
		key: 'run',
		value: function run(item) {
			var _this = this,
			    _arguments = arguments;

			var select = this.select;

			this.result = null;
			var alive = true;
			this.busy = new Promise(function (resolveBusy, rejectBusy) {
				var resolve = function resolve(data) {
					if (alive) {
						_this.result = data;
						resolveBusy(data);
					}
				};

				if (Object(__WEBPACK_IMPORTED_MODULE_0__utility__["m" /* isFunction */])(select)) {
					var deferred = {
						resolve: resolve,
						reject: rejectBusy
					};

					var args = Array.from(_arguments).slice(1) || [];
					var result = select.apply(undefined, [item, deferred].concat(_toConsumableArray(args)));
					if (!Object(__WEBPACK_IMPORTED_MODULE_0__utility__["q" /* isUndefined */])(result)) {
						if (Object(__WEBPACK_IMPORTED_MODULE_0__utility__["m" /* isFunction */])(result.then)) {
							// when options.fetch returns promise
							result.then(resolve);
							if (Object(__WEBPACK_IMPORTED_MODULE_0__utility__["m" /* isFunction */])(result.catch)) {
								result.catch(rejectBusy);
							}
						} else {
							// when options.fetch return result
							resolve(result);
						}
					}
					// when user should invoke d.resolve or d.reject
				} else {
					// when options.fetch is result itself
					resolve(select);
				}
			});

			return function () {
				_this.busy = null;
				alive = false;
			};
		}
	}]);

	return Fetch;
}();

/***/ }),
/* 295 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModelBinder; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utility__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__log__ = __webpack_require__(53);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var ModelBinder = function () {
	function ModelBinder(source) {
		_classCallCheck(this, ModelBinder);

		this.source = source;
		this.off = __WEBPACK_IMPORTED_MODULE_0__utility__["u" /* noop */];
	}

	_createClass(ModelBinder, [{
		key: 'bind',
		value: function bind(model, names) {
			var _this = this;

			var run = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

			this.off();
			var source = this.source;

			if (model) {
				var commits = [];
				var _iteratorNormalCompletion = true;
				var _didIteratorError = false;
				var _iteratorError = undefined;

				try {
					var _loop = function _loop() {
						var name = _step.value;

						var doBind = function doBind(e) {
							__WEBPACK_IMPORTED_MODULE_1__log__["a" /* Log */].info('model.bind', 'to ctrl "' + name + '[' + Object.keys(e.changes).join(', ') + ']"');

							var _iteratorNormalCompletion2 = true;
							var _didIteratorError2 = false;
							var _iteratorError2 = undefined;

							try {
								for (var _iterator2 = Object.keys(e.changes)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
									var key = _step2.value;

									var sourceKey = Object(__WEBPACK_IMPORTED_MODULE_0__utility__["z" /* toCamelCase */])(name, key);
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
							__WEBPACK_IMPORTED_MODULE_1__log__["a" /* Log */].info('model.bind', 'to model "' + name + '"');

							var oldState = state();
							var newState = {};
							var _iteratorNormalCompletion3 = true;
							var _didIteratorError3 = false;
							var _iteratorError3 = undefined;

							try {
								for (var _iterator3 = Object.keys(oldState)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
									var key = _step3.value;

									var sourceKey = Object(__WEBPACK_IMPORTED_MODULE_0__utility__["z" /* toCamelCase */])(name, key);
									if (source.hasOwnProperty(sourceKey)) {
										var _value = source[sourceKey];
										if (!Object(__WEBPACK_IMPORTED_MODULE_0__utility__["q" /* isUndefined */])(_value)) {
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

				return function () {
					return commits.forEach(function (commit) {
						return commit();
					});
				};
			}

			this.off = __WEBPACK_IMPORTED_MODULE_0__utility__["u" /* noop */];
			return __WEBPACK_IMPORTED_MODULE_0__utility__["u" /* noop */];
		}
	}]);

	return ModelBinder;
}();

/***/ }),
/* 296 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Model; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__event__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__error__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__guard__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__log__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utility__ = __webpack_require__(0);
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
				var changeSet = new Set();
				var watchArg = function watchArg() {
					var changes = Array.from(changeSet.values()).reduce(function (memo, key) {
						var value = model[key];
						memo[key] = { newValue: value, oldValue: value };
						return memo;
					}, {});

					return {
						state: model,
						hasChanges: changes.hasOwnProperty.bind(changes),
						changes: changes,
						tag: {},
						source: 'watch'
					};
				};

				var event = new __WEBPACK_IMPORTED_MODULE_0__event__["a" /* Event */](watchArg);
				var equals = Model.equals;
				_this[name + 'Changed'] = event;
				_this[name] = function (state, tag) {
					var length = arguments.length;
					if (length) {
						if (!Object(__WEBPACK_IMPORTED_MODULE_4__utility__["o" /* isObject */])(state)) {
							throw new __WEBPACK_IMPORTED_MODULE_1__error__["a" /* AppError */]('model.' + name, '"' + state + '" is not a valid type, should be an object');
						}

						var hasChanges = false;
						var changes = {};
						var keys = Object.keys(state);
						for (var i = 0, keyLength = keys.length; i < keyLength; i++) {
							var key = keys[i];
							if (!model.hasOwnProperty(key)) {
								throw new __WEBPACK_IMPORTED_MODULE_1__error__["a" /* AppError */]('model.' + name, '"' + key + '" is not a valid key, only [' + Object.keys(model).join(', ') + '] keys are supported');
							}

							var newValue = state[key];
							var oldValue = model[key];
							if (!equals(newValue, oldValue)) {
								__WEBPACK_IMPORTED_MODULE_3__log__["a" /* Log */].info('model', 'value changed - "' + name + '.' + key + '"');
								__WEBPACK_IMPORTED_MODULE_2__guard__["a" /* Guard */].notUndefined(newValue, 'model.' + name + '.' + key);

								model[key] = newValue;
								hasChanges = true;
								changes[key] = {
									newValue: newValue,
									oldValue: oldValue
								};

								changeSet.add(key);
							} else {
								__WEBPACK_IMPORTED_MODULE_3__log__["a" /* Log */].warn('model', 'value was not changed - "' + name + '.' + key + '"');
							}
						}

						if (hasChanges) {
							event.emit({
								state: model,
								hasChanges: changes.hasOwnProperty.bind(changes),
								changes: changes,
								tag: length > 1 ? tag : {},
								source: 'emit'
							});
						}
						return this;
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
		key: 'equals',
		value: function equals(x, y) {
			// TODO: improve equality algo
			if (x === y) {
				return true;
			}

			if (Object(__WEBPACK_IMPORTED_MODULE_4__utility__["h" /* isArray */])(x)) {
				if (x.length === 0 && y.length === 0) {
					return true;
				}
			}

			if (x instanceof Map) {
				if (x.size === 0 && y.size === 0) {
					return true;
				}
			}

			if (x instanceof Set) {
				if (x.size === 0 && y.size === 0) {
					return true;
				}
			}

			return false;
		}
	}, {
		key: 'dispose',
		value: function dispose(model) {
			var lifecycle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
			var _iteratorNormalCompletion2 = true;
			var _didIteratorError2 = false;
			var _iteratorError2 = undefined;

			try {
				for (var _iterator2 = Object.keys(model)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
					var _name = _step2.value;

					var entry = model[_name];
					if (entry instanceof __WEBPACK_IMPORTED_MODULE_0__event__["a" /* Event */]) {
						entry.dispose(lifecycle);
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
	}, {
		key: 'register',
		value: function register(name, model) {
			if (models.hasOwnProperty(name)) {
				throw new __WEBPACK_IMPORTED_MODULE_1__error__["a" /* AppError */]('model', '"' + name + '" is already registered');
			}

			if (!Object(__WEBPACK_IMPORTED_MODULE_4__utility__["m" /* isFunction */])(model)) {
				throw new __WEBPACK_IMPORTED_MODULE_1__error__["a" /* AppError */]('model.' + name, '"' + model + '" is not a valid type, should be an constructor function');
			}

			if (close) {
				throw new __WEBPACK_IMPORTED_MODULE_1__error__["a" /* AppError */]('model.' + name, 'can\'t register, registration was closed');
			}

			models[name] = model;
			return Model;
		}
	}]);

	return Model;
}();

/***/ }),
/* 297 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventManager; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventManager = function () {
	function EventManager(context) {
		var apply = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (f) {
			return f();
		};

		_classCallCheck(this, EventManager);

		this.context = context;
		this.apply = apply;
	}

	_createClass(EventManager, [{
		key: "bind",
		value: function bind(f) {
			var handler = f.bind(this.context);
			var apply = this.apply;
			return function () {
				for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
					args[_key] = arguments[_key];
				}

				return apply(function () {
					return handler.apply(undefined, args);
				});
			};
		}
	}]);

	return EventManager;
}();

/***/ }),
/* 298 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Range; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Range = function Range(start, end) {
	_classCallCheck(this, Range);

	this.start = start;
	this.end = end;
};

/***/ }),
/* 299 */,
/* 300 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompositeCommandManager; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CompositeCommandManager = function () {
	function CompositeCommandManager(manager) {
		_classCallCheck(this, CompositeCommandManager);

		this.manager = manager;
	}

	_createClass(CompositeCommandManager, [{
		key: "filter",
		value: function filter(commands) {
			return this.manager.filter(commands);
		}
	}, {
		key: "invoke",
		value: function invoke(commands) {
			return this.manager.invoke(commands);
		}
	}]);

	return CompositeCommandManager;
}();

/***/ }),
/* 301 */,
/* 302 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = nodeBuilder;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__infrastructure__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node__ = __webpack_require__(73);



function nodeBuilder(columnMap, groupBy, valueFactory) {
	var level = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

	if (groupBy.length === 0) {
		return function () {
			return [];
		};
	}

	var groupKey = groupBy[0];
	if (!columnMap.hasOwnProperty(groupKey)) {
		throw new __WEBPACK_IMPORTED_MODULE_0__infrastructure__["a" /* AppError */]('node.build', 'can\'t find column "' + groupKey + '"');
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
				var node = new __WEBPACK_IMPORTED_MODULE_1__node__["a" /* Node */](key, level);
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
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewModel; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ViewModel = function ViewModel() {
	_classCallCheck(this, ViewModel);

	this.rows = [];
	this.columns = [];
	this.nodes = [];
	this.pivot = { heads: [], rows: [] };
};

/***/ }),
/* 307 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = factory;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resource__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resource_enumerable__ = __webpack_require__(125);



function factory(resource, key) {
	var data = resource.data;
	var scope = resource.scope;
	if (resource instanceof __WEBPACK_IMPORTED_MODULE_1__resource_enumerable__["a" /* EnumerableResource */]) {
		var keyIndex = 1;
		var count = resource.count;
		var originKey = key;
		while (data.hasOwnProperty(key)) {
			key = originKey + keyIndex++;
		}

		if (count < keyIndex) {
			count = keyIndex;
		}

		return function (content, env) {
			// TODO: do we need full clone here?
			data[key] = content;
			if (Object.keys(env).length) {
				scope[key] = env;
			}
			return new __WEBPACK_IMPORTED_MODULE_1__resource_enumerable__["a" /* EnumerableResource */](data, scope, count);
		};
	}

	return function (content, env) {
		// TODO: do we need full clone here?
		data[key] = content;
		if (Object.keys(env).length) {
			scope[key] = env;
		}
		return new __WEBPACK_IMPORTED_MODULE_0__resource__["a" /* Resource */](data, scope);
	};
}

/***/ }),
/* 308 */,
/* 309 */,
/* 310 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectionModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resource__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utility__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__command__ = __webpack_require__(4);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





var SelectionModel = function SelectionModel() {
	_classCallCheck(this, SelectionModel);

	this.resource = new __WEBPACK_IMPORTED_MODULE_0__resource__["b" /* Resource */]();
	this.unit = 'cell'; //row|cell|column|mix
	this.mode = 'single'; //single|multiple|range
	this.items = [];
	this.area = 'body'; //body, custom
	this.toggle = new __WEBPACK_IMPORTED_MODULE_2__command__["a" /* Command */]({ source: 'selection.model' });
	this.key = {
		row: __WEBPACK_IMPORTED_MODULE_1__utility__["g" /* identity */],
		column: __WEBPACK_IMPORTED_MODULE_1__utility__["g" /* identity */]
	};
	this.shortcut = {
		toggleRow: 'shift+space',
		togglePreviousRow: 'shift+up',
		toggleNextRow: 'shift+down',
		toggleColumn: 'ctrl+space',
		toggleNextColumn: 'shift+right',
		togglePreviousColumn: 'shift+left',
		selectAll: 'ctrl+a'
	};
};

/***/ }),
/* 311 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectionView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__infrastructure__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__command__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__state__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__selection_range__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__selection_service__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__definition__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utility__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__selection_command_manager__ = __webpack_require__(315);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var SelectionView = function (_View) {
	_inherits(SelectionView, _View);

	function SelectionView(model, table, commandManager) {
		_classCallCheck(this, SelectionView);

		var _this = _possibleConstructorReturn(this, (SelectionView.__proto__ || Object.getPrototypeOf(SelectionView)).call(this, model));

		_this.table = table;

		_this.selectionService = new __WEBPACK_IMPORTED_MODULE_5__selection_service__["a" /* SelectionService */](model);
		_this.selectionState = Object(__WEBPACK_IMPORTED_MODULE_3__state__["a" /* selectionStateFactory */])(model, _this.selectionService);
		_this.selectionRange = new __WEBPACK_IMPORTED_MODULE_4__selection_range__["a" /* SelectionRange */](model);

		var selectionCommandManager = new __WEBPACK_IMPORTED_MODULE_8__selection_command_manager__["a" /* SelectionCommandManager */](model, commandManager);
		var shortcut = model.action().shortcut;
		var commands = _this.commands;

		_this.using(shortcut.register(selectionCommandManager, commands));

		_this.toggleRow = commands.get('toggleRow');
		_this.toggleColumn = commands.get('toggleColumn');
		_this.toggleCell = commands.get('toggleCell');
		_this.reset = commands.get('reset');

		_this.using(model.navigationChanged.watch(function (e) {
			if (e.tag.source === 'selection.view') {
				return;
			}

			if (e.hasChanges('cell')) {
				if (_this.toggleCell.canExecute(e.state.cell)) {
					_this.toggleCell.execute(e.state.cell);
				}
			}
		}));

		var modeClass = __WEBPACK_IMPORTED_MODULE_6__definition__["a" /* GRID_PREFIX */] + '-select-' + model.selection().mode;
		var unitClass = __WEBPACK_IMPORTED_MODULE_6__definition__["a" /* GRID_PREFIX */] + '-select-' + model.selection().unit;
		var view = table.view;
		view.addClass(modeClass);
		view.addClass(unitClass);

		_this.using(model.selectionChanged.watch(function (e) {
			if (e.hasChanges('mode')) {
				var newModeClass = __WEBPACK_IMPORTED_MODULE_6__definition__["a" /* GRID_PREFIX */] + '-select-' + e.state.mode;
				var oldModeClass = __WEBPACK_IMPORTED_MODULE_6__definition__["a" /* GRID_PREFIX */] + '-select-' + e.changes.mode.oldValue;

				view.removeClass(oldModeClass);
				view.addClass(newModeClass);
			}

			if (e.hasChanges('unit')) {
				var newUnitClass = __WEBPACK_IMPORTED_MODULE_6__definition__["a" /* GRID_PREFIX */] + '-select-' + e.state.unit;
				var oldUnitClass = __WEBPACK_IMPORTED_MODULE_6__definition__["a" /* GRID_PREFIX */] + '-select-' + e.changes.unit.oldValue;

				view.removeClass(oldUnitClass);
				view.addClass(newUnitClass);
			}

			if (e.hasChanges('unit') || e.hasChanges('mode')) {
				if (!e.hasChanges('items')) {
					_this.selectionState.clear();
					model.selection({ items: [] }, {
						source: 'selection.view'
					});

					_this.selectionState = Object(__WEBPACK_IMPORTED_MODULE_3__state__["a" /* selectionStateFactory */])(model, _this.selectionService);
				}
			}

			if (e.hasChanges('items') && e.tag.source !== 'selection.view') {
				// Don't use commit it came outside already

				var oldEntries = _this.selectionService.lookup(e.changes.items.oldValue);
				_this.select(oldEntries, false);

				var newEntries = _this.selectionService.lookup(e.state.items);
				_this.select(newEntries, true);
			}
		}));
		return _this;
	}

	_createClass(SelectionView, [{
		key: 'selectRange',
		value: function selectRange(startCell, endCell, source) {
			var buildRange = this.selectionRange.build();
			var range = buildRange(startCell, endCell);
			var commit = this.select(range, true, source);
			commit();
		}
	}, {
		key: 'toggle',
		value: function toggle(items) {
			var _this2 = this;

			var source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'custom';

			var toggle = this.model.selection().toggle;
			var e = {
				items: items,
				source: source,
				kind: 'toggle'
			};

			if (toggle.canExecute(e)) {
				toggle.execute(e);

				var selectionState = this.selectionState;
				if (!arguments.length || Object(__WEBPACK_IMPORTED_MODULE_7__utility__["q" /* isUndefined */])(items)) {
					items = this.model.view().rows;
				}

				selectionState.toggle(items);

				return function () {
					var items = _this2.selectionService.map(selectionState.entries());
					_this2.model.selection({ items: items }, {
						source: 'selection.view'
					});
				};
			} else {
				return __WEBPACK_IMPORTED_MODULE_7__utility__["u" /* noop */];
			}
		}
	}, {
		key: 'select',
		value: function select(items, state) {
			var _this3 = this;

			var source = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'custom';

			var toggle = this.model.selection().toggle;
			var e = {
				items: items,
				state: state,
				source: source,
				kind: 'select'
			};

			if (toggle.canExecute(e)) {
				toggle.execute(e);
				var selectionState = this.selectionState;
				selectionState.select(items, state);

				return function () {
					var items = _this3.selectionService.map(selectionState.entries());
					_this3.model.selection({ items: items }, {
						source: 'selection.view'
					});
				};
			} else {
				return __WEBPACK_IMPORTED_MODULE_7__utility__["u" /* noop */];
			}
		}
	}, {
		key: 'state',
		value: function state(item) {
			if (!arguments.length) {
				return !!this.selectionState.stateAll(this.rows);
			}

			return this.selectionState.state(item) === true;
		}
	}, {
		key: 'isIndeterminate',
		value: function isIndeterminate(item) {
			if (!arguments.length) {
				return this.selectionState.stateAll(this.rows) === null;
			}

			return this.selectionState.state(item) === null;
		}
	}, {
		key: 'navigateTo',
		value: function navigateTo(rowIndex, columnIndex) {
			var cell = this.table.body.cell(rowIndex, columnIndex);
			this.model.navigation({ cell: cell.model() }, { source: 'selection.view' });
		}
	}, {
		key: 'commands',
		get: function get() {
			var _this4 = this;

			var model = this.model;
			var shortcut = model.selection().shortcut;

			var toggleActiveRow = new __WEBPACK_IMPORTED_MODULE_2__command__["a" /* Command */]({
				source: 'selection.view',
				canExecute: function canExecute() {
					return model.selection().unit === 'row' && _this4.rows.length > 0;
				},
				execute: function execute() {
					var navState = model.navigation();
					var rowIndex = navState.rowIndex;

					var row = _this4.rows[rowIndex >= 0 ? rowIndex : rowIndex + 1];
					var commit = _this4.toggle(row);
					commit();
				},
				shortcut: shortcut.toggleRow
			});

			var commands = {
				toggleCell: new __WEBPACK_IMPORTED_MODULE_2__command__["a" /* Command */]({
					source: 'selection.view',
					canExecute: function canExecute(item) {
						var selectionState = model.selection();
						return item && selectionState.mode !== 'range' && (selectionState.unit === 'cell' || selectionState.unit === 'mix');
					},
					execute: function execute(item, source) {
						var selectionState = model.selection();
						switch (selectionState.unit) {
							case 'cell':
								{
									var commit = _this4.toggle(item, source);
									commit();
									break;
								}
							case 'mix':
								{
									if (item.column.type === 'row-indicator') {
										var _commit = _this4.toggle({ item: item.row, unit: 'row' }, source);
										_commit();
										break;
									} else {
										var _commit2 = _this4.toggle({ item: item, unit: 'cell' }, source);
										_commit2();
										break;
									}
								}
						}
					}
				}),
				toggleRow: new __WEBPACK_IMPORTED_MODULE_2__command__["a" /* Command */]({
					source: 'selection.view',
					execute: function execute(item, source) {
						var commit = _this4.toggle(item, source);
						commit();
					}
				}),
				toggleColumn: new __WEBPACK_IMPORTED_MODULE_2__command__["a" /* Command */]({
					source: 'selection.view',
					execute: function execute(item, source) {
						var commit = _this4.toggle(item, source);
						commit();
					}
				}),
				commitRow: new __WEBPACK_IMPORTED_MODULE_2__command__["a" /* Command */]({
					source: 'selection.view',
					canExecute: function canExecute() {
						var column = model.navigation().column;
						return column && column.type === 'select';
					},
					execute: function execute() {
						if (toggleActiveRow.canExecute()) {
							toggleActiveRow.execute();
						}
					},
					shortcut: model.edit().commitShortcuts['select'] || ''
				}),
				toggleActiveRow: toggleActiveRow,
				togglePrevRow: new __WEBPACK_IMPORTED_MODULE_2__command__["a" /* Command */]({
					source: 'selection.view',
					canExecute: function canExecute() {
						return model.selection().unit === 'row' && model.navigation().rowIndex > 0;
					},
					execute: function execute() {
						var navState = model.navigation();
						var rowIndex = navState.rowIndex;
						var row = _this4.rows[rowIndex];
						var commit = _this4.toggle(row);
						commit();

						_this4.navigateTo(rowIndex - 1, navState.columnIndex);
					},
					shortcut: shortcut.togglePreviousRow
				}),
				toggleNextRow: new __WEBPACK_IMPORTED_MODULE_2__command__["a" /* Command */]({
					source: 'selection.view',
					canExecute: function canExecute() {
						return model.selection().unit === 'row' && model.navigation().rowIndex < _this4.rows.length - 1;
					},
					execute: function execute() {
						var navState = model.navigation();
						var rowIndex = navState.rowIndex;
						var row = _this4.rows[rowIndex];
						var commit = _this4.toggle(row);
						commit();

						_this4.navigateTo(rowIndex + 1, navState.columnIndex);
					},
					shortcut: shortcut.toggleNextRow
				}),
				toggleActiveColumn: new __WEBPACK_IMPORTED_MODULE_2__command__["a" /* Command */]({
					source: 'selection.view',
					canExecute: function canExecute() {
						return model.selection().unit === 'column' && model.navigation().columnIndex >= 0;
					},
					execute: function execute() {
						var columnIndex = model.navigation().columnIndex;
						var column = _this4.columns[columnIndex];
						var commit = _this4.toggle(column);
						commit();
					},
					shortcut: shortcut.toggleColumn
				}),
				toggleNextColumn: new __WEBPACK_IMPORTED_MODULE_2__command__["a" /* Command */]({
					source: 'selection.view',
					canExecute: function canExecute() {
						return model.selection().unit === 'column' && model.navigation().columnIndex < _this4.columns.length - 1;
					},
					execute: function execute() {
						var navState = model.navigation();
						var columnIndex = navState.columnIndex;
						var column = _this4.columns[columnIndex];
						var commit = _this4.toggle(column);
						commit();

						_this4.navigateTo(navState.rowIndex, columnIndex + 1);
					},
					shortcut: shortcut.toggleNextColumn
				}),
				togglePrevColumn: new __WEBPACK_IMPORTED_MODULE_2__command__["a" /* Command */]({
					source: 'selection.view',
					canExecute: function canExecute() {
						return model.selection().unit === 'column' && model.navigation().columnIndex > 0;
					},
					execute: function execute() {
						var navState = model.navigation();
						var columnIndex = navState.columnIndex;
						var column = _this4.columns[columnIndex];
						var commit = _this4.toggle(column);
						commit();

						_this4.navigateTo(navState.rowIndex, columnIndex - 1);
					},
					shortcut: shortcut.togglePreviousColumn
				}),
				selectAll: new __WEBPACK_IMPORTED_MODULE_2__command__["a" /* Command */]({
					source: 'selection.view',
					canExecute: function canExecute() {
						return model.selection().mode === 'multiple';
					},
					execute: function execute() {
						var entries = [];
						switch (model.selection().unit) {
							case 'row':
								{
									entries = model.data().rows;
									break;
								}
							case 'column':
								{
									entries = model.data().columns;
									break;
								}
							case 'cell':
							case 'mix':
								{
									var buildRange = _this4.selectionRange.build();
									var body = _this4.table.body;
									var startCell = body.cell(0, 0);
									var endCell = body.cell(body.rowCount() - 1, body.columnCount() - 1);
									entries = buildRange(startCell, endCell);
									break;
								}
							default:
								throw new __WEBPACK_IMPORTED_MODULE_1__infrastructure__["a" /* AppError */]('selection.view', 'Invalid unit ' + model.selection().unit);
						}

						var commit = _this4.select(entries, true);
						commit();
					},
					shortcut: shortcut.selectAll
				})
			};

			return new Map(Object.entries(commands));
		}
	}, {
		key: 'selection',
		get: function get() {
			return this.model.selection();
		}
	}, {
		key: 'mode',
		get: function get() {
			return this.selection.mode;
		}
	}, {
		key: 'items',
		get: function get() {
			return this.selection.items;
		}
	}, {
		key: 'rows',
		get: function get() {
			return this.table.data.rows();
		}
	}, {
		key: 'columns',
		get: function get() {
			return this.table.data.columns();
		}
	}]);

	return SelectionView;
}(__WEBPACK_IMPORTED_MODULE_0__view__["b" /* View */]);

/***/ }),
/* 312 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__multiple_selection_state__ = __webpack_require__(75);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selection_state_factory__ = __webpack_require__(313);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__selection_state_factory__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__selection_state__ = __webpack_require__(76);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__single_selection_state__ = __webpack_require__(128);
/* unused harmony namespace reexport */





/***/ }),
/* 313 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = selectionStateFactory;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__infrastructure__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__single_selection_state__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__multiple_selection_state__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__range_selection_state__ = __webpack_require__(314);





function selectionStateFactory(model, service) {
	var mode = model.selection().mode;
	switch (mode) {
		case 'single':
			return new __WEBPACK_IMPORTED_MODULE_1__single_selection_state__["a" /* SingleSelectionState */](model, service);
		case 'multiple':
			return new __WEBPACK_IMPORTED_MODULE_2__multiple_selection_state__["a" /* MultipleSelectionState */](model, service);
		case 'range':
			return new __WEBPACK_IMPORTED_MODULE_3__range_selection_state__["a" /* RangeSelectionState */](model, service);
		default:
			throw new __WEBPACK_IMPORTED_MODULE_0__infrastructure__["a" /* AppError */]('selection.state.factory', 'Invalid selection mode "' + mode + '"');
	}
}

/***/ }),
/* 314 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RangeSelectionState; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__multiple_selection_state__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utility__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var RangeSelectionState = function (_MultipleSelectionSta) {
	_inherits(RangeSelectionState, _MultipleSelectionSta);

	function RangeSelectionState(model, service) {
		_classCallCheck(this, RangeSelectionState);

		return _possibleConstructorReturn(this, (RangeSelectionState.__proto__ || Object.getPrototypeOf(RangeSelectionState)).call(this, model, service));
	}

	_createClass(RangeSelectionState, [{
		key: 'select',
		value: function select(item) {
			var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

			if (Object(__WEBPACK_IMPORTED_MODULE_1__utility__["h" /* isArray */])(item)) {
				this.clear();
			}

			_get(RangeSelectionState.prototype.__proto__ || Object.getPrototypeOf(RangeSelectionState.prototype), 'select', this).call(this, item, state);
		}
	}]);

	return RangeSelectionState;
}(__WEBPACK_IMPORTED_MODULE_0__multiple_selection_state__["a" /* MultipleSelectionState */]);

/***/ }),
/* 315 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectionCommandManager; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__command__ = __webpack_require__(4);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var SelectionCommandManager = function (_CompositeCommandMana) {
	_inherits(SelectionCommandManager, _CompositeCommandMana);

	function SelectionCommandManager(model, manager) {
		_classCallCheck(this, SelectionCommandManager);

		var _this = _possibleConstructorReturn(this, (SelectionCommandManager.__proto__ || Object.getPrototypeOf(SelectionCommandManager)).call(this, manager));

		_this.model = model;
		return _this;
	}

	_createClass(SelectionCommandManager, [{
		key: 'filter',
		value: function filter(commands) {
			if (this.model.edit().state === 'edit') {
				var cell = this.model.navigation().cell;
				if (cell && cell.column.type !== 'select') {
					return [];
				}
			}

			return _get(SelectionCommandManager.prototype.__proto__ || Object.getPrototypeOf(SelectionCommandManager.prototype), 'filter', this).call(this, commands);
		}
	}]);

	return SelectionCommandManager;
}(__WEBPACK_IMPORTED_MODULE_0__command__["c" /* CompositeCommandManager */]);

/***/ }),
/* 316 */,
/* 317 */,
/* 318 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CharReader; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CharReader = function () {
	function CharReader(text) {
		_classCallCheck(this, CharReader);

		this.text = text || '';
		this.peeks = [];
		this.position = 0;
		this.length = this.text.length;
	}

	_createClass(CharReader, [{
		key: 'read',
		value: function read() {
			var peeks = this.peeks;
			if (peeks.length > 0) {
				return peeks.pop();
			}

			var nextPosition = this.position + 1;
			if (nextPosition < this.length) {
				var c = this.text[this.position];
				this.position = nextPosition;
				return c;
			}

			return CharReader.eof;
		}
	}, {
		key: 'peek',
		value: function peek() {
			return this.peekCore(0);
		}
	}, {
		key: 'peekPeek',
		value: function peekPeek() {
			return this.peekCore(1);
		}
	}, {
		key: 'peekCore',
		value: function peekCore(offset) {
			var peeks = this.peeks;
			if (offset < peeks.length) {
				return peeks[offset];
			}

			var length = this.length;
			for (var i = peeks.length; i <= offset; i++) {
				var nextPosition = this.position + 1;
				if (nextPosition >= length) {
					return CharReader.eof;
				}

				var c = this.text[this.position];
				this.position = nextPosition;
				peeks.push(c);
			}

			return peeks[offset];
		}
	}, {
		key: 'seek',
		value: function seek(offset) {
			var peeks = this.peeks;
			var peekCount = peeks.length;
			peeks.splice(0, Math.Min(offset, peekCount));
			offset -= peekCount;
			while (--offset >= 0) {
				this.read();
			}

			return this.peek();
		}
	}], [{
		key: 'eof',
		get: function get() {
			return undefined;
		}
	}]);

	return CharReader;
}();

/***/ }),
/* 319 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Keyboard; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var controlSet = new Set(['shift', 'ctrl', 'alt', 'pause', 'break', 'capslock', 'escape', 'insert', 'left', 'right', 'end', 'home', 'pageup', 'pagedown', 'up', 'down', 'f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8', 'f9', 'f10', 'f11', 'f12', 'numlock', 'scrolllock']);

var nonPrintableSet = new Set(['enter']);

var codeMap = new Map().set(8, 'backspace').set(9, 'tab').set(13, 'enter').set(16, 'shift').set(17, 'ctrl').set(20, 'capslock').set(27, 'escape').set(32, 'space').set(33, 'pageup').set(34, 'pagedown').set(35, 'end').set(36, 'home').set(37, 'left').set(38, 'up').set(39, 'right').set(40, 'down').set(45, 'insert').set(46, 'delete').set(112, 'f1').set(113, 'f2').set(114, 'f3').set(115, 'f4').set(116, 'f5').set(117, 'f6').set(118, 'f7').set(119, 'f8').set(120, 'f9').set(121, 'f10').set(122, 'f11').set(123, 'f12').set(144, 'numlock').set(145, 'scrolllock');

var codeSet = new Set(codeMap.values());

var printableMap = new Map().set('space', ' ');

var Keyboard = function () {
	function Keyboard() {
		_classCallCheck(this, Keyboard);
	}

	_createClass(Keyboard, null, [{
		key: 'isPrintable',
		value: function isPrintable(code) {
			return !nonPrintableSet.has(code) && !Keyboard.isControl(code);
		}
	}, {
		key: 'isControl',
		value: function isControl(code) {
			return controlSet.has(code);
		}
	}, {
		key: 'stringify',
		value: function stringify(code, key) {
			if (codeSet.has(code)) {
				return printableMap.get(code) || '';
			}

			return key;
		}
	}, {
		key: 'translate',
		value: function translate(code) {
			return codeMap.get(code) || String.fromCharCode(code);
		}
	}]);

	return Keyboard;
}();

/***/ }),
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */
/***/ (function(module, exports) {

module.exports = "<q-grid:cell-editor class=\"q-grid-text q-grid-editor q-grid-position\"\n                    on:close=\"$view.edit.cell.exit.execute($cell)\"\n                    q-grid:position=\"td\">\n\t<md-input-container class=\"q-grid-input-container\">\n\t\t<input type=\"text\"\n\t\t       q-grid:focus\n\t\t       ng-model=\"$view.edit.cell.value\"\n\t\t       md-maxlength=\"{{::$cell.column.maxLength}}\" />\n\t</md-input-container>\n\t<q-grid:validator class=\"q-grid-validator\"\n\t                  key=\"{{::$cell.column.key}}\"\n\t                  type=\"{{::$cell.column.type}}\"\n\t                  value=\"$view.edit.cell.value\">\n\t</q-grid:validator>\n</q-grid:cell-editor>"

/***/ }),
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */
/***/ (function(module, exports) {

module.exports = "<span q-grid:cell-value></span>"

/***/ }),
/* 368 */
/***/ (function(module, exports) {

module.exports = "<q-grid:cell-editor class=\"q-grid-editor q-grid-file q-grid-position\"\n                    on:close=\"$view.edit.cell.cancel.execute($cell)\"\n                    q-grid:position=\"td\">\n\t<div layout=\"column\"\n\t     flex>\n\t\t<div class=\"q-grid-file-upload-area\"\n\t\t     ng-class=\"{'q-grid-file-has-preview': $cell.column.hasPreview($view.edit.cell.label)}\">\n\t\t\t<div class=\"q-grid-file-upload-message\"\n\t\t\t     layout=\"column\"\n\t\t\t     ng-switch=\"!!$view.edit.cell.value\">\n\t\t\t\t<span class=\"q-grid-file-upload-filename\"\n\t\t\t\t      ng-switch-when=\"true\">{{$view.edit.cell.label}}</span>\n\t\t\t\t<div layout=\"row\"\n\t\t\t\t     layout-align=\"center center\">\n\t\t\t\t\t<md-icon class=\"q-grid-icon\">file_upload</md-icon>\n\t\t\t\t\t<span ng-switch-when=\"false\">Drag and drop a file here or click</span>\n\t\t\t\t\t<span ng-switch-when=\"true\">Drag and drop or click to replace </span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<input q-grid:file-upload=\"$view.edit.cell.value\"\n\t\t\t       q-grid:file-upload-label=\"$view.edit.cell.label\"\n\t\t\t       q-grid:can-upload=\"cell.column.canUpload($event)\"\n\t\t\t       type=\"file\" />\n\t\t\t<div class=\"q-grid-file-preview\"\n\t\t\t     ng-if=\"$cell.column.hasPreview($view.edit.cell.label)\">\n\t\t\t\t<img ng-src=\"{{$view.edit.cell.value}}\" />\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"flex-none q-grid-actions\">\n\t\t\t<md-button class=\"md-primary md-confirm-button\"\n\t\t\t           ng-click=\"$view.edit.cell.commit.execute($cell, $event)\">Save\n\t\t\t</md-button>\n\t\t\t<md-button ng-click=\"$view.edit.cell.clear.execute($cell)\">Clear</md-button>\n\t\t\t<md-button class=\"md-cancel-button\"\n\t\t\t           ng-click=\"$view.edit.cell.cancel.execute($cell, $event)\">Cancel</md-button>\n\t\t</div>\n\t</div>\n</q-grid:cell-editor>"

/***/ }),
/* 369 */
/***/ (function(module, exports) {

module.exports = "<div class=\"q-grid-text\">\n\t<md-input-container>\n\t\t<label ng-bind=\"$editor.title\"></label>\n\t\t<input type=\"text\"\n\t\t       md-maxlength=\"{{::$editor.column.maxLength}}\"\n\t\t       ng-model=\"$editor.value\" />\n\t</md-input-container>\n</div>"

/***/ }),
/* 370 */
/***/ (function(module, exports) {

module.exports = "<div class=\"q-grid-number\">\n\t<md-input-container>\n\t\t<label ng-bind=\"$editor.title\"></label>\n\t\t<input type=\"number\"\n\t\t       ng-model=\"$editor.value\" />\n\t</md-input-container>\n</div>"

/***/ }),
/* 371 */
/***/ (function(module, exports) {

module.exports = "<div ng-cloak\n     class=\"q-grid-file\">\n\t<h4 class=\"md-title\"\n\t    style=\"margin: 0 0 5px 0;\"\n\t    ng-bind=\"$editor.title\"></h4>\n\t<div layout=\"column\"\n\t     flex\n\t     ng-cloak\n\t     class=\"q-grid-edit-form-file\">\n\t\t<div class=\"q-grid-file-upload-area\"\n\t\t     ng-class=\"{'q-grid-file-has-preview': $editor.column.hasPreview($editor.label)}\">\n\t\t\t<div class=\"q-grid-file-upload-message\"\n\t\t\t     layout=\"column\"\n\t\t\t     ng-switch=\"!!$editor.value\">\n\t\t\t\t<span class=\"q-grid-file-upload-filename\"\n\t\t\t\t      ng-switch-when=\"true\">{{$editor.label}}</span>\n\t\t\t\t<div layout=\"row\"\n\t\t\t\t     layout-align=\"center center\">\n\t\t\t\t\t<md-icon class=\"q-grid-icon\">file_upload</md-icon>\n\t\t\t\t\t<span ng-switch-when=\"false\">Drag and drop a file here or click</span>\n\t\t\t\t\t<span ng-switch-when=\"true\">Drag and drop or click to replace </span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<input q-grid:file-upload=\"$editor.value\"\n\t\t\t       q-grid:file-upload-label=\"$editor.label\"\n\t\t\t       q-grid:can-upload=\"$editor.column.canUpload($event)\"\n\t\t\t       type=\"file\" />\n\t\t\t<div class=\"q-grid-file-preview\"\n\t\t\t     ng-if=\"$editor.column.hasPreview($editor.label)\">\n\t\t\t\t<img ng-src=\"{{$editor.value}}\" />\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),
/* 372 */,
/* 373 */,
/* 374 */,
/* 375 */,
/* 376 */,
/* 377 */,
/* 378 */,
/* 379 */,
/* 380 */,
/* 381 */,
/* 382 */,
/* 383 */,
/* 384 */,
/* 385 */,
/* 386 */,
/* 387 */,
/* 388 */,
/* 389 */,
/* 390 */,
/* 391 */,
/* 392 */,
/* 393 */,
/* 394 */,
/* 395 */,
/* 396 */,
/* 397 */,
/* 398 */,
/* 399 */,
/* 400 */,
/* 401 */,
/* 402 */,
/* 403 */,
/* 404 */,
/* 405 */,
/* 406 */,
/* 407 */,
/* 408 */,
/* 409 */,
/* 410 */,
/* 411 */,
/* 412 */,
/* 413 */,
/* 414 */,
/* 415 */,
/* 416 */,
/* 417 */,
/* 418 */,
/* 419 */,
/* 420 */,
/* 421 */,
/* 422 */,
/* 423 */,
/* 424 */,
/* 425 */,
/* 426 */,
/* 427 */,
/* 428 */,
/* 429 */,
/* 430 */,
/* 431 */,
/* 432 */,
/* 433 */,
/* 434 */,
/* 435 */,
/* 436 */,
/* 437 */,
/* 438 */,
/* 439 */,
/* 440 */,
/* 441 */,
/* 442 */,
/* 443 */,
/* 444 */,
/* 445 */,
/* 446 */,
/* 447 */,
/* 448 */,
/* 449 */,
/* 450 */,
/* 451 */,
/* 452 */,
/* 453 */,
/* 454 */,
/* 455 */,
/* 456 */,
/* 457 */,
/* 458 */,
/* 459 */,
/* 460 */,
/* 461 */,
/* 462 */,
/* 463 */,
/* 464 */,
/* 465 */,
/* 466 */,
/* 467 */,
/* 468 */,
/* 469 */,
/* 470 */,
/* 471 */,
/* 472 */,
/* 473 */,
/* 474 */,
/* 475 */,
/* 476 */,
/* 477 */,
/* 478 */,
/* 479 */,
/* 480 */,
/* 481 */,
/* 482 */,
/* 483 */,
/* 484 */,
/* 485 */,
/* 486 */,
/* 487 */,
/* 488 */,
/* 489 */,
/* 490 */,
/* 491 */,
/* 492 */,
/* 493 */,
/* 494 */,
/* 495 */,
/* 496 */,
/* 497 */,
/* 498 */,
/* 499 */,
/* 500 */,
/* 501 */,
/* 502 */,
/* 503 */,
/* 504 */,
/* 505 */,
/* 506 */,
/* 507 */,
/* 508 */,
/* 509 */,
/* 510 */,
/* 511 */,
/* 512 */,
/* 513 */,
/* 514 */,
/* 515 */,
/* 516 */,
/* 517 */,
/* 518 */,
/* 519 */,
/* 520 */,
/* 521 */,
/* 522 */,
/* 523 */,
/* 524 */,
/* 525 */,
/* 526 */,
/* 527 */,
/* 528 */,
/* 529 */,
/* 530 */,
/* 531 */,
/* 532 */,
/* 533 */,
/* 534 */,
/* 535 */,
/* 536 */,
/* 537 */,
/* 538 */,
/* 539 */,
/* 540 */,
/* 541 */,
/* 542 */,
/* 543 */,
/* 544 */,
/* 545 */,
/* 546 */,
/* 547 */,
/* 548 */,
/* 549 */,
/* 550 */,
/* 551 */,
/* 552 */,
/* 553 */,
/* 554 */,
/* 555 */,
/* 556 */,
/* 557 */,
/* 558 */,
/* 559 */,
/* 560 */,
/* 561 */,
/* 562 */,
/* 563 */,
/* 564 */,
/* 565 */,
/* 566 */,
/* 567 */,
/* 568 */,
/* 569 */,
/* 570 */,
/* 571 */,
/* 572 */,
/* 573 */,
/* 574 */,
/* 575 */,
/* 576 */,
/* 577 */,
/* 578 */,
/* 579 */,
/* 580 */,
/* 581 */,
/* 582 */,
/* 583 */,
/* 584 */,
/* 585 */,
/* 586 */,
/* 587 */,
/* 588 */,
/* 589 */,
/* 590 */,
/* 591 */,
/* 592 */,
/* 593 */,
/* 594 */,
/* 595 */,
/* 596 */,
/* 597 */,
/* 598 */,
/* 599 */,
/* 600 */,
/* 601 */,
/* 602 */,
/* 603 */,
/* 604 */,
/* 605 */,
/* 606 */,
/* 607 */,
/* 608 */,
/* 609 */,
/* 610 */,
/* 611 */,
/* 612 */,
/* 613 */,
/* 614 */,
/* 615 */,
/* 616 */,
/* 617 */,
/* 618 */,
/* 619 */,
/* 620 */,
/* 621 */,
/* 622 */,
/* 623 */,
/* 624 */,
/* 625 */,
/* 626 */,
/* 627 */,
/* 628 */,
/* 629 */,
/* 630 */,
/* 631 */,
/* 632 */,
/* 633 */,
/* 634 */,
/* 635 */,
/* 636 */,
/* 637 */,
/* 638 */,
/* 639 */,
/* 640 */,
/* 641 */,
/* 642 */,
/* 643 */,
/* 644 */,
/* 645 */,
/* 646 */,
/* 647 */,
/* 648 */,
/* 649 */,
/* 650 */,
/* 651 */,
/* 652 */,
/* 653 */,
/* 654 */,
/* 655 */,
/* 656 */,
/* 657 */,
/* 658 */,
/* 659 */,
/* 660 */,
/* 661 */,
/* 662 */,
/* 663 */,
/* 664 */,
/* 665 */,
/* 666 */,
/* 667 */,
/* 668 */,
/* 669 */,
/* 670 */,
/* 671 */,
/* 672 */,
/* 673 */,
/* 674 */,
/* 675 */,
/* 676 */,
/* 677 */,
/* 678 */,
/* 679 */,
/* 680 */,
/* 681 */,
/* 682 */,
/* 683 */,
/* 684 */,
/* 685 */,
/* 686 */,
/* 687 */,
/* 688 */,
/* 689 */,
/* 690 */,
/* 691 */,
/* 692 */,
/* 693 */,
/* 694 */,
/* 695 */,
/* 696 */,
/* 697 */,
/* 698 */,
/* 699 */,
/* 700 */,
/* 701 */,
/* 702 */,
/* 703 */,
/* 704 */,
/* 705 */,
/* 706 */,
/* 707 */,
/* 708 */,
/* 709 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__templates_body_cell_reference_edit__ = __webpack_require__(711);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__templates_body_cell_bool_edit__ = __webpack_require__(712);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__templates_body_cell_array_edit__ = __webpack_require__(713);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__templates_body_cell_row_options_edit__ = __webpack_require__(714);
__webpack_require__(710);






/* harmony default export */ __webpack_exports__["default"] = (angular.module('qgrid.theme.material', ['qgrid']).controller('Body.Cell.Reference.Edit.Controller', __WEBPACK_IMPORTED_MODULE_0__templates_body_cell_reference_edit__["a" /* default */]).controller('Body.Cell.Bool.Edit.Controller', __WEBPACK_IMPORTED_MODULE_1__templates_body_cell_bool_edit__["a" /* default */]).controller('Body.Cell.Array.Edit.Controller', __WEBPACK_IMPORTED_MODULE_2__templates_body_cell_array_edit__["a" /* default */]).controller('Body.Cell.Row.Options.Controller', __WEBPACK_IMPORTED_MODULE_3__templates_body_cell_row_options_edit__["a" /* default */]).config(Setup).name);

Setup.$inject = ['qgridThemeProvider'];
function Setup(qgridThemeProvider) {

	var EMPTY = '';
	var cell = function cell(pos, type) {
		return 'qgrid.' + pos + '.cell.' + type + '.tpl.html';
	};
	var plugin = function plugin(type) {
		return 'qgrid.plugin.' + type + '.tpl.html';
	};
	var component = function component(type) {
		return 'qgrid.' + type + '.tpl.html';
	};
	var form = function form(type) {
		return 'qgrid.form.cell.' + type + '.tpl.html';
	};

	qgridThemeProvider.register('material', function (theme) {
		theme.put(component('toolbar.top'), __webpack_require__(715));
		theme.put(component('toolbar.bottom'), __webpack_require__(716));
		theme.put(component('toolbar.right'), EMPTY);
		theme.put(component('toolbar.left'), EMPTY);

		theme.put(plugin('progress'), __webpack_require__(717));
		theme.put(plugin('export'), __webpack_require__(718));
		theme.put(plugin('import'), __webpack_require__(719));
		theme.put(plugin('column-chooser'), __webpack_require__(720));
		theme.put(plugin('column-filter'), __webpack_require__(721));
		theme.put(plugin('column-filter-panel'), __webpack_require__(722));
		theme.put(plugin('edit-form'), __webpack_require__(723));
		theme.put(plugin('edit-form-panel'), __webpack_require__(724));
		theme.put(plugin('popup-panel'), __webpack_require__(725));
		theme.put(plugin('group-bar'), __webpack_require__(726));
		theme.put(plugin('action-bar-core'), __webpack_require__(727));
		theme.put(plugin('action'), __webpack_require__(728));
		theme.put(plugin('sort-bar'), __webpack_require__(729));
		theme.put(plugin('pivot-bar'), __webpack_require__(730));
		theme.put(plugin('selection-bar'), __webpack_require__(731));
		theme.put(plugin('pager'), __webpack_require__(732));
		theme.put(plugin('pager-target'), __webpack_require__(733));
		theme.put(plugin('persistence-panel'), __webpack_require__(734));
		theme.put(plugin('visibility'), __webpack_require__(735));
		theme.put(plugin('title'), __webpack_require__(736));
		theme.put(plugin('cell-editor'), __webpack_require__(737));
		theme.put(plugin('column-sort'), __webpack_require__(738));
		theme.put(plugin('backdrop'), __webpack_require__(739));
		theme.put(plugin('tab-trap'), __webpack_require__(740));
		theme.put(plugin('legend-core'), __webpack_require__(741));
		theme.put(plugin('validator'), __webpack_require__(742));

		theme.put(plugin('expression-builder'), __webpack_require__(743));
		theme.put(plugin('expression-builder.autocomplete'), __webpack_require__(744));
		theme.put(plugin('expression-builder.button'), __webpack_require__(745));
		theme.put(plugin('expression-builder.label'), __webpack_require__(746));
		theme.put(plugin('expression-builder.multiselect'), __webpack_require__(747));
		theme.put(plugin('expression-builder.icon.button'), __webpack_require__(748));
		theme.put(plugin('expression-builder.input'), __webpack_require__(749));
		theme.put(plugin('expression-builder.select'), __webpack_require__(750));

		theme.put(cell('head', 'filter-row'), __webpack_require__(751));

		theme.put(cell('head', 'text'), __webpack_require__(18));
		theme.put(cell('body', 'text'), __webpack_require__(367));
		theme.put(cell('foot', 'text'), __webpack_require__(19));
		theme.put(cell('body', 'text.edit'), __webpack_require__(323));
		theme.put(cell('body', 'text-area.edit'), __webpack_require__(752));

		theme.put(cell('head', 'number'), __webpack_require__(18));
		theme.put(cell('body', 'number'), __webpack_require__(753));
		theme.put(cell('foot', 'number'), __webpack_require__(19));
		theme.put(cell('body', 'number.edit'), __webpack_require__(754));

		theme.put(cell('head', 'bool'), __webpack_require__(18));
		theme.put(cell('body', 'bool'), __webpack_require__(755));
		theme.put(cell('foot', 'bool'), __webpack_require__(19));
		theme.put(cell('body', 'bool.edit'), __webpack_require__(756));

		theme.put(cell('head', 'date'), __webpack_require__(18));
		theme.put(cell('body', 'date'), __webpack_require__(757));
		theme.put(cell('foot', 'date'), __webpack_require__(19));
		theme.put(cell('body', 'date.edit'), __webpack_require__(758));

		theme.put(cell('head', 'password'), __webpack_require__(18));
		theme.put(cell('body', 'password'), __webpack_require__(759));
		theme.put(cell('foot', 'password'), __webpack_require__(19));
		theme.put(cell('body', 'password.edit'), __webpack_require__(760));

		theme.put(cell('head', 'array'), __webpack_require__(18));
		theme.put(cell('body', 'array'), __webpack_require__(761));
		theme.put(cell('foot', 'array'), __webpack_require__(19));
		theme.put(cell('body', 'array.edit'), __webpack_require__(762));

		theme.put(cell('head', 'email'), __webpack_require__(18));
		theme.put(cell('body', 'email'), __webpack_require__(763));
		theme.put(cell('foot', 'email'), __webpack_require__(19));
		theme.put(cell('body', 'email.edit'), __webpack_require__(764));

		theme.put(cell('head', 'select'), __webpack_require__(765));
		theme.put(cell('body', 'select'), __webpack_require__(766));
		theme.put(cell('foot', 'select'), __webpack_require__(19));

		theme.put(cell('head', 'group'), __webpack_require__(18));
		theme.put(cell('body', 'group'), __webpack_require__(767));
		theme.put(cell('foot', 'group'), __webpack_require__(19));
		theme.put(cell('body', 'group.edit'), __webpack_require__(323));

		theme.put(cell('head', 'pivot'), __webpack_require__(768));
		theme.put(cell('body', 'pivot'), __webpack_require__(769));
		theme.put(cell('foot', 'pivot'), __webpack_require__(19));
		theme.put(cell('body', 'pivot.edit'), EMPTY);

		theme.put(cell('head', 'row-number'), __webpack_require__(18));
		theme.put(cell('body', 'row-number'), __webpack_require__(770));
		theme.put(cell('foot', 'row-number'), __webpack_require__(19));
		theme.put(cell('body', 'row-number.edit'), EMPTY);

		theme.put(cell('head', 'row-indicator'), __webpack_require__(18));
		theme.put(cell('body', 'row-indicator'), __webpack_require__(771));
		theme.put(cell('foot', 'row-indicator'), __webpack_require__(19));
		theme.put(cell('body', 'row-indicator.edit'), EMPTY);

		theme.put(cell('head', 'row-options'), __webpack_require__(18));
		theme.put(cell('body', 'row-options'), __webpack_require__(772));
		theme.put(cell('foot', 'row-options'), __webpack_require__(19));
		theme.put(cell('body', 'row-options.edit'), __webpack_require__(773));

		theme.put(cell('head', 'row-expand'), __webpack_require__(18));
		theme.put(cell('body', 'row-expand'), __webpack_require__(774));
		theme.put(cell('foot', 'row-expand'), __webpack_require__(19));
		theme.put(cell('body', 'row-expand.edit'), EMPTY);

		theme.put(cell('head', 'row-details'), __webpack_require__(18));
		theme.put(cell('body', 'row-details'), __webpack_require__(775));
		theme.put(cell('foot', 'row-details'), __webpack_require__(19));
		theme.put(cell('body', 'row-details.edit'), EMPTY);

		theme.put(cell('head', 'pad'), __webpack_require__(18));
		theme.put(cell('body', 'pad'), EMPTY);
		theme.put(cell('foot', 'pad'), EMPTY);
		theme.put(cell('body', 'pad.edit'), EMPTY);

		theme.put(cell('head', 'time'), __webpack_require__(18));
		theme.put(cell('body', 'time'), __webpack_require__(776));
		theme.put(cell('foot', 'time'), __webpack_require__(19));
		theme.put(cell('body', 'time.edit'), __webpack_require__(777));

		theme.put(cell('head', 'url'), __webpack_require__(18));
		theme.put(cell('body', 'url'), __webpack_require__(778));
		theme.put(cell('foot', 'url'), __webpack_require__(19));
		theme.put(cell('body', 'url.edit'), __webpack_require__(779));

		theme.put(cell('head', 'file'), __webpack_require__(18));
		theme.put(cell('body', 'file'), __webpack_require__(780));
		theme.put(cell('foot', 'file'), __webpack_require__(19));
		theme.put(cell('body', 'file.edit'), __webpack_require__(368));

		theme.put(cell('head', 'image'), __webpack_require__(18));
		theme.put(cell('body', 'image'), __webpack_require__(781));
		theme.put(cell('foot', 'image'), __webpack_require__(19));
		theme.put(cell('body', 'image.edit'), __webpack_require__(368));

		theme.put(cell('head', 'reference'), __webpack_require__(18));
		theme.put(cell('body', 'reference'), __webpack_require__(782));
		theme.put(cell('foot', 'reference'), __webpack_require__(19));
		theme.put(cell('body', 'reference.edit'), __webpack_require__(783));

		theme.put(cell('head', 'currency'), __webpack_require__(18));
		theme.put(cell('body', 'currency'), __webpack_require__(784));
		theme.put(cell('foot', 'currency'), __webpack_require__(785));
		theme.put(cell('body', 'currency.edit'), __webpack_require__(786));

		theme.put(cell('head', 'id'), __webpack_require__(18));
		theme.put(cell('body', 'id'), __webpack_require__(367));
		theme.put(cell('foot', 'id'), __webpack_require__(19));
		theme.put(cell('body', 'id.edit'), __webpack_require__(323));

		theme.put(cell('body', 'autocomplete.edit'), __webpack_require__(787));
		theme.put(cell('body', 'dropdown.edit'), __webpack_require__(788));

		theme.put(form('text.edit'), __webpack_require__(369));
		theme.put(form('number.edit'), __webpack_require__(370));
		theme.put(form('currency.edit'), __webpack_require__(370));
		theme.put(form('date.edit'), __webpack_require__(789));
		theme.put(form('bool.edit'), __webpack_require__(790));
		theme.put(form('reference.edit'), __webpack_require__(791));
		theme.put(form('id.edit'), __webpack_require__(369));
		theme.put(form('url.edit'), __webpack_require__(792));
		theme.put(form('image.edit'), __webpack_require__(371));
		theme.put(form('file.edit'), __webpack_require__(371));
		theme.put(form('text-area.edit'), __webpack_require__(793));
		theme.put(form('password.edit'), __webpack_require__(794));
		theme.put(form('array.edit'), __webpack_require__(795));
		theme.put(form('email.edit'), __webpack_require__(796));
		theme.put(form('time.edit'), __webpack_require__(797));
	});
}

/***/ }),
/* 710 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 711 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = ReferenceEdit;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__grid_core_utility__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__grid_core_command__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__grid_core_selection__ = __webpack_require__(126);




ReferenceEdit.$inject = ['$scope', 'qgrid', 'qGridPopupService'];
function ReferenceEdit($scope, qgrid, popupService) {
	var _arguments = arguments,
	    _this = this;

	var editView = function editView() {
		return $scope.$editor || $scope.$view.edit.cell;
	};

	var id = 'q-grid-reference-edit';
	var close = function close() {
		if ($scope.$popup && popupService.isOpened(id)) {
			$scope.$popup.close();
		}
	};

	var contextFactory = function contextFactory(cell, value, label, tag) {
		return {
			column: cell.column,
			row: cell.row,
			columnIndex: cell.columnIndex,
			rowIndex: cell.rowIndex,
			oldValue: cell.value,
			newValue: _arguments.length >= 2 ? value : cell.value,
			oldLabel: cell.label,
			newLabel: _arguments.length >= 3 ? label : cell.label,
			unit: 'cell',
			tag: tag
		};
	};

	var options = editView().options;
	this.gridModel = options && options.modelFactory && options.modelFactory(editView()) || qgrid.model();

	var watchSelection = function watchSelection(e) {
		if (e.hasChanges('items')) {
			var model = _this.gridModel;
			var selectionItems = model.selection().items;
			var entries = new __WEBPACK_IMPORTED_MODULE_2__grid_core_selection__["b" /* SelectionService */](model).lookup(selectionItems);

			var view = editView();
			view.value = selectionItems;
			view.tag = {
				entries: entries,
				columns: model.data().columns
			};
		}
	};

	this.gridModel.dataChanged.watch(function (e, off) {
		if (e.hasChanges('rows') && e.state.rows.length > 0) {
			off();
			var view = editView();
			var model = _this.gridModel;
			if (!model.selection().items.length) {
				model.selection({
					items: Object(__WEBPACK_IMPORTED_MODULE_0__grid_core_utility__["h" /* isArray */])(view.value) ? view.value : [view.value]
				});
			}

			model.selectionChanged.watch(watchSelection);
		}
	});

	var shortcutFactory = function shortcutFactory(type) {
		var edit = _this.gridModel.edit;
		return function () {
			var shortcuts = edit()[type + 'Shortcuts'];
			return shortcuts['form'] || shortcuts['$default'];
		};
	};

	var commands = {
		commit: new __WEBPACK_IMPORTED_MODULE_1__grid_core_command__["a" /* Command */]({
			source: 'body.cell.reference.edit',
			shortcut: shortcutFactory('commit'),
			execute: function execute($cell, $event) {
				var view = editView();
				var cell = $cell || view.editor.cell;
				var context = contextFactory(cell || view.cell, view.value, view.label, view.tag);
				if (view.commit.execute(cell, $event) === false) {
					return;
				}

				if (options && options.commit && (!options.commit.canExecute(context) || options.commit.execute(context) === false)) {
					return;
				}

				close();
			}
		}),
		cancel: new __WEBPACK_IMPORTED_MODULE_1__grid_core_command__["a" /* Command */]({
			source: 'body.cell.reference.edit',
			shortcut: shortcutFactory('cancel'),
			execute: function execute($cell, $event) {
				var view = editView();
				var cell = $cell || view.editor.cell;
				var context = contextFactory(cell, view.value, view.label, view.tag);
				if (view.cancel.execute(cell, $event) === false) {
					return;
				}

				if (options && options.cancel && (!options.cancel.canExecute(context) || options.cancel.execute(context) === false)) {
					return;
				}

				close();
			}
		})
	};

	this.commit = commands.commit;

	this.cancel = commands.cancel;
	var shortcutOff = popupService.isOpened(id) ? $scope.$popupBody.shortcut.register(new Map(Object.entries(commands))) : __WEBPACK_IMPORTED_MODULE_0__grid_core_utility__["u" /* noop */];

	$scope.$on('$destroy', function () {
		shortcutOff();
		close();
	});
}

/***/ }),
/* 712 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = BoolEdit;
BoolEdit.$inject = ['$scope'];
function BoolEdit($scope) {
	var _this = this;

	this.cell = function () {
		return $scope.$editor || $scope.$view.edit.cell;
	};

	// entering edit mode means toggling boolean value
	this.cell().value = !this.cell().value;

	this.trueValue = function () {
		var value = _this.cell().column.trueValue;
		if (angular.isString(value)) {
			return '\'' + value + '\'';
		}

		return value;
	};

	this.falseValue = function () {
		var value = _this.cell().column.falseValue;
		if (angular.isString(value)) {
			return '\'' + value + '\'';
		}

		return value;
	};

	this.isIndeterminate = function () {
		var cell = _this.cell();
		return cell.column.isIndeterminate(cell.value);
	};

	this.isChecked = function () {
		var cell = _this.cell();
		return cell.column.isChecked(cell.value);
	};
}

/***/ }),
/* 713 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = ArrayEdit;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__grid_core_shortcut_shortcut__ = __webpack_require__(80);


ArrayEdit.$inject = [];

function ArrayEdit() {
	var _this = this;

	this.text = '';

	this.keyDown = function (e) {
		var code = __WEBPACK_IMPORTED_MODULE_0__grid_core_shortcut_shortcut__["a" /* Shortcut */].translate(e);
		if (code === 'enter') {
			if (_this.text && _this.text.length) {
				e.stopPropagation();
			}
		}
	};
}

/***/ }),
/* 714 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = RowOptionsEdit;
RowOptionsEdit.$inject = ['$scope', '$timeout'];
function RowOptionsEdit($scope, $timeout) {
	this.openMenu = function ($mdMenu, e) {
		return $mdMenu.open(e);
	};
	$scope.$on('$mdMenuClose', function () {
		return $timeout($scope.$view.edit.cell.cancel.execute, 100);
	});
}

/***/ }),
/* 715 */
/***/ (function(module, exports) {

module.exports = "<div layout=\"row\">\n\t<div flex=\"100\"\n\t     layout=\"row\"\n\t     layout-align=\"start center\"\n\t     layout-align-xs=\"start start\"\n\t     layout-align-sm=\"start start\"\n\t     layout-xs=\"column\"\n\t     layout-sm=\"column\">\n\t\t<div flex=\"100\">\n\t\t\t<q-grid:title></q-grid:title>\n\t\t</div>\n\t\t<div class=\"q-grid-actions\"\n\t\t     flex=\"none\"\n\t\t     layout=\"row\"\n\t\t     layout-align=\"end center\">\n\t\t\t<div>\n\t\t\t\t<q-grid:action-bar-core></q-grid:action-bar-core>\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<md-menu q-grid:menu=\"$mdMenu\">\n\t\t\t\t\t<md-button ng-click=\"$mdMenu.open($event)\"\n\t\t\t\t\t           class=\"md-icon-button\"\n\t\t\t\t\t           tabindex=\"-1\">\n\t\t\t\t\t\t<md-icon class=\"q-grid-icon\">more_vert</md-icon>\n\t\t\t\t\t</md-button>\n\t\t\t\t\t<md-menu-content width=\"5\"\n\t\t\t\t\t                 class=\"q-grid-menu\">\n\t\t\t\t\t\t<q-grid-core:box>\n\t\t\t\t\t\t\t<q-grid:column-chooser ng-if=\"$menu.isOpened\"\n\t\t\t\t\t\t\t                       on:cancel=\"$mdMenu.close()\"\n\t\t\t\t\t\t\t                       on:submit=\"$mdMenu.close()\">\n\t\t\t\t\t\t</q-grid-core:box>\n\t\t\t\t\t</md-menu-content>\n\t\t\t\t</md-menu>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<div class=\"q-grid-progress\">\n\t<q-grid:progress>\n\t</q-grid:progress>\n</div>"

/***/ }),
/* 716 */
/***/ (function(module, exports) {

module.exports = "<div class=\"layout-row\">\n\t<div class=\"flex\">\n\t\t<q-grid:legend-core></q-grid:legend-core>\n\t</div>\n\t<div class=\"flex-none\">\n\t\t<q-grid:pager></q-grid:pager>\n\t</div>\n</div>"

/***/ }),
/* 717 */
/***/ (function(module, exports) {

module.exports = "<md-progress-linear ng-if=\"$progress.isBusy\"\n\t\t\t\t\tclass=\"q-grid-progress-linear\"\n\t\t\t\t\tmd-mode=\"indeterminate\">\n</md-progress-linear>"

/***/ }),
/* 718 */
/***/ (function(module, exports) {

module.exports = "<div class=\"q-grid-export\"\n     layout=\"row\"\n     layout-align=\"end center\">\n\t<md-button ng-if=\"$export[$export.type].canExecute()\"\n\t           ng-click=\"$export[$export.type].execute()\"\n\t           tabindex=\"-1\">\n\t\t<md-icon class=\"q-grid-icon\">file_download</md-icon>\n\t\tExport to {{$export.type}}\n\t</md-button>\n</div>"

/***/ }),
/* 719 */
/***/ (function(module, exports) {

module.exports = "<div layout=\"row\"\n     layout-align=\"end center\">\n\t<md-button ng-disabled=\"!$import.upload.canExecute()\"\n\t           ng-click=\"$import.upload.execute()\"\n\t           tabindex=\"-1\">\n\t\t<md-icon class=\"q-grid-icon\">file_upload</md-icon>\n\t\tUpload file\n\t</md-button>\n</div>"

/***/ }),
/* 720 */
/***/ (function(module, exports) {

module.exports = "<div class=\"q-grid-column-chooser q-grid-popup-panel\"\n     layout=\"column\"\n     flex=\"100\">\n\t<md-card>\n\t\t<md-card-header>\n\t\t\t<md-card-title>\n\t\t\t\t<md-card-title-text>\n\t\t\t\t\t<span class=\"md-subhead\">Column Filter</span>\n\t\t\t\t</md-card-title-text>\n\t\t\t\t<md-card-title-actions layout=\"row\"\n\t\t\t\t                       layout-align=\"end center\">\n\t\t\t\t</md-card-title-actions>\n\t\t\t</md-card-title>\n\t\t</md-card-header>\n\t\t<md-card-content>\n\t\t\t<div flex=\"none\"\n\t\t\t     layout=\"row\">\n\t\t\t\t<md-input-container class=\"q-grid-column-chooser-filter\"\n\t\t\t\t                    flex>\n\t\t\t\t\t<label>Search</label>\n\t\t\t\t\t<input type=\"text\"\n\t\t\t\t\t       ng-model=\"$columnChooser.filter\"\n\t\t\t\t\t       q-grid:focus\n\t\t\t\t\t       q-grid:focus-delay=\"500\" />\n\t\t\t\t</md-input-container>\n\t\t\t</div>\n\t\t\t<div flex\n\t\t\t     layout=\"column\">\n\t\t\t\t<ul>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<md-checkbox ng-click=\"$columnChooser.toggleAll.execute()\"\n\t\t\t\t\t\t             md-prevent-menu-close\n\t\t\t\t\t\t             ng-checked=\"$columnChooser.stateAll()\"\n\t\t\t\t\t\t             md-indeterminate=\"$columnChooser.isIndeterminate()\"\n\t\t\t\t\t\t             md-no-ink>\n\t\t\t\t\t\t\tSelect All\n\t\t\t\t\t\t</md-checkbox>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<md-checkbox ng-click=\"$columnChooser.defaults.execute()\"\n\t\t\t\t\t\t             md-prevent-menu-close\n\t\t\t\t\t\t             ng-checked=\"$columnChooser.stateDefault()\"\n\t\t\t\t\t\t             md-no-ink>\n\t\t\t\t\t\t\tSelect Defaults\n\t\t\t\t\t\t</md-checkbox>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t\t<ul class=\"q-grid-column-chooser-list\">\n\t\t\t\t\t<li ng-repeat=\"column in $columnChooser.columns | filter: $columnChooser.filter\"\n\t\t\t\t\t    q-grid:drag=\"$columnChooser.transfer(column)\"\n\t\t\t\t\t    q-grid:drop=\"$columnChooser.transfer(column)\"\n\t\t\t\t\t    q-grid:on-drop=\"$columnChooser.drop.execute($event)\"\n\t\t\t\t\t    q-grid:can-drop=\"$columnChooser.drop.canExecute($event)\"\n\t\t\t\t\t    q-grid:can-drag=\"$columnChooser.drag.canExecute($event)\">\n\n\t\t\t\t\t\t<md-checkbox ng-checked=\"$columnChooser.state(column)\"\n\t\t\t\t\t\t             md-prevent-menu-close\n\t\t\t\t\t\t             ng-if=\"$columnChooser.toggle.canExecute(column)\"\n\t\t\t\t\t\t             ng-click=\"$columnChooser.toggle.execute(column)\"\n\t\t\t\t\t\t             md-no-ink\n\t\t\t\t\t\t             aria-label=\"Selection\">\n\t\t\t\t\t\t\t<span ng-bind-html=\"column.title | qgridHighlight : $columnChooser.filter\"> </span>\n\t\t\t\t\t\t</md-checkbox>\n\n\n\t\t\t\t\t\t<md-input-container ng-if=\"$columnChooser.canAggregate\">\n\t\t\t\t\t\t\t<md-select aria-label=\"Aggregation\"\n\t\t\t\t\t\t\t           ng-model=\"column.aggregation\"\n\t\t\t\t\t\t\t           ng-change=\"$columnChooser.toggleAggregation.execute(column)\">\n\t\t\t\t\t\t\t\t<md-option value=\"\">\n\t\t\t\t\t\t\t\t\t<em>Aggregation</em>\n\t\t\t\t\t\t\t\t</md-option>\n\t\t\t\t\t\t\t\t<md-option ng-repeat=\"aggregation in $columnChooser.aggregations\"\n\t\t\t\t\t\t\t\t           ng-value=\"aggregation\">\n\t\t\t\t\t\t\t\t\t{{::aggregation}}\n\t\t\t\t\t\t\t\t</md-option>\n\t\t\t\t\t\t\t</md-select>\n\t\t\t\t\t\t</md-input-container>\n\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t<div class=\"q-grid-popup-actions flex-none\">\n\t\t\t\t<md-button ng-click=\"$columnChooser.cancel.execute()\"\n\t\t\t\t           md-prevent-menu-close>\n\t\t\t\t\tCancel\n\t\t\t\t</md-button>\n\t\t\t\t<md-button class=\"md-primary\"\n\t\t\t\t           ng-click=\"$columnChooser.submit.execute()\"\n\t\t\t\t           ng-disabled=\"!$columnChooser.submit.canExecute()\"\n\t\t\t\t           md-prevent-menu-close>\n\t\t\t\t\tApply\n\t\t\t\t</md-button>\n\t\t\t</div>\n\t\t</md-card-content>\n\t</md-card>\n</div>"

/***/ }),
/* 721 */
/***/ (function(module, exports) {

module.exports = "<md-menu q-grid:menu=\"$mdMenu\">\n\t<md-button ng-click=\"$mdMenu.open($event)\"\n\t\t\t   class=\"md-icon-button\"\n\t\t\t   tabindex=\"-1\">\n\t\t<md-icon class=\"q-grid-icon\">filter_list</md-icon>\n\t</md-button>\n\t<md-menu-content width=\"5\"\n\t\t\t\t\t class=\"q-grid-menu q-grid-column-filter\">\n\t\t<q-grid-core:box>\n\t\t\t<q-grid:column-filter-panel key=\"$columnFilterPlugin.key\"\n\t\t\t\t\t\t\t\t\t\tng-if=\"$menu.isOpened\"\n\t\t\t\t\t\t\t\t\t\ton:submit=\"$mdMenu.close()\"\n\t\t\t\t\t\t\t\t\t\ton:cancel=\"$mdMenu.close()\">\n\t\t\t</q-grid:column-filter-panel>\n\t\t</q-grid-core:box>\n\t</md-menu-content>\n</md-menu>"

/***/ }),
/* 722 */
/***/ (function(module, exports) {

module.exports = "<div class=\"q-grid-column-filter-panel q-grid-popup-panel\"\n     layout=\"column\"\n     flex=\"100\">\n\t<md-card>\n\t\t<md-card-header>\n\t\t\t<md-card-title>\n\t\t\t\t<md-card-title-text>\n\t\t\t\t\t<span class=\"md-subhead\">{{$columnFilterPanel.title}} Filter</span>\n\t\t\t\t</md-card-title-text>\n\t\t\t\t<md-card-title-actions layout=\"row\"\n\t\t\t\t                       layout-align=\"end center\">\n\t\t\t\t</md-card-title-actions>\n\t\t\t</md-card-title>\n\t\t</md-card-header>\n\t\t<md-card-content>\n\t\t\t<div flex=\"none\"\n\t\t\t     layout=\"row\">\n\t\t\t\t<md-input-container class=\"q-grid-column-filter-filter\">\n\t\t\t\t\t<label>Search</label>\n\t\t\t\t\t<input type=\"text\"\n\t\t\t\t\t       ng-change=\"$columnFilterPanelPlugin.reset()\"\n\t\t\t\t\t       ng-model=\"$columnFilterPanel.filter\"\n\t\t\t\t\t       ng-model-options=\"{debounce: 500}\"\n\t\t\t\t\t       q-grid:focus\n\t\t\t\t\t       q-grid:focus-delay=\"500\" />\n\t\t\t\t</md-input-container>\n\t\t\t</div>\n\t\t\t<div class=\"flex\">\n\t\t\t\t<ul>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<md-checkbox ng-click=\"$columnFilterPanel.toggleAll.execute()\"\n\t\t\t\t\t\t             md-prevent-menu-close\n\t\t\t\t\t\t             ng-checked=\"$columnFilterPanel.stateAll()\"\n\t\t\t\t\t\t             aria-label=\"Select all filter values\"\n\t\t\t\t\t\t             md-no-ink\n\t\t\t\t\t\t             md-indeterminate=\"$columnFilterPanel.isIndeterminate()\">\n\t\t\t\t\t\t\tSelect All\n\t\t\t\t\t\t</md-checkbox>\n\t\t\t\t\t</li>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t\t<div class=\"q-grid-column-filter-list\"\n\t\t\t\t     vscroll>\n\t\t\t\t\t<ul vscroll-port-y=\"$columnFilterPanelPlugin.vscrollContext\">\n\t\t\t\t\t\t<li ng-repeat=\"item in $columnFilterPanel.items | vscroll: $columnFilterPanelPlugin.vscrollContext track by $index\"\n\t\t\t\t\t\t    vscroll-row=\"{{::$index}}\">\n\t\t\t\t\t\t\t<md-checkbox ng-checked=\"$columnFilterPanel.state(item)\"\n\t\t\t\t\t\t\t             md-prevent-menu-close\n\t\t\t\t\t\t\t             ng-if=\"$columnFilterPanel.toggle.canExecute(item)\"\n\t\t\t\t\t\t\t             aria-label=\"Select filter value\"\n\t\t\t\t\t\t\t             md-no-ink\n\t\t\t\t\t\t\t             ng-click=\"$columnFilterPanel.toggle.execute(item)\">\n\t\t\t\t\t\t\t\t<span ng-bind-html=\"item | qgridHighlight : $columnFilterPanel.filter\"> </span>\n\t\t\t\t\t\t\t</md-checkbox>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"q-grid-popup-actions flex-none\">\n\t\t\t\t<md-button ng-click=\"$columnFilterPanel.cancel.execute()\"\n\t\t\t\t           md-prevent-menu-close>\n\t\t\t\t\tCancel\n\t\t\t\t</md-button>\n\t\t\t\t<md-button ng-click=\"$columnFilterPanel.reset.execute()\"\n\t\t\t\t           md-prevent-menu-close>\n\t\t\t\t\tClear\n\t\t\t\t</md-button>\n\t\t\t\t<md-button class=\"md-primary\"\n\t\t\t\t           md-prevent-menu-close\n\t\t\t\t           ng-click=\"$columnFilterPanel.submit.execute()\"\n\t\t\t\t           ng-disabled=\"!$columnFilterPanel.submit.canExecute()\">\n\t\t\t\t\tApply\n\t\t\t\t</md-button>\n\t\t\t</div>\n\t\t</md-card-content>\n\t</md-card>\n</div>"

/***/ }),
/* 723 */
/***/ (function(module, exports) {

module.exports = "<q-grid:popup id=\"q-grid-edit-form-popup-{{::$editForm.key}}\"\n              class=\"q-grid-edit-form-popup\">\n\t<q-grid:template for=\"trigger\">\n\t\t<md-button class=\"md-icon-button\"\n\t\t           ng-click=\"$popup.open({width: 550, height: 450})\"\n\t\t           tabindex=\"-1\">\n\t\t\t<md-icon class=\"q-grid-icon\">edit</md-icon>\n\t\t</md-button>\n\t</q-grid:template>\n\t<q-grid:template for=\"body\"\n\t                 let=\"$editForm\">\n\t\t<q-grid:edit-form-panel key=\"$editForm.key\"\n\t\t                        row=\"$editForm.row\"\n\t\t                        shortcut=\"$popupBody.shortcut\"\n\t\t                        on:submit=\"$popupBody.close()\"\n\t\t                        on:cancel=\"$popupBody.close()\">\n\t\t</q-grid:edit-form-panel>\n\t</q-grid:template>\n\t<q-grid:template for=\"head\"\n\t                 let=\"$editForm\">\n\t\t<h2 class=\"md-title\">{{$editForm.title}}</h2>\n\t</q-grid:template>\n</q-grid:popup>"

/***/ }),
/* 724 */
/***/ (function(module, exports) {

module.exports = "<div class=\"q-grid-edit-form-panel\"\n     layout=\"column\">\n\t<div class=\"layout-column flex q-grid-edit-form-panel-body\">\n\t\t<div ng-repeat=\"editor in $editFormPanel.editor.editors\">\n\t\t\t<q-grid:edit-form-editor editor=\"editor\"></q-grid:edit-form-editor>\n\t\t</div>\n\t</div>\n\t<div class=\"flex-none q-grid-popup-actions\">\n\t\t<md-button ng-click=\"$editFormPanel.cancel.execute()\">\n\t\t\tCancel\n\t\t</md-button>\n\t\t<md-button class=\"md-primary\"\n\t\t           ng-click=\"$editFormPanel.submit.execute()\">\n\t\t\tSave\n\t\t</md-button>\n\t</div>\n</div>"

/***/ }),
/* 725 */
/***/ (function(module, exports) {

module.exports = "<q-grid-core:box model=\"$popup.model\"\n                 class=\"q-grid-popup-panel\">\n\t<md-card>\n\t\t<md-card-header>\n\t\t\t<md-card-title>\n\t\t\t\t<md-card-title-text>\n\t\t\t\t\t<q-grid:popup-head model=\"$popup.model\"\n\t\t\t\t\t                   id=\"$popup.id\"></q-grid:popup-head>\n\t\t\t\t</md-card-title-text>\n\t\t\t\t<md-card-title-actions layout=\"row\"\n\t\t\t\t                       layout-align=\"end center\">\n\t\t\t\t\t<md-button ng-if=\"popup.collapsible && !popup.expanded()\"\n\t\t\t\t\t           class=\"md-icon-button\"\n\t\t\t\t\t           aria-label=\"Expand\">\n\t\t\t\t\t\t<md-icon class=\"q-grid-icon\"\n\t\t\t\t\t\t         aria-hidden=\"true\">&#xE5D0;</md-icon>\n\t\t\t\t\t\t<md-tooltip md-direction=\"bottom\">\n\t\t\t\t\t\t\tExpand\n\t\t\t\t\t\t</md-tooltip>\n\t\t\t\t\t</md-button>\n\t\t\t\t\t<md-button ng-if=\"popup.collapsible && popup.expanded()\"\n\t\t\t\t\t           class=\"md-icon-button\"\n\t\t\t\t\t           aria-label=\"Collapse\">\n\t\t\t\t\t\t<md-icon class=\"q-grid-icon\"\n\t\t\t\t\t\t         aria-hidden=\"true\">&#xE5D1;</md-icon>\n\t\t\t\t\t\t<md-tooltip md-direction=\"bottom\">\n\t\t\t\t\t\t\tCollapse\n\t\t\t\t\t\t</md-tooltip>\n\t\t\t\t\t</md-button>\n\t\t\t\t\t<md-button class=\"md-icon-button md-action-close\"\n\t\t\t\t\t           aria-label=\"Close\"\n\t\t\t\t\t           ng-click=\"$popup.close()\">\n\t\t\t\t\t\t<md-icon class=\"q-grid-icon\"\n\t\t\t\t\t\t         aria-hidden=\"true\">&#xE5CD;</md-icon>\n\t\t\t\t\t\t<md-tooltip md-direction=\"bottom\">\n\t\t\t\t\t\t\tClose\n\t\t\t\t\t\t</md-tooltip>\n\t\t\t\t\t</md-button>\n\t\t\t\t</md-card-title-actions>\n\t\t\t</md-card-title>\n\t\t</md-card-header>\n\t\t<md-card-content>\n\t\t\t<q-grid:popup-body model=\"$popup.model\"\n\t\t\t                   id=\"$popup.id\"></q-grid:popup-body>\n\t\t</md-card-content>\n\t\t<div class=\"q-grid-popup-resizer\"\n\t\t     ng-if=\"popup.resizable\"></div>\n\t</md-card>\n</q-grid-core:box>"

/***/ }),
/* 726 */
/***/ (function(module, exports) {

module.exports = "<div layout=\"column\"\n     class=\"q-grid-group-bar\"\n     q-grid:drop\n     q-grid:on-drop=\"$groupBar.drop.execute($event)\"\n     q-grid:can-drop=\"$groupBar.drop.canExecute($event)\">\n\t<md-input-container>\n\t\t<label>Group By</label>\n\t\t<md-select ng-disabled=\"!$groupBar.replace.canExecute()\"\n\t\t           tabindex=\"-1\"\n\t\t           ng-model=\"$groupBar.selectedItems\"\n\t\t           ng-change=\"$groupBar.replace.execute($groupBar.selectedItems)\"\n\t\t           multiple>\n\t\t\t<md-option ng-value=\"column.key\"\n\t\t\t           ng-repeat=\"column in $groupBar.columns track by column.key\"\n\t\t\t           ng-bind=\"column.title\"></md-option>\n\t\t</md-select>\n\t</md-input-container>\n</div>"

/***/ }),
/* 727 */
/***/ (function(module, exports) {

module.exports = "<div layout=\"row\">\n\t<div flex=\"100\"\n\t     layout=\"row\"\n\t     layout-align=\"start center\"\n\t     layout-align-xs=\"start start\"\n\t     layout-align-sm=\"start start\"\n\t     layout-xs=\"column\"\n\t     layout-sm=\"column\">\n\t</div>\n\t<div class=\"q-grid-actions\"\n\t     flex=\"none\"\n\t     layout=\"row\"\n\t     layout-align=\"end center\">\n\t\t<q-grid:action-core ng-repeat=\"action in $actionBar.actions\"\n\t\t                    model=\"action\">\n\t\t</q-grid:action-core>\n\t</div>\n</div>"

/***/ }),
/* 728 */
/***/ (function(module, exports) {

module.exports = "<div class=\"q-grid-action\">\n\t<md-button class=\"md-icon-button\"\n\t           ng-click=\"$action.execute($event)\"\n\t           ng-disabled=\"!$action.canExecute($event)\"\n\t           tabindex=\"-1\">\n\t\t<md-icon class=\"q-grid-icon\">{{$action.icon}}</md-icon>\n\t\t<md-tooltip>\n\t\t\t<span>{{$action.title}}</span>\n\t\t\t<span ng-if=\"$action.shortcut\"> ({{$action.shortcut | uppercase}})</span>\n\t\t</md-tooltip>\n\t</md-button>\n</div>"

/***/ }),
/* 729 */
/***/ (function(module, exports) {

module.exports = "<div layout=\"column\"\n     class=\"q-grid-sort-bar\"\n     q-grid:drop\n     q-grid:on-drop=\"$sortBar.drop.execute($event)\"\n     q-grid:can-drop=\"$sortBar.drop.canExecute($event)\">\n\t<md-input-container>\n\t\t<label>Sort By</label>\n\t\t<md-select ng-disabled=\"!$sortBar.replace.canExecute()\"\n\t\t           ng-model=\"$sortBar.selectedItems\"\n\t\t           ng-change=\"$sortBar.replace.execute($sortBar.selectedItems)\"\n\t\t           multiple\n\t\t           tabindex=\"-1\">\n\t\t\t<md-option ng-value=\"column.key\"\n\t\t\t           ng-repeat=\"column in $sortBar.columns track by column.key\"\n\t\t\t           ng-bind=\"column.title\"></md-option>\n\t\t</md-select>\n\t</md-input-container>\n</div>"

/***/ }),
/* 730 */
/***/ (function(module, exports) {

module.exports = "<div layout=\"column\"\n     class=\"q-grid-pivot-bar\"\n     q-grid:drop\n     q-grid:on-drop=\"$pivotBar.drop.execute($event)\"\n     q-grid:can-drop=\"$pivotBar.drop.canExecute($event)\">\n\t<md-input-container>\n\t\t<label>Pivot By</label>\n\t\t<md-select ng-disabled=\"!$pivotBar.replace.canExecute()\"\n\t\t           tabindex=\"-1\"\n\t\t           ng-model=\"$pivotBar.selectedItems\"\n\t\t           ng-change=\"$pivotBar.replace.execute($pivotBar.selectedItems)\"\n\t\t           multiple>\n\t\t\t<md-option ng-value=\"column.key\"\n\t\t\t           ng-repeat=\"column in $pivotBar.columns track by column.key\"\n\t\t\t           ng-bind=\"column.title\"></md-option>\n\t\t</md-select>\n\t</md-input-container>\n</div>"

/***/ }),
/* 731 */
/***/ (function(module, exports) {

module.exports = "<div layout=\"row\"\n     class=\"q-grid-selection-bar\">\n\t<md-input-container>\n\t\t<label>Unit</label>\n\t\t<md-select ng-model=\"$selectionBar.unit\"\n\t\t           tabindex=\"-1\"\n\t\t           ng-change=\"$selectionBar.toggleUnit.execute($selectionBar.unit)\"\n\t\t           ng-disabled=\"!$selectionBar.toggleUnit.canExecute()\">\n\t\t\t<md-option ng-value=\"unit.key\"\n\t\t\t           ng-repeat=\"unit in $selectionBar.units\"\n\t\t\t           ng-bind=\"unit.title\"></md-option>\n\t\t</md-select>\n\t</md-input-container>\n\n\t<md-input-container>\n\t\t<label>Mode</label>\n\t\t<md-select ng-model=\"$selectionBar.mode\"\n\t\t           tabindex=\"-1\"\n\t\t           ng-change=\"$selectionBar.toggleMode.execute($selectionBar.mode)\"\n\t\t           ng-disabled=\"!$selectionBar.toggleMode.canExecute()\">\n\t\t\t<md-option ng-value=\"mode.key\"\n\t\t\t           ng-repeat=\"mode in $selectionBar.modes\"\n\t\t\t           ng-bind=\"mode.title\"></md-option>\n\t\t</md-select>\n\t</md-input-container>\n\n\t<md-input-container>\n\t\t<label>Selection Count</label>\n\t\t<input ng-model=\"$selectionBar.count\"\n\t\t       disabled>\n\t</md-input-container>\n</div>"

/***/ }),
/* 732 */
/***/ (function(module, exports) {

module.exports = "<div class=\"q-grid-pager\"\n     ng-switch=\"$pager.scroll.mode\">\n\t<div ng-switch-when=\"virtual\">\n\t\t<label class=\"q-grid-page\"\n\t\t       ng-switch=\"::$pager.mode\">\n\t\t\t<span ng-switch-when=\"row\">{{$pager.from}}-{{$pager.to}} of {{$pager.total}}</span>\n\t\t\t<span ng-switch-default>{{$pager.current + 1}} of {{$pager.totalPages}}</span>\n\t\t</label>\n\t</div>\n\t<div ng-switch-default>\n\t\t<label class=\"q-grid-page-size hide-xs\">Rows per page:</label>\n\t\t<md-select aria-label=\"Page Size List\"\n\t\t           tabindex=\"-1\"\n\t\t           class=\"hide-xs q-grid-page-size\"\n\t\t           ng-model=\"$pager.size\">\n\t\t\t<md-option ng-repeat=\"size in $pager.sizeList\"\n\t\t\t           ng-value=\"size\">{{size}}</md-option>\n\t\t</md-select>\n\t\t<label class=\"q-grid-page\"\n\t\t       ng-switch=\"::$pager.mode\">\n\t\t\t<span ng-switch-when=\"row\">{{$pager.from}}-{{$pager.to}} of {{$pager.total}}</span>\n\t\t\t<span ng-switch-default>{{$pager.current + 1}} of {{$pager.totalPages}}</span>\n\t\t</label>\n\t\t<md-button class=\"md-icon-button q-grid-prev-page\"\n\t\t           ng-disabled=\"!$pager.prev.canExecute()\"\n\t\t           ng-click=\"$pager.prev.execute();\"\n\t\t           tabindex=\"-1\">\n\t\t\t<md-icon class=\"q-grid-icon\">keyboard_arrow_left</md-icon>\n\t\t</md-button>\n\t\t<md-button class=\"md-icon-button q-grid-target-page\"\n\t\t           ng-click=\"$pagerPlugin.showTargetPanel($event)\"\n\t\t           tabindex=\"-1\">\n\t\t\t<md-icon class=\"q-grid-icon\">location_searching</md-icon>\n\t\t</md-button>\n\t\t<md-button class=\"md-icon-button q-grid-next-page\"\n\t\t           ng-disabled=\"!$pager.next.canExecute()\"\n\t\t           ng-click=\"$pager.next.execute();\"\n\t\t           tabindex=\"-1\">\n\t\t\t<md-icon class=\"q-grid-icon\">keyboard_arrow_right</md-icon>\n\t\t</md-button>\n\t</div>\n</div>"

/***/ }),
/* 733 */
/***/ (function(module, exports) {

module.exports = "<div class=\"q-grid-pager-target q-grid-popup-panel\"\n     layout=\"column\"\n     flex=\"100\">\n\t<md-card>\n\t\t<md-card-content>\n\t\t\t<md-input-container class=\"q-grid-input-container\">\n\t\t\t\t<input type=\"number\"\n\t\t\t\t       ng-model=\"$pager.target\"\n\t\t\t\t\t   q-grid:focus\t\t\t\t\t   \n\t\t\t\t       ng-min=\"1\"\n\t\t\t\t       ng-max=\"$pager.totalPages\"\n\t\t\t\t\t   ng-step=\"1\"\n\t\t\t\t\t   placeholder=\"Go to page:\" />\n\t\t\t</md-input-container>\n\t\t</md-card-content>\n\t</md-card>\n</div>"

/***/ }),
/* 734 */
/***/ (function(module, exports) {

module.exports = "<div class=\"q-grid-persistence-panel q-grid-popup-panel\"\n     layout=\"column\"\n     flex=\"100\"\n     ng-keydown=\"$persistence.keyDown($event)\">\n\t<md-card>\n\t\t<md-card-header>\n\t\t\t<md-card-title>\n\t\t\t\t<md-card-title-text>\n\t\t\t\t\t<span class=\"md-subhead\">Save/Load</span>\n\t\t\t\t</md-card-title-text>\n\t\t\t\t<md-card-title-actions layout=\"row\"\n\t\t\t\t                       layout-align=\"end center\">\n\t\t\t\t</md-card-title-actions>\n\t\t\t</md-card-title>\n\t\t</md-card-header>\n\t\t<md-card-content>\n\t\t\t<div class=\"flex-none layout-row\">\n\t\t\t\t<div class=\"flex-100\">\n\t\t\t\t\t<md-input-container class=\"q-grid-persistence-title\">\n\t\t\t\t\t\t<label>Save As...</label>\n\t\t\t\t\t\t<input type=\"text\"\n\t\t\t\t\t\t       ng-model=\"$persistence.title\"\n\t\t\t\t\t\t       q-grid:focus\n\t\t\t\t\t\t       q-grid:focus-delay=\"400\" />\n\t\t\t\t\t</md-input-container>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"flex-none\">\n\t\t\t\t\t<md-button class=\"md-primary q-grid-persistence-save\"\n\t\t\t\t\t           md-prevent-menu-close\n\t\t\t\t\t           ng-click=\"$persistence.save.execute()\"\n\t\t\t\t\t           ng-disabled=\"!$persistence.save.canExecute()\">\n\t\t\t\t\t\tSave\n\t\t\t\t\t</md-button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"flex\">\n\t\t\t\t<md-list class=\"md-dense\"\n\t\t\t\t         ng-cloak>\n\t\t\t\t\t<md-list-item class=\"md-2-line q-grid-persistence-blank\"\n\t\t\t\t\t              ng-class=\"{'q-grid-persistence-selected': $persistence.isActive($persistence.blank)}\">\n\t\t\t\t\t\t<div class=\"md-list-item-text\">\n\t\t\t\t\t\t\t<md-button class=\"md-primary\"\n\t\t\t\t\t\t\t           ng-click=\"$persistence.load.execute($persistence.blank)\">\n\t\t\t\t\t\t\t\t<h3>{{::$persistence.blank.title}}</h3>\n\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t<li>{{$persistence.blank.modified | date: 'yyyy/MM/dd h:mm a'}}</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</md-button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<md-tooltip class=\"q-grid-persistence-tooltip\">No settings</md-tooltip>\n\t\t\t\t\t</md-list-item>\n\t\t\t\t\t<md-list-item class=\"md-2-line\"\n\t\t\t\t\t              ng-repeat=\"item in $persistence.items | orderBy: '-modified' track by $index\"\n\t\t\t\t\t              ng-class=\"{'q-grid-persistence-selected': $persistence.isActive(item)}\">\n\t\t\t\t\t\t<div class=\"default-icon\">\n\t\t\t\t\t\t\t<md-icon class=\"q-grid-icon\"\n\t\t\t\t\t\t\t         ng-if=\"item.isDefault\">star</md-icon>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"md-list-item-text\">\n\t\t\t\t\t\t\t<md-button class=\"md-primary\"\n\t\t\t\t\t\t\t           ng-click=\"$persistence.load.execute(item)\"\n\t\t\t\t\t\t\t           ng-if=\"$persistence.state.editItem !== item\">\n\t\t\t\t\t\t\t\t<h3>{{item.title}}</h3>\n\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t<li>{{item.modified | date: 'yyyy/MM/dd h:mm a'}}</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</md-button>\n\t\t\t\t\t\t\t<md-input-container ng-if=\"$persistence.state.editItem === item\">\n\t\t\t\t\t\t\t\t<input ng-blur=\"$persistence.edit.commit.canExecute(item) && $persistence.edit.commit.execute(item)\"\n\t\t\t\t\t\t\t\t       ng-model=\"item.title\"\n\t\t\t\t\t\t\t\t       q-grid:focus/>\n\t\t\t\t\t\t\t</md-input-container>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<md-tooltip class=\"q-grid-persistence-tooltip\">{{::$persistence.stringify(item)}}</md-tooltip>\n\t\t\t\t\t\t<md-menu>\n\t\t\t\t\t\t\t<md-button class=\"md-icon-button q-grid-more\"\n\t\t\t\t\t\t\t           aria-label=\"More\"\n\t\t\t\t\t\t\t           ng-click=\"$mdOpenMenu($event)\">\n\t\t\t\t\t\t\t\t<md-icon class=\"q-grid-icon\">more_vert</md-icon>\n\t\t\t\t\t\t\t</md-button>\n\t\t\t\t\t\t\t<md-menu-content width=\"4\">\n\t\t\t\t\t\t\t\t<md-menu-item>\n\t\t\t\t\t\t\t\t\t<md-button ng-click=\"$persistence.setDefault.execute(item)\"\n\t\t\t\t\t\t\t\t\t           ng-disabled=\"!$persistence.setDefault.canExecute(item)\">\n\t\t\t\t\t\t\t\t\t\t<md-icon class=\"q-grid-icon\"\n\t\t\t\t\t\t\t\t\t\t         md-menu-align-target>star</md-icon>\n\t\t\t\t\t\t\t\t\t\tDefault\n\t\t\t\t\t\t\t\t\t</md-button>\n\t\t\t\t\t\t\t\t</md-menu-item>\n\t\t\t\t\t\t\t\t<md-menu-item>\n\t\t\t\t\t\t\t\t\t<md-button ng-click=\"$persistence.edit.enter.execute(item)\"\n\t\t\t\t\t\t\t\t\t           ng-disabled=\"!$persistence.edit.enter.canExecute(item)\">\n\t\t\t\t\t\t\t\t\t\t<md-icon class=\"q-grid-icon\"\n\t\t\t\t\t\t\t\t\t\t         md-menu-align-target>mode_edit</md-icon>\n\t\t\t\t\t\t\t\t\t\tEdit\n\t\t\t\t\t\t\t\t\t</md-button>\n\t\t\t\t\t\t\t\t</md-menu-item>\n\t\t\t\t\t\t\t\t<md-menu-item>\n\t\t\t\t\t\t\t\t\t<md-button ng-click=\"$persistence.remove.execute(item)\"\n\t\t\t\t\t\t\t\t\t           ng-disabled=\"!$persistence.remove.canExecute(item)\">\n\t\t\t\t\t\t\t\t\t\t<md-icon class=\"q-grid-icon\"\n\t\t\t\t\t\t\t\t\t\t         md-menu-align-target>close</md-icon>\n\t\t\t\t\t\t\t\t\t\tRemove\n\t\t\t\t\t\t\t\t\t</md-button>\n\t\t\t\t\t\t\t\t</md-menu-item>\n\t\t\t\t\t\t\t</md-menu-content>\n\t\t\t\t\t\t</md-menu>\n\t\t\t\t\t</md-list-item>\n\t\t\t\t</md-list>\n\t\t\t</div>\n\t\t</md-card-content>\n\t</md-card>\n</div>"

/***/ }),
/* 735 */
/***/ (function(module, exports) {

module.exports = "<div class=\"q-grid-visibility\">\n\t<label>Visibility:</label>\n\t<ul>\n\t\t<li ng-repeat=\"item in $visibility.items\">\n\t\t\t<label>\n\t\t\t\t<input type=\"checkbox\"\n\t\t\t\t       ng-checked=\"item.value\"\n\t\t\t\t       ng-if=\"$visibility.toggle.canExecute(item)\"\n\t\t\t\t       ng-click=\"$visibility.toggle.execute(item)\" /> {{item.key}}\n\t\t\t</label>\n\t\t\t<ul ng-if=\"item.children.length\">\n\t\t\t\t<li ng-repeat=\"child in item.children\">\n\t\t\t\t\t<label>\n\t\t\t\t\t\t<input type=\"checkbox\"\n\t\t\t\t\t\t       ng-if=\"$visibility.toggle.canExecute(child)\"\n\t\t\t\t\t\t       ng-checked=\"child.value\"\n\t\t\t\t\t\t       ng-click=\"$visibility.toggle.execute(child)\" /> {{child.key}}\n\t\t\t\t\t</label>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</li>\n\t</ul>\n</div>"

/***/ }),
/* 736 */
/***/ (function(module, exports) {

module.exports = "<div class=\"q-grid-title\">\n\t<h2 class=\"md-title\">\n\t\t{{$title.value}}\n\t</h2>\n</div>"

/***/ }),
/* 737 */
/***/ (function(module, exports) {

module.exports = "<q-grid:backdrop on:close=\"$editor.close($event)\">\n</q-grid:backdrop>\n<div class=\"q-grid-editor-content\"\n     q-grid:stop-propagate=\"click\">\n\t<ng-transclude></ng-transclude>\n</div>"

/***/ }),
/* 738 */
/***/ (function(module, exports) {

module.exports = "<md-icon class=\"q-grid-icon q-grid-asc\">arrow_upward</md-icon>\n<md-icon class=\"q-grid-icon q-grid-desc\">arrow_downward</md-icon>\n<ng-transclude></ng-transclude>\n"

/***/ }),
/* 739 */
/***/ (function(module, exports) {

module.exports = "<div class=\"q-grid-backdrop\">\n\t<ng-transclude></ng-transclude>\n</div>"

/***/ }),
/* 740 */
/***/ (function(module, exports) {

module.exports = "<div q-grid-tab-trap-in=\"start\"></div>\n<ng-transclude></ng-transclude>\n<div q-grid-tab-trap-in=\"end\"></div>"

/***/ }),
/* 741 */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),
/* 742 */
/***/ (function(module, exports) {

module.exports = "<ul ng-if=\"$validator.errors\">\n\t<li ng-repeat=\"error in $validator.errors track by $index\"\n\t    ng-if=\"error\">\n\t\t<span>{{error | qgridPretty}}</span>\n\t\t<span ng-if=\"$validator.type === 'array'\">: \"{{$validator.value[$index]}}\"</span>\n\t</li>\n</ul>"

/***/ }),
/* 743 */
/***/ (function(module, exports) {

module.exports = "<div eb-node=\"$expressionBuilderPlugin.node\">\n</div>"

/***/ }),
/* 744 */
/***/ (function(module, exports) {

module.exports = "<span>\n\t<md-autocomplete class=\"condition-builder-autocomplete\"\n\t                 eb-class=\"expression.classes\"\n\t                 eb-class-context=\"expression\"\n\t                 md-items=\"item in expression.options()\"\n\t                 md-selected-item=\"expression.selectedItem\"\n\t                 md-search-text=\"expression.value\"\n\t                 md-search-text-change=\"expression.change()\"\n\t                 md-selected-item-change=\"expression.change()\"\n\t                 md-no-cache=\"true\"\n\t                 md-min-length=\"0\"\n\t                 md-menu-class=\"condition-builder-autocomplete-popup\"\n\t                 md-no-asterisk=\"true\"\n\t                 md-select-on-focus\n\t                 ng-attr-placeholder=\"{{expression.placeholderText}}\"\n\t                 q-grid:autosize=\"input\"\n\t                 show-autocomplete-on-focus=\"expression.options\"\n\t                 ng-style=\"{'width' :  $autosize.width(expression.value) + 'px'}\">\n\t\t<md-item-template>\n\t\t\t<span md-highlight-text=\"expression.value.toString()\"\n\t\t\t      md-highlight-flags=\"^i\">{{ item }}</span>\n\t\t</md-item-template>\n\t</md-autocomplete>\n\t<md-tooltip md-direction=\"bottom\"\n\t            ng-if=\"!expression.isValid()\"\n\t            class=\"autocomplete-tooltip\"\n\t            md-delay=\"2000\">\n\t\t<div ng-switch=\"expression.state[0]\">\n\t\t\t<span ng-switch-when=\"required\">Value is required</span>\n\t\t\t<span ng-switch-when=\"number\">'{{ ::expression.value }}' is not a number</span>\n\t\t\t<span ng-switch-when=\"integer\">'{{ ::expression.value }}' is not a integer</span>\n\t\t\t<span ng-switch-when=\"datetime\">'{{ ::expression.value }}' is not a date</span>\n\t\t</div>\n\t</md-tooltip>\n</span>"

/***/ }),
/* 745 */
/***/ (function(module, exports) {

module.exports = "<md-button ng-if=\"expression.isVisible()\"\n           ng-click=\"expression.click($event)\"\n           class=\"condition-builder-button\"\n           ng-class=\"expression.classes\">\n\t{{expression.text}}\n</md-button>"

/***/ }),
/* 746 */
/***/ (function(module, exports) {

module.exports = "<label class=\"condition-builder-label\"\n       ng-if=\"expression.isVisible()\"\n       eb-class=\"expression.classes\">\n\t{{expression.text}}\n</label>"

/***/ }),
/* 747 */
/***/ (function(module, exports) {

module.exports = "<span>\n    <md-chips class=\"condition-builder-multiselect\"\n              eb-class=\"expression.classes\"\n              eb-class-context=\"expression\"\n              ng-model=\"expression.values\"\n              md-require-match=\"false\">\n        <md-autocomplete md-items=\"item in expression.options()\"\n                         md-selected-item=\"expression.selectedItem\"\n                         md-search-text=\"expression.filter\"\n                         md-no-cache=\"true\"\n                         md-min-length=\"0\"\n                         md-item-text=\"item\"\n                         md-menu-class=\"condition-builder-autocomplete-popup\"\n                         placeholder=\"{{expression.placeholderText}}\">\n            <md-item-template>\n                <span md-highlight-text=\"expression.filter\"\n                      md-highlight-flags=\"^i\">{{ item }}</span>\n            </md-item-template>\n        </md-autocomplete>\n    </md-chips>\n    <md-tooltip ng-if=\"!expression.isValid()\"\n                md-direction=\"bottom\"\n                class=\"multiselect-tooltip\"\n                md-delay=\"2000\">\n        <div ng-switch=\"expression.state[0]\">\n            <span ng-switch-when=\"required\">At least 1 value is required</span>\n            <span ng-switch-when=\"number\">All values must be numbers</span>\n            <span ng-switch-when=\"integer\">All values must be integers</span>\n            <span ng-switch-when=\"datetime\">All values must be dates</span>\n        </div>\n    </md-tooltip>\n</span>"

/***/ }),
/* 748 */
/***/ (function(module, exports) {

module.exports = "<md-button ng-if=\"expression.isVisible()\"\n           ng-click=\"expression.click($event)\"\n           class=\"condition-builder-button md-icon-button\">\n\t<md-icon>\n\t\t{{::expression.icon}}\n\t</md-icon>\n</md-button>"

/***/ }),
/* 749 */
/***/ (function(module, exports) {

module.exports = "<input class=\"condition-builder-input\"\n       ng-class=\"expression.classes\"\n       ng-model=\"expression.value\"\n       type=\"text\"\n       placeholder=\"{{expression.placeholderText}}\"\n       ng-change=\"expression.change()\"\n       ng-if=\"expression.isVisible()\">"

/***/ }),
/* 750 */
/***/ (function(module, exports) {

module.exports = "<md-select class=\"condition-builder-select\"\n           ng-class=\"expression.classes\"\n           ng-model=\"expression.value\"\n           ng-model-options=\"{ trackBy: 'expression.trackBy($value)' }\"\n           md-on-close=\"expression.change($event);\"\n           ng-if=\"expression.isVisible()\"\n           placeholder=\"{{ expression.placeholderText }}\"\n           md-on-open=\"expression.onOpen()\"\n           aria-label=\"Select\"\n           ng-switch=\"!!expression.trackBy\">\n\t<md-option ng-switch-when=\"true\"\n\t           class=\"condition-builder-option\"\n\t           ng-value=\"option\"\n\t           ng-repeat=\"option in (expression.options || expression.getOptions()) track by expression.trackBy(option)\">\n\t\t<md-icon ng-if=\"expression.getIcon\">{{::expression.getIcon(option)}}</md-icon>\n\t\t{{::((expression.getLabel && expression.getLabel(option)) || option)}}\n\t</md-option>\n\t<md-option ng-switch-default\n\t           class=\"condition-builder-option\"\n\t           ng-value=\"option\"\n\t           ng-repeat=\"option in (expression.options || expression.getOptions())\">\n\t\t<md-icon ng-if=\"expression.getIcon\">{{::expression.getIcon(option)}}</md-icon>\n\t\t{{::((expression.getLabel && expression.getLabel(option)) || option)}}\n\t</md-option>\n</md-select>"

/***/ }),
/* 751 */
/***/ (function(module, exports) {

module.exports = "<md-input-container ng-if=\"$cell.column.canFilter\"\n                    md-no-float\n                    class=\"md-block\">\n\t<input type=\"text\"\n\t       ng-init=\"search=''\"\n\t       ng-model=\"search\"\n\t       ng-change=\"$view.head.filter.execute($cell.column.model, search)\"\n\t       placeholder=\"Filter {{::$cell.column.title}}\" />\n</md-input-container>"

/***/ }),
/* 752 */
/***/ (function(module, exports) {

module.exports = "<q-grid:cell-editor class=\"q-grid-text-area q-grid-editor q-grid-position\"\n                    on:close=\"$view.edit.cell.exit.execute($cell)\"\n                    q-grid:position=\"td\">\n\t<md-input-container class=\"q-grid-input-container\">\n\t\t<textarea type=\"text\"\n\t\t          rows=\"8\"\n\t\t          cols=\"45\"\n\t\t          wrap=\"soft\"\n\t\t          q-grid:focus\n\t\t          md-maxlength=\"{{::$cell.column.maxLength}}\"\n\t\t          ng-model=\"$view.edit.cell.value\" />\n\t</md-input-container>\n</q-grid:cell-editor>"

/***/ }),
/* 753 */
/***/ (function(module, exports) {

module.exports = "{{$cell.label | number: $cell.column.format}}"

/***/ }),
/* 754 */
/***/ (function(module, exports) {

module.exports = "<q-grid:cell-editor class=\"q-grid-number q-grid-editor q-grid-position q-grid-text\"\n                    on:close=\"$view.edit.cell.exit.execute($cell)\"\n                    q-grid:position=\"td\">\n\t<md-input-container class=\"q-grid-input-container\">\n\t\t<input type=\"number\"\n\t\t       q-grid:focus\n\t\t       ng-model=\"$view.edit.cell.value\" />\n\t</md-input-container>\n\t<q-grid:validator class=\"q-grid-validator\"\n\t                  key=\"{{::$cell.column.key}}\"\n\t                  type=\"{{::$cell.column.type}}\"\n\t                  value=\"$view.edit.cell.value\">\n\t</q-grid:validator>\n</q-grid:cell-editor>"

/***/ }),
/* 755 */
/***/ (function(module, exports) {

module.exports = "<md-icon class=\"q-grid-icon\" ng-if=\"$cell.value === $cell.column.trueValue\">check</md-icon>\n<md-icon class=\"q-grid-icon\" ng-if=\"$cell.column.isIndeterminate($cell.value)\">remove</md-icon>"

/***/ }),
/* 756 */
/***/ (function(module, exports) {

module.exports = "<div ng-controller=\"Body.Cell.Bool.Edit.Controller as $boolEdit\">\n\t<md-checkbox aria-label=\"Bool cell edit\"\n\t\t\t\t class=\"md-primary q-grid-checkbox\"\n\t\t\t\t q-grid:focus\n\t\t\t\t ng-blur=\"$view.edit.cell.commit.execute($cell)\"\n\t\t\t\t md-indeterminate=\"$boolEdit.isIndeterminate()\"\n\t\t\t\t ng-checked=\"$boolEdit.isChecked()\"\n\t\t\t\t ng-true-value=\"{{::$boolEdit.trueValue()}}\"\n\t\t\t\t ng-false-value=\"{{::$boolEdit.falseValue()}}\"\n\t\t\t\t md-no-ink\n\t\t\t\t ng-model=\"$view.edit.cell.value\">\n\t</md-checkbox>\n</div>"

/***/ }),
/* 757 */
/***/ (function(module, exports) {

module.exports = "{{$cell.label | date: $cell.column.format || 'yyyy/MM/dd'}}"

/***/ }),
/* 758 */
/***/ (function(module, exports) {

module.exports = "<q-grid:cell-editor class=\"q-grid-date q-grid-editor q-grid-position  q-grid-text\"\n\t\t\t\t\ton:close=\"$view.edit.cell.exit.execute($cell)\"\n\t\t\t\t\tq-grid:position=\"td\">\n\t<md-datepicker ng-model=\"$view.edit.cell.value\"\n\t\t\t\t   md-debounce-interval=\"0\"\n\t\t\t\t   q-grid:focus=\"input\">\n\t</md-datepicker>\n</q-grid:cell-editor>"

/***/ }),
/* 759 */
/***/ (function(module, exports) {

module.exports = "{{$cell.value ? '******' : ''}}"

/***/ }),
/* 760 */
/***/ (function(module, exports) {

module.exports = "<q-grid:cell-editor class=\"q-grid-password q-grid-editor q-grid-position q-grid-text\"\n                    on:close=\"$view.edit.cell.exit.execute($cell)\"\n                    q-grid:position=\"td\">\n\t<md-input-container class=\"q-grid-input-container\">\n\t\t<input type=\"password\"\n\t\t       q-grid:focus\n\t\t       ng-model=\"$view.edit.cell.value\" />\n\t</md-input-container>\n</q-grid:cell-editor>"

/***/ }),
/* 761 */
/***/ (function(module, exports) {

module.exports = "<ul q-grid:animate=\"false\">\n\t<li ng-repeat=\"item in $cell.value track by $index\"\n\t\tng-bind=\"$cell.column.itemLabel(item)\"></li>\n</ul>"

/***/ }),
/* 762 */
/***/ (function(module, exports) {

module.exports = "<q-grid:cell-editor class=\"q-grid-array q-grid-editor q-grid-position\"\n\t\t\t\t\ton:close=\"$view.edit.cell.exit.execute($cell)\"\n\t\t\t\t\tq-grid:position=\"td\">\n\t<div class=\"q-grid-array-view\"\n\t\t ng-controller=\"Body.Cell.Array.Edit.Controller as $arrayEdit\">\n\t\t<md-chips ng-model=\"$view.edit.cell.value\"\n\t\t\t\t  md-removable=\"'true'\"\n\t\t\t\t  md-enable-chip-edit=\"'true'\"\n\t\t\t\t  q-grid:focus=\"input\">\n\t\t\t<input type=\"text\"\n\t\t\t\t   ng-model=\"$arrayEdit.text\"\n\t\t\t\t   ng-keydown=\"$arrayEdit.keyDown($event)\"\n\t\t\t\t   placeholder=\"Enter {{::$cell.column.title}}...\">\n\t\t</md-chips>\n\t</div>\n\t<q-grid:validator class=\"q-grid-validator\"\n\t\t\t\t\t  key=\"{{::$cell.column.key}}\"\n\t\t\t\t\t  type=\"{{::$cell.column.type}}\"\n\t\t\t\t\t  value=\"$view.edit.cell.value\">\n\t</q-grid:validator>\n</q-grid:cell-editor>"

/***/ }),
/* 763 */
/***/ (function(module, exports) {

module.exports = "<a tabindex=\"-1\"\n   ng-href=\"mailto:{{$cell.value}}\"\n   ng-bind=\"$cell.label || $cell.value\"></a>\n<md-button ng-if=\"$view.edit.cell.canEdit($cell)\"\n\t\t   class=\"md-icon-button q-grid-email-edit q-grid-edit-trigger\"\n\t\t   aria-label=\"email\"\n\t\t   ng-disabled=\"!$view.edit.cell.enter.canExecute($cell)\"\n\t\t   ng-click=\"$view.edit.cell.enter.execute($cell)\"\n\t\t   tabindex=\"-1\">\n\t<md-icon class=\"q-grid-icon\">edit</md-icon>\n\t<md-tooltip>Edit Email</md-tooltip>\n</md-button>"

/***/ }),
/* 764 */
/***/ (function(module, exports) {

module.exports = "<q-grid:cell-editor class=\"q-grid-email q-grid-editor q-grid-position\"\n\t\t\t\t\ton:close=\"$view.edit.cell.exit.execute($cell)\"\n\t\t\t\t\tq-grid:position=\"td\">\n\t<q-grid:tab-trap>\n\t\t<div layout=\"column\"\n\t\t\t class=\"layout-column q-grid-email-fields\"\n\t\t\t flex>\n\t\t\t<md-input-container class=\"q-grid-input-container\"\n\t\t\t\t\t\t\t\tng-if=\"$cell.column.label !== null\">\n\t\t\t\t<label>Label</label>\n\t\t\t\t<input type=\"text\"\n\t\t\t\t\t   ng-model=\"$view.edit.cell.label\" />\n\t\t\t</md-input-container>\n\t\t\t<md-input-container class=\"q-grid-input-container\">\n\t\t\t\t<label>Email</label>\n\t\t\t\t<input type=\"email\"\n\t\t\t\t\t   q-grid:focus\n\t\t\t\t\t   ng-model=\"$view.edit.cell.value\" />\n\t\t\t</md-input-container>\n\t\t</div>\n\t</q-grid:tab-trap>\n\t<q-grid:validator class=\"q-grid-validator\"\n\t\t\t\t\t  key=\"{{::$cell.column.key}}\"\n\t\t\t\t\t  type=\"{{::$cell.column.type}}\"\n\t\t\t\t\t  value=\"$view.edit.cell.value\">\n\t</q-grid:validator>\n</q-grid:cell-editor>"

/***/ }),
/* 765 */
/***/ (function(module, exports) {

module.exports = "<div ng-switch=\"$view.selection.mode\">\n\t<div ng-switch-when=\"single\"\n\t     ng-switch=\"!!$view.selection.items.length\">\n\t\t<md-icon class=\"q-grid-icon\"\n\t\t         ng-switch-when=\"true\">check</md-icon>\n\t\t<md-icon class=\"q-grid-icon\"\n\t\t         ng-switch-default>remove</md-icon>\n\t</div>\n\t<div ng-switch-default>\n\t\t<md-checkbox md-indeterminate=\"$view.selection.isIndeterminate()\"\n\t\t             ng-checked=\"$view.selection.state()\"\n\t\t             ng-click=\"$view.selection.toggleRow.execute()\"\n\t\t             tabindex=\"-1\"\n\t\t             q-grid:prevent-default=\"mousedown\"\n\t\t             md-no-ink\n\t\t             aria-label=\"Selection\"\n\t\t             class=\"q-grid-checkbox\">\n\t\t</md-checkbox>\n\t</div>\n</div>"

/***/ }),
/* 766 */
/***/ (function(module, exports) {

module.exports = "<md-checkbox md-indeterminate=\"$view.selection.isIndeterminate($row)\"\n             ng-checked=\"$view.selection.state($row)\"\n             q-grid:prevent-default=\"mousedown\"\n             ng-click=\"$view.selection.toggleRow.execute($row)\"\n             tab-index=\"-1\"\n             aria-label=\"Selection\"\n             md-no-ink\n             class=\"q-grid-checkbox\">\n</md-checkbox>"

/***/ }),
/* 767 */
/***/ (function(module, exports) {

module.exports = "<div ng-style=\"{'padding-left': $view.group.offset($cell.row) + 'px'}\">\n\t<md-button ng-mouseup=\"$view.group.toggleStatus.execute($cell.row)\"\n\t           ng-if=\"$view.group.toggleStatus.canExecute($cell.row)\"\n\t           ng-switch=\"$view.group.status($cell.row)\"\n\t           tabindex=\"-1\"\n\t           class=\"md-icon-button\">\n\t\t<span>\n\t\t\t<md-icon class=\"q-grid-icon\"\n\t\t\t         ng-switch-when=\"expand\">\n\t\t\t\tarrow_drop_down\n\t\t\t</md-icon>\n\t\t\t<md-icon class=\"q-grid-icon q-grid-arrow-right\"\n\t\t\t         ng-switch-when=\"collapse\">\n\t\t\t\tarrow_drop_up\n\t\t\t</md-icon>\n\t\t</span>\n\t</md-button>\n\t<span class=\"q-grid-group-label\">{{$view.group.value($cell.row)}}</span>\n\t<span class=\"q-grid-group-count\"\n\t      ng-if=\"$view.group.toggleStatus.canExecute($cell.row)\">\n\t\t({{$view.group.count($cell.row)}})\n\t</span>\n</div>"

/***/ }),
/* 768 */
/***/ (function(module, exports) {

module.exports = "<div>\n\t<md-tooltip md-delay=\"1000\">\n\t\t{{$cell.column.title}}\n\t</md-tooltip>\n\t{{$cell.column.title}}\n</div>"

/***/ }),
/* 769 */
/***/ (function(module, exports) {

module.exports = "{{$view.pivot.value($cell.rowIndex, $cell.columnIndex)}}"

/***/ }),
/* 770 */
/***/ (function(module, exports) {

module.exports = "{{$cell.rowIndex + 1}}"

/***/ }),
/* 771 */
/***/ (function(module, exports) {

module.exports = "<div ng-if=\"::$view.row.canDrag\"\n     q-grid:drag=\"$view.row.transfer($cell.rowIndex)\"\n     q-grid:drop=\"$view.row.transfer($cell.rowIndex)\"\n     q-grid:on-drop=\"$view.row.drop.execute($event)\"\n     q-grid:can-drop=\"$view.row.drop.canExecute\"\n     q-grid:can-drag=\"$view.row.drag.canExecute\"\n     class=\"q-grid-draggable\">\n    <md-icon class=\"q-grid-icon\">reorder</md-icon>\n</div>\n<div ng-if=\"::$view.row.canResize\"\n     q-grid:drag=\"$view.row.transfer($cell.row)\"\n     q-grid:resize=\"$cell.row\"\n     q-grid:resize-path=\"rows\"\n     q-grid:can-resize=\"$view.row.resize.canExecute\"\n     class=\"q-grid-resizable\">\n</div>"

/***/ }),
/* 772 */
/***/ (function(module, exports) {

module.exports = "<md-icon class=\"q-grid-icon\">more_vert</md-icon>"

/***/ }),
/* 773 */
/***/ (function(module, exports) {

module.exports = "<md-menu ng-controller=\"Body.Cell.Row.Options.Controller as $ctrl\">\n\t<md-button aria-label=\"Open row menu\"\n\t           class=\"md-icon-button\"\n\t           q-grid:raise=\"click\"\n\t           ng-click=\"$ctrl.openMenu($mdMenu, $event)\">\n\t\t<md-icon class=\"q-grid-icon\">more_vert</md-icon>\n\t</md-button>\n\t<md-menu-content width=\"4\">\n\t\t<md-menu-item ng-repeat=\"$action in $cell.column.editorOptions.actions\">\n\t\t\t<md-button ng-click=\"$action.command.execute($cell)\"\n\t\t\t           ng-disabled=\"!$action.command.canExecute($cell)\">\n\t\t\t\t<md-icon class=\"q-grid-icon\"\n\t\t\t\t         ng-bind=\"$action.icon\">\n\t\t\t\t</md-icon>\n\t\t\t\t{{$action.title}}\n\t\t\t</md-button>\n\t\t</md-menu-item>\n\t</md-menu-content>\n</md-menu>"

/***/ }),
/* 774 */
/***/ (function(module, exports) {

module.exports = "<md-button ng-mouseup=\"$view.rowDetails.toggleStatus.execute($cell.row)\"\n           ng-if=\"$view.rowDetails.toggleStatus.canExecute($cell.row)\"\n           tabindex=\"-1\"\n\t\t   class=\"md-icon-button\"\n\t\t   aria-label=\"Expand\"\n           ng-switch=\"$view.rowDetails.status($cell.row)\">\n\t<span>\n\t\t<md-icon class=\"q-grid-icon\"\n\t\t         ng-switch-when=\"expand\">\n\t\t\tarrow_drop_down\n\t\t</md-icon>\n\t\t<md-icon class=\"q-grid-icon q-grid-arrow-right\"\n\t\t         ng-switch-when=\"collapse\">\n\t\t\tarrow_drop_up\n\t\t</md-icon>\n\t</span>\n</md-button>"

/***/ }),
/* 775 */
/***/ (function(module, exports) {

module.exports = "<div>\n\t<ul>\n\t\t<li ng-repeat=\"column in $view.body.columns($cell.row.item, null) track by column.model.key\"\n\t\t    ng-if=\"column.model.class === 'data'\">\n\t\t\t{{column.model.title}}: {{$view.body.value($cell.row.item, column.model)}}\n\t\t</li>\n\t</ul>\n</div>"

/***/ }),
/* 776 */
/***/ (function(module, exports) {

module.exports = "{{$cell.label | date: $cell.column.format || 'h:mm a'}}"

/***/ }),
/* 777 */
/***/ (function(module, exports) {

module.exports = "<q-grid:cell-editor class=\"q-grid-time q-grid-editor q-grid-position q-grid-text\"\n                    on:close=\"$view.edit.cell.exit.execute($cell)\"\n                    q-grid:position=\"td\">\n\t<md-input-container class=\"q-grid-input-container\">\n\t\t<input type=\"time\"\n\t\t       q-grid:focus\n\t\t       ng-model=\"$view.edit.cell.value\" />\n\t</md-input-container>\n</q-grid:cell-editor>"

/***/ }),
/* 778 */
/***/ (function(module, exports) {

module.exports = "<a tabindex=\"-1\"\n   ng-href=\"{{$cell.value}}\"\n   ng-bind=\"$cell.label || $cell.value\"></a>\n<md-button ng-if=\"$view.edit.cell.canEdit($cell)\"\n           class=\"md-icon-button q-grid-url-edit q-grid-edit-trigger\"\n           aria-label=\"url\"\n           ng-disabled=\"!$view.edit.cell.enter.canExecute($cell)\"\n           ng-click=\"$view.edit.cell.enter.execute($cell)\"\n           tabindex=\"-1\">\n\t<md-icon class=\"q-grid-icon\">edit</md-icon>\n\t<md-tooltip>Edit Url</md-tooltip>\n</md-button>"

/***/ }),
/* 779 */
/***/ (function(module, exports) {

module.exports = "<q-grid:cell-editor class=\"q-grid-url q-grid-editor q-grid-position\"\n                    on:close=\"$view.edit.cell.exit.execute($cell)\"\n                    q-grid:position=\"td\">\n\t<q-grid:tab-trap>\n\t\t<div layout=\"column\"\n\t\t     class=\"q-grid-url-fields\"\n\t\t     flex>\n\t\t\t<md-input-container class=\"q-grid-input-container\"\n\t\t\t                    ng-if=\"$cell.column.label !== null\">\n\t\t\t\t<label>Label</label>\n\t\t\t\t<input type=\"text\"\n\t\t\t\t       q-grid:focus\n\t\t\t\t       ng-model=\"$view.edit.cell.label\" />\n\t\t\t</md-input-container>\n\t\t\t<md-input-container class=\"q-grid-input-container\">\n\t\t\t\t<label>Url</label>\n\t\t\t\t<input type=\"url\"\n\t\t\t\t       ng-model=\"$view.edit.cell.value\" />\n\t\t\t</md-input-container>\n\t\t</div>\n\t</q-grid:tab-trap>\n</q-grid:cell-editor>"

/***/ }),
/* 780 */
/***/ (function(module, exports) {

module.exports = "<a tabindex=\"-1\"\n   ng-href=\"{{$cell.value}}\"\n   ng-bind=\"$cell.label || $cell.value\"></a>\n<md-button ng-if=\"$view.edit.cell.canEdit($cell)\"\n           class=\"md-icon-button q-grid-file-edit q-grid-edit-trigger\"\n           aria-label=\"file-edit\"\n           ng-disabled=\"!$view.edit.cell.enter.canExecute($cell)\"\n           ng-click=\"$view.edit.cell.enter.execute($cell)\"\n           tabindex=\"-1\">\n\t<md-icon class=\"q-grid-icon\">file_upload</md-icon>\n\t<md-tooltip>Upload</md-tooltip>\n</md-button>"

/***/ }),
/* 781 */
/***/ (function(module, exports) {

module.exports = "<img ng-if=\"$cell.value\" ng-src=\"{{$cell.value}}\"/>\n<md-icon class=\"q-grid-icon\" ng-if=\"!$cell.value\">account_circle</md-icon>"

/***/ }),
/* 782 */
/***/ (function(module, exports) {

module.exports = "<span ng-bind=\"$cell.label\"></span>\n<md-button ng-if=\"$view.edit.cell.canEdit($cell)\"\n           class=\"md-icon-button q-grid-reference-edit q-grid-edit-trigger\"\n           aria-label=\"reference-edit\"\n           ng-disabled=\"!$view.edit.cell.enter.canExecute($cell)\"\n           ng-click=\"$view.edit.cell.enter.execute($cell)\"\n           tabindex=\"-1\">\n\t<md-icon class=\"q-grid-icon\">search</md-icon>\n\t<md-tooltip>Edit reference</md-tooltip>\n</md-button>"

/***/ }),
/* 783 */
/***/ (function(module, exports) {

module.exports = "<q-grid:cell-editor class=\"q-grid-reference q-grid-editor q-grid-position\"\n                    on:close=\"$view.edit.cell.cancel.execute($cell, $event)\"\n                    q-grid:position=\"td\">\n\t<div ng-cloak\n\t     class=\"layout-column q-grid-reference-content\"\n\t     ng-controller=\"Body.Cell.Reference.Edit.Controller as $referenceEdit\">\n\t\t<div class=\"flex\">\n\t\t\t<q-grid class=\"q-grid-embed\"\n\t\t\t        header=\"{{::$cell.column.title}}\"\n\t\t\t        model=\"$referenceEdit.gridModel\"\n\t\t\t        q-grid:autofocus>\n\t\t\t\t<q-grid:columns>\n\t\t\t\t\t<q-grid:column type=\"select\"\n\t\t\t\t\t               pin=\"left\">\n\t\t\t\t\t</q-grid:column>\n\t\t\t\t</q-grid:columns>\n\t\t\t\t<q-grid:toolbar>\n\t\t\t\t\t<q-grid:template for=\"top\">\n\t\t\t\t\t\t<q-grid:title></q-grid:title>\n\t\t\t\t\t\t<div class=\"q-grid-progress\">\n\t\t\t\t\t\t\t<q-grid:progress></q-grid:progress>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</q-grid:template>\n\t\t\t\t</q-grid:toolbar>\n\t\t\t</q-grid>\n\t\t</div>\n\t\t<div class=\"flex-none q-grid-editor-actions\">\n\t\t\t<md-button ng-click=\"$referenceEdit.cancel.execute($cell, $event)\">Cancel</md-button>\n\t\t\t<md-button class=\"md-primary\"\n\t\t\t           ng-click=\"$referenceEdit.commit.execute($cell, $event)\">Save</md-button>\n\t\t</div>\n\t</div>\n</q-grid:cell-editor>"

/***/ }),
/* 784 */
/***/ (function(module, exports) {

module.exports = "<span ng-bind=\"$cell.label | currency : $cell.column.symbol : 2\"></span>"

/***/ }),
/* 785 */
/***/ (function(module, exports) {

module.exports = "<span ng-if=\"$cell.column.aggregation\">{{$cell.column.title}}: </span>\n<span ng-bind=\"$cell.value | currency : $cell.column.symbol : 2\"></span>"

/***/ }),
/* 786 */
/***/ (function(module, exports) {

module.exports = "<q-grid:cell-editor class=\"q-grid-currency q-grid-editor q-grid-position q-grid-text\"\n\t\t\t\t\ton:close=\"$view.edit.cell.exit.execute($cell)\"\n\t\t\t\t\tq-grid:position=\"td\">\n\t<md-input-container class=\"q-grid-input-container\">\n\t\t<input type=\"number\"\n\t\t\t   q-grid:focus\n\t\t\t   ng-model=\"$view.edit.cell.value\" />\n\t</md-input-container>\n\t<q-grid:validator class=\"q-grid-validator\"\n\t\t\t\t\t  key=\"{{::$cell.column.key}}\"\n\t\t\t\t\t  type=\"{{::$cell.column.type}}\"\n\t\t\t\t\t  value=\"$view.edit.cell.value\">\n\t</q-grid:validator>\n</q-grid:cell-editor>"

/***/ }),
/* 787 */
/***/ (function(module, exports) {

module.exports = "<q-grid:cell-editor class=\"q-grid-autocomplete q-grid-editor q-grid-position q-grid-text\"\n\t\t\t\t\ton:close=\"$view.edit.cell.exit.execute($cell)\"\n\t\t\t\t\tq-grid:position=\"td\">\n\t<md-autocomplete md-autofocus\n\t\t\t\t\t placeholder=\"Pick a {{::$cell.column.title}}\"\n\t\t\t\t\t q-grid:raise=\"focus\"\n\t\t\t\t\t md-selected-item=\"$view.edit.cell.value\"\n\t\t\t\t\t ng-model=\"$view.edit.cell.value\"\n\t\t\t\t\t md-search-text=\"searchText\"\n\t\t\t\t\t md-search-text-change=\"$view.edit.cell.fetch.run($cell.row, searchText)\"\n\t\t\t\t\t md-items=\"item in $view.edit.cell.fetch.busy\"\n\t\t\t\t\t md-item-text=\"item\"\n\t\t\t\t\t md-menu-class=\"q-grid-autocomplete-menu\"\n\t\t\t\t\t md-escape-options=\"none\"\n\t\t\t\t\t md-clear-button=\"false\">\n\t\t<md-item-template>\n\t\t\t<span md-highlight-text=\"searchText\">{{item}}</span>\n\t\t</md-item-template>\n\t</md-autocomplete>\n</q-grid:cell-editor>"

/***/ }),
/* 788 */
/***/ (function(module, exports) {

module.exports = "<md-select q-grid:raise=\"click\"\n\t\t   ng-model=\"$view.edit.cell.value\"\n\t\t   placeholder=\"Select a value\"\n\t\t   md-on-open=\"$view.edit.cell.fetch.busy\"\n\t\t   md-on-close=\"$view.edit.cell.commit.execute($cell)\">\n\t<md-option ng-value=\"option\"\n\t\t\t   q-grid:raise=\"focus\"\n\t\t\t   ng-repeat=\"option in $view.edit.cell.fetch.result\">{{::$view.edit.cell.editor.getLabel(option)}}\n\t</md-option>\n</md-select>"

/***/ }),
/* 789 */
/***/ (function(module, exports) {

module.exports = "<div class=\"q-grid-date\">\n\t<md-input-container>\n\t\t<label ng-bind=\"$editor.title\"></label>\n\t\t<md-datepicker ng-model=\"$editor.value\"\n\t\t               md-placeholder=\"Enter date\"\n\t\t               md-hide-icons=\"calendar\">\n\t\t</md-datepicker>\n\t</md-input-container>\n</div>"

/***/ }),
/* 790 */
/***/ (function(module, exports) {

module.exports = "<div class=\"q-grid-edit-form-bool\"\n     ng-controller=\"Body.Cell.Bool.Edit.Controller as $boolEdit\">\n\t<md-checkbox aria-label=\"Bool cell edit\"\n\t             class=\"md-primary\"\n\t             md-indeterminate=\"$boolEdit.isIndeterminate()\"\n\t             ng-checked=\"$boolEdit.isChecked()\"\n\t             ng-true-value=\"{{::$boolEdit.trueValue()}}\"\n\t             ng-false-value=\"{{::$boolEdit.falseValue()}}\"\n\t             md-no-ink\n\t             ng-model=\"$editor.value\">\n\t\t{{$editor.title}}\n\t</md-checkbox>\n</div>"

/***/ }),
/* 791 */
/***/ (function(module, exports) {

module.exports = "<h4 class=\"md-title\"\n    style=\"margin: 0\"\n    ng-bind=\"$editor.title\">\n</h4>\n<div ng-cloak\n     layout=\"column\"\n     class=\"q-grid-embed\"\n     ng-controller=\"Body.Cell.Reference.Edit.Controller as $ctrl\">\n\t<q-grid class=\"q-grid-edit-form-reference\"\n\t        model=\"$ctrl.gridModel\">\n\t\t<q-grid:columns>\n\t\t</q-grid:columns>\n\t\t<q-grid:toolbar>\n\t\t\t<q-grid:template for=\"top\">\n\t\t\t\t<div class=\"q-grid-progress\">\n\t\t\t\t\t<q-grid:progress></q-grid:progress>\n\t\t\t\t</div>\n\t\t\t</q-grid:template>\n\t\t</q-grid:toolbar>\n\t</q-grid>\n</div>"

/***/ }),
/* 792 */
/***/ (function(module, exports) {

module.exports = "<div ng-cloak\n     class=\"q-grid-url\">\n\t<h4 class=\"md-title\"\n\t    style=\"margin: 0 0 15px 0;\"\n\t    ng-bind=\"$editor.title\"></h4>\n\t<div layout=\"column\"\n\t     class=\"q-grid-url-fields\"\n\t     flex>\n\t\t<md-input-container ng-if=\"$editor.label !== null\">\n\t\t\t<label>Label</label>\n\t\t\t<input type=\"text\"\n\t\t\t       ng-model=\"$editor.label\" />\n\t\t</md-input-container>\n\t\t<md-input-container>\n\t\t\t<label>Url</label>\n\t\t\t<input type=\"url\"\n\t\t\t       ng-model=\"$editor.value\" />\n\t\t</md-input-container>\n\t</div>\n</div>"

/***/ }),
/* 793 */
/***/ (function(module, exports) {

module.exports = "<div class=\"q-grid-text-area\">\n\t<label ng-bind=\"$editor.title\"></label>\n\t<md-input-container>\n\t\t<textarea type=\"text\"\n\t\t          rows=\"4\"\n\t\t          cols=\"45\"\n\t\t          wrap=\"soft\"\n\t\t          md-maxlength=\"{{::$editor.column.maxLength}}\"\n\t\t          ng-model=\"$editor.value\" />\n\t</md-input-container>\n</div>"

/***/ }),
/* 794 */
/***/ (function(module, exports) {

module.exports = "<div class=\"q-grid-text\">\n\t<md-input-container>\n\t\t<label ng-bind=\"$editor.title\"></label>\n\t\t<input type=\"password\"\n\t\t       md-maxlength=\"{{::$editor.column.maxLength}}\"\n\t\t       ng-model=\"$editor.value\" />\n\t</md-input-container>\n</div>"

/***/ }),
/* 795 */
/***/ (function(module, exports) {

module.exports = "<div ng-cloak\n     class=\"q-grid-array\">\n\t<h2 class=\"md-title\"\n\t    style=\"margin: 0 0 5px 0;\">Edit {{::$editor.title}}</h2>\n\t<div class=\"q-grid-array-view q-grid-edit-form-array\">\n\t\t<md-chips ng-model=\"$editor.value\"\n\t\t          md-removable=\"'true'\"\n\t\t          md-enable-chip-edit=\"'true'\"\n\t\t          placeholder=\"Enter a {{::$editor.title}}...\">\n\t\t</md-chips>\n\t</div>\n</div>"

/***/ }),
/* 796 */
/***/ (function(module, exports) {

module.exports = "<div ng-cloak\n     class=\"q-grid-email\">\n\t<h2 class=\"md-title\"\n\t    style=\"margin: 0 0 15px 0;\">Edit {{::$editor.title}}</h2>\n\t<div layout=\"column\"\n\t     class=\"q-grid-email-fields\"\n\t     flex>\n\t\t<md-input-container ng-if=\"$editor.label !== null\">\n\t\t\t<label>Label</label>\n\t\t\t<input type=\"text\"\n\t\t\t       ng-model=\"$editor.label\" />\n\t\t</md-input-container>\n\t\t<md-input-container>\n\t\t\t<label>Email</label>\n\t\t\t<input type=\"email\"\n\t\t\t       ng-model=\"$editor.value\" />\n\t\t</md-input-container>\n\t</div>\n</div>"

/***/ }),
/* 797 */
/***/ (function(module, exports) {

module.exports = "<div class=\"q-grid-text\">\n\t<md-input-container>\n\t\t<label ng-bind=\"$editor.title\"></label>\n\t\t<input type=\"time\"\n\t\t       ng-model=\"$editor.value\" />\n\t</md-input-container>\n</div>"

/***/ })
/******/ ]);