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
    if (data) result = existing ? (0, _ramda.mergeDeepRight)(existing || {}, data) : data;
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
      if (!noGun) gun.get(soul).on(receive);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ndW4tc2NvcGUvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2d1bi1zY29wZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ndW4tc2NvcGUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZ3VuLXNjb3BlL2V4dGVybmFsIFwicmFtZGFcIiIsIndlYnBhY2s6Ly9ndW4tc2NvcGUvZXh0ZXJuYWwgXCJ6YWxnby1wcm9taXNlXCIiXSwibmFtZXMiOlsiUHJvbWlzZSIsImFsbCIsInJlc29sdmUiLCJub2RlS2V5cyIsIm9iaiIsIk9iamVjdCIsImtleXMiLCJmaWx0ZXIiLCJrZXkiLCJub3dPciIsImRlZmF1bHRWYWx1ZSIsInByb21pc2UiLCJyZXN1bHQiLCJyZXNvbHZlZCIsInRoZW4iLCJyZXMiLCJub3ciLCJ1bmRlZmluZWQiLCJub2RlIiwic2NvcGUiLCJzb3VsIiwib2siLCJmYWlsIiwia25vd24iLCJmZXRjaCIsImNhdGNoIiwiZWRnZSIsInBhcmVudGFjY2VzcyIsImRhdGEiLCJ2YWwiLCJnZXQiLCJhY2Nlc3MiLCJwYWNjZXNzIiwiRXJyb3IiLCJ0aGlzYWNjZXNzIiwiYWNjZXNzZXMiLCJnS2V5IiwiZm4iLCJjb3VudCIsInNvdWxzIiwiZ3JhcGgiLCJkZWZhdWx0R3JhcGgiLCJndW4iLCJwYXJlbnRTY29wZSIsInRpbWVvdXQiLCJjYWNoZSIsImdldHRlciIsIm5vR3VuIiwiaXNDYWNoZWluZyIsImlzQ2FjaGVkIiwib25seUNhY2hlIiwidGhpc1Njb3BlIiwibGlzdGVuZXJzIiwiY2FjaGVQcm9taXNlcyIsInByb21pc2VzIiwiY2FjaGVkUmVzdWx0cyIsIm9uIiwicHVzaCIsIm9mZiIsIngiLCJsb2FkIiwiZXhpc3RpbmciLCJmb3JFYWNoIiwicmVhZFRpbWVvdXQiLCJyZWNlaXZlIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImNvbnNvbGUiLCJsb2ciLCJnZXRDYWNoZWQiLCJuYW1lIiwiYXJncyIsIm1hcCIsIkpTT04iLCJzdHJpbmdpZnkiLCJjYWNoZVF1ZXJ5IiwicXVlcnlGbiIsImNhY2hlZCIsImNhY2hlZFF1ZXJ5IiwiZ2V0Q2FjaGUiLCJnZXRHcmFwaCIsImdldEFjY2Vzc2VzIiwibG9hZENhY2hlZFJlc3VsdHMiLCJuZXdSZXN1bHRzIiwicXVlcnkiLCJzY29wZU9iaiIsImRvQ2FjaGVkUXVlcnkiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTs7QUFZQTs7Ozs7Ozs7Ozs7O0FBQ08sSUFBTUEsT0FBTyw2QkFBYjs7SUFDUUMsRyw4QkFBQUEsRztJQUFLQyxPLDhCQUFBQSxPOzs7O0FBRXBCLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUFDLEdBQUc7QUFBQSxTQUNs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LFNBQStCTCxJQUEvQixFQURVO0FBQUEsR0FBcEI7O0FBRUEsTUFBTWUsYUFBYSxHQUFHaEIsSUFBSSxHQUFHUSxXQUFILEdBQWlCRixPQUEzQztBQUNBLE1BQU1oRSxNQUFNLEdBQUcwRCxJQUFJLEdBQUdRLFdBQUgsR0FBaUJGLE9BQXBDO0FBRUFoRSxRQUFNLENBQUN3RSxLQUFQLEdBQWVSLE9BQWY7QUFDQWhFLFFBQU0sQ0FBQ2lFLE1BQVAsR0FBZ0JTLGFBQWhCO0FBQ0ExRSxRQUFNLENBQUNJLEdBQVAsR0FBYSxvQkFDWEEsR0FEVyxFQUVYc0UsYUFGVyxDQUFiO0FBSUEsU0FBTzFFLE1BQVA7QUFDRCxDQWJNOzs7Ozs7Ozs7Ozs7O0FDOUxQLG1EOzs7Ozs7Ozs7OztBQ0FBLDJEIiwiZmlsZSI6Imd1bi1zY29wZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInJhbWRhXCIpLCByZXF1aXJlKFwiemFsZ28tcHJvbWlzZVwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcImd1bi1zY29wZVwiLCBbXCJyYW1kYVwiLCBcInphbGdvLXByb21pc2VcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZ3VuLXNjb3BlXCJdID0gZmFjdG9yeShyZXF1aXJlKFwicmFtZGFcIiksIHJlcXVpcmUoXCJ6YWxnby1wcm9taXNlXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJndW4tc2NvcGVcIl0gPSBmYWN0b3J5KHJvb3RbXCJyYW1kYVwiXSwgcm9vdFtcInphbGdvLXByb21pc2VcIl0pO1xufSkodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yYW1kYV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3phbGdvX3Byb21pc2VfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHtcbiAgY29tcG9zZSxcbiAgZXF1YWxzLFxuICBkaXNzb2NQYXRoLFxuICBhc3NvY1BhdGgsXG4gIGN1cnJ5LFxuICBwYXRoLFxuICBwcm9wLFxuICBsZW5ndGgsXG4gIGlkZW50aXR5LFxuICBtZXJnZURlZXBSaWdodFxufSBmcm9tIFwicmFtZGFcIjtcbmltcG9ydCB7IFphbGdvUHJvbWlzZSB9IGZyb20gXCJ6YWxnby1wcm9taXNlXCI7XG5leHBvcnQgY29uc3QgUHJvbWlzZSA9IFphbGdvUHJvbWlzZTtcbmV4cG9ydCBjb25zdCB7IGFsbCwgcmVzb2x2ZSB9ID0gWmFsZ29Qcm9taXNlO1xuXG5jb25zdCBub2RlS2V5cyA9IG9iaiA9PlxuICBPYmplY3Qua2V5cyhvYmogfHwge30pLmZpbHRlcihrZXkgPT4ga2V5ICYmIGtleSAhPT0gXCJfXCIgJiYga2V5ICE9PSBcIiNcIik7XG5cbmV4cG9ydCBjb25zdCBub3dPciA9IGN1cnJ5KChkZWZhdWx0VmFsdWUsIHByb21pc2UpID0+IHtcbiAgbGV0IHJlc3VsdDtcbiAgbGV0IHJlc29sdmVkO1xuXG4gIHByb21pc2UudGhlbihyZXMgPT4ge1xuICAgIHJlc29sdmVkID0gdHJ1ZTtcbiAgICByZXN1bHQgPSByZXM7XG4gIH0pO1xuICByZXR1cm4gcmVzb2x2ZWQgPyByZXN1bHQgOiBkZWZhdWx0VmFsdWU7XG59KTtcblxuZXhwb3J0IGNvbnN0IG5vdyA9IG5vd09yKHVuZGVmaW5lZCk7XG5cbmNvbnN0IG5vZGUgPSAoc2NvcGUsIHNvdWwpID0+XG4gIG5ldyBaYWxnb1Byb21pc2UoKG9rLCBmYWlsKSA9PiB7XG4gICAgY29uc3Qga25vd24gPSBzY29wZS5rbm93bihzb3VsKTtcblxuICAgIGlmICh0eXBlb2Yga25vd24gIT09IFwidW5kZWZpbmVkXCIpIG9rKGtub3duKTtcbiAgICBzY29wZVxuICAgICAgLmZldGNoKHNvdWwpXG4gICAgICAudGhlbigoKSA9PiBzY29wZS5rbm93bihzb3VsKSlcbiAgICAgIC50aGVuKG9rKVxuICAgICAgLmNhdGNoKGZhaWwpO1xuICB9KTtcblxuY29uc3QgZWRnZSA9IChzY29wZSwga2V5LCBwYXJlbnRhY2Nlc3MpID0+XG4gIHBhcmVudGFjY2Vzcy50aGVuKGRhdGEgPT4ge1xuICAgIGNvbnN0IHNvdWwgPSBwYXRoKFtrZXksIFwiI1wiXSwgZGF0YSk7XG4gICAgY29uc3QgdmFsID0gcHJvcChrZXksIGRhdGEpO1xuXG4gICAgcmV0dXJuIHNvdWwgPyBzY29wZS5nZXQoc291bCkudGhlbigpIDogdmFsO1xuICB9KTtcblxuY29uc3QgYWNjZXNzID0gKHNjb3BlLCBrZXksIHBhY2Nlc3MgPSBudWxsKSA9PiB7XG4gIGlmICgha2V5IHx8IGtleSA9PT0gW10pIHRocm93IG5ldyBFcnJvcihgYmFkIGtleSAke2tleX1gKTtcbiAgbGV0IHRoaXNhY2Nlc3M7XG4gIGNvbnN0IGFjY2Vzc2VzID0ge307XG4gIGNvbnN0IGdldCA9IGdLZXkgPT5cbiAgICBhY2Nlc3Nlc1tnS2V5XSB8fCAoYWNjZXNzZXNbZ0tleV0gPSBhY2Nlc3Moc2NvcGUsIGdLZXksIHRoaXNhY2Nlc3MpKTtcbiAgY29uc3QgdGhlbiA9IGZuID0+XG4gICAgKHBhY2Nlc3MgPyBlZGdlIDogbm9kZSkoc2NvcGUsIGtleSwgcGFjY2VzcykudGhlbihmbiB8fCBpZGVudGl0eSk7XG4gIGNvbnN0IGtleXMgPSBmbiA9PiB0aGVuKG5vZGVLZXlzKS50aGVuKGZuIHx8IGlkZW50aXR5KTtcbiAgY29uc3QgY291bnQgPSBmbiA9PiBrZXlzKGxlbmd0aCkudGhlbihmbiB8fCBpZGVudGl0eSk7XG5cbiAgdGhpc2FjY2VzcyA9IHsgZ2V0LCB0aGVuLCBrZXlzLCBzb3Vsczoga2V5cywgY291bnQgfTtcbiAgcmV0dXJuIHRoaXNhY2Nlc3M7XG59O1xuXG5leHBvcnQgY29uc3Qgc2NvcGUgPSAoe1xuICBncmFwaDogZGVmYXVsdEdyYXBoID0ge30sXG4gIGd1bixcbiAgcGFyZW50U2NvcGUsXG4gIHRpbWVvdXQgPSAxMDAwMCxcbiAgY2FjaGUgPSBudWxsLFxuICBnZXR0ZXIsXG4gIG5vR3VuID0gZmFsc2UsXG4gIGlzQ2FjaGVpbmcgPSBmYWxzZSxcbiAgaXNDYWNoZWQgPSBmYWxzZSxcbiAgb25seUNhY2hlID0gZmFsc2Vcbn0pID0+IHtcbiAgbGV0IHRoaXNTY29wZTtcbiAgbGV0IGxpc3RlbmVycyA9IFtdO1xuICBsZXQgY2FjaGVQcm9taXNlcyA9IHt9O1xuICBsZXQgcHJvbWlzZXMgPSB7fTtcbiAgbGV0IGNhY2hlZFJlc3VsdHMgPSB7IC4uLihjYWNoZSB8fCB7fSkgfTtcbiAgY29uc3QgYWNjZXNzZXMgPSB7fTtcbiAgY29uc3QgZ3JhcGggPSB7IC4uLmRlZmF1bHRHcmFwaCB9O1xuICBjb25zdCBnZXQgPSBzb3VsID0+XG4gICAgYWNjZXNzZXNbc291bF0gfHwgKGFjY2Vzc2VzW3NvdWxdID0gYWNjZXNzKHRoaXNTY29wZSwgc291bCkpO1xuICBjb25zdCBrbm93biA9IHNvdWwgPT4gKHBhcmVudFNjb3BlID8gcGFyZW50U2NvcGUua25vd24oc291bCkgOiBncmFwaFtzb3VsXSk7XG4gIGNvbnN0IG9uID0gZm4gPT4gbGlzdGVuZXJzLnB1c2goZm4pO1xuICBjb25zdCBvZmYgPSBmbiA9PiAobGlzdGVuZXJzID0gbGlzdGVuZXJzLmZpbHRlcih4ID0+IHggIT09IGZuKSk7XG5cbiAgY29uc3QgbG9hZCA9IChzb3VsLCBkYXRhKSA9PiB7XG4gICAgY29uc3QgZXhpc3RpbmcgPSBncmFwaFtzb3VsXTtcbiAgICBsZXQgcmVzdWx0ID0gZXhpc3Rpbmc7XG5cbiAgICBpZiAoZGF0YSkgcmVzdWx0ID0gZXhpc3RpbmcgPyBtZXJnZURlZXBSaWdodChleGlzdGluZyB8fCB7fSwgZGF0YSkgOiBkYXRhO1xuICAgIGdyYXBoW3NvdWxdID0gcmVzdWx0IHx8IGdyYXBoW3NvdWxdIHx8IG51bGw7XG4gICAgaWYgKCFlcXVhbHMoZXhpc3RpbmcsIHJlc3VsdCkpIGxpc3RlbmVycy5mb3JFYWNoKGZuID0+IGZuKHNvdWwsIHJlc3VsdCkpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgY29uc3QgZmV0Y2ggPSBzb3VsID0+XG4gICAgcGFyZW50U2NvcGVcbiAgICAgID8gcGFyZW50U2NvcGUuZmV0Y2goc291bClcbiAgICAgIDogKHByb21pc2VzW3NvdWxdID1cbiAgICAgICAgICBwcm9taXNlc1tzb3VsXSB8fFxuICAgICAgICAgIG5ldyBaYWxnb1Byb21pc2Uob2sgPT4ge1xuICAgICAgICAgICAgbGV0IHJlYWRUaW1lb3V0O1xuXG4gICAgICAgICAgICBpZiAoIWd1bikgcmV0dXJuIG9rKG51bGwpO1xuXG4gICAgICAgICAgICBjb25zdCByZWNlaXZlID0gZGF0YSA9PiB7XG4gICAgICAgICAgICAgIGNsZWFyVGltZW91dChyZWFkVGltZW91dCk7XG4gICAgICAgICAgICAgIG9rKGxvYWQoc291bCwgZGF0YSkpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgcmVhZFRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgaWYgKCEoc291bCBpbiBncmFwaCkpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInNsb3cgcXVlcnlcIiwgc291bCk7XG4gICAgICAgICAgICAgICAgcmVjZWl2ZShudWxsKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgdGltZW91dCk7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc291bCAhPT0gXCJzdHJpbmdcIikgdGhyb3cgbmV3IEVycm9yKGBiYWQgU09VTCAke3NvdWx9YCk7XG4gICAgICAgICAgICBpZiAoZ2V0dGVyKSBnZXR0ZXIoc291bCkudGhlbihyZWNlaXZlKTtcbiAgICAgICAgICAgIGlmICghbm9HdW4pIGd1bi5nZXQoc291bCkub24ocmVjZWl2ZSk7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgIH0pKTtcblxuICBjb25zdCBnZXRDYWNoZWQgPSAobmFtZSwgLi4uYXJncykgPT4ge1xuICAgIGNvbnN0IGtleSA9IFtuYW1lLCAuLi5hcmdzXS5tYXAoeCA9PlxuICAgICAgdHlwZW9mIHggPT09IFwib2JqZWN0XCIgPyBKU09OLnN0cmluZ2lmeSh4KSA6IGAke3h9YFxuICAgICk7XG5cbiAgICByZXR1cm4gW3BhdGgoa2V5LCBjYWNoZWRSZXN1bHRzKSwga2V5XTtcbiAgfTtcblxuICBjb25zdCBjYWNoZVF1ZXJ5ID0gKG5hbWUsIHF1ZXJ5Rm4sIC4uLmFyZ3MpID0+IHtcbiAgICBpZiAocGFyZW50U2NvcGUpIHJldHVybiBwYXJlbnRTY29wZS5jYWNoZVF1ZXJ5KG5hbWUsIHF1ZXJ5Rm4sIC4uLmFyZ3MpO1xuICAgIGNvbnN0IFtjYWNoZWQsIGtleV0gPSBnZXRDYWNoZWQobmFtZSwgLi4uYXJncyk7XG5cbiAgICBpZiAob25seUNhY2hlKSByZXR1cm4gcmVzb2x2ZShjYWNoZWQpO1xuICAgIHJldHVybiBxdWVyeUZuKHRoaXNTY29wZSwgLi4uYXJncykudGhlbihyZXN1bHQgPT4ge1xuICAgICAgaWYgKGlzQ2FjaGVpbmcpIHtcbiAgICAgICAgY2FjaGVkUmVzdWx0cyA9IGFzc29jUGF0aChrZXksIHJlc3VsdCwgY2FjaGVkUmVzdWx0cyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYWNoZWRSZXN1bHRzID0gZGlzc29jUGF0aChrZXksIGNhY2hlZFJlc3VsdHMpO1xuICAgICAgfVxuICAgICAgY2FjaGVQcm9taXNlcyA9IGRpc3NvY1BhdGgocGF0aCwgY2FjaGVQcm9taXNlcyk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGNhY2hlZFF1ZXJ5ID0gKG5hbWUsIHF1ZXJ5Rm4sIC4uLmFyZ3MpID0+IHtcbiAgICBpZiAocGFyZW50U2NvcGUpIHJldHVybiBwYXJlbnRTY29wZS5jYWNoZWRRdWVyeShuYW1lLCBxdWVyeUZuLCAuLi5hcmdzKTtcbiAgICBjb25zdCBbY2FjaGVkXSA9IGdldENhY2hlZChuYW1lLCAuLi5hcmdzKTtcbiAgICBjb25zdCBwcm9taXNlID0gY2FjaGVRdWVyeShuYW1lLCBxdWVyeUZuLCAuLi5hcmdzKTtcblxuICAgIC8vIGlmICghY2FjaGVkICYmIGlzQ2FjaGVkKSBjb25zb2xlLmxvZyhcImNhY2hlIG1pc3NcIiwgbmFtZSwgYXJncyk7XG4gICAgaWYgKCFpc0NhY2hlZCkgcmV0dXJuIHByb21pc2U7XG4gICAgcmV0dXJuIGNhY2hlZCA/IHJlc29sdmUobm93T3IoY2FjaGVkLCBwcm9taXNlKSkgOiBwcm9taXNlO1xuICB9O1xuXG4gIGNvbnN0IGdldENhY2hlID0gKCkgPT4gY2FjaGVkUmVzdWx0cztcbiAgY29uc3QgZ2V0R3JhcGggPSAoKSA9PiBncmFwaDtcbiAgY29uc3QgZ2V0QWNjZXNzZXMgPSAoKSA9PiBhY2Nlc3NlcztcbiAgY29uc3QgbG9hZENhY2hlZFJlc3VsdHMgPSBuZXdSZXN1bHRzID0+IHtcbiAgICBjYWNoZWRSZXN1bHRzID0gbWVyZ2VEZWVwUmlnaHQoY2FjaGVkUmVzdWx0cywgbmV3UmVzdWx0cyk7XG4gICAgbGlzdGVuZXJzLmZvckVhY2goZm4gPT4gZm4oKSk7XG4gIH07XG5cbiAgdGhpc1Njb3BlID0ge1xuICAgIG9uLFxuICAgIG9mZixcbiAgICBnZXQsXG4gICAgZ2V0Q2FjaGUsXG4gICAga25vd24sXG4gICAgZmV0Y2gsXG4gICAgY2FjaGVRdWVyeSxcbiAgICBjYWNoZWRRdWVyeSxcbiAgICBwYXJlbnRTY29wZSxcbiAgICBnZXRHcmFwaCxcbiAgICBnZXRBY2Nlc3NlcyxcbiAgICBsb2FkLFxuICAgIGxvYWRDYWNoZWRSZXN1bHRzXG4gIH07XG4gIHJldHVybiB0aGlzU2NvcGU7XG59O1xuXG5leHBvcnQgY29uc3QgcXVlcnkgPSAocXVlcnlGbiwgbmFtZSA9IG51bGwpID0+IHtcbiAgY29uc3QgY2FjaGVkUXVlcnkgPSAoc2NvcGVPYmosIC4uLmFyZ3MpID0+XG4gICAgc2NvcGVPYmouY2FjaGVkUXVlcnkobmFtZSwgcXVlcnlGbiwgLi4uYXJncyk7XG4gIGNvbnN0IGRvQ2FjaGVkUXVlcnkgPSBuYW1lID8gY2FjaGVkUXVlcnkgOiBxdWVyeUZuO1xuICBjb25zdCByZXN1bHQgPSBuYW1lID8gY2FjaGVkUXVlcnkgOiBxdWVyeUZuO1xuXG4gIHJlc3VsdC5xdWVyeSA9IHF1ZXJ5Rm47XG4gIHJlc3VsdC5jYWNoZWQgPSBkb0NhY2hlZFF1ZXJ5O1xuICByZXN1bHQubm93ID0gY29tcG9zZShcbiAgICBub3csXG4gICAgZG9DYWNoZWRRdWVyeVxuICApO1xuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yYW1kYV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV96YWxnb19wcm9taXNlX187Il0sInNvdXJjZVJvb3QiOiIifQ==