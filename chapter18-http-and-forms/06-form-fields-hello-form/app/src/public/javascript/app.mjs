'use strict';

const form = document.querySelector('form');

console.log(`Using 'elements' property as an array:`);
console.log(`form.elements[1].type: ${ form.elements[1].type }`);

console.log(`Using 'elements' property as a map by name:`);
console.log(`form.elements.name.form == form: ${ form.elements.name.form == form }`);

/* comment to see the default behavior (navigate to the page identified by the action) */
form.addEventListener('submit', event => {
  console.log(`Processing form: name=${ form.elements.name.value }; password=${ form.elements.password.value }`);
  event.preventDefault();
});