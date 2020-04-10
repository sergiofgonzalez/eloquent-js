'use strict';

const para = document.getElementById('para');

alert(`
  before color: ${ para.style.color }
  before border: ${ para.style.border }
  before font-family: ${ para.style['font-family'] }
  `);

para.style.color = 'magenta';
para.style.border = '10px dashed green';
para.style['font-family'] = 'pixelated';