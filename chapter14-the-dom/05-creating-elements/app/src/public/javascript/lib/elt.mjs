'use strict';

/**
 * Creates an element node of the given type and treats the rest of its arguments as
 * children to that node
 * @param {string} type The type of the element to create
 * @param {any} children A variable number of optional children to add to the element. If a string is given, a TextNode will be appended.
 */
export default function elt(type, ...children) {
  const node = document.createElement(type);
  for (let child of children) {
    if (typeof child != 'string')
      node.appendChild(child);
    else
      node.appendChild(document.createTextNode(child));
  }
  return node;
}