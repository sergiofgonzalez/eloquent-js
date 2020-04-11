'use strict';

window.addEventListener('click', evt => {
  let dot = document.createElement('div');
  dot.className = 'dot';
  dot.style.left = `${ (evt.pageX - 4) }px`;
  dot.style.top = `${ (evt.pageY - 4) }px`;
  document.body.appendChild(dot);
});