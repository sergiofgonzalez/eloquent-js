Eloquent JavaScript
===================

# Chapter 13: The Document Object Model

## 01-find-text-in-dom
Illustrates how to write a recursive function that scans an HTML page looking for text.

## 02-finding-elements
Illustrates how to use `getElementsByTagName` and `getElementById` to obtain references to elements in the DOM.

## 03-changing-the-dom
Illustrates how to use `insertBefore` to rearrange the elements in a web page.

## 04-replacing-images
Illustrates how to traverse the DOM replacing images by its alt attribute.

## 05-live-nodes
Illustrates how you must traverse the DOM backwards instead of forward, because images.length gets updated while modifying the DOM.

## 06-converting-to-array
Demonstrates how to use `Array.prototype.slice.call` to convert an array-like object (in which properties are numbered, etc.) to a real array.

## 07-utility-function
Demonstrates how to write a helper function that creates nodes with the information received in the arguments.

## 08-custom-html-attributes
Demonstrates how to read custom attributes from a node using `getAttribute`.

## 09-code-highlighter
Illustrates the use of `getAttribute` in an example that creates a very basic code highlighter for JavaScript code found in HTML pages.

## 10-layout
Illustrates how to access layout properties in a HTML window to check for the position of some elements.

## 11-forcing-layout-changes
Illustrates two different functions that perform the same action that involves changing and reading DOM layout. It demonstrates that being aware that recomputing DOM layout properties is a lengthy process can lead to bad algorithm choices.

## 12-simple-style.html
A very simple example that illustrates how to read and write style from JavaScript using `style` property on elements.

## 13-peek-a-boo-styles
A quite involved example involving some text that is hidden using `style="display: none` and a button that allows you to make it visible again. Additionally, it has been added the capability to re-hide it again.
The idea of the example is to illustrate how to control the style of elements from JavaScript code using `style` property.

## 14-hello-css.html
A simple example with several CSS styles.

## 15-query-selector
Illustrates how to use `querySelectorAll` to obtain elements using a CSS selection expression such as `p .a`.

## 16-hello-anomations
Demonstrates how to animate a PNG in the browser window following an elliptical trajectory. The animation is scheduled using the function `requestAnimationFrame`.

## e01-html-table
HTML makes laying out tables a very easy task. An HTML table is built with the following tag structure

```HTML
    <table>
        <tr>
            <th>Name</th>
            <th>Height</th>
            <th>Country</th>
        </tr>
        <tr>
            <td>Kilimanjaro</td>
            <td>5895</td>
            <td>Tanzania</td>
        </tr>
    </table>
```

For each row, the `<table>` tag contains a `<tr>` tag. Inside of these `<tr>` tags we can put cell elements: either heading cells (`<th>`) or regular cells (`<td>`).

Write a function buildTable that, given an array of objects that all have the same properties, builds up a DOM structure representing a table.
The table should have a header row with the property names wrapped in `<th>` elements and should have one subsequent row per object in the array, with its property values in `<td>` elements.
The `Object.keys` function, which returns an array containing the property names that an object has, will be useful.

Once you have the basics working, right-align numeric cells by setting their `style.textAlign` to `right`.

## e02-elements-by-tag-name
The `getElementsByTagName` method returns all child elements with a given tag name.
Implement your own version of it as a regular non-method function that takes a node and a string (the tag name) as arguments and returns an array containing all descendant element nodes with the given tag name.

To find the tag name of an element, use its tagName property. But note that this will return the tag name in all uppercase.
