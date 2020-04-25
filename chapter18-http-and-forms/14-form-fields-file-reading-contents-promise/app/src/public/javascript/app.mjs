'use strict';

import readFileText from './lib/read-file-text.mjs';

const input = document.querySelector('input');
const contents = document.querySelector('#contents');

input.addEventListener('change', async () => {
  for (let file of [...input.files]) {
    const fileContents = await readFileText(file);
    const message = `File ${ file.name } starts with '${fileContents.slice(0, 20 ) }'`;
    console.log(message);
    contents.textContent = message;
  }
});

