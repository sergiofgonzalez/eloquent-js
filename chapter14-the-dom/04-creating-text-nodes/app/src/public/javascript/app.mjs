'use strict';


/* old school implementation: back-to-front */
// eslint-disable-next-line no-unused-vars
// function replaceImages() {
//   const images = document.getElementsByTagName('img');

//   for (let i = images.length - 1; i >= 0; i--) {
//     let image = images[i];
//     if (image.alt) {
//       let textNode = document.createTextNode(image.alt);
//       image.parentNode.replaceChild(textNode, image);
//     }
//   }
// }

/* modern ES6 implementation */
// eslint-disable-next-line no-unused-vars
function replaceImages() {
  const imageNodes = [...document.body.getElementsByTagName('img')]; /* same as Array.from */
  for (const imageNode of imageNodes) {
    if (imageNode.alt) {
      const textNode = document.createTextNode(imageNode.alt);
      imageNode.parentNode.replaceChild(textNode, imageNode);
    }
  }
}