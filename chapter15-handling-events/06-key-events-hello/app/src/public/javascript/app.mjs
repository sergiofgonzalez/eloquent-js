'use strict';

window.addEventListener('keydown', evt => {
  console.log('keydown');
  if (evt.key == 'v') {
    document.body.style.background = 'violet';
  }
});

window.addEventListener('keyup', evt => {
  console.log('keyup');
  if (evt.key == 'v') {
    document.body.style.background = '';
  }
});