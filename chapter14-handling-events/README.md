Eloquent JavaScript
===================

# Chapter 14: Handling events

## 01-hello-event-handlers
Illustrates the use of `addEventListener` to register an event handler. In the example, it is registered a function that prints a message on the console when the HTML document is clicked.

The document also demonstrate that you can add event handlers to specific DOM nodes instead of registering the handler in the global scope, and how to unregister previously registered event handlers using `removeEventListener`.

## 02-event-objects
Illustrates that event handlers receive an `event` object with additional information about the event.

## 03-event-propagation
Illustrates how events propagate outward from the most specific node on which the event occurs to the global window element. It also illustrates how to use the `stopPropagation` method on events to prevent further propagation.

## 04-controlling-propagation
Another example of `stopPropagation`, on which a handler for a `mousedown` event is registered on both a paragraph and a button. When the user clicks with the left button the event propagates normally, but when it uses the right button the propagation is stopped.

## 05-event-target-property
Illustrates the use of the target property of an event object. In the example, an event listener for the `click` event is registered on a paragraph that contains several buttons. Then, by inspecting this property it is check which button was actually clicked on.

## 06-prevent-default-behavior
Illustrates the usage of `preventDefault` to inhibit the default action taken when clicking a link.

## 07-key-events-html
Illustrates how to work with `keydown` and `keyup` events. The page registers a `keydown` event handler for the letter B and the page background color is changed when that key is pressed and set back to the default value when the key is released.

## 08-display-keycode
Simple HTML page that shows the `keyCode` being pressed on the console.

## 09-key-modifiers
Illustrates how to check for key modifiers on `keydown` events.

## 10-reading-character-input
Illustrates how to handle `keypress` events to listen only for key events that produce character input.

## 11-mouse-events
Illustrates the basics of handling `mousedown`, `mouseup`, `click` and `dblclick` events. In the application, we register event listeners for a container with a couple of buttons inside it. Thus, we can check simple events such as `mouseup` and `mousedown` and also complex actions such as `mousedown` on a button and `mouseup` on a different button.

## 12-primitive-drawing
Illustrates a basic HTML page that listens to `click` events and puts a blue dot on screen wherever the click has happened.

## 13-mouse-motion
Illustrates how to work with mouse motion related events in an example that consists in a bar that gets resized when the user clicks on it.

## 14-hover-effect
Illustrates how to work with mouse events to create a *hover* effect. It is also demonstrated how to obtain the same effect using CSS instead of JavaScript.

## 15-scrolling-events
Illustrates how to work with the `scroll` events by creating a progress bar on the top right corner of the screen whose value is adjusted as the user scrolls.

## 16-focus-events
Illustrates how to work with `focus` and `blur` events by creating a very simple form on which two input fields and a text container in which help text is displayed when the inputs get into focus.

## 17-focus-on-window
Demonstrates that the `window` object receives `focus` and `blur` events when the browser page moves in or out of the page on which the handler is registered.

## 18-load-events
Illustrates how to work with the `load` event.

## 19-web-worker
Demonstrate how to create and send messages to a *web worker* to perform some task in the background.

## 20-timers
Illustrates how to set a timer to schedule the execution of a piece of code wrapped in a function.

## 21-timer-deactivation
Illustrates how to use `setInterval` and `clearInterval` functions that schedule/disables the execution of functions every certain amount of milliseconds.

## 22-debouncing-after
Illustrates how to use the debouncing technique to report the length of a given text the user is typing, but only after the user has stopped typing. While the user is typing, the length is not updated.

## 23-debouncing
Illustrates another debounding technique in which the update is performed while the operation is in progress. In the example the screen coordinates relative to the page are display in input fields every 250 msec using debouncing.

## e01-censored-keyboard
As an exercise in doing ridiculous things with technology, this program features a text field `<input type="text">` that doesn't allow Q, W and X to be typed.

## e02-mouse-trail
The "mouse trail" is a series of images that would follow the mouse pointer as you moved it across the page. In this program a "mouse trail" is implemented using absolutely positioned `<div>` elements with a fixed size and background color. A bunch f such elements are created and, when the mouse moves, are displayed.

## e03-tabs (not done)
A tabbed interface allows you to select an interface panel by choosing from a number of tabs sticking out above an element. This program implements a simple tabbed interface. Write a function `asTabs` that takes a DOM node and creates a tabbed interface.

## e04-image-stalker
A variant of `e02-mouse-trail` in which an image follows the mouse pointer.
