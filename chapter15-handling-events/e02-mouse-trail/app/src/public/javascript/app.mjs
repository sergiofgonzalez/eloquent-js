'use strict';

window.addEventListener('mousemove', evt => {
  const trailDiv = document.createElement('div');
  trailDiv.className = 'trail';
  trailDiv.style.top = `${ evt.pageY }px`;
  trailDiv.style.left = `${ evt.pageX }px`;
  document.body.appendChild(trailDiv);
});


