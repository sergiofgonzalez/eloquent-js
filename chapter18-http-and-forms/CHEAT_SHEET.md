# Web Development Cheat Sheet
> selected bits of info about JavaScript in the browser, CSS basics, Events and Form fields

## Javascript API for the Browser

| Method or Property | Description |
| :----------------- | :---------- |
| `document.body` | Points to the `<body>` element of the HTML document. |
| `document.getElementById(id)` | Returns the node whose `id` matches the given one. |
| `document.querySelectorAll(cssRule)` | Returns a `NodeList` (an array-like **NOT** live object) containing all the elements in the document matching the given *CSS rule* . |
| `document.activeElement` | Returns a pointer to the element with the focus. |
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
| `{node}.nodeName` | Points to a string that holds the tag name of an element in *UPPERCASE*. |
| `{node}.addEventListener(evt, cb)` | Registers an event listener in the given node for the event. When triggered, the callback passed as the second argument will be invoked. The callback will receive an event object which holds additional information about the event. |
| `{node}.removeEventListener(evt, cb)` | Unregisters a previously registered event listener in the given node for the event. The callback passed as the second argument has to be the exact same function that was used in the registration. |
| `{node}.textContent` | Points to the text of a node (e.g. text of a `<button>`). Useful for the nodes for which `nodeValue` returns null. | 
| `{node}.focus()` | Give the focus to the specific node. |
| `{node}.blur()` | Removes the focus to the specific node. |
| `pageXOffset` | Returns the current horizontal scroll value. |
| `pageYOffset` | Returns the current vertical scroll value. |
| `requestAnimationFrame(cb)` | Notifies the browser that you wish to perform an animation. It accepts a callback function that will be called when it's time to update your animation for the next repaint. The callback is passed the time at which the callback is invoked. |
| `window.addEventListener(evt, cb)` | Registers an event handler in the browser window that represents the document. The callback will receive an event object which holds additional information about the event.|
| `window.removeEventListener(evt, cb)` | Unregisters an event handler in the browser window that represents the document. The callback passed as the second argument has to be the same function used when registering the event. |
| `innerHeight` | Returns the height of the window. |
| `innerWidth` | Returns the width of the window. |
| `postMessage(data)` | Sends a `'message'` event from a *web worker* to the main script with an event with the data encoded in the `'data'` property of the event. |
| `const worker = new Worker(path);` | Instantiates a new *web worker*. |
| `{worker}.postMessage(data)` | Sends a `'message'` event to a worker. The event `'data'` property will include the given information. |
| `encodeURIComponent(textToEncode)` | URI encodes the given information (for query string encoding). |
| `decodeURIComponent(textToDecode)` | URI decodes the given encoded information (for query string decoding). |
| `fetch(uri, options)` | Returns a promise that resolves to a *Response* object holding information about the server's response, such as its status code and headers. The headers are wrapped in a *map-like* object that treats its keys as case-insensitive. It features a `text()` and `json()` methods that returns a promise to the response body in text or JSON. The options object can be used to send an specific method (like `POST`) setting up specific headers or sending a body. See https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#Supplying_request_options for details. |
| `{form}.elements` | Returns an object with the form fields that can be accessed as an array and also as a map. |
| `{node}.form` | For a field in a form, returns the form element on which the field is enclosed. |
| `const reader = new FileReader(file)` | Instantiates a `FileReader` object to asynchronously read the contents of a file stored in the user's machine, previously selected through an `<input type="file">` element. |
| `{reader}.readAsText()` | Initiates the reading of the file. A `'load'` event will be triggered when the file has been completely loaded. |
| `localStorage.setItem(name, value)` | Stores in the browser's local storage an item with the given name and value. |
| `localStorage.getItem(name)` | Retrieves from the browser's local storage the item previously stored and associated with the given name. |
| `localStorage.removeItem(name, value)` | Removes from the browser's local storage the item with the given name. |


