# Chapter 15 &mdash; Handling Events
> selected notes, examples and exercises from chapter 15

## Notes

Browsers implement a mechanism to actively notify when an event, such as a *keypress* occur and let you register a callback function as a handler for that event.

```html
<p>Click this document to activate the handler.</p>
<script>
  window.addEventListener('click', () => console.log(`The document has been clicked on!`));
</script>
```

| NOTE: |
| :---- |
| The `window` binding refers to a built-in object provided by the browser. It represents the browser window that contains the document. |

### Events and DOM Nodes

Each browser event handler is registered in a context. Event listeners will be called only when the event happends in the context of the object they are registered on.

Consider the following example:

```html
<button>Click Me!</button>
<p>No handler here</p>

<script>
  const button = document.querySelector('button');
  button.addEventListener('click', () => alert('Button clicked!'));
</script>
```

That example attaches a handler to the button node. Only clicks received on the button will activate the callback.

As an alternative to `addEventListener()` method, it is possible to write the `onclick` attribute of the button. However, you would only be able to register a single event listener, while using the first approach will let you define many different handlers to address different concerns associated to the same event.

The method `removeEventListener()` lets you unregister a previously defined event handler. You will need to pass the exact same function you used in the registration, so it is a good practice to use formally defined functions for that use case.

## Examples and Exercises

### [01 &mdash; Hello, Event Handlers](./01-hello-event-handlers/)
Getting introduced to event handlers.

## Cheat Sheet

### Javascript API for the Browser

| Method or Property | Description |
| :----------------- | :---------- |
| `document.body` | Points to the `<body>` element of the HTML document. |
| `document.getElementById(id)` | Returns the node whose `id` matches the given one. |
| `document.querySelectorAll(cssRule)` | Returns a `NodeList` (an array-like **NOT** live object) containing all the elements in the document matching the given *CSS rule* . |
| `{node}.querySelectorAll(cssRule)` | Returns a `NodeList` (an array-like **NOT** live object) containing all the child elements of the node matching the given *CSS rule* . |
| `document.querySelector(cssRule)` | Returns the node in the document matching the given *CSS rule*. |
| `{node}.querySelector(cssRule)` | Returns the node matching the given *CSS rule* that is a descendant of the given node. |
| `{node}.nodeType` | Returns a code that identifies the type of the node (e.g `1` or `Node.ELEMENT_NODE` for elements, `3` or `Node.TEXT_NODE` for text nodes, `8` or `Node.COMMENT_NODE` for comments). |
| `{node}.childNodes` | Returns a `NodeList` (an array-like live object) containing the children of the given node. |
| `{node}.nodeValue` | Returns or sets the value of the given node as a string, or `null` for the node types for which it does not provide a value. It can be used to set/get the text of an element. |
| `{node}.getElementsByTagName(tag)` | For `Node.ELEMENT_NODE` nodes, returns a `NodeList` (live array-like object) with all the direct and indirect children nodes of the given element with the given tag. |
| `{node}.getElementsByClassName(cssClass)` | For `Node.ELEMENT_NODE` nodes, returns a `NodeList` (a live array-like object) with all the direct and indirect children nodes of the given element with the given CSS class. |
| `{node}.insertBefore(newChild, existingChild)` | Inserts the node given as first argument before the node given as the second argument. |
| `{node}.remove()` | Removes a node from its current parent node. |
| `{node}.replaceChild(newChild, existingChild)` | Replaces a childNode with another one. The replaced node must be a child of the element the method is called on. |
| `{node}.parentNode` | Points to the parent of a given node. |
| `document.createTextNode(textStr)` | Returns a new Text node. |
| `document.createElement(tag)` | Returns a new Element node of the given type. |
| `{node}.appendChild(node)` | Adds the given node to the end of the list of children of the given node. |
| `{node}.getAttribute(attr)` | Returns the value of the given attribute of the node. |
| `{node}.setAttribute(attr)` | Sets the value of the given attribute of the node. |
| `{node}.offsetWidth` | Returns the width the given node takes up in pixels. |
| `{node}.offsetHeight` | Returns the height the given node takes up in pixels. |
| `{node}.getBoundingClientRect()` | Returns an object with `top`, `bottom`, `left` and `right` peroperties indicating the pixel positions of the sides of the element relative to the top left corner of the screen. |
| `{node}.nodeName` | Points to a string that holds the tag name of an element. |
| `{node}.addEventListener(evt, cb)` | Registers an event listener in the given node for the event. When triggered, the callback passed as the second argument will be invoked. |
| `{node}.removeEventListener(evt, cb)` | Unregisters a previously registered event listener in the given node for the event. The callback passed as the second argument has to be the exact same function that was used in the registration. |
| `pageXOffset` | Returns the current horizontal scroll value. |
| `pageYOffset` | Returns the current vertical scroll value. |
| `requestAnimationFrame(cb)` | Notifies the browser that you wish to perform an animation. It accepts a callback function that will be called when it's time to update your animation for the next repaint. The callback is passed the time at which the callback is invoked. |
| `window.addEventListener(evt, cb)` | Registers an event handler in the browser window that represents the document. |
| `window.removeEventListener(evt, cb)` | Unregisters an event handler in the browser window that represents the document. The callback passed as the second argument has to be the same function used when registering the event. |

