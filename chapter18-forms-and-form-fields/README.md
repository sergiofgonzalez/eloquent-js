Eloquent JavaScript
===================

# Chapter 17: Forms and Form Fields

## 01-hello-form-fields
Illustrates how the browser builds a query string from a form. In this example, a basic form with two elements using the `GET` method is created.

## 02-focus-and-blur
Illustrates how you can force an HTML form field to gain the focus, and a to lose it using JavaScript.

## 03-autofocus-tabindex
Illustrates the use of `autofocus` and `tabindex`.

## 04-disabled-fields
Illustrates the use of the `disabled` property in a form element.

## 05-hello-form
Illustrates the use of a normal `<form>` element that submits a couple of fields when a `submit` button is clicked and makes the browser navigate to the page referenced in the form's `action` attribute.
It is also illustrated how to access the form fields as an array and as a map.

## 06-javascript-in-forms
Illustrates how to capture `submit` events triggered by a form when the form is submitted. Instead of navigating away from the page, the JavaScript code calls `preventDefault` and displays the form field value on the console.

## 07-text-fields-properties
Illustrates how to work with text field properties such as `value`, `selectionStart` and `selectionEnd` by wiring up a textarea with an event handler that introduces some text when F2 key is pressed.

## 08-text-fields-events
Illustrates how to work with `change` and `input` events on text fields by creating a counter that increments/decrements as the user interacts with the text field, and an status area in which the word to be validated is displayed when the field loses its focus.

## 09-hello-checkbox
Illustrates how to work with checkboxes. In the example, the page displays a checkbox that when clicked changes the backgroud to purple.

## 10-hello-radio
Illustrates how to work with radio buttons. In the example, a radio group with three radios is displayed given the user the possibility of changing the document's background color.

## 11-hello-select-multiple-select
Illustrates how to use the select and select multiple on an HTML page.

## 12-hello-select
Illustrates how to work with `select` from JavaScript. In the example, a multiple select with bit patterns are displayed and the user can interact with it to build a number.

## 13-hello-file-field
Illustrates how to work with file fields from JavaScript. In the example, the user can interact with a file field and in the console it will be displayed some of the file properties.

## 14-reading-file-contents
Illustrates how to read a file from the user's computer using JavaScript. This is done using the `FileReader` constructor.

## 15-reading-file-contents-promises
Illustrates how to read a file from the user's computer using a Promise that wraps the `FileReader` functionality.

## 16-hello-local-storage
Illustrates how to work with `localStorage`. In the example, a count of the times the page has been accessed is incremented and maintained even when the page is refreshed or closed.

## 17-local-storage-note-keeping
Illustrates how to work with `localStorage`. In the example, a simple and buggy Note Keeping application is developed.

## e01-javascript-workbench
Build an interface that allows people to type and run pieces of JavaScript code.
Put a button next to a `<textarea>` field, which, when pressed, uses the Function constructor to wrap the text in a function and call it. Convert the return value of the function, or any error raised, to a string and display it after the text field.

## e02-autocompletion
Extend a text field so that when the user types, a list of suggested values is shown below the field. You have an array of possible values available and should show those that start with the text that was typed. When a suggestion is clicked, replace the text field's current value with it.

## e03-imdb-cast-fixer
As a user, i want that when i paste the cast from imdb it's formatted as in:
```
actor...character
```
In an exercise from a previous chapter, i built a function that does the formatting.
