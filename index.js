'use strict';

var smartType = {
    isFunction: isFunction,
    isObject: isObject,
    isArray: isArray,
    isString: isString,
    isRegex: isRegex,
    isNumber: isNumber,
    isBoolean: isBoolean,
    isNull: isNull,
    isUndefined: isUndefined,
    getType: getType,
    isOfType: isOfType
}
/**
 * Check if an object is type 'function'
 *
 * @param  {Any} element
 * @return {Boolean}
 */
function isFunction(element) {
    return getType(element) === 'function';
}

/**
 * Check if an object is type 'object'
 *
 * @param  {Any} element
 * @return {Boolean}
 */
function isObject(element) {
    return getType(element) === 'object';
}

/**
 * Check if an object is type 'array'
 *
 * @param  {Any} element
 * @return {Boolean}
 */
function isArray(element) {
    return getType(element) === 'array';
}

/**
 * Check if an object is type 'string'
 *
 * @param  {Any} element
 * @return {Boolean}
 */
function isString(element) {
    return getType(element) === 'string';
}

/**
 * Check if an object is type 'regexp'
 *
 * @param  {Any} element
 * @return {Boolean}
 */
function isRegex(element) {
    return getType(element) === 'regexp';
}

/**
 * Check if an object is type 'number'
 *
 * @param  {Any} element
 * @return {Boolean}
 */
function isNumber(element) {
    if(isNaN(element)) {
        return false;
    }
    return getType(element) === 'number';
}

/**
 * Check if an object is type 'boolean'
 *
 * @param  {Any} element
 * @return {Boolean}
 */
function isBoolean(element) {
    return getType(element) === 'boolean';
}

/**
 * Check if an object is type 'null'
 *
 * @param  {Any} element
 * @return {Boolean}
 */
function isNull(element) {
    return getType(element) === 'null';
}

/**
 * Check if an object is type 'undefined'
 *
 * @param  {Any} element
 * @return {Boolean}
 */
function isUndefined(element) {
    return getType(element) === 'undefined';
}


/**
 * Get the type of an element
 *
 * @param  {Any} element
 * @return {String}
 */
function getType(element) {
    return Object.prototype.toString.call(element).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
}

/**
 * Catch all method to check any given type
 *
 * @param  {Any} element
 * @param  {String} type
 * @return {Boolean}
 */
function isOfType(element, type) {
    return getType(element) === type;
}

module.exports = smartType;
