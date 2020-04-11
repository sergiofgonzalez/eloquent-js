'use strict';

const button = document.querySelector('button');

button.addEventListener('mousedown', evt => {
  let btnMessage;
  if (evt.button == 0) {
    btnMessage = 'Left button was pressed!';
  } else if (evt.button == 1) {
    btnMessage = 'Middle button was pressed';
  } else if (evt.button == 2) {
    btnMessage = 'Right button was pressed';
  }

  alert(`${ evt.type }: ${ btnMessage }`);
});