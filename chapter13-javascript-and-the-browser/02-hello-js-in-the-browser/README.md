# 02 &mdash; Hello, JavaScript in the browser
> illustrates different places on which you can find JavaScript on an HTML document

## Description

HTML defines the `<script>` tag to include JavaScript in a document.
You can either place JavaScript *inline* as in:

```html
<script>alert('Hello to Jason Isaacs!');</script>
```

or use the `src` attribute to fetch a script file:

```html
<script src="javascript/hello.js"><script>
```

Note that `<script>` tag must always be closed, even if it doesn't contain any code.

You can load ES modules in the browser by using the attribute `type="module"` in the `<script>` tag.

```html
<script src="javascript/app.mjs" type="module"></script>
```

Then in your javascript you will have:

```javascript
/* app.mjs */
import greeter from './lib/greeter.mjs';

const message = greeter('Jason Isaacs');
console.log(`Message generated: ${ message }`);

alert(message);

/* lib/greeter.mjs */
export default function greeter(name) {
  return `Hello to ${ name } from an ES module!`;
}
```


Lastly, there are certain attributes of other HTML elements that can also contain a JavaScript attribute, as in the example below:

```html
<button onclick="alert('Hello!");>Click to greet</button>
```