'use strict';

const input = document.querySelector('input');
const contents = document.querySelector('#contents');

input.addEventListener('change', () => {
  for (let file of [...input.files]) {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      const message = `File ${ file.name } starts with '${ reader.result.slice(0, 20 ) }'`;
      console.log(message);
      contents.textContent = message;
    });
    reader.readAsText(file);
  }
});