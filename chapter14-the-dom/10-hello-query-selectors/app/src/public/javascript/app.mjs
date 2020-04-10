'use strict';

function count(selector) {
  return document.querySelectorAll(selector).length;
}


const msg = `
  p: ${ count('p') } element(s)
  .animal: ${ count('.animal') } element(s)
  p .animal: ${ count('p .animal') } element(s)
  p > .animal: ${ count('p > .animal') } element(s)  
`;

alert(msg);
console.log(msg);