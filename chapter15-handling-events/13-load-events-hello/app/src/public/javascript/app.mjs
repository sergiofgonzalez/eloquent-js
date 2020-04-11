'use strict';

window.addEventListener('load', () => {
  alert(`The page has been loaded at ${ new Date().toISOString() }`);
});

window.addEventListener('beforeunload', evt => {
  console.log(`page is about to be unloaded`);
  evt.preventDefault();
  // eslint-disable-next-line no-useless-escape
  evt.returnValue = '\o/';
});