### CSS/Styling Basics

| CSS/Styling Concept | Description |
| :------------------ | :---------- |
| `style="color: green"` | Sets the style of a given element with the given color property. |
| `style="display: block"` | Forces the display of an inline element (such as `<strong>`) as a block element. |
| `style="display: inline"` | Forces the display of a block element (such as `<p>`) as an inline element. |
| `style="display: none"` | Prevents a given element from being displayed. |
| `style="border: 3px solid red"` | Sets the style of a given element so that it is displayed with a red, solid bounding border of 3px. |
| `style="font-family: Pixelated"` | Sets the font-family of an element through the style property. |
| `style="font-style: italic"` | Sets the font-style of an element through the style property. |
| `style="font-weight: bold"` | Sets the font-style of an element through the style property. |
| `style="font-size: 80%"` | Sets the font-size of an element through the style property to be 80% of the default size. |
| `style="background: blue"` | Sets the background of an element to the given color. |
| `style="margin-bottom: 20px"` | Sets the bottom margin of an element to given size in pixels. |
| `style="text-align: center"` | Sets the position of the element in the center of the document. |
| `style="position: static"` | Sets the position of the element to its default position.|
| `style="position: relative"` | Sets the position of the element in a way that can be moved around using the `top` and `left` style properties with respect to its normal place. The element will still take up space. | 
| `style="position: absolute"` | Sets the position of the element in a way that can be moved around using the `top` and `left` style properties with respect to the nearest enclosing element whose property isn't `static`, or relative to the document if no such enclosing element exists. |
| `style='top: 10px; left: 50px` | Sets the position of an element whose position is not set to `static`. |
| `strong {...}` | Defines a CSS rule that will affect styling of `<strong>` element. |
| `.xyz {...}` | Defines a CSS rule that will affect styling of elements with `class="xyz"`. |
| `#xyz {...}` | Defines a CSS rule that will affect styling of elements with `id="xyz"`. |
| `p#main.a.b {...}` | Defines a CSS rule that will affect `<p>` elements with `id="main"` and `class="a b"`. |
| `p > a {...}` | Defines a CSS rule that will affect all `<a>` elements that are direct descendants of `<p>`. |
| `p > a {...}` | Defines a CSS rule that will affect all `<a>` elements that are direct/indirect descendants of `<p>`. |
| `p > .b {...}` | Defines a CSS rule that will affect all elements with `class="b"` that are direct descendants of `<p>`. |
| `p .b {...}` | Defines a CSS rule that will affect all elements with `class="b"` that are direct/indirect descendants of `<p>`. |
