'use strict';

import byTagName from './lib/by-tag-name.js';

console.log(byTagName(document.body, 'h1').length);   // should be 1

console.log(byTagName(document.body, 'span').length); // should be 3

const para = document.querySelector('p');
console.log(byTagName(para, 'span').length);          // should be 2
