function isTextInDom(node, text) {
    'use strict';

    if (node.nodeType === document.ELEMENT_NODE) {
        for (var i = 0; i < node.childNodes.length; i++) {
            if (isTextInDom(node.childNodes[i], text)) {
                return true;
            }
        }
        return false;
    } else if (node.nodeType === document.TEXT_NODE) {
        return node.nodeValue.indexOf(text) > -1;
    }
}

console.log(isTextInDom(document.body, 'book'));
console.log(isTextInDom(document.body, 'video'));
