'use strict';

const textarea = document.querySelector('textarea');
let timeout;

textarea.addEventListener('input', () => {
  clearTimeout(timeout); // this does not fail if timeout is undefined, or if the timeout has expired
  timeout = setTimeout(() => console.log(`typed!`), 500);
});


const input = document.querySelector('#mouseCoords');
let scheduled = null;
window.addEventListener('mousemove', evt => {
  if (!scheduled) {
    setTimeout(() => {
      input.textContent = `(${ scheduled.pageX }, ${ scheduled.pageY })`;
      scheduled = null;      
    }, 500);
  }
  scheduled = evt;
}); 
  
