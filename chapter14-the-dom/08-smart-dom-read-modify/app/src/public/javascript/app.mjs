'use strict';

import time from './lib/time.mjs';

time('naive', () => {
  const target = document.getElementById('one');
  while (target.offsetWidth < 2000) {
    target.appendChild(document.createTextNode('X')); 
  }
});

time('smart', () => {
  const target = document.getElementById('two');
  target.appendChild(document.createTextNode('XXXXX'));
  const total = Math.ceil(2000 / (target.offsetWidth / 5));
  target.firstChild.nodeValue = 'X'.repeat(total);
});