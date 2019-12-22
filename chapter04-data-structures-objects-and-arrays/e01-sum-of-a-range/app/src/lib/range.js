/**
 * The range module exposes a function that returns an array 
 * of integer numbers in a given range.
 * @module lib/range
 */

const debug = require('debug')('lib:range');
const Joi = require('@hapi/joi');

const parameterSchema = Joi.object().keys({
  start: Joi.number().integer().required(),
  end: Joi.number().integer().required(),
  step: Joi.number().integer().optional()
});


/**
 * Returns an array containing all the numbers from `start` up to and including `end`
 * @param {integer} start the first element number of the returned array
 * @param {integer} end the last element number of the returned array
 * @param {integer} [step] the step value for the increment
 */
function range(start, end, step) {
  const startTs = process.hrtime.bigint();
  debug(`about to compute range(${ start }, ${ end }, ${ step } )`);

  if (step === null || step === undefined) {
    step = (start <= end)? 1 : -1;
  }

  doValidate(start, end, step);
  
  const result = [];
  if (start <= end) {
    for (let i = start; i <= end; i += step) {
      result.push(i);
    }    
  } else {
    for (let i = start; i >= end; i += step) {
      result.push(i);
    }
  }

  debug(`range(${ start }, ${ end }, ${ step }): took ${ process.hrtime.bigint() - startTs } ns`);

  return result;
}

function doValidate(start, end, step) {
  const startTs = process.hrtime.bigint();
  const validationResult = parameterSchema.validate({ start, end, step });
  if (validationResult.error) {
    debug(`ERROR: range expects two integer parameters: ${ validationResult.error }`);
    throw new Error(validationResult.error);
  }

  if (step === 0) {
    debug(`ERROR: step cannot be 0`);
    throw new Error(`Invalid value for "step" parameter`);    
  }

  if ((start <= end && step < 0) || (start > end && step > 0)) {
    debug(`ERROR: Invalid value for "step" in this range ${ step }`);
    throw new Error(`Invalid value for "step" parameter`);    
  }                                        

  debug(`doValidate(${ start }, ${ end }, ${ step }): took ${ process.hrtime.bigint() - startTs } ns`);  
}

/** Returns an array of integers for the given range */
module.exports = range;