## CSS/Styling Basics

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
| `style="position: fixed"` | Sets the position of the element in the same way as `absolute` but also prevents it from scrolling along with the rest of the document. |
| `style="top: 10px; left: 50px"` | Sets the position of an element whose position is not set to `static`. |
| `style='"height: 8px; width: 8px"` | Sets the height and width of the content area for an element. |
| `strong {...}` | Defines a CSS rule that will affect styling of `<strong>` element. |
| `.xyz {...}` | Defines a CSS rule that will affect styling of elements with `class="xyz"`. |
| `#xyz {...}` | Defines a CSS rule that will affect styling of elements with `id="xyz"`. |
| `p#main.a.b {...}` | Defines a CSS rule that will affect `<p>` elements with `id="main"` and `class="a b"`. |
| `p > a {...}` | Defines a CSS rule that will affect all `<a>` elements that are direct descendants of `<p>`. |
| `p > a {...}` | Defines a CSS rule that will affect all `<a>` elements that are direct/indirect descendants of `<p>`. |
| `p > .b {...}` | Defines a CSS rule that will affect all elements with `class="b"` that are direct descendants of `<p>`. |
| `p .b {...}` | Defines a CSS rule that will affect all elements with `class="b"` that are direct/indirect descendants of `<p>`. |

## Events

### General Event Methods/Properties

| Event Method/Property | Description |
| :-------------------- | ----------- |
| `{event}.type` | Holds a string identifying the event type , such as `'mousedown'`. |
| `{event}.stopPropagation()` | Stops the propagation of an event to the outward elements. |
| `{event}.target`| Points to the node on which the event originated. |
| `{event}.preventDefault()` | Disables the default behavior for an action. |


### Events by Capability

