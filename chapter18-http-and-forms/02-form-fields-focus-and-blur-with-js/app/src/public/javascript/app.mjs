'use strict';

document.querySelector('input').focus();
console.log(document.activeElement.tagName);

document.querySelector('input').blur();
console.log(document.activeElement.tagName);