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

Event handler functions are passed an *event object*. This object contains additional information about the event. For example, the event object for a click event features a `button` property that let us identify which mouse button was used.

The information stored in the event object differs per type of event. The event's object `type` property always holds a string identifying the event.

### Rules of Event Propagation

For most event types, handlers registered on nodes with children will also receive events that happen in the children. That is, the event propagates outwards from the node where it happened to the parent's node, and from that one to the parent's node until it gets to the root of the document, so that if a `<button>` inside a `<p>` is clicked, event handlers on the `<p>` will also see the click event.
In this particular case, if both the `<button>` and the `<p>` have a handler, the one with the button will be triggered first.
At any point, an event handler can call the `stopPropagation` method on the event object to prevent the event from being propagated further up.

Most event objects have a `target` property that refers to the node on which the event originated.

The `target` property might become especially useful when you have a long list of buttons, as you can register a single *click* handler and use the `target` property to figure out which of the buttons was actually clicked on.

### Default Actions

Many events have a default action associated with them. For example, if you click a link, the default action consists of taking you to the link's target.

For most types of event, the JavaScript event handlers are called *before* the default action takes place, so that you can perform some custom behavior, and even deactive the default behavior if that is not appropriate, by calling `preventDefault()` method on the event object.

Note that browsers might decide that certain events cannot be intercepted.

The following example, deactivates the default behavior for a link:

```html
<a href="https://developer.mozilla.org">MDN</a>

<script>
const link = document.querySelector('a');

link.addEventListener('click', evt => {
  alert('The link has been clicked, but it will not be followed! :(');
  evt.preventDefault();
});
</script>
```

### Handling Events

