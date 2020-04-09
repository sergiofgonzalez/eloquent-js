# Chapter 14 &mdash; The Document Object Model
> selected notes, examples and exercises from chapter 14

## Notes
When you open a page in the browser, the browser retrieves the page's HTML text, parses it and builds up a model of the document structure. That model is used to draw the page on the screen.
This data structure can be read and modified using JavaScript.

### Document Object Structure

A useful metaphor for understanding an HTML model is to think of it as a nested set of boxes:

Conside the following simple HTML document:

```html
<!doctype html>
<html>
  <head>
    <title>My Home Page</title>
  </head>
  <body>
    <h1>My Home Page</h1>
    <p>Hello, I am Sergio and this is my home page.</p>
    <p>I'm working the exercises and samples from the book
      <a href="https://eloquentjavascript.net">here</a>.
    </p>
  </body>
</html>
```

The document will lead to the following structure:

![Nested Boxes Model](./doc_images/001-nested-boxes-model.png)

For each box, there is an object, which we can interact with to find out things such as what HTML tag it represents and which boxes and text contains. This representations is called the *Document Object Model*, or DOM for short.

### The DOM as a Tree

Another useful mental model is to think of the DOM as a tree. Each node of the tree represents and element, and may refer to other nodes, *children*, which in tunr may have their own children.

| NOTE: |
| :---- |
| We call a data structure a tree when it has a branching structure, has no cycles (a node may not contain itself directly or indirectly), and has a single, well-defined root. In the case of the DOM, `document.documentElement` serves as the *root*. |

We will find the following types of nodes when thinking of the DOM as a tree. Element nodes represent HTML tags. These can have *child* nodes (such as `document.body`). The *child nodes* can either be *leaf nodes* (such as pieces of text), or have children of their own.

Each DOM node has a `nodeType` property, which contains a numeric code that identifies the type of the node. There are a few constant properties defined to identify these types such as `Node.ELEMENT_NODE` (code 1), `Node.TEXT_NODE` (code 3) or `Node.COMMENT_NODE`(code 8).

The following diagram depicts this model:

![DOM as a Tree Model](./doc_images/002-tree-model.png)

The leaves are text nodes, and the arrows indicate *parent-child relationships*.

### Moving through the DOM Tree

DOM nodes contain a number of links to other nearby nodes. The following diagram depicts how you can move through the document:

![Navigating the DOM](./doc_images/003-navigating-the-dom.png)

Every node has a `parentNode` property that points to the node it is part of (if any), and every element (node type 1) has a `childNodes` property that points to an array-like object holding its children.

| NOTE: |
| :---- |
| Some of DOM structures are poor designed. For example, the `childNodes` property is an array-like object with a `length` property and properties labeled by numbers to access the child nodes, but it is an instance of `NodeList` type and therefore, does not have other array methods such as `slice` and `map`. |

Trees are often navigated using recursive functions, on account of their structure.

The example [01 &mdash; Navigating the DOM Recursively](./01-navigating-the-dom-recursively/) illustrates how to do that.

```javascript
export default function talksAbout(node, string) {
  if (node.nodeType == Node.ELEMENT_NODE) {
    for (let i = 0; i < node.childNodes.length; i++) {
      if (talksAbout(node.childNodes[i], string)) {
        return true;
      }
    }
    return false;
  } else if (node.nodeType == Node.TEXT_NODE) {
    return node.nodeValue.indexOf(string) > -1;
  }
}
```

### Finding Elements in the DOM

Navigating through the entire DOM tree to find particular elements is often impractical. Instead, there a bunch of methods that can be used to find specific elements.

For example, to find the first link in a document, you'd use:

```javascript
let link = document.body.getElementsByTagName('a')[0];
```

All element nodes feature a `getElementsByTagName(tag)` method.

To find a specific single node, you can use the `document.getElementById(id)` instead.

```javascript
let imgNode = document.getElementById('myImageId');
console.log(imgNode.src);
```

You can also use `getElementsByClassName(className)`, which scans through the node's children to collect an array-like object with all the elements matching the given CSS class name. 

### Changing the Document

The JavaScript API for the DOM also features methods to change the document.

Nodes have a `remove()` method to remove them from their current parent node. To add a child node to an element node, we can use the `appendChild()` method which puts it at the end of the list of the existing children, or `insertBefore(nodeToInsert, existingNode)` which inserts the node given as the first argument before the node given as the second argument.

A node can exists in a document in only one place. Consider the following example:

```javascript
<p>One</p>
<p>Two</p>
<p>Three</p>
<script>
  const paragraphs = document.body.getElementsByTagName('p');
  document.body.insertBefore(paragraphs[2], paragraphs[0]); // will result in Three, One, Two

  paragraphs[0].remove(); // Three will be removed: note that we didn't have to query the DOM again, paragraphs object
                          // was updated live to make paragraphs[0] point Three rather than One!

  document.body.replaceChild(paragraphs[1], paragraphs[0]); // Remove One by Two
</script>

```

As a consequence, inserting paragraph *Three* in front of *One* will first remove *Three* from the current position and it will then be inserted at the front. All operations that insert a node will as a side effect remove it from its current position.

### Creating Nodes


## Examples and Exercises

### [01 &mdash; Navigating the DOM Recursively](./01-navigating-the-dom-recursively/)
Illustrates how recursive functions are ver useful when dealing with tree structures, like the DOM.

### [02 &mdash; Finding Elements in the DOM](./02-finding-elements-in-the-dom/)
Practising `getElementsByTagName`, `getElementById` and `getElementsByClassName`.

### [03 &mdash; Changing the DOM](./03-changing-the-dom/)
Practising how to perform changes in the DOM.

## Cheat Sheet

### Javascript API for the Browser

| Method or Property | Description |
| :----------------- | :---------- |
| `document.body` | Points to the `<body>` element of the HTML document. |
| `document.getElementById(id)` | Returns the node whose `id` matches the given one. |
| `{node}.nodeType` | Returns a code that identifies the type of the node (e.g `1` or `Node.ELEMENT_NODE` for elements, `3` or `Node.TEXT_NODE` for text nodes, `8` or `Node.COMMENT_NODE` for comments). |
| `{node}.childNodes` | Returns an aray-like object containing the children of the given node. |
| `{node}.nodeValue` | Returns or sets the value of the given node as a string, or `null` for the node types for which it does not provide a value. It can be used to access the text of an element. |
| `{node}.getElementsByTagName(tag)` | For `Node.ELEMENT_NODE` nodes, returns a live array-like object with all the direct and indirect children nodes of the given element with the given tag. |
| `{node}.getElementsByClassName(cssClass)` | For `Node.ELEMENT_NODE` nodes, returns a live array-like object with all the direct and indirect children nodes of the given element with the given CSS class. |
| `{node}.insertBefore(newChild, existingChild)` | Inserts the node given as first argument before the node given as the second argument. |
| `{node}.remove()` | Removes a node from its current parent node. |
| `{node}.replaceChild(newChild, existingChild)` | Replaces a childNode with another one. The replaced node must be a child of the element the method is called on. |

| `{node}.appendChild()` | Inserts the node given as first argument before the node given as the second argument. |

