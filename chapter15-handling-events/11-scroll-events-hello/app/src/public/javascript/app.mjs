'use strict';

document.body.appendChild(document.createTextNode('supercalifragilisticexpialidocious '.repeat(1000)));

const bar = document.querySelector('#progress');
window.addEventListener('scroll', () => {
  const max = document.body.scrollHeight - innerHeight;
  bar.style.width = `${ (pageYOffset / max) * 100 }%`;
});