/**
 * The sum function takes an array of numbers and returns the sum of these numbers.
 * @module lib/sum
 */

const debug = require('debug')('lib:sum');
const Joi = require('@hapi/joi');

const parameterSchema = Joi.array().items(Joi.number()).min(1).required();


/**
 * Takes an array of numbers and returns the sum of the elements of the array.
 * @param {number[]} nums an array of numbers
 */
function sum(nums) {
  const startTs = process.hrtime.bigint();
  debug(`about to compute sum(${ nums })`);
  const validationResult = parameterSchema.validate(nums);
  if (validationResult.error) {
    debug(`ERROR: sum validation failed: ${ validationResult.error }`);
    throw new Error(validationResult.error);
  }

  let result = 0;
  for (const num of nums) {
    result += num;
  }

  debug(`sum(${ nums }): took ${ process.hrtime.bigint() - startTs } ns`);

  return result;
}

/** Returns an array of integers for the given range */
module.exports = sum;