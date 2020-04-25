# Chapter 18 &mdash; HTTP and Forms
> selected notes, examples and exercises from chapter 18

## Notes

This chapter delves into the HTTP protocol in more detail and explains the way browser JavaScript has access to it.

### A Few Notions on HTTP

When you type an Internet address in your browser's address bar, the browser will try first to open a TCP connection to the IP address associated to that given name using port 80 (or 443 for HTTP connections).

If the server exists and accepts the connection, the browser will send something like

```
GET /index.hmtl HTTP/1.1
HOST: example.com
User-Agent: <browser-name>
```

Then the server will respond through the same connection with something like:

```
HTTP/1.1 200 OK
Content-Length: 65585
Content-Type: text/html
Last-Modified: Mon, 13 Apr 2020 15:27:08 GMT

<!doctype html>
... the document ...
```

The browser takes the part of the response after the blank line (the response body), and displays the HTML document.

The information sent by the client is called the *request*, and it starts with the *method* of the request (`GET` , `DELETE`, `PUT`, `POST`...). The part after the *method* is the *path* of the resource. It can be anything that can be transferred as if it is a file, but it can be anything that is understood and transferred from the server. The next portion is the *version* of the HTTP protocol that the request is using.

The response consists on the *version*, followed by the status of the response, first as a *3-digit status code* followed by a human readable representation of the response.
Status codes can be understood as follows:
+ `2xx` &mdash; the request succeeded
+ `4xx` &mdash; the server identified that something was wrong with the request
+ `5xx` &mdash; the server identified the request as correct, but could not processed it

Right after that, there are a variable number of *headers* in the form: `<header name>: <header value>`. Some of the request and response headers are required (as the `Host` header in the request), but most of them are optional and the party sending the request, or the server crafting the response may decide to include it or not.

After the header, both requests and responses may include a blank line followed by a body, which contains the data being sent. In general, `GET` and `DELETE` requests do not send along any data in the body, while `PUT` and `POST` requests do.

### Browsers and HTTP

A browser will make an initial request when we enter a URL in the address bar. When the requested page references other files such as images and JavaScript files, those will also be retrieved simultaneously, rather than waiting for the responses one at a time.

HTML pages may include forms, which allow a user to fill out information and send it to the server:

```html
<form method="GET" action="example/message.html">
  <p>Name: <input type="text" name="name" id="input1"></p>
  <p>Message:<br><textarea name="message" id="area1"></textarea></p>
  <p><button type="submit">Send</button></p>
</form>
```

When you click the *Send* button, the form is submitted, meaning that the content of its field is packed into an HTTP request and the browser navigates to the result of that request.

When the `<form>` element's method is `GET` or is omitted the information will be encoded as a *query string*:

```
GET /example/message.html?name=Jane&message=Hello to Jason%3F HTTP/1.1
```

The information is encoded after the `?` character with value pairs in the form `<element name>=<element value>` and separated by the `&` character. Note that some characters will have to be *URL encoded* (as the `%3F`). JavaScript provides the methods `encodeURIComponent()` and `decodeURIComponent()` to accomplish that.

If the form uses the `POST` method, the HTTP request made to submit the form will put the *query string* in the body of the request:

```
POST /example/message.html HTTP/1.1
Content-length: 32
Content-Type: application/x-www-form-urlencoded

name=Jane&message=Hello to Jason
```

| NOTE: |
| :---- |
| `GET` requests should be used for requests that do not have side effects (i.e. should retrieve info). Requests that perform changes in the server should be expressed as `POST` or `PUT` requests. |


### `fetch`

JavaScript make HTTP requests is called `fetch`:

```javascript
fetch('example/data.txt').then(response => {
  console.log(response.status);
  console.log(response.headers.get('Content-Type'));
});
```

Calling `fetch` returns a promise that resolves to a *Response* object holding information about the server's response, such as its status code and headers. The headers are wrapped in a *map-like* object that treats its keys as case-insensitive.

Note that it is standard practice to resolve HTTP requests even if the server responds with an error code. Typically, the promise will be rejected only because of network errors, or servers not being found.

The first argument to `fetch` is the requested URL. When it doesn't start with a protocol name (e.g. `http://`) it is assumed to be relative to the current document. When it starts with a slash (`/`) it replaces the current path (the part after the server name).

To get the actual content of the response, you can use the `text()` method, which returns a response to the body of the response.

```javascript
fetch('example/data.txt')
  .then(res => res.text())
  .then(text => console.log(`body: ${ res.text }));
```

A asimilar method called `json()` returns a promise that resolves to the value you get when parsing the body as JSON, or rejects if it is not a valid JSON.

By default, `fetch()` uses the `GET` method to make its request. You can configure it differently by passing an object with extra options as a second argument:

```javascript
fetch('example/data.txt', { method: 'DELETE' })
  .then(res => console.log(res.status));
```

To add a request body, you can include a `body` option. To set the headers, you can include the `headers` option:

```javascript
fetch('example/data.txt', { headers: { Range: 'bytes=8-19' }})
  .then(res => res.text())
  .then(console.log);
