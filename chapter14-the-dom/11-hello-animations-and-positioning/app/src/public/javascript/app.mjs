'use strict';

const img = document.querySelector('img');
let angle = Math.PI / 2;

function animate(time, lastTime) {
  if (lastTime != null) {
    angle += (time - lastTime) * 0.01;
  }
  img.style.top = `${ Math.sin(angle) * 100 }px`;
  img.style.left = `${ Math.cos(angle) *200 }px`;
  requestAnimationFrame(newTime => animate(newTime, time));
}

requestAnimationFrame(animate);