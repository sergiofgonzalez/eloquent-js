'use strict';

/* consuming a class exported as default */
import Temperature from './lib/temperature.mjs';


const temperature = new Temperature(0);
console.log(`current Temp: ${ temperature.celsius } C`);
console.log(`current Temp: ${ temperature.fahrenheit } F`);

/* consuming a module that exports default and non-default bindings */
import weekDay from './lib/days-helper.mjs';
import { name } from './lib/days-helper.mjs';
import { number as dayNumber } from './lib/days-helper.mjs';

console.log(weekDay.name(1));
console.log(name(0));
console.log(dayNumber('Tuesday'));
