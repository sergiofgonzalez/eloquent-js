'use strict';

const link = document.querySelector('a');

link.addEventListener('click', evt => {
  alert('The link has been clicked, but it will not be followed! :(');
  evt.preventDefault();
});
