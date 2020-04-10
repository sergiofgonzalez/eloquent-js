function byTagName(node, tagName) {
  const matchingChildren = [];
  function checkChildren(node) {
    for (let childNode of node.childNodes) {
      if (childNode.nodeName == tagName.toUpperCase()) {
        matchingChildren.push(childNode);
      }
      checkChildren(childNode);
    }
  }
  checkChildren(node);

  return matchingChildren;
}


export { byTagName as default };