const fs = require('fs');
const { Router } = require("express");

/**
 * 
 * @param {string[][]} result 
 * @param {string[]} path 
 */
function getRoutes(result, path, layer) {
  if (layer.route) {
    layer.route.stack.forEach(getRoutes.bind(null, result, path.concat(split(layer.route.path))));
  } else if (layer.name === 'router' && layer.handle.stack) {
    layer.handle.stack.forEach(getRoutes.bind(null, result, path.concat(split(layer.regexp))));
  } else if (layer.method) {
    result.push(path.concat(split(layer.regexp)).filter(Boolean));
  }
}

function split(thing) {
  if (typeof thing === 'string') {
    return thing.split('/');
  } else if (thing.fast_slash) {
    return '';
  } else {
    const match = thing.toString()
      .replace('\\/?', '')
      .replace('(?=\\/|$)', '$')
      .match(/^\/\^((?:\\[.*+?^${}()|[\]\\\/]|[^.*+?^${}()|[\]\\\/])*)\$\//);
    return match
      ? match[1].replace(/\\(.)/g, '$1').split('/')
      : '<complex:' + thing.toString() + '>';
  }
}

/**
 * 
 * @param {{}} obj 
 * @param {string[]} pathArr 
 */
function buildPath(obj, pathArr) {
  const pathArrCopy = [...pathArr];
  let subObj = obj;
  while (pathArrCopy.length) {
    const path = pathArrCopy.shift();

    if (!subObj[path]) {
      subObj[path] = {};
    }
    
    if (Object.keys(subObj[path]).length > 0 && !pathArrCopy.length) {
      subObj[path][''] = true;
    } else if (!pathArrCopy.length) {
      subObj[path] = true;
    } else {
      subObj[path] = subObj[path] === true ? {"": true} : subObj[path];
      subObj = subObj[path];
    }
  }
}

/** @type {Router} */
module.exports = (router) => {
  /** @type {string[][]} */
  const pathArrList = [];
  router._router.stack.forEach(getRoutes.bind(null, pathArrList, []));
  
  const routesObj = {};
  /** @type {Set<string>} */
  const routesStr = new Set();
  for (const pathArr of pathArrList) {
    routesStr.add(pathArr.join('/'));
    buildPath(routesObj, pathArr);
  }

  const result = {
    routesStr: [...routesStr],
    routesObj
  };

  fs.promises.writeFile('./configs/routes.json', JSON.stringify(result, null, 2));

  return result;
};
