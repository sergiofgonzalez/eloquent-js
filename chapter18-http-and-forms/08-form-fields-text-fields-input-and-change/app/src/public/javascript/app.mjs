'use strict';

const text = document.querySelector('input');
const output = document.querySelector('#length');

text.addEventListener('input', () => {
  output.textContent = text.value.length;
});

text.addEventListener('change', () => {
  output.className = 'badge badge-secondary';
});
