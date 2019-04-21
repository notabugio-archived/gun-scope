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
        chain.once(receive);
        chain.on(function (data) {
          return soul in graph && receive(data);
        });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ndW4tc2NvcGUvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2d1bi1zY29wZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ndW4tc2NvcGUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZ3VuLXNjb3BlL2V4dGVybmFsIFwicmFtZGFcIiIsIndlYnBhY2s6Ly9ndW4tc2NvcGUvZXh0ZXJuYWwgXCJ6YWxnby1wcm9taXNlXCIiXSwibmFtZXMiOlsiUHJvbWlzZSIsImFsbCIsInJlc29sdmUiLCJub2RlS2V5cyIsIm9iaiIsIk9iamVjdCIsImtleXMiLCJmaWx0ZXIiLCJrZXkiLCJub3dPciIsImRlZmF1bHRWYWx1ZSIsInByb21pc2UiLCJyZXN1bHQiLCJyZXNvbHZlZCIsInRoZW4iLCJyZXMiLCJub3ciLCJ1bmRlZmluZWQiLCJub2RlIiwic2NvcGUiLCJzb3VsIiwib2siLCJmYWlsIiwia25vd24iLCJmZXRjaCIsImNhdGNoIiwiZWRnZSIsInBhcmVudGFjY2VzcyIsImRhdGEiLCJ2YWwiLCJnZXQiLCJhY2Nlc3MiLCJwYWNjZXNzIiwiRXJyb3IiLCJ0aGlzYWNjZXNzIiwiYWNjZXNzZXMiLCJnS2V5IiwiZm4iLCJjb3VudCIsInNvdWxzIiwiZ3JhcGgiLCJkZWZhdWx0R3JhcGgiLCJndW4iLCJwYXJlbnRTY29wZSIsInRpbWVvdXQiLCJjYWNoZSIsImdldHRlciIsIm5vR3VuIiwiaXNDYWNoZWluZyIsImlzQ2FjaGVkIiwib25seUNhY2hlIiwidGhpc1Njb3BlIiwibGlzdGVuZXJzIiwiY2FjaGVQcm9taXNlcyIsInByb21pc2VzIiwiY2FjaGVkUmVzdWx0cyIsIm9uIiwicHVzaCIsIm9mZiIsIngiLCJsb2FkIiwiZXhpc3RpbmciLCJmb3JFYWNoIiwicmVhZFRpbWVvdXQiLCJyZWNlaXZlIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImNvbnNvbGUiLCJsb2ciLCJjaGFpbiIsIm9uY2UiLCJub3QiLCJnZXRDYWNoZWQiLCJuYW1lIiwiYXJncyIsIm1hcCIsIkpTT04iLCJzdHJpbmdpZnkiLCJjYWNoZVF1ZXJ5IiwicXVlcnlGbiIsImNhY2hlZCIsImNhY2hlZFF1ZXJ5IiwiZ2V0Q2FjaGUiLCJnZXRHcmFwaCIsImdldEFjY2Vzc2VzIiwibG9hZENhY2hlZFJlc3VsdHMiLCJuZXdSZXN1bHRzIiwicXVlcnkiLCJzY29wZU9iaiIsImRvQ2FjaGVkUXVlcnkiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTs7QUFZQTs7Ozs7Ozs7Ozs7O0FBQ08sSUFBTUEsT0FBTyw2QkFBYjs7SUFDUUMsRyw4QkFBQUEsRztJQUFLQyxPLDhCQUFBQSxPOzs7O0FBRXBCLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFX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QWVBLFNBQU9sQyxTQUFQO0FBQ0QsQ0EvSE07Ozs7QUFpSUEsSUFBTW9DLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNSLE9BQUQsRUFBMEI7QUFBQSxNQUFoQk4sSUFBZ0IsdUVBQVQsSUFBUzs7QUFDN0MsTUFBTVEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ08sUUFBRDtBQUFBLHVDQUFjZCxJQUFkO0FBQWNBLFVBQWQ7QUFBQTs7QUFBQSxXQUNsQmMsUUFBUSxDQUFDUCxXQUFULE9BQUFPLFFBQVEsR0FBYWYsSUFBYixFQUFtQk0sT0FBbkIsU0FBK0JMLElBQS9CLEVBRFU7QUFBQSxHQUFwQjs7QUFFQSxNQUFNZSxhQUFhLEdBQUdoQixJQUFJLEdBQUdRLFdBQUgsR0FBaUJGLE9BQTNDO0FBQ0EsTUFBTW5FLE1BQU0sR0FBRzZELElBQUksR0FBR1EsV0FBSCxHQUFpQkYsT0FBcEM7QUFFQW5FLFFBQU0sQ0FBQzJFLEtBQVAsR0FBZVIsT0FBZjtBQUNBbkUsUUFBTSxDQUFDb0UsTUFBUCxHQUFnQlMsYUFBaEI7QUFDQTdFLFFBQU0sQ0FBQ0ksR0FBUCxHQUFhLG9CQUNYQSxHQURXLEVBRVh5RSxhQUZXLENBQWI7QUFJQSxTQUFPN0UsTUFBUDtBQUNELENBYk07Ozs7Ozs7Ozs7Ozs7QUNwTVAsbUQ7Ozs7Ozs7Ozs7O0FDQUEsMkQiLCJmaWxlIjoiZ3VuLXNjb3BlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwicmFtZGFcIiksIHJlcXVpcmUoXCJ6YWxnby1wcm9taXNlXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiZ3VuLXNjb3BlXCIsIFtcInJhbWRhXCIsIFwiemFsZ28tcHJvbWlzZVwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJndW4tc2NvcGVcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJyYW1kYVwiKSwgcmVxdWlyZShcInphbGdvLXByb21pc2VcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImd1bi1zY29wZVwiXSA9IGZhY3Rvcnkocm9vdFtcInJhbWRhXCJdLCByb290W1wiemFsZ28tcHJvbWlzZVwiXSk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JhbWRhX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfemFsZ29fcHJvbWlzZV9fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQge1xuICBjb21wb3NlLFxuICBlcXVhbHMsXG4gIGRpc3NvY1BhdGgsXG4gIGFzc29jUGF0aCxcbiAgY3VycnksXG4gIHBhdGgsXG4gIHByb3AsXG4gIGxlbmd0aCxcbiAgaWRlbnRpdHksXG4gIG1lcmdlRGVlcFJpZ2h0XG59IGZyb20gXCJyYW1kYVwiO1xuaW1wb3J0IHsgWmFsZ29Qcm9taXNlIH0gZnJvbSBcInphbGdvLXByb21pc2VcIjtcbmV4cG9ydCBjb25zdCBQcm9taXNlID0gWmFsZ29Qcm9taXNlO1xuZXhwb3J0IGNvbnN0IHsgYWxsLCByZXNvbHZlIH0gPSBaYWxnb1Byb21pc2U7XG5cbmNvbnN0IG5vZGVLZXlzID0gb2JqID0+XG4gIE9iamVjdC5rZXlzKG9iaiB8fCB7fSkuZmlsdGVyKGtleSA9PiBrZXkgJiYga2V5ICE9PSBcIl9cIiAmJiBrZXkgIT09IFwiI1wiKTtcblxuZXhwb3J0IGNvbnN0IG5vd09yID0gY3VycnkoKGRlZmF1bHRWYWx1ZSwgcHJvbWlzZSkgPT4ge1xuICBsZXQgcmVzdWx0O1xuICBsZXQgcmVzb2x2ZWQ7XG5cbiAgcHJvbWlzZS50aGVuKHJlcyA9PiB7XG4gICAgcmVzb2x2ZWQgPSB0cnVlO1xuICAgIHJlc3VsdCA9IHJlcztcbiAgfSk7XG4gIHJldHVybiByZXNvbHZlZCA/IHJlc3VsdCA6IGRlZmF1bHRWYWx1ZTtcbn0pO1xuXG5leHBvcnQgY29uc3Qgbm93ID0gbm93T3IodW5kZWZpbmVkKTtcblxuY29uc3Qgbm9kZSA9IChzY29wZSwgc291bCkgPT5cbiAgbmV3IFphbGdvUHJvbWlzZSgob2ssIGZhaWwpID0+IHtcbiAgICBjb25zdCBrbm93biA9IHNjb3BlLmtub3duKHNvdWwpO1xuXG4gICAgaWYgKHR5cGVvZiBrbm93biAhPT0gXCJ1bmRlZmluZWRcIikgb2soa25vd24pO1xuICAgIHNjb3BlXG4gICAgICAuZmV0Y2goc291bClcbiAgICAgIC50aGVuKCgpID0+IHNjb3BlLmtub3duKHNvdWwpKVxuICAgICAgLnRoZW4ob2spXG4gICAgICAuY2F0Y2goZmFpbCk7XG4gIH0pO1xuXG5jb25zdCBlZGdlID0gKHNjb3BlLCBrZXksIHBhcmVudGFjY2VzcykgPT5cbiAgcGFyZW50YWNjZXNzLnRoZW4oZGF0YSA9PiB7XG4gICAgY29uc3Qgc291bCA9IHBhdGgoW2tleSwgXCIjXCJdLCBkYXRhKTtcbiAgICBjb25zdCB2YWwgPSBwcm9wKGtleSwgZGF0YSk7XG5cbiAgICByZXR1cm4gc291bCA/IHNjb3BlLmdldChzb3VsKS50aGVuKCkgOiB2YWw7XG4gIH0pO1xuXG5jb25zdCBhY2Nlc3MgPSAoc2NvcGUsIGtleSwgcGFjY2VzcyA9IG51bGwpID0+IHtcbiAgaWYgKCFrZXkgfHwga2V5ID09PSBbXSkgdGhyb3cgbmV3IEVycm9yKGBiYWQga2V5ICR7a2V5fWApO1xuICBsZXQgdGhpc2FjY2VzcztcbiAgY29uc3QgYWNjZXNzZXMgPSB7fTtcbiAgY29uc3QgZ2V0ID0gZ0tleSA9PlxuICAgIGFjY2Vzc2VzW2dLZXldIHx8IChhY2Nlc3Nlc1tnS2V5XSA9IGFjY2VzcyhzY29wZSwgZ0tleSwgdGhpc2FjY2VzcykpO1xuICBjb25zdCB0aGVuID0gZm4gPT5cbiAgICAocGFjY2VzcyA/IGVkZ2UgOiBub2RlKShzY29wZSwga2V5LCBwYWNjZXNzKS50aGVuKGZuIHx8IGlkZW50aXR5KTtcbiAgY29uc3Qga2V5cyA9IGZuID0+IHRoZW4obm9kZUtleXMpLnRoZW4oZm4gfHwgaWRlbnRpdHkpO1xuICBjb25zdCBjb3VudCA9IGZuID0+IGtleXMobGVuZ3RoKS50aGVuKGZuIHx8IGlkZW50aXR5KTtcblxuICB0aGlzYWNjZXNzID0geyBnZXQsIHRoZW4sIGtleXMsIHNvdWxzOiBrZXlzLCBjb3VudCB9O1xuICByZXR1cm4gdGhpc2FjY2Vzcztcbn07XG5cbmV4cG9ydCBjb25zdCBzY29wZSA9ICh7XG4gIGdyYXBoOiBkZWZhdWx0R3JhcGggPSB7fSxcbiAgZ3VuLFxuICBwYXJlbnRTY29wZSxcbiAgdGltZW91dCA9IDEwMDAwLFxuICBjYWNoZSA9IG51bGwsXG4gIGdldHRlcixcbiAgbm9HdW4gPSBmYWxzZSxcbiAgaXNDYWNoZWluZyA9IGZhbHNlLFxuICBpc0NhY2hlZCA9IGZhbHNlLFxuICBvbmx5Q2FjaGUgPSBmYWxzZVxufSkgPT4ge1xuICBsZXQgdGhpc1Njb3BlO1xuICBsZXQgbGlzdGVuZXJzID0gW107XG4gIGxldCBjYWNoZVByb21pc2VzID0ge307XG4gIGxldCBwcm9taXNlcyA9IHt9O1xuICBsZXQgY2FjaGVkUmVzdWx0cyA9IHsgLi4uKGNhY2hlIHx8IHt9KSB9O1xuICBjb25zdCBhY2Nlc3NlcyA9IHt9O1xuICBjb25zdCBncmFwaCA9IHsgLi4uZGVmYXVsdEdyYXBoIH07XG4gIGNvbnN0IGdldCA9IHNvdWwgPT5cbiAgICBhY2Nlc3Nlc1tzb3VsXSB8fCAoYWNjZXNzZXNbc291bF0gPSBhY2Nlc3ModGhpc1Njb3BlLCBzb3VsKSk7XG4gIGNvbnN0IGtub3duID0gc291bCA9PiAocGFyZW50U2NvcGUgPyBwYXJlbnRTY29wZS5rbm93bihzb3VsKSA6IGdyYXBoW3NvdWxdKTtcbiAgY29uc3Qgb24gPSBmbiA9PiBsaXN0ZW5lcnMucHVzaChmbik7XG4gIGNvbnN0IG9mZiA9IGZuID0+IChsaXN0ZW5lcnMgPSBsaXN0ZW5lcnMuZmlsdGVyKHggPT4geCAhPT0gZm4pKTtcblxuICBjb25zdCBsb2FkID0gKHNvdWwsIGRhdGEpID0+IHtcbiAgICBjb25zdCBleGlzdGluZyA9IGdyYXBoW3NvdWxdO1xuICAgIGxldCByZXN1bHQgPSBleGlzdGluZztcblxuICAgIGlmIChkYXRhKSByZXN1bHQgPSBtZXJnZURlZXBSaWdodChleGlzdGluZyB8fCB7fSwgZGF0YSk7XG4gICAgZ3JhcGhbc291bF0gPSByZXN1bHQgfHwgZ3JhcGhbc291bF0gfHwgbnVsbDtcbiAgICBpZiAoIWVxdWFscyhleGlzdGluZywgcmVzdWx0KSkgbGlzdGVuZXJzLmZvckVhY2goZm4gPT4gZm4oc291bCwgcmVzdWx0KSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICBjb25zdCBmZXRjaCA9IHNvdWwgPT5cbiAgICBwYXJlbnRTY29wZVxuICAgICAgPyBwYXJlbnRTY29wZS5mZXRjaChzb3VsKVxuICAgICAgOiAocHJvbWlzZXNbc291bF0gPVxuICAgICAgICAgIHByb21pc2VzW3NvdWxdIHx8XG4gICAgICAgICAgbmV3IFphbGdvUHJvbWlzZShvayA9PiB7XG4gICAgICAgICAgICBsZXQgcmVhZFRpbWVvdXQ7XG5cbiAgICAgICAgICAgIGlmICghZ3VuKSByZXR1cm4gb2sobnVsbCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHJlY2VpdmUgPSBkYXRhID0+IHtcbiAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHJlYWRUaW1lb3V0KTtcbiAgICAgICAgICAgICAgb2sobG9hZChzb3VsLCBkYXRhKSk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICByZWFkVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBpZiAoIShzb3VsIGluIGdyYXBoKSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2xvdyBxdWVyeVwiLCBzb3VsKTtcbiAgICAgICAgICAgICAgICByZWNlaXZlKG51bGwpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB0aW1lb3V0KTtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBzb3VsICE9PSBcInN0cmluZ1wiKSB0aHJvdyBuZXcgRXJyb3IoYGJhZCBTT1VMICR7c291bH1gKTtcbiAgICAgICAgICAgIGlmIChnZXR0ZXIpIGdldHRlcihzb3VsKS50aGVuKHJlY2VpdmUpO1xuICAgICAgICAgICAgaWYgKCFub0d1bikge1xuICAgICAgICAgICAgICBjb25zdCBjaGFpbiA9IGd1bi5nZXQoc291bCk7XG5cbiAgICAgICAgICAgICAgY2hhaW4ub25jZShyZWNlaXZlKTtcbiAgICAgICAgICAgICAgY2hhaW4ub24oZGF0YSA9PiBzb3VsIGluIGdyYXBoICYmIHJlY2VpdmUoZGF0YSkpO1xuICAgICAgICAgICAgICBpZiAoY2hhaW4ubm90KSBjaGFpbi5ub3QoKCkgPT4gcmVjZWl2ZShudWxsKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgIH0pKTtcblxuICBjb25zdCBnZXRDYWNoZWQgPSAobmFtZSwgLi4uYXJncykgPT4ge1xuICAgIGNvbnN0IGtleSA9IFtuYW1lLCAuLi5hcmdzXS5tYXAoeCA9PlxuICAgICAgdHlwZW9mIHggPT09IFwib2JqZWN0XCIgPyBKU09OLnN0cmluZ2lmeSh4KSA6IGAke3h9YFxuICAgICk7XG5cbiAgICByZXR1cm4gW3BhdGgoa2V5LCBjYWNoZWRSZXN1bHRzKSwga2V5XTtcbiAgfTtcblxuICBjb25zdCBjYWNoZVF1ZXJ5ID0gKG5hbWUsIHF1ZXJ5Rm4sIC4uLmFyZ3MpID0+IHtcbiAgICBpZiAocGFyZW50U2NvcGUpIHJldHVybiBwYXJlbnRTY29wZS5jYWNoZVF1ZXJ5KG5hbWUsIHF1ZXJ5Rm4sIC4uLmFyZ3MpO1xuICAgIGNvbnN0IFtjYWNoZWQsIGtleV0gPSBnZXRDYWNoZWQobmFtZSwgLi4uYXJncyk7XG5cbiAgICBpZiAob25seUNhY2hlKSByZXR1cm4gcmVzb2x2ZShjYWNoZWQpO1xuICAgIHJldHVybiBxdWVyeUZuKHRoaXNTY29wZSwgLi4uYXJncykudGhlbihyZXN1bHQgPT4ge1xuICAgICAgaWYgKGlzQ2FjaGVpbmcpIHtcbiAgICAgICAgY2FjaGVkUmVzdWx0cyA9IGFzc29jUGF0aChrZXksIHJlc3VsdCwgY2FjaGVkUmVzdWx0cyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYWNoZWRSZXN1bHRzID0gZGlzc29jUGF0aChrZXksIGNhY2hlZFJlc3VsdHMpO1xuICAgICAgfVxuICAgICAgY2FjaGVQcm9taXNlcyA9IGRpc3NvY1BhdGgocGF0aCwgY2FjaGVQcm9taXNlcyk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGNhY2hlZFF1ZXJ5ID0gKG5hbWUsIHF1ZXJ5Rm4sIC4uLmFyZ3MpID0+IHtcbiAgICBpZiAocGFyZW50U2NvcGUpIHJldHVybiBwYXJlbnRTY29wZS5jYWNoZWRRdWVyeShuYW1lLCBxdWVyeUZuLCAuLi5hcmdzKTtcbiAgICBjb25zdCBbY2FjaGVkXSA9IGdldENhY2hlZChuYW1lLCAuLi5hcmdzKTtcbiAgICBjb25zdCBwcm9taXNlID0gY2FjaGVRdWVyeShuYW1lLCBxdWVyeUZuLCAuLi5hcmdzKTtcblxuICAgIC8vIGlmICghY2FjaGVkICYmIGlzQ2FjaGVkKSBjb25zb2xlLmxvZyhcImNhY2hlIG1pc3NcIiwgbmFtZSwgYXJncyk7XG4gICAgaWYgKCFpc0NhY2hlZCkgcmV0dXJuIHByb21pc2U7XG4gICAgcmV0dXJuIGNhY2hlZCA/IHJlc29sdmUobm93T3IoY2FjaGVkLCBwcm9taXNlKSkgOiBwcm9taXNlO1xuICB9O1xuXG4gIGNvbnN0IGdldENhY2hlID0gKCkgPT4gY2FjaGVkUmVzdWx0cztcbiAgY29uc3QgZ2V0R3JhcGggPSAoKSA9PiBncmFwaDtcbiAgY29uc3QgZ2V0QWNjZXNzZXMgPSAoKSA9PiBhY2Nlc3NlcztcbiAgY29uc3QgbG9hZENhY2hlZFJlc3VsdHMgPSBuZXdSZXN1bHRzID0+IHtcbiAgICBjYWNoZWRSZXN1bHRzID0gbWVyZ2VEZWVwUmlnaHQoY2FjaGVkUmVzdWx0cywgbmV3UmVzdWx0cyk7XG4gICAgbGlzdGVuZXJzLmZvckVhY2goZm4gPT4gZm4oKSk7XG4gIH07XG5cbiAgdGhpc1Njb3BlID0ge1xuICAgIG9uLFxuICAgIG9mZixcbiAgICBnZXQsXG4gICAgZ2V0Q2FjaGUsXG4gICAga25vd24sXG4gICAgZmV0Y2gsXG4gICAgY2FjaGVRdWVyeSxcbiAgICBjYWNoZWRRdWVyeSxcbiAgICBwYXJlbnRTY29wZSxcbiAgICBnZXRHcmFwaCxcbiAgICBnZXRBY2Nlc3NlcyxcbiAgICBsb2FkLFxuICAgIGxvYWRDYWNoZWRSZXN1bHRzXG4gIH07XG4gIHJldHVybiB0aGlzU2NvcGU7XG59O1xuXG5leHBvcnQgY29uc3QgcXVlcnkgPSAocXVlcnlGbiwgbmFtZSA9IG51bGwpID0+IHtcbiAgY29uc3QgY2FjaGVkUXVlcnkgPSAoc2NvcGVPYmosIC4uLmFyZ3MpID0+XG4gICAgc2NvcGVPYmouY2FjaGVkUXVlcnkobmFtZSwgcXVlcnlGbiwgLi4uYXJncyk7XG4gIGNvbnN0IGRvQ2FjaGVkUXVlcnkgPSBuYW1lID8gY2FjaGVkUXVlcnkgOiBxdWVyeUZuO1xuICBjb25zdCByZXN1bHQgPSBuYW1lID8gY2FjaGVkUXVlcnkgOiBxdWVyeUZuO1xuXG4gIHJlc3VsdC5xdWVyeSA9IHF1ZXJ5Rm47XG4gIHJlc3VsdC5jYWNoZWQgPSBkb0NhY2hlZFF1ZXJ5O1xuICByZXN1bHQubm93ID0gY29tcG9zZShcbiAgICBub3csXG4gICAgZG9DYWNoZWRRdWVyeVxuICApO1xuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yYW1kYV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV96YWxnb19wcm9taXNlX187Il0sInNvdXJjZVJvb3QiOiIifQ==