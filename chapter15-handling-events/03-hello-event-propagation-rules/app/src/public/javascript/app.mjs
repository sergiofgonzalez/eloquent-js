'use strict';

const para = document.querySelector('p');
const button = document.querySelector('button');

para.addEventListener('mousedown', evt => console.log(`handler for <p> activated; target=${ evt.target.nodeName }`));
button.addEventListener('mousedown', evt => {
  console.log(`handler for <button> activated; target=${ evt.target.nodeName }`);
  if (event.button == 2) event.stopPropagation();
});