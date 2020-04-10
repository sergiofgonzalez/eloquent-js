'use strict';

const p = document.body.getElementsByTagName('p')[0];

const message = `
  p.offsetWidth = ${ p.offsetWidth } (width the element takes up in pixels)
  p.offsetHeight = ${ p.offsetHeight } (height the element takes up in pixels)
  p.clientWidth = ${ p.clientWidth } (width inside the element, ignoring border width)
  p.clientHeight = ${ p.clientHeight } (height inside the element, ignoring border width)
  p.getBoundingClientRect = (top=${ p.getBoundingClientRect().top }, left=${ p.getBoundingClientRect().left }, bottom=${ p.getBoundingClientRect().bottom }, right=${ p.getBoundingClientRect().right })
  pageXOffset = ${ pageXOffset } (value of horizontal scroll)
  pageYOffset = ${ pageYOffset } (value of vertical scroll)
`;

alert(message);