| Type | Event | Property/Method | Description |
| :--- | :---- | :------- | :---------- |
| Key Events | `'keydown'` |  | Fired when (and while) a key is pressed down. |
|            | `'keyup'`   |  | Fired when a key is released. |
|            |             | `ctrlKey`  | Holds true if *CTRL* key is pressed down, false otherwise. |
|            |             | `shiftKey` | Holds true if *SHIFT* key is pressed down, false otherwise. |
|            |             | `altKey`   | Holds true if *ALT* key is pressed down, false otherwise. |
|            |             | `metaKey`  | Holds true if *META* key is pressed down, false otherwise. |
|            |             | `key`      | Holds the key that has been pressed down (e.g. `'s'`). |
|            |             | `keyCode`  | Holds the numericKeycode corresponding to the key that has been pressed down (e.g. `113`). |
| Mouse Events | `'mousedown'` | | Fired when any of the mouse buttons is pressed down. |
|              | `'mouseup'` | | Fired when any of the mouse buttons is released. |
|              | `'click'`   | | Fired on the most specific node that contained both the press and release of the button. |
|              | `'dblclick'` | | Fired when two clicks happen closely together. |
|              | `'mousemove'` | | Fired when the mouse coordinates change. |
|              |               | `clientX` | Horizontal mouse coordinates relative to the window. |
|              |               | `clientY` | Vertical mouse coordinates relative to the window. |
|              |               | `button` | Numeric value that indicates which button was pressed (0 - left button, 1 - middle button, 2 - right button). |
|              |               | `buttons` | Holds 0 when no buttons are down. When buttons are held, its value is the sum of the codes for those buttons (left button - 1, right button - 2, middle button - 4). |
| Touch Events | `'touchstart'` | | Fired when the user touches the screen. |
|              | `'touchmove'` | | Fired when the user moves the finger while touching the screen. |
|              | `'touchend'`   | | Fired when the user is no longer touching the screen. |
|              |               | `touches` | Array of coordinates with `clientX` and `clientY` properties indicating the position of the different touch points. |
| Scroll Events | `'scroll'` | | Fired when the user scrolls the document. |
| Focus Events | `'focus'` | | Fired when a given element gets the focus. |
|              | `'blur'` | | Fired when a given element no longer has the focus. |
|              |               | `touches` | Array of coordinates with `clientX` and `clientY` properties indicating the 
| Load Events | `'load'` | | Fired when the document has finished loading. |
|              | `'beforeunload'` | | Fired before the user navigates away from a window. |
| Message Events | `'message'` | | Fired when main script communicates with a *web worker* and vice versa. |
|                |             | `postMessage(data)` | Method to send data from a *Web worker* to the main script. |
|                |             | `{worker}.postMessage(data)` | Method to send data from a the main script to the given *web worker*. |
| Timer Events | | `setTimeout(cb, delayMillis, arg1, arg2, ...)` | Schedules a callback to be invoked after the given delay. Returns a *timerId* that can be used to cancel a scheduled callback. |
|              | | `clearTimeout(timerId)` | De-schedules a callback previously scheduled with a `setTimeout()` |
|              | | `cancelAnimationFrame()` | De-schedules a previous call to `requestAnimationFrame` |
|              | | `setInterval(cb, delayMillis, arg1, arg2, ...)` | Schedules a callback to be invoked repeatedly according to the given frequency details. |
|              | | `setInterval(cb, delayMillis, arg1, arg2, ...)` | Schedules a callback to be invoked repeatedly according to the given frequency details. Returns an *intervalId* that can be used to cancel the timer. |
|              | | `clearInterval(intervalid)` | De-schedules a previous call to `setInterval()`. |
| Form Field Events | `'change'` |  | Fired after the content of a field loses focus after its content was changed. |
| Form Events | `'submit'` | | Fired when a `<form>` is submitted by clicking on a button with `type="submit"`. |
| Text Field Events | `'change'` | | Fired after the content of an `<input>` or `<textarea>` loses focus after its content was changed. |
|                   | `'input'` | | Fired everytime the user manipulates an `<input>` or `<textarea>` element to change the field's contents. |
| Checkbox Events | `'change'` | | Fired when the status of an `<input type="checkbox">` changes. |
| Radio Button Events | `'change'` | | Fired when the status of a collection of radio buttons `<input type="radio"...>` changes. |
| Select/Select Multiple Events | `'change'` | | Fired when the status of a `<select>` or `<select multiple>` changes. | 
| File Field Events | `'change'` | | Fired when the user ends manipulating a `<input type="field">`. |
|                   | | `files` | Points to an array-like structure containing an object for each of the files the user has selected. <br> Each of the objects feature a `'name'`, `'type'` and `'size'` properties. |
| File Reader Events | `'load'` | | Fired when the `FileReader` read operation has completed. |
| File Reader Events | `'error'` | | Fired when the `FileReader` read operation fails for any reason. |

## Form Fields

| Type | Element | Property | Description |
| :--- | :------ | :------- | :---------- |
| Text Field | `<input type="text">`<br>`<input type="password">`<br>`<input type="email">`<br>`<textarea>` | `value` | Holds the current content of the field as a string. |
| | | `selectionStart` | Holds the initial position of the text selection in a text field. |
| | | `selectionEnd` | Holds the end position of the text selection in a text field. |
| Checkbox | `<input type="checkbox">` | `checked` | Holds a boolean value that indicates if the checkbox is checked or not. |
| Radio Button | `<input type="radio" name="radioGroup" value="radioValue">` | `value` | Holds the value of a radio button (e.g. `'radioValue'`). |
| Select/Select Multiple | `<select>`<br>`<select multiple>` | `options` | Array-like object that points to the `<option>` elements of a `<select>` element. |
| | | `value` | Holds the value of a given `<option>` of a `<select>`, or the currently value selected in the case of a non-multiple `<select>` (not useful for `<select multiple>`). |
| | | `selected` | Holds a boolean showing whether a particular `<option>` of a `<select>` element is currently selected. |
| File Field | `<input type="file">`<br>`<input type="file" multiple>` | `files` | Array-like object that points the files selected by the user. |


