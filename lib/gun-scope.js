(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ramda"), require("zalgo-promise"));
	else if(typeof define === 'function' && define.amd)
		define("gun-scope", ["ramda", "zalgo-promise"], factory);
	else if(typeof exports === 'object')
		exports["gun-scope"] = factory(require("ramda"), require("zalgo-promise"));
	else
		root["gun-scope"] = factory(root["ramda"], root["zalgo-promise"]);
})(typeof self !== "undefined" ? self : this, function(__WEBPACK_EXTERNAL_MODULE_ramda__, __WEBPACK_EXTERNAL_MODULE_zalgo_promise__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.query = exports.scope = exports.now = exports.nowOr = exports.resolve = exports.all = exports.Promise = void 0;

var _ramda = __webpack_require__(/*! ramda */ "ramda");

var _zalgoPromise = __webpack_require__(/*! zalgo-promise */ "zalgo-promise");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var Promise = _zalgoPromise.ZalgoPromise;
exports.Promise = Promise;
var all = _zalgoPromise.ZalgoPromise.all,
    resolve = _zalgoPromise.ZalgoPromise.resolve;
exports.resolve = resolve;
exports.all = all;

var nodeKeys = function nodeKeys(obj) {
  return Object.keys(obj || {}).filter(function (key) {
    return key && key !== "_" && key !== "#";
  });
};

var nowOr = (0, _ramda.curry)(function (defaultValue, promise) {
  var result;
  var resolved;
  promise.then(function (res) {
    resolved = true;
    result = res;
  });
  return resolved ? result : defaultValue;
});
exports.nowOr = nowOr;
var now = nowOr(undefined);
exports.now = now;

var node = function node(scope, soul) {
  return new _zalgoPromise.ZalgoPromise(function (ok, fail) {
    var known = scope.known(soul);
    if (typeof known !== "undefined") ok(known);
    scope.fetch(soul).then(function () {
      return scope.known(soul);
    }).then(ok).catch(fail);
  });
};

var edge = function edge(scope, key, parentaccess) {
  return parentaccess.then(function (data) {
    var soul = (0, _ramda.path)([key, "#"], data);
    var val = (0, _ramda.prop)(key, data);
    return soul ? scope.get(soul).then() : val;
  });
};

var access = function access(scope, key) {
  var paccess = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  if (!key || key === []) throw new Error("bad key ".concat(key));
  var thisaccess;
  var accesses = {};

  var get = function get(gKey) {
    return accesses[gKey] || (accesses[gKey] = access(scope, gKey, thisaccess));
  };

  var then = function then(fn) {
    return (paccess ? edge : node)(scope, key, paccess).then(fn || _ramda.identity);
  };

  var keys = function keys(fn) {
    return then(nodeKeys).then(fn || _ramda.identity);
  };

  var count = function count(fn) {
    return keys(_ramda.length).then(fn || _ramda.identity);
  };

  thisaccess = {
    get: get,
    then: then,
    keys: keys,
    souls: keys,
    count: count
  };
  return thisaccess;
};

var scope = function scope(_ref) {
  var _ref$graph = _ref.graph,
      defaultGraph = _ref$graph === void 0 ? {} : _ref$graph,
      gun = _ref.gun,
      parentScope = _ref.parentScope,
      _ref$timeout = _ref.timeout,
      timeout = _ref$timeout === void 0 ? 10000 : _ref$timeout,
      _ref$cache = _ref.cache,
      cache = _ref$cache === void 0 ? null : _ref$cache,
      getter = _ref.getter,
      _ref$noGun = _ref.noGun,
      noGun = _ref$noGun === void 0 ? false : _ref$noGun,
      _ref$isCacheing = _ref.isCacheing,
      isCacheing = _ref$isCacheing === void 0 ? false : _ref$isCacheing,
      _ref$isCached = _ref.isCached,
      isCached = _ref$isCached === void 0 ? false : _ref$isCached,
      _ref$onlyCache = _ref.onlyCache,
      onlyCache = _ref$onlyCache === void 0 ? false : _ref$onlyCache;
  var thisScope;
  var listeners = [];
  var cachePromises = {};
  var promises = {};
  var cachedResults = { ...(cache || {})
  };
  var accesses = {};
  var graph = { ...defaultGraph
  };

  var get = function get(soul) {
    return accesses[soul] || (accesses[soul] = access(thisScope, soul));
  };

  var known = function known(soul) {
    return parentScope ? parentScope.known(soul) : graph[soul];
  };

  var on = function on(fn) {
    return listeners.push(fn);
  };

  var off = function off(fn) {
    return listeners = listeners.filter(function (x) {
      return x !== fn;
    });
  };

  var load = function load(soul, data) {
    var existing = graph[soul];
    var result = existing;

    if (data === null) {
      result = null;
    } else if (data) {
      result = existing ? (0, _ramda.mergeDeepRight)(existing || {}, data) : data;
    }

    graph[soul] = result;
    listeners.forEach(function (fn) {
      return fn(soul, result);
    });
    return result;
  };

  var fetch = function fetch(soul) {
    return parentScope ? parentScope.fetch(soul) : promises[soul] = promises[soul] || new _zalgoPromise.ZalgoPromise(function (ok) {
      var readTimeout;
      if (!gun) return ok(null);

      var receive = function receive(data) {
        clearTimeout(readTimeout);
        ok(load(soul, data));
      };

      readTimeout = setTimeout(function () {
        if (!(soul in graph)) {
          console.log("slow query", soul);
          receive(null);
        }
      }, timeout);
      if (typeof soul !== "string") throw new Error("bad SOUL ".concat(soul));
      if (getter) getter(soul).then(receive);
      if (!noGun) gun.get(soul).on(receive);
      return undefined;
    });
  };

  var cachedQuery = function cachedQuery(name, queryFn) {
    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    if (parentScope) return parentScope.cachedQuery.apply(parentScope, [name, queryFn].concat(args));
    var key = [name].concat(args).map(function (x) {
      return _typeof(x) === "object" ? JSON.stringify(x) : "".concat(x);
    });
    var cached = (0, _ramda.path)(key, cachedResults);
    if (onlyCache) return resolve(cached);
    var promise = queryFn.apply(void 0, [thisScope].concat(args)).then(function (result) {
      if (isCacheing || isCached) {
        cachedResults = (0, _ramda.assocPath)(key, result, cachedResults);
      }

      cachePromises = (0, _ramda.dissocPath)(_ramda.path, cachePromises);
      return result;
    });
    return cached ? resolve(nowOr(cached, promise)) : promise;
  };

  var getCache = function getCache() {
    return cachedResults;
  };

  var getGraph = function getGraph() {
    return graph;
  };

  var getAccesses = function getAccesses() {
    return accesses;
  };

  var loadCachedResults = function loadCachedResults(newResults) {
    cachedResults = (0, _ramda.mergeDeepRight)(cachedResults, newResults);
    listeners.forEach(function (fn) {
      return fn();
    });
  };

  thisScope = {
    on: on,
    off: off,
    get: get,
    getCache: getCache,
    known: known,
    fetch: fetch,
    cachedQuery: cachedQuery,
    getGraph: getGraph,
    getAccesses: getAccesses,
    load: load,
    loadCachedResults: loadCachedResults
  };
  return thisScope;
};

exports.scope = scope;

var query = function query(queryFn) {
  var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  var cachedQuery = function cachedQuery(scopeObj) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    return scopeObj.cachedQuery.apply(scopeObj, [name, queryFn].concat(args));
  };

  var doCachedQuery = name ? cachedQuery : queryFn;
  var result = doCachedQuery;
  result.query = queryFn;
  result.cached = doCachedQuery;
  result.now = (0, _ramda.compose)(now, doCachedQuery);
  return result;
};

exports.query = query;

/***/ }),

