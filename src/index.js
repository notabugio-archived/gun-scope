import {
  compose,
  dissocPath,
  assocPath,
  curry,
  path,
  prop,
  length,
  identity,
  mergeDeepRight
} from "ramda";
import { ZalgoPromise } from "zalgo-promise";
export const Promise = ZalgoPromise;
export const { all, resolve } = ZalgoPromise;

const nodeKeys = obj =>
  Object.keys(obj || {}).filter(key => key && key !== "_" && key !== "#");

export const nowOr = curry((defaultValue, promise) => {
  let result;
  let resolved;

  promise.then(res => {
    resolved = true;
    result = res;
  });
  return resolved ? result : defaultValue;
});

export const now = nowOr(undefined);

const node = (scope, soul) =>
  new ZalgoPromise((ok, fail) => {
    const known = scope.known(soul);

    if (typeof known !== "undefined") ok(known);
    scope
      .fetch(soul)
      .then(() => scope.known(soul))
      .then(ok)
      .catch(fail);
  });

const edge = (scope, key, parentaccess) =>
  parentaccess.then(data => {
    const soul = path([key, "#"], data);
    const val = prop(key, data);

    return soul ? scope.get(soul).then() : val;
  });

const access = (scope, key, paccess = null) => {
  if (!key || key === []) throw new Error(`bad key ${key}`);
  let thisaccess;
  const accesses = {};
  const get = gKey =>
    accesses[gKey] || (accesses[gKey] = access(scope, gKey, thisaccess));
  const then = fn =>
    (paccess ? edge : node)(scope, key, paccess).then(fn || identity);
  const keys = fn => then(nodeKeys).then(fn || identity);
  const count = fn => keys(length).then(fn || identity);

  thisaccess = { get, then, keys, souls: keys, count };
  return thisaccess;
};

export const scope = ({
  graph: defaultGraph = {},
  gun,
  parentScope,
  timeout = 10000,
  cache = null,
  getter,
  noGun = false,
  isCacheing = false,
  isCached = false,
  onlyCache = false
}) => {
  let thisScope;
  let listeners = [];
  let cachePromises = {};
  let promises = {};
  let cachedResults = { ...(cache || {}) };
  const accesses = {};
  const graph = { ...defaultGraph };
  const get = soul =>
    accesses[soul] || (accesses[soul] = access(thisScope, soul));
  const known = soul => (parentScope ? parentScope.known(soul) : graph[soul]);
  const on = fn => listeners.push(fn);
  const off = fn => (listeners = listeners.filter(x => x !== fn));

  const load = (soul, data) => {
    const existing = graph[soul];
    let result = existing;

    if (data) result = existing ? mergeDeepRight(existing || {}, data) : data;
    graph[soul] = result || graph[soul] || null;
    listeners.forEach(fn => fn(soul, result));
    return result;
  };

  const fetch = soul =>
    parentScope
      ? parentScope.fetch(soul)
      : (promises[soul] =
          promises[soul] ||
          new ZalgoPromise(ok => {
            let readTimeout;

            if (!gun) return ok(null);

            const receive = data => {
              clearTimeout(readTimeout);
              ok(load(soul, data));
            };

            readTimeout = setTimeout(() => {
              if (!(soul in graph)) {
                console.log("slow query", soul);
                receive(null);
              }
            }, timeout);

            if (typeof soul !== "string") throw new Error(`bad SOUL ${soul}`);
            if (getter) getter(soul).then(receive);
            if (!noGun) gun.get(soul).on(receive);
            return undefined;
          }));

  const cachedQuery = (name, queryFn, ...args) => {
    if (parentScope) return parentScope.cachedQuery(name, queryFn, ...args);
    const key = [name, ...args].map(x =>
      typeof x === "object" ? JSON.stringify(x) : `${x}`
    );
    const cached = path(key, cachedResults);

    if (onlyCache) return resolve(cached);
    const promise = queryFn(thisScope, ...args).then(result => {
      if (isCacheing || isCached) {
        cachedResults = assocPath(key, result, cachedResults);
      }
      cachePromises = dissocPath(path, cachePromises);
      return result;
    });

    return cached ? resolve(nowOr(cached, promise)) : promise;
  };

  const getCache = () => cachedResults;
  const getGraph = () => graph;
  const getAccesses = () => accesses;
  const loadCachedResults = newResults => {
    cachedResults = mergeDeepRight(cachedResults, newResults);
    listeners.forEach(fn => fn());
  };

  thisScope = {
    on,
    off,
    get,
    getCache,
    known,
    fetch,
    cachedQuery,
    parentScope,
    getGraph,
    getAccesses,
    load,
    loadCachedResults
  };
  return thisScope;
};

export const query = (queryFn, name = null) => {
  const cachedQuery = (scopeObj, ...args) =>
    scopeObj.cachedQuery(name, queryFn, ...args);
  const doCachedQuery = name ? cachedQuery : queryFn;
  const result = doCachedQuery;

  result.query = queryFn;
  result.cached = doCachedQuery;
  result.now = compose(
    now,
    doCachedQuery
  );
  return result;
};
