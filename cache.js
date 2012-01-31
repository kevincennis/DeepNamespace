/*!
 * cache.js
 * Copyright Kevin Ennis 
 * 12/7/2011
 */
 
var cache = (function(){
    'use strict';
    var cache = {}, delim = '.';
    return function(ns, val){
        // No args? Return the full cache object
        if (!ns) return cache;
        var arr = ns.split(delim), obj = cache, prop, i = 0, l = arr.length - 1;
        // Setter
        if (typeof val !== 'undefined'){
            for (; i < l; i++){
                prop = arr[i];
                obj[prop] = obj[prop] || {};
                obj = obj[prop];
            }
            return obj[arr.pop()] = val;
        // Getter
        } else {
            for (; i < l; i++){
                prop = arr[i];
                if (!( obj = obj[prop])) 
                    return undefined;
            }
            return obj[arr.pop()];
        }
    };
}());