/**
 * The list module is a minimalist implementation of a list data structure in JavaScript
 * @module lib/list
 */

const debug = require('debug')('lib:list');
const Joi = require('@hapi/joi');
/**
 * Builds up a list from an array
 * @param {*[]} elements an array of elements for the list
 * @returns {*} a list created from the given array
 */
function arrayToList(elements) {
  const schema = Joi.array().required();
  const validationResult = schema.validate(elements);
  if (validationResult.error) {
    debug(`ERROR: function expects an array: ${ validationResult.error }`);
    throw new Error(validationResult.error);
  }

  let list = {};
  for (let i = elements.length - 1; i >= 0; i--) {
    list = prepend(elements[i], i === elements.length - 1 ? {}: list);
  }
  return list;
}

/**
 * Produces an array from a list
 * @param {*} list the list 
 * @returns {*[]} an array with the elements from the list in order
 */
function listToArray(list) {
  const schema = Joi.object().keys({
    value: Joi.any().required(),
    rest: Joi.object().allow(null).required()    
  }).allow({}).required();

  const validationResult = schema.validate(list);
  if (validationResult.error) {
    debug(`ERROR: function expects a list: ${ validationResult.error }`);
    throw new Error(validationResult.error);
  }

  if (isEmptyList(list)) {
    return [];
  }

  let listPointer = list;
  const arr = [listPointer.value];
  do {
    listPointer = listPointer.rest;
    if (listPointer)
      arr.push(listPointer.value);    
  } while (listPointer);
  return arr;
}

/**
 * Prepends an element to a given list
 * @param {*} element the element to be prepended to the list
 * @param {*} list the list
 * @returns {*} a new list, whose first element is the given one
 */
function prepend(element, list) {
  const funcArgsSchema = Joi.object().keys({
    element: Joi.any().required(),
    list: Joi.object().keys({
      value: Joi.any().required(),
      rest: Joi.object().allow(null).required()
    }).allow({}).required()    
  });

  const validationResult = funcArgsSchema.validate({ element, list });
  if (validationResult.error) {
    debug(`ERROR: function expects an element and a list: ${ validationResult.error }`);
    throw new Error(validationResult.error);
  }

  return {
    value: element,
    rest: isEmptyList(list)? null : list
  };
}

/**
 * Retrieves the nth element from the list
 * @param {*} list the list
 * @param {*} index the index of the element to be retrieved (from zero)
 * @returns {*} the element at position index or undefined if not found
 */
function nth(list, index) {
  const funcArgsSchema = Joi.object().keys({
    list: Joi.object().keys({
      value: Joi.any().required(),
      rest: Joi.object().allow(null).required()
    }).allow({}).required(),
    index: Joi.number().integer().min(0)    
  }).required();
  const validationResult = funcArgsSchema.validate({ list, index });
  if (validationResult.error) {
    debug(`ERROR: function expects a list and an index: ${ validationResult.error }`);
    throw new Error(validationResult.error);
  }

  if (isEmptyList(list))
    return undefined;

  let i;
  let element;
  let node;
  for (i = 0, node = list; i <= index && node !== null; i++) {
    element = node.value;
    node = node.rest;
  }

  if (i - 1 === index)
    return element;
  else 
    return undefined;
}


function isEmptyList(list) {
  return Object.entries(list).length === 0 && list.constructor === Object;
}

/** Returns an array of integers for the given range */
module.exports = {
  arrayToList,
  listToArray,
  prepend,
  nth
};