```

### A Few Notes About HTTP Sandboxing and Security
For security reasons, browsers disallow scripts to make HTTP requests to other domains. This can be an annoying problem when building certain types of applications. In order to mitigate it, servers can include the following header in responses:

```
Access-Control-Allow-Origin: *
```

This will indicate the browser that it is OK for the request to come from another domain.

The secure HTTP protocol, (e.g. `https://`) wraps HTTP traffic in a way that makes it harder to read and tamper with. Before exchanging data, the client verifies that the server is who it claims to be by asking it to prove that it is who it claims to be by asking it prove that it has a certificate issued by a certificate authority that the browser recognizes. If the verification succeeds, all data going over that connection will be encrypted in a way that should prevent eavesdroppings and tampering.

### Form Fields
Forms were originally designed for the pre-JavaScript web, and therefore, it was assumed that interaction with the server always happened by navigating to a new page. However, as the form fields are regular DOM elements you can interact with them with JavaScript, and perform tasks that were not originally contemplated (such as validation on the client side).

A web form consist of any number of input fields grouped in a `<form>` tag. A lot of field types use the `<input>` tag, whose `tag` attribute is used to select the field's style as:
+ `<input type="text">` &mdash; single-line text field
+ `<input type="password">` &mdash; single-line text field for passwords that hides the text as it is typed
+ `<input type="checkbox">` &mdash; On/Off switch
+ `<input type="radio">` &mdash; Part of a multiple-choice field
+ `<input type="file">` &mdash; File section from user's computer

Form fields do not necessarily have to appear in a `<form>` field. Such *form-less* fields cannot be submitted in the traditional way of submitting a form, but that does not necessarily represents a problem from JavaScript's perspective.

The following piece of HTML shows these different types of `<input>` form fields described above:

```html
<p><input type="text" value="abc"> (text)<p>
<p><input type="password" value="abc"> (password)<p>  
<p><input type="checkbox" checked>(checked checkbox)<p>
<p>
  <input type="radio" value="A" name="choice">
  <input type="radio" value="B" name="choice" checked>
  <input type="radio" value="C" name="choice">
  (radio buttons)
<p>
<p><input type="file"> (file)</p>  
```


Multiline text files are included in form fields using `<textarea>`:
```html
<textarea>
one
two
three
</textarea>
```

The `<select>` tag is used to create a field that allows the user to select from a number of predefined options:

```html
<select>
  <option>Pancakes</option>
  <option>Pudding</option>
  <option>Ice Cream</option>
</select>
```

You can use the `multiple` attribute to let the user select several options.

Whenever the value of a form field changes, a `'change'` event will be fired.

### Focus

Form fields can get keyboard focus &mdash; when clicked or activated in some other way they become the currenly active element and the recipient of keyboard input.

We can control focus from JavaScript with the `focus()` and `blur()`. The value in `document.activeElement()` corresponds to the currently focused element.

```javascript
document.querySelector('input').focus();
console.log(document.activeElement.tagName);

document.querySelector('input').blur();
console.log(document.activeElement.tagName);
```

HTML provides the attribute `autofocus` that can be used to signal the browser that the field with that attribute should get the focus as soon as the page is loaded.
Browsers traditionally also allow the user to move the focus through the document by pressing the *TAB* key. We can influence the order on which the elements get the focus with the `tabindex` attribute.

```html
<input type="text" tabindex="1">
<a href=".">(help)</a>
<button tabindex=2>OK</button>
```

### Disabled Fields
All form fields can be disabled through their `disabled` attribute:

```html
<button disabled>Button that can't be clicked</button>
```
### The `form` element
When a field is contained in a `<form>` element, its DOM element will have a `form` property linking back to the form's DOM element. In turn, the `<form>` element will have a property called `elements` that contains an array-like collection of the fields inside it.

The `name` attribute of a form field determines the way its value will be identified when the form is submitted. It can also be used as a property name when accessing the form's `elements` property, which acts both as an *array-like* and *map-like* (accessed by name).

```html
<form>
  Name: <input type="text" name="name"><br>
  Name: <input type="password" name="password"><br>
  <button type="submit">Log in</button>
</form>
<script>
  const form = document.querySelector('form');
  console.log(form.elements[1].type); // -> password
  console.log(form.elements.name.form == form); // -> true
</script>
```

A button with a `type="submit"` when pressed cause the form to be submitted. Pressing *ENTER* when a form field is focused has the same effect.

Submitting a form means the browser will navigate to the page indicated by the form's action attribute, using either a `GET` or a `POST`. Before doing so, a `submit` event will be fired. You can handle this event from JavaScript to prevent this default behavior.

Intercepting `'submit'` events in JavaScript has very interesting use cases such as validating forms before being submitted, or even sending the information to the server without reloading the page.

### Text Fields
Fields created by `<textarea>` tags, or `<input>` tags with a type `"text"` or `"password"` or `"email"` share a common interface. Their DOM elements have a `value` property that holds their current content as a string value. Setting this property to another string changes the field's content.