This section deep dives how to handle different types of events:
+ [Key Events](#key-events)
+ [Pointer Events](#pointer-events)
+ [Scroll Events](#scroll-events)
+ [Focus Events](#focus-events)
+ [Load Events](#load-events)
+ [Message Events for web Workers](#message-events-for-web-workers)
+ [Timer Events](#timer-events)

#### Key Events

When a key on the keyboard is pressed, your browser fires a `'keydown'` event. When it is released, you get a `'keyup'`.

The `'keydown'` event is also fired when the key is pressed down and held (every time the key repeats).

The `key` property of the event lets you identify the key that was pressed. For most of the keys it holds a string representation of the key that was pressed. For special keys, it contains the name of the key (e.g. `'Enter'`). If you hold shift while pressing a key, the `key` property will change (e.g. from `'v'` to `'V'`, or from `'1'` to `'!'`).

The following piece of code illustrates how to deal with `'keydown'` and '`keyup'` events, and how to read the `key` property.

```javascript
window.addEventListener('keydown', evt => {
  console.log('keydown');
  if (evt.key == 'v') {
    document.body.style.background = 'violet';
  }
});

window.addEventListener('keyup', evt => {
  console.log('keyup');
  if (evt.key == 'v') {
    document.body.style.background = '';
  }
});
```

Modifier keys such as *shift*, *control*, etc. generate key events, but when looking for combinations, you can identify if those were hold down while pressing also other keys by looking at the state of `shiftKey`, `crlKey`, `altKey` and `metaKey` properties of both keyboard and mouse events.

The DOM node where a key event originates depends on the element that has *focus* when the key is pressed. Most nodes cannot have focus unless you give them a `tabindex` attribute. When nothing in particular has focus, `document.body` acts as the target node of key events.

Using key events to figure out what the user has types tends to be too low level. It is the recommended practive to listen for `'input'` events fired in `<input>` and `<textarea>` elements instead.

This example demonstrates how to read the modifier keys status:
```javascript
window.addEventListener('keydown', evt => {
  if (event.key == ' ' && evt.ctrlKey) {
    console.log(`[CTRL]+ [SPACE] has been pressed`);
  }
  console.log(`evt.key = ${ evt.key } [alt=${ evt.altKey }, ctrl=${ evt.ctrlKey }, meta=${ evt.metaKey }, shift=${ evt.shiftKey }]`);
});
```

#### Pointer Events

Pointer events are generated by mice (actual mice, touchpads, trackpads...) and touchscreens.

##### Mouse Events
A mouse button fires `'mousedown'` and `'mouseup'` when the button is pressed and released. These events happen on the DOM nodes that are immediately below the mouse pointer when the event occurs.

After the `'mouseup'` event, a `'click'` event is fired on the most specific node that contained both the press and release of the button. Thus, if you press down the mouse button on a paragraph and then move the poiner to another one and release the button, the `'click'` will be fired on the element that contains both paragraphs.

This piece of code illustrates how to deal with the `'click'` event:

```javascript
window.addEventListener('click', evt => {
  let dot = document.createElement('div');
  dot.className = 'dot';
  dot.style.left = `${ (evt.pageX - 4) }px`;
  dot.style.top = `${ (evt.pageY - 4) }px`;
  document.body.appendChild(dot);
});
```

If two clicks happen close together, a `'dblClick'` event is also fired after the second click event.

The `'clientX'` and `'clientY'` properties contain the event's coordinates in pixels relative to the top-left corner of the window. `'pageX'` and `'pageY'` contain the event's coordinates in pixels relative to the top-left corner of the document.

Everytime the mouse pointer moves, a `'mousemove'` event is fired. This event can be used to track the position of the mouse. 

The following example demonstrates how to deal with `'mousemove'` events to read mouse movement details:
```javascript
let lastX; // last observed mouseX value

let bar = document.querySelector('div');
bar.addEventListener('mousedown', evt => {
  if (evt.button == 0) {
    lastX = evt.clientX;
    window.addEventListener('mousemove', moved);
    evt.preventDefault();
  }
});

function moved(evt) {
  if (evt.buttons == 0) {
    window.removeEventListener('mousemove', moved);
  } else {
    const dist = event.clientX - lastX;
    const newWidth = Math.max(10, bar.offsetWidth + dist);
    bar.style.width = `${ newWidth }px`;
    lastX = evt.clientX;
  }
}
```

##### Touch Events
Up to a certain degree, touch screens will trigger events such as '`click'`, `'mouseup'` and `'mousedown'` when the screen is touched, but this model is not very robust.

There are specific event types fired by touch interaction. When a finger starts touching the screen you get a `'touchstart'` event. When it is moved while touching, `'touchmove'` events fire. Finally, when the user stops touching the screen you'll see a `'touchend'` event.

Because touch screens can detect multiple fingers at the same time, the event triggered doesn't have a single set of coordinates associated with them. Rather, their event objects have a `touches` property which holds an *array-like* object of points with their own `clientX`, `clientY`, `pageX` and `pageY` properties.

The following example illustrates how to deal with touch events, and how to read the different coordinates encoded in the event object received:

```javascript
function update(evt) {
  // eslint-disable-next-line no-cond-assign
  for (let dot; dot = document.querySelector('dot');) {
    dot.remove();
  }
  for (let i = 0; i < evt.touches.length; i++) {
    let { pageX, pageY } = evt.touches[i];
    let dot = document.createElement('dot');
    dot.style.left = `${ pageX - 50 }px`;
    dot.style.top = `${ pageY - 50 }px`;
    document.body.appendChild(dot);
  }
}

window.addEventListener('touchstart', update);
window.addEventListener('touchmove', update);
window.addEventListener('touchend', update);
```

#### Scroll Events

Whenever an element is scrolled, a `'scroll'` event is fired on it. Note that calling `preventDefault()` on a scroll event does not prevent the scrolling from happening. In fact, the event handler is called only after the scrolling takes place.

The followinv piece of code illustrates how to deal with the `'scroll'` event and how to read the status of the scroll:
```javascript
document.body.appendChild(document.createTextNode('supercalifragilisticexpialidocious '.repeat(1000)));

const bar = document.querySelector('#progress');
window.addEventListener('scroll', () => {
  const max = document.body.scrollHeight - innerHeight;
  bar.style.width = `${ (pageYOffset / max) * 100 }%`;
});
```

#### Focus Events

When an element gains focus the browser fires a `'focus'` event on it. When it loses focues, the element gets a `'blur'` event. These events do not propage outwards, as other events do: a parent element will not be notified when a child element gains or loses focus.

The following example illustrates how to handle `'focus'` and `'blur'` events, and how to use them to manage the contents of other elements.
```javascript
const help = document.querySelector('#help');
const fields = document.querySelectorAll('input');

for (let field of [...fields]) {
  field.addEventListener('focus', evt => {
    const text = evt.target.getAttribute('data-help');
    help.textContent = text;
  });
  field.addEventListener('blur', () => {
    help.textContent = '';
  });
}
```

#### Load Event

When a page finishes loading, the `'load'` event fires on the window and the `document.body` objects. This can be used to schedule initialization actions that require the whole document to have been built.

This is needed because the `<script>` content is run immediately when the tag is encountered, which might be too soon.

When a page is closed or navigated away from, a `'beforeunload'` event is fired. This can be used to prevent the user from accidentally losing work by closing a document.
If you prevent the default behavior on this event and set the `returnValue` property on the event object to a string, the browser will show the user a dialog asking for confirmation before leaving the page.

The following piece of code illustrates how to deal with `'load'` events. Note that the `'beforeunload'` code no longer works (but it used to in older versions of browsers).
```javascript
window.addEventListener('load', () => {
  alert(`The page has been loaded at ${ new Date().toISOString() }`);
});

window.addEventListener('beforeunload', evt => {
  console.log(`page is about to be unloaded`);
  evt.preventDefault();
  // eslint-disable-next-line no-useless-escape
  evt.returnValue = '\o/';
});
```

#### Message Events for Web Workers

Browser event handlers behave like any other asynchronous notifications. They are scheduled when the event occurs, but must wait for other scripts that are running to finish before they get a chance to run.

The fact that events can be processed only when nothing else is running means that if the event loop is tied up with other work, any interaction with the page will be delayed until there's time to process it. As a consequence, if there are long-running event handlers or lots of short-running ones, the page will become slow and cumbersome to use.

For legitimate cases on which you cannot get away without long running operations you should consider *web workers*. *Web workers* is a mechanism that allows a JavaScript process to run alongside the main script. *Web workers* and the main program communicate through messages:

```javascript
// main program: javascript/app.mjs
const squareWorker = new Worker('./javascript/lib/square-worker.js');
squareWorker.addEventListener('message', evt => {
  console.log(`A message has been received from the worker: evt.data=${ evt.data }`);
});

squareWorker.postMessage(10);
squareWorker.postMessage(24);

// Web Worker: javascript/lib/square-worker.js
addEventListener('message', evt => {
  console.log(`A message has been received from the main script: evt.data=${ evt.data }`);
  postMessage(evt.data * evt.data);
});
```

Note how the location of the *Web worker* has to be provided somewhat differently from what you'd do for the import operations.

The `postMessage(data)` function sends a message to a *web worker*. The `data` will be encoded in the event `data` property that the *web worker* will received from the listener. In turn, the *web worker* can respond back to the main program by calling `postMessage(data)`, which the main program can receive by registering an event handler for the `'message'` event on the *web worker*.

#### Timer Events

The function `setTimeout()` schedules a function to be called at a later time. If you need to cance the function you have scheduled you can use `clearTimeout()` passing the value returned by `setTimeout()` on it:

```javascript
let bombTimer = setTimeout(() => console.log('bomb!'), 500);
clearTimeout(bombTimer);
```

The `cancelAnimationFrame()` works pretty much in the same way as `clearTimeout()`.

The functions `setInterval()` and `clearInterval()` lets you set up functions that will be called every given milliseconds and cancel them when needed.

Timer events let you implement very sophisticated approaches to common problems. For example, some types of events have the potential to fire very rapidly (e.g. `'mousemove'` and `'scroll'`). When listening to those type of events, any time consuming operation performed in the event handlers can lead to slowness in UX.
This can be solved by using a technique called *debouncing* that consists in calling `setTimeout()` so that you don't do the time consuming operation too often.

In the following example, we *debounced* the handling of the `'input'` event, so that it never happens too frequently. If two events happen too frequently, we cancel the handling of the previous one, and schedule the handling to happen after 500 msecs.

```javascript
const textarea = document.querySelector('textarea');
let timeout;

textarea.addEventListener('input', () => {
  clearTimeout(timeout); // this does not fail if timeout is undefined, or if the timeout has expired
  timeout = setTimeout(() => console.log(`typed!`), 500);
});
```

A slightly different pattern consist in space out the handling so that they're separated by at least a certain amount of time. For example, in the following piece of code we're reporting the mouse coordinates only every 500 msecs:

```javascript
const input = document.querySelector('#mouseCoords');
let scheduled = null;
window.addEventListener('mousemove', evt => {
  if (!scheduled) {
    setTimeout(() => {
      input.textContent = `(${ scheduled.pageX }, ${ scheduled.pageY })`;
      scheduled = null;      
    }, 500);
  }
  scheduled = evt;
}); 
```

## Examples and Exercises

### [01 &mdash; Hello, Event Handlers](./01-hello-event-handlers/)
Getting introduced to event handlers.

### [02 &mdash; Hello, Event Object](./02-hello-event-object/)
Practising event objects.

### [03 &mdash; Hello, Event Propagation Rules](./03-hello-event-propagation-rules/)
Practising event propagation rules.

### [04 &mdash; Hello, Event `target`](./04-hello-event-target/)
Illustrating how to use the `target` property to register a single *click* handler and figure out which button was clicked based on the `target` property value.

### [05 &mdash; Disabling Default Actions](./05-disabling-default-actions/)
Illustrating how to use `preventDefault()` method on the event object so that you a link that is clicked is not followed.

### [06 &mdash; Key Events: Hello](./06-key-events-hello/)
Introducing key events.

### [07 &mdash; Key Events: Modifier Keys](./07-key-events-modifier-keys/)
Illustrates how to handle key combinations and modifier keys.

### [08 &mdash; Mouse Events: Hello, Click](./08-mouse-events-hello-click/)
Illustrates how to handle mouse clicks.

### [09 &mdash; Mouse Events: `mousemove`](./09-mouse-events-mousemove/)
Illustrates how to handle `'mousemove'` events.

### [10 &mdash; Touch Events: Hello!](./10-touch-events-hello/)
Illustrates how to handle touch events.

### [11 &mdash; Scroll Events: Hello!](./11-scroll-events-hello/)
Illustrates how to handle scroll events.

### [12 &mdash; Focus Events: Hello!](./12-focus-events-hello/)
Illustrates how to handle focus related events.

### [13 &mdash; Load Events: Hello!](./13-load-events-hello/)
Illustrates how to handle `'load'` and `'beforeunload'` events.

### [14 &mdash; Message Events: Web Workers!](./14-message-events-web-workers/)
Illustrates how to use *Web workers*.

### [15 &mdash; Timer Events: Debouncing!](./15-timer-events-debouncing/)
Illustrates how to handle `'load'` and `'beforeunload'` events.

### [e01 &mdash; Balloon!](./e01-balloon/)
An example that displays a ballon on the document and lets the user inflate it or deflate it until it blows up using by listening to `'keydown'` events.

### [e02 &mdash; Mouse Trail!](./e02-mouse-trail/)
An example that creates a very simple mousetrail by listening to `'mousemove'` events.

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
| `{node}.nodeName` | Points to a string that holds the tag name of an element in *UPPERCASE*. |
| `{node}.addEventListener(evt, cb)` | Registers an event listener in the given node for the event. When triggered, the callback passed as the second argument will be invoked. The callback will receive an event object which holds additional information about the event. |
| `{node}.removeEventListener(evt, cb)` | Unregisters a previously registered event listener in the given node for the event. The callback passed as the second argument has to be the exact same function that was used in the registration. |
| `{node}.textContent` | Points to the text of a node (e.g. text of a `<button>`). Useful for the nodes for which `nodeValue` returns null. | 
| `pageXOffset` | Returns the current horizontal scroll value. |
| `pageYOffset` | Returns the current vertical scroll value. |
| `requestAnimationFrame(cb)` | Notifies the browser that you wish to perform an animation. It accepts a callback function that will be called when it's time to update your animation for the next repaint. The callback is passed the time at which the callback is invoked. |
| `window.addEventListener(evt, cb)` | Registers an event handler in the browser window that represents the document. The callback will receive an event object which holds additional information about the event.|
| `window.removeEventListener(evt, cb)` | Unregisters an event handler in the browser window that represents the document. The callback passed as the second argument has to be the same function used when registering the event. |
| `innerHeight` | Returns the height of the window. |
| `innerWidth` | Returns the width of the window. |
| `postMessage(data)` | Sends a `'message'` event from a *web worker* to the main script with an event with the data encoded in the `'data'` property of the event. |
| const worker = new Worker(path) | Instantiated a new *web worker*. |
| `{worker}.postMessage(data)` | Sends a `'message'` event to a worker. The event `'data'` property will include the given information. |


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

### Events Cheat 

#### General Event Methods/Properties

| Event Method/Property | Description |
| :-------------------- | ----------- |
| `{event}.type` | Holds a string identifying the event type , such as `'mousedown'`. |
| `{event}.stopPropagation()` | Stops the propagation of an event to the outward elements. |
| `{event}.target`| Points to the node on which the event originated. |
| `{event}.preventDefault()` | Disables the default behavior for an action. |


#### Events

| Type | Event | Property/Method | Description |
| :--- | :---- | :------- | :---------- |
| Key Events | `'keydown'` |  | Fired when (and while) a key is pressed down. |
|            | `'keyup'`   |  | Fired when a key is released. |
|            |             | `ctrlKey`  | Holds true if *CTRL* key is pressed down, false otherwise. |
|            |             | `shiftKey` | Holds true if *SHIFT* key is pressed down, false otherwise. |
|            |             | `altKey`   | Holds true if *ALT* key is pressed down, false otherwise. |
|            |             | `metaKey`  | Holds true if *META* key is pressed down, false otherwise. |
|            |             | `key`      | Holds the key that has been pressed down (e.g. 's'). |
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
|                |             | postMessage(data) | Method to send data from a *Web worker* to the main script. |
|                |             | {worker}.postMessage(data) | Method to send data from a the main script to the given *web worker*. |
| Timer Events | | `setTimeout(cb, delayMillis, arg1, arg2, ...)` | Schedules a callback to be invoked after the given delay. Returns a *timerId* that can be used to cancel a scheduled callback. |
|              | | `clearTimeout(timerId)` | De-schedules a callback previously scheduled with a `setTimeout()` |
|              | | `cancelAnimationFrame()` | De-schedules a previous call to `requestAnimationFrame` |
|              | | `setInterval(cb, delayMillis, arg1, arg2, ...)` | Schedules a callback to be invoked repeatedly according to the given frequency details. |
|              | | `setInterval(cb, delayMillis, arg1, arg2, ...)` | Schedules a callback to be invoked repeatedly according to the given frequency details. Returns an *intervalId* that can be used to cancel the timer. |
|              | | `clearInterval(intervalid)` | De-schedules a previous call to `setInterval()`. |
