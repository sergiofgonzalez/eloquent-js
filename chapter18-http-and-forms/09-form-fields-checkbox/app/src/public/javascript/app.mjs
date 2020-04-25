'use strict';

const checkbox = document.querySelector('input');
checkbox.addEventListener('change', () => {
  document.body.style.background = checkbox.checked ? 'mediumpurple': '';
});