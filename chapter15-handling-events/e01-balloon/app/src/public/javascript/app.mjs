'use strict';

var balloonSize;

const balloon = document.querySelector('p');
const button = document.querySelector('button');
reset();


button.addEventListener('click', () => {
  reset();
});

function reset() {
  balloonSize = 1;
  balloon.textContent = '🎈';
  balloon.style.fontSize = `${ balloonSize }rem`;
  document.body.addEventListener('keydown', balloonKeydownHanlder);
}

function balloonKeydownHanlder(evt) {
  if (evt.key == 'ArrowUp') {
    balloonSize *= 1.1;
    if (balloonSize > 30) {
      balloon.textContent = '💥';
      document.body.removeEventListener('keydown', balloonKeydownHanlder);
    }
    balloon.style.fontSize = `${ balloonSize }rem`;
  } else if (evt.key == 'ArrowDown') {
    balloonSize *= 0.9;
    balloon.style.fontSize = `${ balloonSize }rem`;
  }
}