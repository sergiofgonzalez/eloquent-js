'use strict';

const input = document.querySelector('input');
const fileInfo = document.querySelector('#fileInfo');

input.addEventListener('change', () => {
  if (input.files.length > 0) {
    const file = input.files[0];
    const msg = `${ file.name } (${ file.type ?? 'no file type detected' }); ${ file.size ?? 'file size not detected '} bytes`;
    fileInfo.textContent = msg;
    console.log(file);
  }
});