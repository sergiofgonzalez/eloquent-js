'use strict';

let lastX; // last observed mouseX value

let bar = document.querySelector('div');
bar.addEventListener('mousedown', evt => {
  if (evt.button == 0) {
    lastX = evt.clientX;
    window.addEventListener('mousemove', moved);
    evt.preventDefault();
  }
});

function moved(evt) {
  if (evt.buttons == 0) {
    window.removeEventListener('mousemove', moved);
  } else {
    const dist = event.clientX - lastX;
    const newWidth = Math.max(10, bar.offsetWidth + dist);
    bar.style.width = `${ newWidth }px`;
    lastX = evt.clientX;
  }
}