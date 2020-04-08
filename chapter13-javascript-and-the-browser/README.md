# Chapter 13 &mdash; JavaScript and the Browser
> selected examples and exercises for chapter 13

## Notes

### A Crash Course about the Internet
A *network* protocol describes a style of communication over a network. There are protocols for sending email, for fetching email, for sharing files, etc.

The *Hypertext Transfer Protocol (HTTP)* is a protocol for retrieving named resources (chunks of information, such as web pages or pictures). It specificies that the party making the request should send something like:

```
GET /index.html HTTP/1.1
```

Most protocols are built on top of other protocols. HTTP treats the network as a *stream-like* device into which you can put bits and have them arrive at the correct destination in the correct order. The protocol in charge of ensuring that complicated task is the *Transmission Control Protocol (TCP)*. Most of the communication on the Internet is built on top of it.

A TCP connection works as follows:
1. To be able to listen for different kinds of communication at the same time on a single machine, each *listener* has a number called *port* associated with it.
2. Another computer can then establish a connection to the target machine using the address of the target machine and the correct port number for the listener. 
3. If the target machine can be reached, and is listening on that port, the connection is successfully created.

The listening computer is called the *Server*, and the connecting computer is called the *client*. Once the communication has been established, the connections will act as a two-way pipe through which bits can flow.

The World Wide Web (or Web) is a set of protocols and formats that allow us to visit web pages in a browser. Any computer can become part of the web by establishing a listener on port 80 using the HTTP protocol.

Each document on the Web is identified by a *Uniform Resource Locator (URL)*.

```
https://example.com/index.html
|      |           |          |
protocol   server      path   
```

Machines connected to the Internet get an IP address such as `149.210.142.219` or `2001:4860:4860::8888`. As these numbers are difficult to remember, a *domain name* can be registered instead for an specific address.

Thus, when you type a URL into your browser's address bar, the browser has to find out what address the domain name refers to using the *DNS* protocol, then using *http* it will make a connection to the server at that address and ask for the resource. If all goes well, the server sends back a document.

### HTML

HTML (Hypertext Markup Language) is the document format use for web pages. An HTML document contains text, as well as tags that give structure to the text, describing things such as links, paragraphs and headings.

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <title>My home page</title>
  </head>
  <body>
    <h1>My home page</h1>
    <p>Hello, I am Sergio and this is my home page.</p>
    <p>I'm following the book:
      <a href="http://eloquentjavascript.net">here</a>.
    </p>
  </body>
</html>
```

The document starts with `<!doctype html>` which tells the browser to interpret the file as modern HTML.

HTML documents have *head* and *body*. The head contains information about the document and the body contains the document itself.
The document's body contains *headings* and paragraphs.

Within the body, you find elements such as the `p` for paragraph that have an opening tag (`<p>`) and ending tag (`</p>`). Some other elements need some extra information such as in `<a href="...">`. Those (like `href` which stands for *hypertext reference* are called attributes).

Some tags do not enclose anything and do not need to be closed, such as `<meta charset="utf-8">`.

To be able to include angle brackets in the text of the document you have to use *entities*: an ampersand (&) followed by a name or character code and a semicolon as in `&lt;`. In particular, an ampersand is represented with `&amp;` entity.

### JavaScript and HTML

Pieces of JavaScript can be embedded into HTML documents with the `<script>` tag:

```html
<h1>Testing JavaScript</h1>
<script>alert("hello!")</script>
```

As including large pieces of JavaScript directly in HTML is impractical, you will end up using the `src` attribute of the `<script>` tag:

```html
<h1>Testing JavaScript</h1>
<script src="code/hello.js"></script>
```

You can load *ES modules* in the browser by giving your `<script>` tag a `type=module` attribute. Such modules can depend on other modules by using URLs relative to themselves as module names in `import` declarations.

You might also find JavaScript in the attributes of certain elements, such as the `<button>`.

```html
<button onclick="alert('Boom!');">DO NOT PRESS</button>
```

## Examples and Exercises

### [01-hello-expressjs-for-js-in-the-browser](./01-hello-expressjs-for-js-in-the-browser/)
Introduces the template project that will be used for the JavaScript in the browser examples and exercises.

### [02-hello-js-in-the-browser](./01-hello-js-in-the-browser/)
Illustrates different places on which you can find JavaScript on an HTML document
