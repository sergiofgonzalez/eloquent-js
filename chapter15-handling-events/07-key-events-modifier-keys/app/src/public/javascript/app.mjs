'use strict';

window.addEventListener('keydown', evt => {
  if (event.key == ' ' && evt.ctrlKey) {
    console.log(`[CTRL]+ [SPACE] has been pressed`);
  }
  console.log(`evt.key = ${ evt.key } [alt=${ evt.altKey }, ctrl=${ evt.ctrlKey }, meta=${ evt.metaKey }, shift=${ evt.shiftKey }]`);
});