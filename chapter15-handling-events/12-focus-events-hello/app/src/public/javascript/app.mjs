'use strict';

const help = document.querySelector('#help');
const fields = document.querySelectorAll('input');

for (let field of [...fields]) {
  field.addEventListener('focus', evt => {
    const text = evt.target.getAttribute('data-help');
    help.textContent = text;
  });
  field.addEventListener('blur', () => {
    help.textContent = '';
  });
}