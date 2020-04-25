'use strict';

const select = document.querySelector('select');
const output = document.querySelector('#output');

select.addEventListener('change', () => {
  let number = 0;
  for (let option of Array.from(select.options)) {
    if (option.selected) {
      number += Number(option.value);
    }
  }
  output.textContent = number;
});