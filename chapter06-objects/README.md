Eloquent JavaScript
===================

# Chapter 6 - Objects

## 001-hello-methods
Illustrates how to define methods in a JavaScript object. It also demonstrates how to use `this` inside methods to refer to the object in which the method is defined.
It also give some examples of `apply` and `call` with objects.

## 002-prototypes
Illustrates `Object.getPrototypeOf` to obtain the prototype of a given object. It is also demonstrated how even empty objects feature properties such as `toString` derived from their prototypes.
It is also demonstrated how to use the `Object.create` to create objects from a given prototype.

## 003-constructors
Demonstrates how to define a constructor function that can be used to create instances of a given type (so that all the instances created share the same properties and the same prototype).
It is also illustrated how to define new properties to all instances created from that constructors using `prototype` property on the constructor.

## 004-overridding
Demonstrates how you can add a property to a given instance and this overrides the same property if that is defined in the prototype.
It is also demonstrated how you can force the invocation of a given prototype function using `call`.

## 005-prototype-interference
This example illustrates how you can use a constructor's prototype to add new properties and behavior dynamically to all the instances of a given object.
It is also demonstrated how this feature can produce unintended side-effects. It is also illustrated how to create nonenumerable properties using `Object.defineProperty` and how to effectively iterate over an object's own properties using `hasOwnProperty`.

## 006-prototypeless
This example illustrates how to create objects without a prototype by invoking `Object.create(null)`.

## 007-oop-project-table
This project will illustrate polymorphism and OOP in JavaScript in general. It consists in a program that given an array of arrays of table cells, will build up a string that contains a nicely laid out table, with columns and rows aligned.

name         height country
------------ ------ -------------
Kilimanjaro    5895 Tanzania
Everest        8848 Nepal
Mount Fuji     3776 Japan
Mount Blanc    4808 Italy/France
Vaalserberg     323 Netherlands
Denali         6168 United States
Popocatepetl   5465 Mexico

This is the book's implementation.

## 008-draw-table-project
With the same goal as `007-oop-project-table` this program is built from the ground up rationalizing about the responsibilities of each function and method.

This program includes a lot of console.log to inspect the contents of variables.

## 009-draw-table-project-clean
The same as `008-draw-table-project` but with all the debugging information cleaned out.

## 010-getters-setters
Illustrates how to define objects with getters and setters, and how to add properties to prototypes using `Object.defineProperty' function.

## 011-inheritance
Illustrates how to establish a simple inheritance hierarchy in JavaScript.

## 012-draw-table-project-final
Includes the `RTextCell` object in the `009-draw-table-project-clean`.

## e01-vector
Write a constructor `Vector` that represents a vector in two-dimensional space. It takes `x` and `y` parameters, which it should save to properties of the same name.
Give the `Vector prototype` two methods, `plus` and `minus`, that take another vector as a parameter and return a new vector that has the sum or difference of the two vectors'.
Add a `getter` property `length` to the prototype that computes the length of the vector - that is, the distance of the point (x, y) from the origin (0, 0).

## e02-another-cell
Implement a cell type named StretchCell(inner, width, height) that conforms to the table cell interface, and therefore must support:
+ `minHeight`: returns a number indicating the minimum height this cell requires (in lines).
+ `minWidth`: returns a number indicating this cell's min width (in characters).
+ `draw(width, height)`: returns an array of length height, which contains a series of strings that are each width characters wide. This string represents the contents of the cell.

`StretchCell` should wrap another cell (just like UnderlinedCell does) an ensure that the resulting cell has at least the given width and height, even if the inner cell would naturally be smaller.

## e03-sequence-interface
Design an interface that abstract iteration over a collection of values.
An object that provides this interface represents a sequence, and the interface must somehow make it possible for code that uses such an object to iterate over the sequence, looking at the element values it is made up of and having some way to find out when the end of sequence is reached.

When you have specified the interface, try to write a function `logFive` that takes a sequence object and calls `console.log` on its first five elements, or fewer, if the sequence has fewer than five elements.

Then implement an object type `ArraySeq` that wraps an array and allows iteration over the array using the interface you designed.

Implement another object type `RangeSeq` that iterates over a range of integers (taking `from` and `to`arguments to its constructor) instead.
