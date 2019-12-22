/**
 * The reverse module exposes functions to reverse the elements
 * of an array
 * @module lib/reverse-array
 */

const debug = require('debug')('lib:reverse-array');
const Joi = require('@hapi/joi');

const funcArgsSchema = Joi.array().min(1).required();
  

/**
 * Returns an array on which the elements of the given argument are reversed
 * @param {*} arr the array
 * @returns {*} a new array on which the elements from the given array are inverted
 */
function reverseArray(arr) {
  const startTs = process.hrtime.bigint();
  debug(`about to reverse array of ${ arr.length }`);
  validateArgsOrFail(arr);
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result[i] = arr[arr.length - 1 - i];
  }

  debug(`reverseArray: took ${ process.hrtime.bigint() - startTs } ns`);

  return result;
}

/**
 * Reverses an array in place
 * @param {*} arr the array
 */
function reverseArrayInPlace(arr) {
  const startTs = process.hrtime.bigint();
  debug(`about to reverse array of ${ arr.length } in place`);
  validateArgsOrFail(arr);
  const mid = arr.length / 2;
  for (let i = 0; i < mid; i++) {
    const item = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = item;
  }

  debug(`reverseArrayInPlace: took ${ process.hrtime.bigint() - startTs } ns`);
}

function validateArgsOrFail(arr) {
  const startTs = process.hrtime.bigint();
  const validationResult = funcArgsSchema.validate(arr);
  if (validationResult.error) {
    debug(`ERROR: function expects an array: ${ validationResult.error }`);
    throw new Error(validationResult.error);
  }
  debug(`validateArgsOrFail: took ${ process.hrtime.bigint() - startTs } ns`);  
}

/** Returns an array of integers for the given range */
module.exports = {
  reverseArray,
  reverseArrayInPlace
};