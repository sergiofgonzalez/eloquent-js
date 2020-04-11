'use strict';

document.addEventListener('click', evt => {
  if (evt.target.nodeName == 'BUTTON') {
    alert(`The button ${ evt.target.textContent } was clicked!`);
  }
});