The `selectionStart` and `selectionEnd` properties of text fields give the information about the cursor and selection in the text.

The following example illustrates how you can insert a sequence of characters in the current cursor position of a text area pressing the key *F12*:

```html
<textarea></textarea>
<script>
  const textarea = document.querySelector('textarea');
  textarea.addEventListener('keydown', evt => {
    if (evt.key == 'F12') {
      replaceSelection(textarea, 'Khasekhemwy');
      evt.preventDefault();
    }
  });

  function replaceSelection(field, word) {
    const from = field.selectionStart;
    const to = field.selectionEnd;
    field.value = `${ field.value.slice(0, from) }${ word }${ field.value.slice(to) }`;

    // put the cursor after the word recently inserted
    field.selectionStart = from + word.length;
    field.selectionEnd = from + word.length;
  }
<script>
```

The `'change'` event for a text field is fired when the field loses focus after its content is changed. The `'input'` event is triggered every time the user interacts with the field to manipulate the field's content.

```html
<input type="text">Length: <span id="length">0</span>
<script>
  const text = document.querySelector('input');
  const output = document.querySelector('#length');

  text.addEventListener('input', () => {
    output.textContent = text.value.length;
  });
</script>
```

### Checkboxes
A checkbox field is a binary toggle. Its value can be extracted or changed throught its `checked` property.

```javascript
const checkbox = document.querySelector('input');
checkbox.addEventListener('change', () => {
  document.body.style.background = checkbox.checked ? 'mediumpurple': '';
});
```

### Radio buttons
A radio button is similar to a checkbox, but it's implicitly linked to other radio buttons with the same `name` attribute, so that only one of them can be active at any given time.

```html
Color:
<label>
  <input type="radio" name="color" value="orange"> Orange
</label>
<label>
  <input type="radio" name="color" value="lightgreen"> Green
</label>
<label>
  <input type="radio" name="color" value="lightblue"> Blue
</label>
<script>
  const radios = document.querySelectorAll('[name=color]');
  for (let radio of [...radios]) {
    radio.addEventListener('change', () => {
      document.body.style.background = radio.value;
    });
  }
</script>
```

| NOTE: |
| :---- |
| The statement `document.querySelectorAll('[name=color]')` returns an array-like structure with all the elements in the document whose `name` attribute matches `"color"`. |


## Examples and Exercises

### [01 &mdash; Form Fields: Hello!](./01-form-fields-hello/)
Displaying form fields on an HTML page.

### [02 &mdash; Form Fields: `focus` and `blur` with JavaScript!](./02-form-fields-focus-and-blur-with-js/)
Displaying form fields on an HTML page.

### [03 &mdash; Form Fields: `autofocus` attribute](./03-form-fields-autofocus/)
Illustrates the `autofocus` attribute.

### [04 &mdash; Form Fields: `tabindex` attribute](./04-form-fields-tabindex/)
Illustrates the `autofocus` attribute.

### [05 &mdash; Form Fields: `disabled` attribute](./05-form-fields-disabled/)
Illustrates the `disabled` attribute.

### [06 &mdash; Form Fields: Hello, `<form>`](./06-form-fields-hello-form/)
Illustrates several concepts about the `<form>` as a whole such as using the `form.elements` property and the registration of an event listener for the `submit` event.

### [07 &mdash; Form Fields: Hello, Text Fields](./07-form-fields-hello-text-fields/)
Practising basic concepts of `<input type="text">` and `<textarea>`. 

### [08 &mdash; Form Fields: Text Fields &raquo; `input` and `change`](./08-form-fields-text-fields-input-and-change/)
Practising management on `input` and `change` events.

### [09 &mdash; Hello, `<checkbox>`](./09-form-fields-checkbox/)
Practising checkboxes.

### [10 &mdash; Hello, Radio Buttons](./10-form-fields-radio-buttons/)
Practising radio buttons.

## Cheat Sheet

### Javascript API for the Browser

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
| Radio Button Events | `'change'` | | fired when the status of a collection of radio buttons `<input type="radio"...>` changes. |

#### Form Fields

| Type | Element | Property | Description |
| :--- | :------ | :------- | :---------- |
| Text Field | `<input type="text">`<br>`<input type="password">`<br>`<input type="email">`<br>`<textarea>` | `value` | Holds the current content of the field as a string. |
| Text Field | `<input type="text">`<br>`<input type="password">`<br>`<input type="email">`<br>`<textarea>` | `selectionStart` | Holds the initial position of the text selection in a text field. |
| Text Field | `<input type="text">`<br>`<input type="password">`<br>`<input type="email">`<br>`<textarea>` | `selectionEnd` | Holds the end position of the text selection in a text field. |
| Checkbox | `<input type="checkbox">` | `checked` | Holds a boolean value that indicates if the checkbox is checked or not. |
| Radio Button | `<input type="radio" name="radioGroup" value="radioValue">` | `value` | Holds the value of a radio button (e.g. `'radioValue'`). |