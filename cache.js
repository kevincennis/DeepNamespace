/*!
 * cache.js
 * Copyright Kevin Ennis 
 * 12/7/2011
 */
 
var cache = (function(){
    var cache = {}, delim = '.';
    return function(ns, val){
        // No args? Return the full cache object
    	if ( !ns ) return cache;
    	var arr = ns.split(delim), obj = cache, prop;
    	// Setter
    	if ( typeof val !== 'undefined' ){
            for (var i = 0, l = arr.length - 1; i < l; i++){
                prop = arr[i];
                obj[prop] = obj[prop] || {};
                obj = obj[prop];
            }
            return obj[arr.pop()] = val;
        // Getter
        } else {
            for (var i = 0, l = arr.length - 1; i < l; i++){
                prop = arr[i];
                if ( !obj[prop] ) 
                    return undefined;
                else
                    obj = obj[prop];
            }
            return obj[arr.pop()];
        }
    }
}());