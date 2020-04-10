'use strict';

import elt from './lib/elt.mjs';


document.getElementById('quote').appendChild(
  elt('footer', '-',
    elt('strong', 'Anonymous'),
    ', preface to the fourth edition of ',
    elt('em', 'Programming: A quantitative approach'),
    ', 2020'
  )
);