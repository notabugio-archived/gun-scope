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

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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
    if (data) result = (0, _ramda.mergeDeepRight)(existing || {}, data);
    graph[soul] = result || graph[soul] || null;
    if (!(0, _ramda.equals)(existing, result)) listeners.forEach(function (fn) {
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

      if (!noGun) {
        var chain = gun.get(soul);
        chain.on(receive);
        if (chain.not) chain.not(function () {
          return receive(null);
        });
      }

      return undefined;
    });
  };

  var getCached = function getCached(name) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var key = [name].concat(args).map(function (x) {
      return _typeof(x) === "object" ? JSON.stringify(x) : "".concat(x);
    });
    return [(0, _ramda.path)(key, cachedResults), key];
  };

  var cacheQuery = function cacheQuery(name, queryFn) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
      args[_key2 - 2] = arguments[_key2];
    }

    if (parentScope) return parentScope.cacheQuery.apply(parentScope, [name, queryFn].concat(args));

    var _getCached = getCached.apply(void 0, [name].concat(args)),
        _getCached2 = _slicedToArray(_getCached, 2),
        cached = _getCached2[0],
        key = _getCached2[1];

    if (onlyCache) return resolve(cached);
    return queryFn.apply(void 0, [thisScope].concat(args)).then(function (result) {
      if (isCacheing) {
        cachedResults = (0, _ramda.assocPath)(key, result, cachedResults);
      } else {
        cachedResults = (0, _ramda.dissocPath)(key, cachedResults);
      }

      cachePromises = (0, _ramda.dissocPath)(_ramda.path, cachePromises);
      return result;
    });
  };

  var cachedQuery = function cachedQuery(name, queryFn) {
    for (var _len3 = arguments.length, args = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
      args[_key3 - 2] = arguments[_key3];
    }

    if (parentScope) return parentScope.cachedQuery.apply(parentScope, [name, queryFn].concat(args));

    var _getCached3 = getCached.apply(void 0, [name].concat(args)),
        _getCached4 = _slicedToArray(_getCached3, 1),
        cached = _getCached4[0];

    var promise = cacheQuery.apply(void 0, [name, queryFn].concat(args)); // if (!cached && isCached) console.log("cache miss", name, args);

    if (!isCached) return promise;
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
    cacheQuery: cacheQuery,
    cachedQuery: cachedQuery,
    parentScope: parentScope,
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
    for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
      args[_key4 - 1] = arguments[_key4];
    }

    return scopeObj.cachedQuery.apply(scopeObj, [name, queryFn].concat(args));
  };

  var doCachedQuery = name ? cachedQuery : queryFn;
  var result = name ? cachedQuery : queryFn;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ndW4tc2NvcGUvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2d1bi1zY29wZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ndW4tc2NvcGUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZ3VuLXNjb3BlL2V4dGVybmFsIFwicmFtZGFcIiIsIndlYnBhY2s6Ly9ndW4tc2NvcGUvZXh0ZXJuYWwgXCJ6YWxnby1wcm9taXNlXCIiXSwibmFtZXMiOlsiUHJvbWlzZSIsImFsbCIsInJlc29sdmUiLCJub2RlS2V5cyIsIm9iaiIsIk9iamVjdCIsImtleXMiLCJmaWx0ZXIiLCJrZXkiLCJub3dPciIsImRlZmF1bHRWYWx1ZSIsInByb21pc2UiLCJyZXN1bHQiLCJyZXNvbHZlZCIsInRoZW4iLCJyZXMiLCJub3ciLCJ1bmRlZmluZWQiLCJub2RlIiwic2NvcGUiLCJzb3VsIiwib2siLCJmYWlsIiwia25vd24iLCJmZXRjaCIsImNhdGNoIiwiZWRnZSIsInBhcmVudGFjY2VzcyIsImRhdGEiLCJ2YWwiLCJnZXQiLCJhY2Nlc3MiLCJwYWNjZXNzIiwiRXJyb3IiLCJ0aGlzYWNjZXNzIiwiYWNjZXNzZXMiLCJnS2V5IiwiZm4iLCJjb3VudCIsInNvdWxzIiwiZ3JhcGgiLCJkZWZhdWx0R3JhcGgiLCJndW4iLCJwYXJlbnRTY29wZSIsInRpbWVvdXQiLCJjYWNoZSIsImdldHRlciIsIm5vR3VuIiwiaXNDYWNoZWluZyIsImlzQ2FjaGVkIiwib25seUNhY2hlIiwidGhpc1Njb3BlIiwibGlzdGVuZXJzIiwiY2FjaGVQcm9taXNlcyIsInByb21pc2VzIiwiY2FjaGVkUmVzdWx0cyIsIm9uIiwicHVzaCIsIm9mZiIsIngiLCJsb2FkIiwiZXhpc3RpbmciLCJmb3JFYWNoIiwicmVhZFRpbWVvdXQiLCJyZWNlaXZlIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImNvbnNvbGUiLCJsb2ciLCJjaGFpbiIsIm5vdCIsImdldENhY2hlZCIsIm5hbWUiLCJhcmdzIiwibWFwIiwiSlNPTiIsInN0cmluZ2lmeSIsImNhY2hlUXVlcnkiLCJxdWVyeUZuIiwiY2FjaGVkIiwiY2FjaGVkUXVlcnkiLCJnZXRDYWNoZSIsImdldEdyYXBoIiwiZ2V0QWNjZXNzZXMiLCJsb2FkQ2FjaGVkUmVzdWx0cyIsIm5ld1Jlc3VsdHMiLCJxdWVyeSIsInNjb3BlT2JqIiwiZG9DYWNoZWRRdWVyeSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBOztBQVlBOzs7Ozs7Ozs7Ozs7QUFDTyxJQUFNQSxPQUFPLDZCQUFiOztJQUNRQyxHLDhCQUFBQSxHO0lBQUtDLE8sOEJBQUFBLE87Ozs7QUFFcEIsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQUMs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QUFNUSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDTyxRQUFEO0FBQUEsdUNBQWNkLElBQWQ7QUFBY0EsVUFBZDtBQUFBOztBQUFBLFdBQ2xCYyxRQUFRLENBQUNQLFdBQVQsT0FBQU8sUUFBUSxHQUFhZixJQUFiLEVBQW1CTSxPQUFuQixTQUErQkwsSUFBL0IsRUFEVTtBQUFBLEdBQXBCOztBQUVBLE1BQU1lLGFBQWEsR0FBR2hCLElBQUksR0FBR1EsV0FBSCxHQUFpQkYsT0FBM0M7QUFDQSxNQUFNbEUsTUFBTSxHQUFHNEQsSUFBSSxHQUFHUSxXQUFILEdBQWlCRixPQUFwQztBQUVBbEUsUUFBTSxDQUFDMEUsS0FBUCxHQUFlUixPQUFmO0FBQ0FsRSxRQUFNLENBQUNtRSxNQUFQLEdBQWdCUyxhQUFoQjtBQUNBNUUsUUFBTSxDQUFDSSxHQUFQLEdBQWEsb0JBQ1hBLEdBRFcsRUFFWHdFLGFBRlcsQ0FBYjtBQUlBLFNBQU81RSxNQUFQO0FBQ0QsQ0FiTTs7Ozs7Ozs7Ozs7OztBQ25NUCxtRDs7Ozs7Ozs7Ozs7QUNBQSwyRCIsImZpbGUiOiJndW4tc2NvcGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJyYW1kYVwiKSwgcmVxdWlyZShcInphbGdvLXByb21pc2VcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJndW4tc2NvcGVcIiwgW1wicmFtZGFcIiwgXCJ6YWxnby1wcm9taXNlXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImd1bi1zY29wZVwiXSA9IGZhY3RvcnkocmVxdWlyZShcInJhbWRhXCIpLCByZXF1aXJlKFwiemFsZ28tcHJvbWlzZVwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiZ3VuLXNjb3BlXCJdID0gZmFjdG9yeShyb290W1wicmFtZGFcIl0sIHJvb3RbXCJ6YWxnby1wcm9taXNlXCJdKTtcbn0pKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmFtZGFfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV96YWxnb19wcm9taXNlX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCB7XG4gIGNvbXBvc2UsXG4gIGVxdWFscyxcbiAgZGlzc29jUGF0aCxcbiAgYXNzb2NQYXRoLFxuICBjdXJyeSxcbiAgcGF0aCxcbiAgcHJvcCxcbiAgbGVuZ3RoLFxuICBpZGVudGl0eSxcbiAgbWVyZ2VEZWVwUmlnaHRcbn0gZnJvbSBcInJhbWRhXCI7XG5pbXBvcnQgeyBaYWxnb1Byb21pc2UgfSBmcm9tIFwiemFsZ28tcHJvbWlzZVwiO1xuZXhwb3J0IGNvbnN0IFByb21pc2UgPSBaYWxnb1Byb21pc2U7XG5leHBvcnQgY29uc3QgeyBhbGwsIHJlc29sdmUgfSA9IFphbGdvUHJvbWlzZTtcblxuY29uc3Qgbm9kZUtleXMgPSBvYmogPT5cbiAgT2JqZWN0LmtleXMob2JqIHx8IHt9KS5maWx0ZXIoa2V5ID0+IGtleSAmJiBrZXkgIT09IFwiX1wiICYmIGtleSAhPT0gXCIjXCIpO1xuXG5leHBvcnQgY29uc3Qgbm93T3IgPSBjdXJyeSgoZGVmYXVsdFZhbHVlLCBwcm9taXNlKSA9PiB7XG4gIGxldCByZXN1bHQ7XG4gIGxldCByZXNvbHZlZDtcblxuICBwcm9taXNlLnRoZW4ocmVzID0+IHtcbiAgICByZXNvbHZlZCA9IHRydWU7XG4gICAgcmVzdWx0ID0gcmVzO1xuICB9KTtcbiAgcmV0dXJuIHJlc29sdmVkID8gcmVzdWx0IDogZGVmYXVsdFZhbHVlO1xufSk7XG5cbmV4cG9ydCBjb25zdCBub3cgPSBub3dPcih1bmRlZmluZWQpO1xuXG5jb25zdCBub2RlID0gKHNjb3BlLCBzb3VsKSA9PlxuICBuZXcgWmFsZ29Qcm9taXNlKChvaywgZmFpbCkgPT4ge1xuICAgIGNvbnN0IGtub3duID0gc2NvcGUua25vd24oc291bCk7XG5cbiAgICBpZiAodHlwZW9mIGtub3duICE9PSBcInVuZGVmaW5lZFwiKSBvayhrbm93bik7XG4gICAgc2NvcGVcbiAgICAgIC5mZXRjaChzb3VsKVxuICAgICAgLnRoZW4oKCkgPT4gc2NvcGUua25vd24oc291bCkpXG4gICAgICAudGhlbihvaylcbiAgICAgIC5jYXRjaChmYWlsKTtcbiAgfSk7XG5cbmNvbnN0IGVkZ2UgPSAoc2NvcGUsIGtleSwgcGFyZW50YWNjZXNzKSA9PlxuICBwYXJlbnRhY2Nlc3MudGhlbihkYXRhID0+IHtcbiAgICBjb25zdCBzb3VsID0gcGF0aChba2V5LCBcIiNcIl0sIGRhdGEpO1xuICAgIGNvbnN0IHZhbCA9IHByb3Aoa2V5LCBkYXRhKTtcblxuICAgIHJldHVybiBzb3VsID8gc2NvcGUuZ2V0KHNvdWwpLnRoZW4oKSA6IHZhbDtcbiAgfSk7XG5cbmNvbnN0IGFjY2VzcyA9IChzY29wZSwga2V5LCBwYWNjZXNzID0gbnVsbCkgPT4ge1xuICBpZiAoIWtleSB8fCBrZXkgPT09IFtdKSB0aHJvdyBuZXcgRXJyb3IoYGJhZCBrZXkgJHtrZXl9YCk7XG4gIGxldCB0aGlzYWNjZXNzO1xuICBjb25zdCBhY2Nlc3NlcyA9IHt9O1xuICBjb25zdCBnZXQgPSBnS2V5ID0+XG4gICAgYWNjZXNzZXNbZ0tleV0gfHwgKGFjY2Vzc2VzW2dLZXldID0gYWNjZXNzKHNjb3BlLCBnS2V5LCB0aGlzYWNjZXNzKSk7XG4gIGNvbnN0IHRoZW4gPSBmbiA9PlxuICAgIChwYWNjZXNzID8gZWRnZSA6IG5vZGUpKHNjb3BlLCBrZXksIHBhY2Nlc3MpLnRoZW4oZm4gfHwgaWRlbnRpdHkpO1xuICBjb25zdCBrZXlzID0gZm4gPT4gdGhlbihub2RlS2V5cykudGhlbihmbiB8fCBpZGVudGl0eSk7XG4gIGNvbnN0IGNvdW50ID0gZm4gPT4ga2V5cyhsZW5ndGgpLnRoZW4oZm4gfHwgaWRlbnRpdHkpO1xuXG4gIHRoaXNhY2Nlc3MgPSB7IGdldCwgdGhlbiwga2V5cywgc291bHM6IGtleXMsIGNvdW50IH07XG4gIHJldHVybiB0aGlzYWNjZXNzO1xufTtcblxuZXhwb3J0IGNvbnN0IHNjb3BlID0gKHtcbiAgZ3JhcGg6IGRlZmF1bHRHcmFwaCA9IHt9LFxuICBndW4sXG4gIHBhcmVudFNjb3BlLFxuICB0aW1lb3V0ID0gMTAwMDAsXG4gIGNhY2hlID0gbnVsbCxcbiAgZ2V0dGVyLFxuICBub0d1biA9IGZhbHNlLFxuICBpc0NhY2hlaW5nID0gZmFsc2UsXG4gIGlzQ2FjaGVkID0gZmFsc2UsXG4gIG9ubHlDYWNoZSA9IGZhbHNlXG59KSA9PiB7XG4gIGxldCB0aGlzU2NvcGU7XG4gIGxldCBsaXN0ZW5lcnMgPSBbXTtcbiAgbGV0IGNhY2hlUHJvbWlzZXMgPSB7fTtcbiAgbGV0IHByb21pc2VzID0ge307XG4gIGxldCBjYWNoZWRSZXN1bHRzID0geyAuLi4oY2FjaGUgfHwge30pIH07XG4gIGNvbnN0IGFjY2Vzc2VzID0ge307XG4gIGNvbnN0IGdyYXBoID0geyAuLi5kZWZhdWx0R3JhcGggfTtcbiAgY29uc3QgZ2V0ID0gc291bCA9PlxuICAgIGFjY2Vzc2VzW3NvdWxdIHx8IChhY2Nlc3Nlc1tzb3VsXSA9IGFjY2Vzcyh0aGlzU2NvcGUsIHNvdWwpKTtcbiAgY29uc3Qga25vd24gPSBzb3VsID0+IChwYXJlbnRTY29wZSA/IHBhcmVudFNjb3BlLmtub3duKHNvdWwpIDogZ3JhcGhbc291bF0pO1xuICBjb25zdCBvbiA9IGZuID0+IGxpc3RlbmVycy5wdXNoKGZuKTtcbiAgY29uc3Qgb2ZmID0gZm4gPT4gKGxpc3RlbmVycyA9IGxpc3RlbmVycy5maWx0ZXIoeCA9PiB4ICE9PSBmbikpO1xuXG4gIGNvbnN0IGxvYWQgPSAoc291bCwgZGF0YSkgPT4ge1xuICAgIGNvbnN0IGV4aXN0aW5nID0gZ3JhcGhbc291bF07XG4gICAgbGV0IHJlc3VsdCA9IGV4aXN0aW5nO1xuXG4gICAgaWYgKGRhdGEpIHJlc3VsdCA9IG1lcmdlRGVlcFJpZ2h0KGV4aXN0aW5nIHx8IHt9LCBkYXRhKTtcbiAgICBncmFwaFtzb3VsXSA9IHJlc3VsdCB8fCBncmFwaFtzb3VsXSB8fCBudWxsO1xuICAgIGlmICghZXF1YWxzKGV4aXN0aW5nLCByZXN1bHQpKSBsaXN0ZW5lcnMuZm9yRWFjaChmbiA9PiBmbihzb3VsLCByZXN1bHQpKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIGNvbnN0IGZldGNoID0gc291bCA9PlxuICAgIHBhcmVudFNjb3BlXG4gICAgICA/IHBhcmVudFNjb3BlLmZldGNoKHNvdWwpXG4gICAgICA6IChwcm9taXNlc1tzb3VsXSA9XG4gICAgICAgICAgcHJvbWlzZXNbc291bF0gfHxcbiAgICAgICAgICBuZXcgWmFsZ29Qcm9taXNlKG9rID0+IHtcbiAgICAgICAgICAgIGxldCByZWFkVGltZW91dDtcblxuICAgICAgICAgICAgaWYgKCFndW4pIHJldHVybiBvayhudWxsKTtcblxuICAgICAgICAgICAgY29uc3QgcmVjZWl2ZSA9IGRhdGEgPT4ge1xuICAgICAgICAgICAgICBjbGVhclRpbWVvdXQocmVhZFRpbWVvdXQpO1xuICAgICAgICAgICAgICBvayhsb2FkKHNvdWwsIGRhdGEpKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHJlYWRUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIGlmICghKHNvdWwgaW4gZ3JhcGgpKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzbG93IHF1ZXJ5XCIsIHNvdWwpO1xuICAgICAgICAgICAgICAgIHJlY2VpdmUobnVsbCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHRpbWVvdXQpO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIHNvdWwgIT09IFwic3RyaW5nXCIpIHRocm93IG5ldyBFcnJvcihgYmFkIFNPVUwgJHtzb3VsfWApO1xuICAgICAgICAgICAgaWYgKGdldHRlcikgZ2V0dGVyKHNvdWwpLnRoZW4ocmVjZWl2ZSk7XG4gICAgICAgICAgICBpZiAoIW5vR3VuKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGNoYWluID0gZ3VuLmdldChzb3VsKTtcblxuICAgICAgICAgICAgICBjaGFpbi5vbihyZWNlaXZlKTtcbiAgICAgICAgICAgICAgaWYgKGNoYWluLm5vdCkgY2hhaW4ubm90KCgpID0+IHJlY2VpdmUobnVsbCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICB9KSk7XG5cbiAgY29uc3QgZ2V0Q2FjaGVkID0gKG5hbWUsIC4uLmFyZ3MpID0+IHtcbiAgICBjb25zdCBrZXkgPSBbbmFtZSwgLi4uYXJnc10ubWFwKHggPT5cbiAgICAgIHR5cGVvZiB4ID09PSBcIm9iamVjdFwiID8gSlNPTi5zdHJpbmdpZnkoeCkgOiBgJHt4fWBcbiAgICApO1xuXG4gICAgcmV0dXJuIFtwYXRoKGtleSwgY2FjaGVkUmVzdWx0cyksIGtleV07XG4gIH07XG5cbiAgY29uc3QgY2FjaGVRdWVyeSA9IChuYW1lLCBxdWVyeUZuLCAuLi5hcmdzKSA9PiB7XG4gICAgaWYgKHBhcmVudFNjb3BlKSByZXR1cm4gcGFyZW50U2NvcGUuY2FjaGVRdWVyeShuYW1lLCBxdWVyeUZuLCAuLi5hcmdzKTtcbiAgICBjb25zdCBbY2FjaGVkLCBrZXldID0gZ2V0Q2FjaGVkKG5hbWUsIC4uLmFyZ3MpO1xuXG4gICAgaWYgKG9ubHlDYWNoZSkgcmV0dXJuIHJlc29sdmUoY2FjaGVkKTtcbiAgICByZXR1cm4gcXVlcnlGbih0aGlzU2NvcGUsIC4uLmFyZ3MpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgIGlmIChpc0NhY2hlaW5nKSB7XG4gICAgICAgIGNhY2hlZFJlc3VsdHMgPSBhc3NvY1BhdGgoa2V5LCByZXN1bHQsIGNhY2hlZFJlc3VsdHMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2FjaGVkUmVzdWx0cyA9IGRpc3NvY1BhdGgoa2V5LCBjYWNoZWRSZXN1bHRzKTtcbiAgICAgIH1cbiAgICAgIGNhY2hlUHJvbWlzZXMgPSBkaXNzb2NQYXRoKHBhdGgsIGNhY2hlUHJvbWlzZXMpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBjYWNoZWRRdWVyeSA9IChuYW1lLCBxdWVyeUZuLCAuLi5hcmdzKSA9PiB7XG4gICAgaWYgKHBhcmVudFNjb3BlKSByZXR1cm4gcGFyZW50U2NvcGUuY2FjaGVkUXVlcnkobmFtZSwgcXVlcnlGbiwgLi4uYXJncyk7XG4gICAgY29uc3QgW2NhY2hlZF0gPSBnZXRDYWNoZWQobmFtZSwgLi4uYXJncyk7XG4gICAgY29uc3QgcHJvbWlzZSA9IGNhY2hlUXVlcnkobmFtZSwgcXVlcnlGbiwgLi4uYXJncyk7XG5cbiAgICAvLyBpZiAoIWNhY2hlZCAmJiBpc0NhY2hlZCkgY29uc29sZS5sb2coXCJjYWNoZSBtaXNzXCIsIG5hbWUsIGFyZ3MpO1xuICAgIGlmICghaXNDYWNoZWQpIHJldHVybiBwcm9taXNlO1xuICAgIHJldHVybiBjYWNoZWQgPyByZXNvbHZlKG5vd09yKGNhY2hlZCwgcHJvbWlzZSkpIDogcHJvbWlzZTtcbiAgfTtcblxuICBjb25zdCBnZXRDYWNoZSA9ICgpID0+IGNhY2hlZFJlc3VsdHM7XG4gIGNvbnN0IGdldEdyYXBoID0gKCkgPT4gZ3JhcGg7XG4gIGNvbnN0IGdldEFjY2Vzc2VzID0gKCkgPT4gYWNjZXNzZXM7XG4gIGNvbnN0IGxvYWRDYWNoZWRSZXN1bHRzID0gbmV3UmVzdWx0cyA9PiB7XG4gICAgY2FjaGVkUmVzdWx0cyA9IG1lcmdlRGVlcFJpZ2h0KGNhY2hlZFJlc3VsdHMsIG5ld1Jlc3VsdHMpO1xuICAgIGxpc3RlbmVycy5mb3JFYWNoKGZuID0+IGZuKCkpO1xuICB9O1xuXG4gIHRoaXNTY29wZSA9IHtcbiAgICBvbixcbiAgICBvZmYsXG4gICAgZ2V0LFxuICAgIGdldENhY2hlLFxuICAgIGtub3duLFxuICAgIGZldGNoLFxuICAgIGNhY2hlUXVlcnksXG4gICAgY2FjaGVkUXVlcnksXG4gICAgcGFyZW50U2NvcGUsXG4gICAgZ2V0R3JhcGgsXG4gICAgZ2V0QWNjZXNzZXMsXG4gICAgbG9hZCxcbiAgICBsb2FkQ2FjaGVkUmVzdWx0c1xuICB9O1xuICByZXR1cm4gdGhpc1Njb3BlO1xufTtcblxuZXhwb3J0IGNvbnN0IHF1ZXJ5ID0gKHF1ZXJ5Rm4sIG5hbWUgPSBudWxsKSA9PiB7XG4gIGNvbnN0IGNhY2hlZFF1ZXJ5ID0gKHNjb3BlT2JqLCAuLi5hcmdzKSA9PlxuICAgIHNjb3BlT2JqLmNhY2hlZFF1ZXJ5KG5hbWUsIHF1ZXJ5Rm4sIC4uLmFyZ3MpO1xuICBjb25zdCBkb0NhY2hlZFF1ZXJ5ID0gbmFtZSA/IGNhY2hlZFF1ZXJ5IDogcXVlcnlGbjtcbiAgY29uc3QgcmVzdWx0ID0gbmFtZSA/IGNhY2hlZFF1ZXJ5IDogcXVlcnlGbjtcblxuICByZXN1bHQucXVlcnkgPSBxdWVyeUZuO1xuICByZXN1bHQuY2FjaGVkID0gZG9DYWNoZWRRdWVyeTtcbiAgcmVzdWx0Lm5vdyA9IGNvbXBvc2UoXG4gICAgbm93LFxuICAgIGRvQ2FjaGVkUXVlcnlcbiAgKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmFtZGFfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfemFsZ29fcHJvbWlzZV9fOyJdLCJzb3VyY2VSb290IjoiIn0=