
const paragraphs = document.body.getElementsByTagName('p');
alert(`The document body contains ${ paragraphs.length } paragraphs`);

const bombImageElem = document.getElementById('bombImage');
alert(`The image src attribute is ${ bombImageElem.src }`);


const pixelatedElems = document.body.getElementsByClassName('pixelated');
alert(`The document body contains ${ pixelatedElems.length } elements with the pixelated class`);