/***/ "ramda":
/*!************************!*\
  !*** external "ramda" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_ramda__;

/***/ }),

/***/ "zalgo-promise":
/*!********************************!*\
  !*** external "zalgo-promise" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_zalgo_promise__;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ndW4tc2NvcGUvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2d1bi1zY29wZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ndW4tc2NvcGUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZ3VuLXNjb3BlL2V4dGVybmFsIFwicmFtZGFcIiIsIndlYnBhY2s6Ly9ndW4tc2NvcGUvZXh0ZXJuYWwgXCJ6YWxnby1wcm9taXNlXCIiXSwibmFtZXMiOlsiUHJvbWlzZSIsImFsbCIsInJlc29sdmUiLCJub2RlS2V5cyIsIm9iaiIsIk9iamVjdCIsImtleXMiLCJmaWx0ZXIiLCJrZXkiLCJub3dPciIsImRlZmF1bHRWYWx1ZSIsInByb21pc2UiLCJyZXN1bHQiLCJyZXNvbHZlZCIsInRoZW4iLCJyZXMiLCJub3ciLCJ1bmRlZmluZWQiLCJub2RlIiwic2NvcGUiLCJzb3VsIiwib2siLCJmYWlsIiwia25vd24iLCJmZXRjaCIsImNhdGNoIiwiZWRnZSIsInBhcmVudGFjY2VzcyIsImRhdGEiLCJ2YWwiLCJnZXQiLCJhY2Nlc3MiLCJwYWNjZXNzIiwiRXJyb3IiLCJ0aGlzYWNjZXNzIiwiYWNjZXNzZXMiLCJnS2V5IiwiZm4iLCJjb3VudCIsInNvdWxzIiwiZ3JhcGgiLCJkZWZhdWx0R3JhcGgiLCJndW4iLCJwYXJlbnRTY29wZSIsInRpbWVvdXQiLCJjYWNoZSIsImdldHRlciIsIm5vR3VuIiwiaXNDYWNoZWluZyIsImlzQ2FjaGVkIiwib25seUNhY2hlIiwidGhpc1Njb3BlIiwibGlzdGVuZXJzIiwiY2FjaGVQcm9taXNlcyIsInByb21pc2VzIiwiY2FjaGVkUmVzdWx0cyIsIm9uIiwicHVzaCIsIm9mZiIsIngiLCJsb2FkIiwiZXhpc3RpbmciLCJmb3JFYWNoIiwicmVhZFRpbWVvdXQiLCJyZWNlaXZlIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImNvbnNvbGUiLCJsb2ciLCJjYWNoZWRRdWVyeSIsIm5hbWUiLCJxdWVyeUZuIiwiYXJncyIsIm1hcCIsIkpTT04iLCJzdHJpbmdpZnkiLCJjYWNoZWQiLCJnZXRDYWNoZSIsImdldEdyYXBoIiwiZ2V0QWNjZXNzZXMiLCJsb2FkQ2FjaGVkUmVzdWx0cyIsIm5ld1Jlc3VsdHMiLCJxdWVyeSIsInNjb3BlT2JqIiwiZG9DYWNoZWRRdWVyeSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBOztBQVdBOzs7O0FBQ08sSUFBTUEsT0FBTyw2QkFBYjs7SUFDUUMsRyw4QkFBQUEsRztJQUFLQyxPLDhCQUFBQSxPOzs7O0FBRXBCLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUFDLEdBQUc7QUFBQSxTQUNsQkMsTUFBTSxDQUFDQyxJQUFQLENBQVlGLEdBQUcsSUFB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VCxJQUFTOztBQUM3QyxNQUFNRCxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDYyxRQUFEO0FBQUEsdUNBQWNYLElBQWQ7QUFBY0EsVUFBZDtBQUFBOztBQUFBLFdBQ2xCVyxRQUFRLENBQUNkLFdBQVQsT0FBQWMsUUFBUSxHQUFhYixJQUFiLEVBQW1CQyxPQUFuQixTQUErQkMsSUFBL0IsRUFEVTtBQUFBLEdBQXBCOztBQUVBLE1BQU1ZLGFBQWEsR0FBR2QsSUFBSSxHQUFHRCxXQUFILEdBQWlCRSxPQUEzQztBQUNBLE1BQU0zRCxNQUFNLEdBQUd3RSxhQUFmO0FBRUF4RSxRQUFNLENBQUNzRSxLQUFQLEdBQWVYLE9BQWY7QUFDQTNELFFBQU0sQ0FBQ2dFLE1BQVAsR0FBZ0JRLGFBQWhCO0FBQ0F4RSxRQUFNLENBQUNJLEdBQVAsR0FBYSxvQkFDWEEsR0FEVyxFQUVYb0UsYUFGVyxDQUFiO0FBSUEsU0FBT3hFLE1BQVA7QUFDRCxDQWJNOzs7Ozs7Ozs7Ozs7O0FDaExQLG1EOzs7Ozs7Ozs7OztBQ0FBLDJEIiwiZmlsZSI6Imd1bi1zY29wZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInJhbWRhXCIpLCByZXF1aXJlKFwiemFsZ28tcHJvbWlzZVwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcImd1bi1zY29wZVwiLCBbXCJyYW1kYVwiLCBcInphbGdvLXByb21pc2VcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZ3VuLXNjb3BlXCJdID0gZmFjdG9yeShyZXF1aXJlKFwicmFtZGFcIiksIHJlcXVpcmUoXCJ6YWxnby1wcm9taXNlXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJndW4tc2NvcGVcIl0gPSBmYWN0b3J5KHJvb3RbXCJyYW1kYVwiXSwgcm9vdFtcInphbGdvLXByb21pc2VcIl0pO1xufSkodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yYW1kYV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3phbGdvX3Byb21pc2VfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHtcbiAgY29tcG9zZSxcbiAgZGlzc29jUGF0aCxcbiAgYXNzb2NQYXRoLFxuICBjdXJyeSxcbiAgcGF0aCxcbiAgcHJvcCxcbiAgbGVuZ3RoLFxuICBpZGVudGl0eSxcbiAgbWVyZ2VEZWVwUmlnaHRcbn0gZnJvbSBcInJhbWRhXCI7XG5pbXBvcnQgeyBaYWxnb1Byb21pc2UgfSBmcm9tIFwiemFsZ28tcHJvbWlzZVwiO1xuZXhwb3J0IGNvbnN0IFByb21pc2UgPSBaYWxnb1Byb21pc2U7XG5leHBvcnQgY29uc3QgeyBhbGwsIHJlc29sdmUgfSA9IFphbGdvUHJvbWlzZTtcblxuY29uc3Qgbm9kZUtleXMgPSBvYmogPT5cbiAgT2JqZWN0LmtleXMob2JqIHx8IHt9KS5maWx0ZXIoa2V5ID0+IGtleSAmJiBrZXkgIT09IFwiX1wiICYmIGtleSAhPT0gXCIjXCIpO1xuXG5leHBvcnQgY29uc3Qgbm93T3IgPSBjdXJyeSgoZGVmYXVsdFZhbHVlLCBwcm9taXNlKSA9PiB7XG4gIGxldCByZXN1bHQ7XG4gIGxldCByZXNvbHZlZDtcblxuICBwcm9taXNlLnRoZW4ocmVzID0+IHtcbiAgICByZXNvbHZlZCA9IHRydWU7XG4gICAgcmVzdWx0ID0gcmVzO1xuICB9KTtcbiAgcmV0dXJuIHJlc29sdmVkID8gcmVzdWx0IDogZGVmYXVsdFZhbHVlO1xufSk7XG5cbmV4cG9ydCBjb25zdCBub3cgPSBub3dPcih1bmRlZmluZWQpO1xuXG5jb25zdCBub2RlID0gKHNjb3BlLCBzb3VsKSA9PlxuICBuZXcgWmFsZ29Qcm9taXNlKChvaywgZmFpbCkgPT4ge1xuICAgIGNvbnN0IGtub3duID0gc2NvcGUua25vd24oc291bCk7XG5cbiAgICBpZiAodHlwZW9mIGtub3duICE9PSBcInVuZGVmaW5lZFwiKSBvayhrbm93bik7XG4gICAgc2NvcGVcbiAgICAgIC5mZXRjaChzb3VsKVxuICAgICAgLnRoZW4oKCkgPT4gc2NvcGUua25vd24oc291bCkpXG4gICAgICAudGhlbihvaylcbiAgICAgIC5jYXRjaChmYWlsKTtcbiAgfSk7XG5cbmNvbnN0IGVkZ2UgPSAoc2NvcGUsIGtleSwgcGFyZW50YWNjZXNzKSA9PlxuICBwYXJlbnRhY2Nlc3MudGhlbihkYXRhID0+IHtcbiAgICBjb25zdCBzb3VsID0gcGF0aChba2V5LCBcIiNcIl0sIGRhdGEpO1xuICAgIGNvbnN0IHZhbCA9IHByb3Aoa2V5LCBkYXRhKTtcblxuICAgIHJldHVybiBzb3VsID8gc2NvcGUuZ2V0KHNvdWwpLnRoZW4oKSA6IHZhbDtcbiAgfSk7XG5cbmNvbnN0IGFjY2VzcyA9IChzY29wZSwga2V5LCBwYWNjZXNzID0gbnVsbCkgPT4ge1xuICBpZiAoIWtleSB8fCBrZXkgPT09IFtdKSB0aHJvdyBuZXcgRXJyb3IoYGJhZCBrZXkgJHtrZXl9YCk7XG4gIGxldCB0aGlzYWNjZXNzO1xuICBjb25zdCBhY2Nlc3NlcyA9IHt9O1xuICBjb25zdCBnZXQgPSBnS2V5ID0+XG4gICAgYWNjZXNzZXNbZ0tleV0gfHwgKGFjY2Vzc2VzW2dLZXldID0gYWNjZXNzKHNjb3BlLCBnS2V5LCB0aGlzYWNjZXNzKSk7XG4gIGNvbnN0IHRoZW4gPSBmbiA9PlxuICAgIChwYWNjZXNzID8gZWRnZSA6IG5vZGUpKHNjb3BlLCBrZXksIHBhY2Nlc3MpLnRoZW4oZm4gfHwgaWRlbnRpdHkpO1xuICBjb25zdCBrZXlzID0gZm4gPT4gdGhlbihub2RlS2V5cykudGhlbihmbiB8fCBpZGVudGl0eSk7XG4gIGNvbnN0IGNvdW50ID0gZm4gPT4ga2V5cyhsZW5ndGgpLnRoZW4oZm4gfHwgaWRlbnRpdHkpO1xuXG4gIHRoaXNhY2Nlc3MgPSB7IGdldCwgdGhlbiwga2V5cywgc291bHM6IGtleXMsIGNvdW50IH07XG4gIHJldHVybiB0aGlzYWNjZXNzO1xufTtcblxuZXhwb3J0IGNvbnN0IHNjb3BlID0gKHtcbiAgZ3JhcGg6IGRlZmF1bHRHcmFwaCA9IHt9LFxuICBndW4sXG4gIHBhcmVudFNjb3BlLFxuICB0aW1lb3V0ID0gMTAwMDAsXG4gIGNhY2hlID0gbnVsbCxcbiAgZ2V0dGVyLFxuICBub0d1biA9IGZhbHNlLFxuICBpc0NhY2hlaW5nID0gZmFsc2UsXG4gIGlzQ2FjaGVkID0gZmFsc2UsXG4gIG9ubHlDYWNoZSA9IGZhbHNlXG59KSA9PiB7XG4gIGxldCB0aGlzU2NvcGU7XG4gIGxldCBsaXN0ZW5lcnMgPSBbXTtcbiAgbGV0IGNhY2hlUHJvbWlzZXMgPSB7fTtcbiAgbGV0IHByb21pc2VzID0ge307XG4gIGxldCBjYWNoZWRSZXN1bHRzID0geyAuLi4oY2FjaGUgfHwge30pIH07XG4gIGNvbnN0IGFjY2Vzc2VzID0ge307XG4gIGNvbnN0IGdyYXBoID0geyAuLi5kZWZhdWx0R3JhcGggfTtcbiAgY29uc3QgZ2V0ID0gc291bCA9PlxuICAgIGFjY2Vzc2VzW3NvdWxdIHx8IChhY2Nlc3Nlc1tzb3VsXSA9IGFjY2Vzcyh0aGlzU2NvcGUsIHNvdWwpKTtcbiAgY29uc3Qga25vd24gPSBzb3VsID0+IChwYXJlbnRTY29wZSA/IHBhcmVudFNjb3BlLmtub3duKHNvdWwpIDogZ3JhcGhbc291bF0pO1xuICBjb25zdCBvbiA9IGZuID0+IGxpc3RlbmVycy5wdXNoKGZuKTtcbiAgY29uc3Qgb2ZmID0gZm4gPT4gKGxpc3RlbmVycyA9IGxpc3RlbmVycy5maWx0ZXIoeCA9PiB4ICE9PSBmbikpO1xuXG4gIGNvbnN0IGxvYWQgPSAoc291bCwgZGF0YSkgPT4ge1xuICAgIGNvbnN0IGV4aXN0aW5nID0gZ3JhcGhbc291bF07XG4gICAgbGV0IHJlc3VsdCA9IGV4aXN0aW5nO1xuXG4gICAgaWYgKGRhdGEgPT09IG51bGwpIHtcbiAgICAgIHJlc3VsdCA9IG51bGw7XG4gICAgfSBlbHNlIGlmIChkYXRhKSB7XG4gICAgICByZXN1bHQgPSBleGlzdGluZyA/IG1lcmdlRGVlcFJpZ2h0KGV4aXN0aW5nIHx8IHt9LCBkYXRhKSA6IGRhdGE7XG4gICAgfVxuICAgIGdyYXBoW3NvdWxdID0gcmVzdWx0O1xuICAgIGxpc3RlbmVycy5mb3JFYWNoKGZuID0+IGZuKHNvdWwsIHJlc3VsdCkpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgY29uc3QgZmV0Y2ggPSBzb3VsID0+XG4gICAgcGFyZW50U2NvcGVcbiAgICAgID8gcGFyZW50U2NvcGUuZmV0Y2goc291bClcbiAgICAgIDogKHByb21pc2VzW3NvdWxdID1cbiAgICAgICAgICBwcm9taXNlc1tzb3VsXSB8fFxuICAgICAgICAgIG5ldyBaYWxnb1Byb21pc2Uob2sgPT4ge1xuICAgICAgICAgICAgbGV0IHJlYWRUaW1lb3V0O1xuXG4gICAgICAgICAgICBpZiAoIWd1bikgcmV0dXJuIG9rKG51bGwpO1xuXG4gICAgICAgICAgICBjb25zdCByZWNlaXZlID0gZGF0YSA9PiB7XG4gICAgICAgICAgICAgIGNsZWFyVGltZW91dChyZWFkVGltZW91dCk7XG4gICAgICAgICAgICAgIG9rKGxvYWQoc291bCwgZGF0YSkpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgcmVhZFRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgaWYgKCEoc291bCBpbiBncmFwaCkpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInNsb3cgcXVlcnlcIiwgc291bCk7XG4gICAgICAgICAgICAgICAgcmVjZWl2ZShudWxsKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgdGltZW91dCk7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc291bCAhPT0gXCJzdHJpbmdcIikgdGhyb3cgbmV3IEVycm9yKGBiYWQgU09VTCAke3NvdWx9YCk7XG4gICAgICAgICAgICBpZiAoZ2V0dGVyKSBnZXR0ZXIoc291bCkudGhlbihyZWNlaXZlKTtcbiAgICAgICAgICAgIGlmICghbm9HdW4pIGd1bi5nZXQoc291bCkub24ocmVjZWl2ZSk7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgIH0pKTtcblxuICBjb25zdCBjYWNoZWRRdWVyeSA9IChuYW1lLCBxdWVyeUZuLCAuLi5hcmdzKSA9PiB7XG4gICAgaWYgKHBhcmVudFNjb3BlKSByZXR1cm4gcGFyZW50U2NvcGUuY2FjaGVkUXVlcnkobmFtZSwgcXVlcnlGbiwgLi4uYXJncyk7XG4gICAgY29uc3Qga2V5ID0gW25hbWUsIC4uLmFyZ3NdLm1hcCh4ID0+XG4gICAgICB0eXBlb2YgeCA9PT0gXCJvYmplY3RcIiA/IEpTT04uc3RyaW5naWZ5KHgpIDogYCR7eH1gXG4gICAgKTtcbiAgICBjb25zdCBjYWNoZWQgPSBwYXRoKGtleSwgY2FjaGVkUmVzdWx0cyk7XG5cbiAgICBpZiAob25seUNhY2hlKSByZXR1cm4gcmVzb2x2ZShjYWNoZWQpO1xuICAgIGNvbnN0IHByb21pc2UgPSBxdWVyeUZuKHRoaXNTY29wZSwgLi4uYXJncykudGhlbihyZXN1bHQgPT4ge1xuICAgICAgaWYgKGlzQ2FjaGVpbmcgfHwgaXNDYWNoZWQpIHtcbiAgICAgICAgY2FjaGVkUmVzdWx0cyA9IGFzc29jUGF0aChrZXksIHJlc3VsdCwgY2FjaGVkUmVzdWx0cyk7XG4gICAgICB9XG4gICAgICBjYWNoZVByb21pc2VzID0gZGlzc29jUGF0aChwYXRoLCBjYWNoZVByb21pc2VzKTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gY2FjaGVkID8gcmVzb2x2ZShub3dPcihjYWNoZWQsIHByb21pc2UpKSA6IHByb21pc2U7XG4gIH07XG5cbiAgY29uc3QgZ2V0Q2FjaGUgPSAoKSA9PiBjYWNoZWRSZXN1bHRzO1xuICBjb25zdCBnZXRHcmFwaCA9ICgpID0+IGdyYXBoO1xuICBjb25zdCBnZXRBY2Nlc3NlcyA9ICgpID0+IGFjY2Vzc2VzO1xuICBjb25zdCBsb2FkQ2FjaGVkUmVzdWx0cyA9IG5ld1Jlc3VsdHMgPT4ge1xuICAgIGNhY2hlZFJlc3VsdHMgPSBtZXJnZURlZXBSaWdodChjYWNoZWRSZXN1bHRzLCBuZXdSZXN1bHRzKTtcbiAgICBsaXN0ZW5lcnMuZm9yRWFjaChmbiA9PiBmbigpKTtcbiAgfTtcblxuICB0aGlzU2NvcGUgPSB7XG4gICAgb24sXG4gICAgb2ZmLFxuICAgIGdldCxcbiAgICBnZXRDYWNoZSxcbiAgICBrbm93bixcbiAgICBmZXRjaCxcbiAgICBjYWNoZWRRdWVyeSxcbiAgICBnZXRHcmFwaCxcbiAgICBnZXRBY2Nlc3NlcyxcbiAgICBsb2FkLFxuICAgIGxvYWRDYWNoZWRSZXN1bHRzXG4gIH07XG4gIHJldHVybiB0aGlzU2NvcGU7XG59O1xuXG5leHBvcnQgY29uc3QgcXVlcnkgPSAocXVlcnlGbiwgbmFtZSA9IG51bGwpID0+IHtcbiAgY29uc3QgY2FjaGVkUXVlcnkgPSAoc2NvcGVPYmosIC4uLmFyZ3MpID0+XG4gICAgc2NvcGVPYmouY2FjaGVkUXVlcnkobmFtZSwgcXVlcnlGbiwgLi4uYXJncyk7XG4gIGNvbnN0IGRvQ2FjaGVkUXVlcnkgPSBuYW1lID8gY2FjaGVkUXVlcnkgOiBxdWVyeUZuO1xuICBjb25zdCByZXN1bHQgPSBkb0NhY2hlZFF1ZXJ5O1xuXG4gIHJlc3VsdC5xdWVyeSA9IHF1ZXJ5Rm47XG4gIHJlc3VsdC5jYWNoZWQgPSBkb0NhY2hlZFF1ZXJ5O1xuICByZXN1bHQubm93ID0gY29tcG9zZShcbiAgICBub3csXG4gICAgZG9DYWNoZWRRdWVyeVxuICApO1xuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yYW1kYV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV96YWxnb19wcm9taXNlX187Il0sInNvdXJjZVJvb3QiOiIifQ==