Eloquent JavaScript
===================

# Chapter 17: HTTP

## 01-hello-query-string
Illustrates how the browser builds a query string from a form. In this example, a basic form with two elements using the `GET` method is created.

## 02-encode-decode-URL
Illustrates how to encode and decode content targeted to URL using `encodeURIComponent` and `decodeURIComponent`.

## 03-sending-http-request
Illustrates how to use `XMLHttpRequest` to send a synchronous request to retrieve a local document. At the time of writing, this only works on *Firefox* as *Chrome* does not allow cross-origin requests for files.

## 04-sending-async-http-request
Illustrates how to use `XMLHttpRequest` to perform an async request to retrieve a local document. At the time of writing, this only works on *Firefox* as *Chrome* does not allow cross-origin requests for files.

## 05-fetching-xml-data
Illustrates how to fetch, read and parse XML data after performing an XMLHttpRequest.

## 06-fetchning-json-data
Illustrates how to fetch, read and parse JSON data after performing an XMLHttpRequest.

## 07-http-request-helper-v1
Introduces a first version of a helper function that abstracts the ugly boilerplate code to use `XMLHttpRequest`.

## 08-http-request-helper-v2
A more robust version of the helper function of **07-http-request-helper-v1** but that does not solve the problem entirely.

## 09-http-request-helper-promises
A version of the `httpRequest` helper function based on `Promise`s.

## 10-http-promise-chaining
Illustrates a simple example of promise chaining.

## 11-http-promise-chaining-elaborate
Illustrates a more elaborate example of promise chaining. Note that this program is not intended to run as the JSON files are not found.

## e01-content-negotiation
One of the things can do is called *content negotiation*. The `Accept` header for a request can be used to tell the server what type of document the client would like to get. Servers are allowed to ignore this header, but if a server knows various ways to encode a resource, it can look at this header and send the one the client prefers.
For example, http://eloquentjavascript.net/author is configured to respond with either `text/plain`, `text/html` and `application/json`.

Send requests to fetch all three formats of this resource. Use the `setRequestHeader` method of your XMLHttpRequest object to set the header named `Accept` to one of the media types given earlier. Make sure you set the header after calling `open` but before calling `send`.

Finally, try asking for the media type `application/rainbows+unicorns` and see what happens.

## e02-waiting-for-multiple-promises
The `Promise` constructor has an `all` method that, given an array of promises, returns a promise that waits for all of the promises in the array to finish. It then succeeds, yielding an array of result values. If any of the promises in the array fail, the promise returned by all fails too (with the failure value from the failing promise).

Try to implement something like this yourself as a regular function called `all`.

Note that after a promise is resolved (has succeeded or failed), it can't succeed or fail again, and further calls to the functions that resolve it are ignored. This can simplify the way you handle failure of your promise.
