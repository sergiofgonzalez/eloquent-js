'use strict';

const button1 = document.querySelector('#btn1');
button1.addEventListener('click', () => alert('Button clicked!'));

const button2 = document.querySelector('#btn2');
button2.addEventListener('click', once);

function once() {
  alert(`Button clicked once... it won't work anymore`);
  button2.removeEventListener('click', once);
}