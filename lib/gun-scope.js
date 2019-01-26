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
    if (data) result = existing ? (0, _ramda.mergeDeepRight)(existing || {}, data) : data;
    graph[soul] = result || graph[soul] || null;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ndW4tc2NvcGUvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2d1bi1zY29wZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ndW4tc2NvcGUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZ3VuLXNjb3BlL2V4dGVybmFsIFwicmFtZGFcIiIsIndlYnBhY2s6Ly9ndW4tc2NvcGUvZXh0ZXJuYWwgXCJ6YWxnby1wcm9taXNlXCIiXSwibmFtZXMiOlsiUHJvbWlzZSIsImFsbCIsInJlc29sdmUiLCJub2RlS2V5cyIsIm9iaiIsIk9iamVjdCIsImtleXMiLCJmaWx0ZXIiLCJrZXkiLCJub3dPciIsImRlZmF1bHRWYWx1ZSIsInByb21pc2UiLCJyZXN1bHQiLCJyZXNvbHZlZCIsInRoZW4iLCJyZXMiLCJub3ciLCJ1bmRlZmluZWQiLCJub2RlIiwic2NvcGUiLCJzb3VsIiwib2siLCJmYWlsIiwia25vd24iLCJmZXRjaCIsImNhdGNoIiwiZWRnZSIsInBhcmVudGFjY2VzcyIsImRhdGEiLCJ2YWwiLCJnZXQiLCJhY2Nlc3MiLCJwYWNjZXNzIiwiRXJyb3IiLCJ0aGlzYWNjZXNzIiwiYWNjZXNzZXMiLCJnS2V5IiwiZm4iLCJjb3VudCIsInNvdWxzIiwiZ3JhcGgiLCJkZWZhdWx0R3JhcGgiLCJndW4iLCJwYXJlbnRTY29wZSIsInRpbWVvdXQiLCJjYWNoZSIsImdldHRlciIsIm5vR3VuIiwiaXNDYWNoZWluZyIsImlzQ2FjaGVkIiwib25seUNhY2hlIiwidGhpc1Njb3BlIiwibGlzdGVuZXJzIiwiY2FjaGVQcm9taXNlcyIsInByb21pc2VzIiwiY2FjaGVkUmVzdWx0cyIsIm9uIiwicHVzaCIsIm9mZiIsIngiLCJsb2FkIiwiZXhpc3RpbmciLCJmb3JFYWNoIiwicmVhZFRpbWVvdXQiLCJyZWNlaXZlIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImNvbnNvbGUiLCJsb2ciLCJjYWNoZWRRdWVyeSIsIm5hbWUiLCJxdWVyeUZuIiwiYXJncyIsIm1hcCIsIkpTT04iLCJzdHJpbmdpZnkiLCJjYWNoZWQiLCJnZXRDYWNoZSIsImdldEdyYXBoIiwiZ2V0QWNjZXNzZXMiLCJsb2FkQ2FjaGVkUmVzdWx0cyIsIm5ld1Jlc3VsdHMiLCJxdWVyeSIsInNjb3BlT2JqIiwiZG9DYWNoZWRRdWVyeSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBOztBQVdBOzs7O0FBQ08sSUFBTUEsT0FBTyw2QkFBYjs7SUFDUUMsRyw4QkFBQUEsRztJQUFLQyxPLDhCQUFBQSxPOzs7O0FBRXBCLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUFDLEdBQUc7QUFBQSxTQUNsQkMsTUFBTSxDQUFDQyxJQUFQLENBQVlGLEdBQUcsSUFB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LE1BQU1ELFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNjLFFBQUQ7QUFBQSx1Q0FBY1gsSUFBZDtBQUFjQSxVQUFkO0FBQUE7O0FBQUEsV0FDbEJXLFFBQVEsQ0FBQ2QsV0FBVCxPQUFBYyxRQUFRLEdBQWFiLElBQWIsRUFBbUJDLE9BQW5CLFNBQStCQyxJQUEvQixFQURVO0FBQUEsR0FBcEI7O0FBRUEsTUFBTVksYUFBYSxHQUFHZCxJQUFJLEdBQUdELFdBQUgsR0FBaUJFLE9BQTNDO0FBQ0EsTUFBTTNELE1BQU0sR0FBR3dFLGFBQWY7QUFFQXhFLFFBQU0sQ0FBQ3NFLEtBQVAsR0FBZVgsT0FBZjtBQUNBM0QsUUFBTSxDQUFDZ0UsTUFBUCxHQUFnQlEsYUFBaEI7QUFDQXhFLFFBQU0sQ0FBQ0ksR0FBUCxHQUFhLG9CQUNYQSxHQURXLEVBRVhvRSxhQUZXLENBQWI7QUFJQSxTQUFPeEUsTUFBUDtBQUNELENBYk07Ozs7Ozs7Ozs7Ozs7QUM3S1AsbUQ7Ozs7Ozs7Ozs7O0FDQUEsMkQiLCJmaWxlIjoiZ3VuLXNjb3BlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwicmFtZGFcIiksIHJlcXVpcmUoXCJ6YWxnby1wcm9taXNlXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiZ3VuLXNjb3BlXCIsIFtcInJhbWRhXCIsIFwiemFsZ28tcHJvbWlzZVwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJndW4tc2NvcGVcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJyYW1kYVwiKSwgcmVxdWlyZShcInphbGdvLXByb21pc2VcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImd1bi1zY29wZVwiXSA9IGZhY3Rvcnkocm9vdFtcInJhbWRhXCJdLCByb290W1wiemFsZ28tcHJvbWlzZVwiXSk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JhbWRhX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfemFsZ29fcHJvbWlzZV9fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQge1xuICBjb21wb3NlLFxuICBkaXNzb2NQYXRoLFxuICBhc3NvY1BhdGgsXG4gIGN1cnJ5LFxuICBwYXRoLFxuICBwcm9wLFxuICBsZW5ndGgsXG4gIGlkZW50aXR5LFxuICBtZXJnZURlZXBSaWdodFxufSBmcm9tIFwicmFtZGFcIjtcbmltcG9ydCB7IFphbGdvUHJvbWlzZSB9IGZyb20gXCJ6YWxnby1wcm9taXNlXCI7XG5leHBvcnQgY29uc3QgUHJvbWlzZSA9IFphbGdvUHJvbWlzZTtcbmV4cG9ydCBjb25zdCB7IGFsbCwgcmVzb2x2ZSB9ID0gWmFsZ29Qcm9taXNlO1xuXG5jb25zdCBub2RlS2V5cyA9IG9iaiA9PlxuICBPYmplY3Qua2V5cyhvYmogfHwge30pLmZpbHRlcihrZXkgPT4ga2V5ICYmIGtleSAhPT0gXCJfXCIgJiYga2V5ICE9PSBcIiNcIik7XG5cbmV4cG9ydCBjb25zdCBub3dPciA9IGN1cnJ5KChkZWZhdWx0VmFsdWUsIHByb21pc2UpID0+IHtcbiAgbGV0IHJlc3VsdDtcbiAgbGV0IHJlc29sdmVkO1xuXG4gIHByb21pc2UudGhlbihyZXMgPT4ge1xuICAgIHJlc29sdmVkID0gdHJ1ZTtcbiAgICByZXN1bHQgPSByZXM7XG4gIH0pO1xuICByZXR1cm4gcmVzb2x2ZWQgPyByZXN1bHQgOiBkZWZhdWx0VmFsdWU7XG59KTtcblxuZXhwb3J0IGNvbnN0IG5vdyA9IG5vd09yKHVuZGVmaW5lZCk7XG5cbmNvbnN0IG5vZGUgPSAoc2NvcGUsIHNvdWwpID0+XG4gIG5ldyBaYWxnb1Byb21pc2UoKG9rLCBmYWlsKSA9PiB7XG4gICAgY29uc3Qga25vd24gPSBzY29wZS5rbm93bihzb3VsKTtcblxuICAgIGlmICh0eXBlb2Yga25vd24gIT09IFwidW5kZWZpbmVkXCIpIG9rKGtub3duKTtcbiAgICBzY29wZVxuICAgICAgLmZldGNoKHNvdWwpXG4gICAgICAudGhlbigoKSA9PiBzY29wZS5rbm93bihzb3VsKSlcbiAgICAgIC50aGVuKG9rKVxuICAgICAgLmNhdGNoKGZhaWwpO1xuICB9KTtcblxuY29uc3QgZWRnZSA9IChzY29wZSwga2V5LCBwYXJlbnRhY2Nlc3MpID0+XG4gIHBhcmVudGFjY2Vzcy50aGVuKGRhdGEgPT4ge1xuICAgIGNvbnN0IHNvdWwgPSBwYXRoKFtrZXksIFwiI1wiXSwgZGF0YSk7XG4gICAgY29uc3QgdmFsID0gcHJvcChrZXksIGRhdGEpO1xuXG4gICAgcmV0dXJuIHNvdWwgPyBzY29wZS5nZXQoc291bCkudGhlbigpIDogdmFsO1xuICB9KTtcblxuY29uc3QgYWNjZXNzID0gKHNjb3BlLCBrZXksIHBhY2Nlc3MgPSBudWxsKSA9PiB7XG4gIGlmICgha2V5IHx8IGtleSA9PT0gW10pIHRocm93IG5ldyBFcnJvcihgYmFkIGtleSAke2tleX1gKTtcbiAgbGV0IHRoaXNhY2Nlc3M7XG4gIGNvbnN0IGFjY2Vzc2VzID0ge307XG4gIGNvbnN0IGdldCA9IGdLZXkgPT5cbiAgICBhY2Nlc3Nlc1tnS2V5XSB8fCAoYWNjZXNzZXNbZ0tleV0gPSBhY2Nlc3Moc2NvcGUsIGdLZXksIHRoaXNhY2Nlc3MpKTtcbiAgY29uc3QgdGhlbiA9IGZuID0+XG4gICAgKHBhY2Nlc3MgPyBlZGdlIDogbm9kZSkoc2NvcGUsIGtleSwgcGFjY2VzcykudGhlbihmbiB8fCBpZGVudGl0eSk7XG4gIGNvbnN0IGtleXMgPSBmbiA9PiB0aGVuKG5vZGVLZXlzKS50aGVuKGZuIHx8IGlkZW50aXR5KTtcbiAgY29uc3QgY291bnQgPSBmbiA9PiBrZXlzKGxlbmd0aCkudGhlbihmbiB8fCBpZGVudGl0eSk7XG5cbiAgdGhpc2FjY2VzcyA9IHsgZ2V0LCB0aGVuLCBrZXlzLCBzb3Vsczoga2V5cywgY291bnQgfTtcbiAgcmV0dXJuIHRoaXNhY2Nlc3M7XG59O1xuXG5leHBvcnQgY29uc3Qgc2NvcGUgPSAoe1xuICBncmFwaDogZGVmYXVsdEdyYXBoID0ge30sXG4gIGd1bixcbiAgcGFyZW50U2NvcGUsXG4gIHRpbWVvdXQgPSAxMDAwMCxcbiAgY2FjaGUgPSBudWxsLFxuICBnZXR0ZXIsXG4gIG5vR3VuID0gZmFsc2UsXG4gIGlzQ2FjaGVpbmcgPSBmYWxzZSxcbiAgaXNDYWNoZWQgPSBmYWxzZSxcbiAgb25seUNhY2hlID0gZmFsc2Vcbn0pID0+IHtcbiAgbGV0IHRoaXNTY29wZTtcbiAgbGV0IGxpc3RlbmVycyA9IFtdO1xuICBsZXQgY2FjaGVQcm9taXNlcyA9IHt9O1xuICBsZXQgcHJvbWlzZXMgPSB7fTtcbiAgbGV0IGNhY2hlZFJlc3VsdHMgPSB7IC4uLihjYWNoZSB8fCB7fSkgfTtcbiAgY29uc3QgYWNjZXNzZXMgPSB7fTtcbiAgY29uc3QgZ3JhcGggPSB7IC4uLmRlZmF1bHRHcmFwaCB9O1xuICBjb25zdCBnZXQgPSBzb3VsID0+XG4gICAgYWNjZXNzZXNbc291bF0gfHwgKGFjY2Vzc2VzW3NvdWxdID0gYWNjZXNzKHRoaXNTY29wZSwgc291bCkpO1xuICBjb25zdCBrbm93biA9IHNvdWwgPT4gKHBhcmVudFNjb3BlID8gcGFyZW50U2NvcGUua25vd24oc291bCkgOiBncmFwaFtzb3VsXSk7XG4gIGNvbnN0IG9uID0gZm4gPT4gbGlzdGVuZXJzLnB1c2goZm4pO1xuICBjb25zdCBvZmYgPSBmbiA9PiAobGlzdGVuZXJzID0gbGlzdGVuZXJzLmZpbHRlcih4ID0+IHggIT09IGZuKSk7XG5cbiAgY29uc3QgbG9hZCA9IChzb3VsLCBkYXRhKSA9PiB7XG4gICAgY29uc3QgZXhpc3RpbmcgPSBncmFwaFtzb3VsXTtcbiAgICBsZXQgcmVzdWx0ID0gZXhpc3Rpbmc7XG5cbiAgICBpZiAoZGF0YSkgcmVzdWx0ID0gZXhpc3RpbmcgPyBtZXJnZURlZXBSaWdodChleGlzdGluZyB8fCB7fSwgZGF0YSkgOiBkYXRhO1xuICAgIGdyYXBoW3NvdWxdID0gcmVzdWx0IHx8IGdyYXBoW3NvdWxdIHx8IG51bGw7XG4gICAgbGlzdGVuZXJzLmZvckVhY2goZm4gPT4gZm4oc291bCwgcmVzdWx0KSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICBjb25zdCBmZXRjaCA9IHNvdWwgPT5cbiAgICBwYXJlbnRTY29wZVxuICAgICAgPyBwYXJlbnRTY29wZS5mZXRjaChzb3VsKVxuICAgICAgOiAocHJvbWlzZXNbc291bF0gPVxuICAgICAgICAgIHByb21pc2VzW3NvdWxdIHx8XG4gICAgICAgICAgbmV3IFphbGdvUHJvbWlzZShvayA9PiB7XG4gICAgICAgICAgICBsZXQgcmVhZFRpbWVvdXQ7XG5cbiAgICAgICAgICAgIGlmICghZ3VuKSByZXR1cm4gb2sobnVsbCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHJlY2VpdmUgPSBkYXRhID0+IHtcbiAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHJlYWRUaW1lb3V0KTtcbiAgICAgICAgICAgICAgb2sobG9hZChzb3VsLCBkYXRhKSk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICByZWFkVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBpZiAoIShzb3VsIGluIGdyYXBoKSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2xvdyBxdWVyeVwiLCBzb3VsKTtcbiAgICAgICAgICAgICAgICByZWNlaXZlKG51bGwpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB0aW1lb3V0KTtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBzb3VsICE9PSBcInN0cmluZ1wiKSB0aHJvdyBuZXcgRXJyb3IoYGJhZCBTT1VMICR7c291bH1gKTtcbiAgICAgICAgICAgIGlmIChnZXR0ZXIpIGdldHRlcihzb3VsKS50aGVuKHJlY2VpdmUpO1xuICAgICAgICAgICAgaWYgKCFub0d1bikgZ3VuLmdldChzb3VsKS5vbihyZWNlaXZlKTtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgfSkpO1xuXG4gIGNvbnN0IGNhY2hlZFF1ZXJ5ID0gKG5hbWUsIHF1ZXJ5Rm4sIC4uLmFyZ3MpID0+IHtcbiAgICBpZiAocGFyZW50U2NvcGUpIHJldHVybiBwYXJlbnRTY29wZS5jYWNoZWRRdWVyeShuYW1lLCBxdWVyeUZuLCAuLi5hcmdzKTtcbiAgICBjb25zdCBrZXkgPSBbbmFtZSwgLi4uYXJnc10ubWFwKHggPT5cbiAgICAgIHR5cGVvZiB4ID09PSBcIm9iamVjdFwiID8gSlNPTi5zdHJpbmdpZnkoeCkgOiBgJHt4fWBcbiAgICApO1xuICAgIGNvbnN0IGNhY2hlZCA9IHBhdGgoa2V5LCBjYWNoZWRSZXN1bHRzKTtcblxuICAgIGlmIChvbmx5Q2FjaGUpIHJldHVybiByZXNvbHZlKGNhY2hlZCk7XG4gICAgY29uc3QgcHJvbWlzZSA9IHF1ZXJ5Rm4odGhpc1Njb3BlLCAuLi5hcmdzKS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICBpZiAoaXNDYWNoZWluZyB8fCBpc0NhY2hlZCkge1xuICAgICAgICBjYWNoZWRSZXN1bHRzID0gYXNzb2NQYXRoKGtleSwgcmVzdWx0LCBjYWNoZWRSZXN1bHRzKTtcbiAgICAgIH1cbiAgICAgIGNhY2hlUHJvbWlzZXMgPSBkaXNzb2NQYXRoKHBhdGgsIGNhY2hlUHJvbWlzZXMpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9KTtcblxuICAgIHJldHVybiBjYWNoZWQgPyByZXNvbHZlKG5vd09yKGNhY2hlZCwgcHJvbWlzZSkpIDogcHJvbWlzZTtcbiAgfTtcblxuICBjb25zdCBnZXRDYWNoZSA9ICgpID0+IGNhY2hlZFJlc3VsdHM7XG4gIGNvbnN0IGdldEdyYXBoID0gKCkgPT4gZ3JhcGg7XG4gIGNvbnN0IGdldEFjY2Vzc2VzID0gKCkgPT4gYWNjZXNzZXM7XG4gIGNvbnN0IGxvYWRDYWNoZWRSZXN1bHRzID0gbmV3UmVzdWx0cyA9PiB7XG4gICAgY2FjaGVkUmVzdWx0cyA9IG1lcmdlRGVlcFJpZ2h0KGNhY2hlZFJlc3VsdHMsIG5ld1Jlc3VsdHMpO1xuICAgIGxpc3RlbmVycy5mb3JFYWNoKGZuID0+IGZuKCkpO1xuICB9O1xuXG4gIHRoaXNTY29wZSA9IHtcbiAgICBvbixcbiAgICBvZmYsXG4gICAgZ2V0LFxuICAgIGdldENhY2hlLFxuICAgIGtub3duLFxuICAgIGZldGNoLFxuICAgIGNhY2hlZFF1ZXJ5LFxuICAgIHBhcmVudFNjb3BlLFxuICAgIGdldEdyYXBoLFxuICAgIGdldEFjY2Vzc2VzLFxuICAgIGxvYWQsXG4gICAgbG9hZENhY2hlZFJlc3VsdHNcbiAgfTtcbiAgcmV0dXJuIHRoaXNTY29wZTtcbn07XG5cbmV4cG9ydCBjb25zdCBxdWVyeSA9IChxdWVyeUZuLCBuYW1lID0gbnVsbCkgPT4ge1xuICBjb25zdCBjYWNoZWRRdWVyeSA9IChzY29wZU9iaiwgLi4uYXJncykgPT5cbiAgICBzY29wZU9iai5jYWNoZWRRdWVyeShuYW1lLCBxdWVyeUZuLCAuLi5hcmdzKTtcbiAgY29uc3QgZG9DYWNoZWRRdWVyeSA9IG5hbWUgPyBjYWNoZWRRdWVyeSA6IHF1ZXJ5Rm47XG4gIGNvbnN0IHJlc3VsdCA9IGRvQ2FjaGVkUXVlcnk7XG5cbiAgcmVzdWx0LnF1ZXJ5ID0gcXVlcnlGbjtcbiAgcmVzdWx0LmNhY2hlZCA9IGRvQ2FjaGVkUXVlcnk7XG4gIHJlc3VsdC5ub3cgPSBjb21wb3NlKFxuICAgIG5vdyxcbiAgICBkb0NhY2hlZFF1ZXJ5XG4gICk7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JhbWRhX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3phbGdvX3Byb21pc2VfXzsiXSwic291cmNlUm9vdCI6IiJ9