'use strict';

const radios = document.querySelectorAll('[name=color]');
for (let radio of [...radios]) {
  radio.addEventListener('change', () => {
    document.body.style.background = radio.value;
  });
}