Eloquent JavaScript
===================

# Chapter 4 - Data Structures: Objects and Arrays 

## 001-hello-array.js
Illustrates how to declare an array, how to access its elements and how to use some array properties such as `array.length` to obtain the number of elements in the array.

## 002-hello-properties
Illustrates how to call properties on values an arrays, such as `toUpperCase` on strings and `push`, `pop` and `join` on arrays to add, remove and collect elements from an array.

## 003-weresquirrel-log
Demonstrates some basic things about objects:
+ How to define them
+ How to add properties on the fly
+ How to remove properties dynamically
+ How to check if property is defined in an object
+ How to assign new values to objects
+ How to define an array of objects

## 004-immutability-tests
Illustrates how values such as strings and numbers are immutable while objects are mutable. In the program, a series of equality tests are performed, and it is demonstrated that two objects are different even when they hold the same values.

## 005-objects-as-maps
Illustrates how to use objects as maps, and how to iterate through all the entries of the map.

## 006-array-methods
Illustrates some additional array methods:
+ shift
+ unshift
+ indexOf, lastIndexOf
+ slice

## 007-arguments-object
Illustrate the arguments object: how to obtain the length of the arguments passed to a JavaScript function and how to iterate over them.

## 008-math
Exemplify the use of the `Math` object and some of its methods such as `Math.min` and  `Math.random`.

## e01-sum-of-range
Write a `range()` function that takes two arguments, `start` and `end` and returns an array containing all the numbers from start up to and including end.

Next write a `sum` function that takes an array of numbers and returns the sum of these numbers.

Modify your `range()` function to take an optional third argument that indicates the step value used to build up the array. If no step is given, the array elements go up by increments of one.
For example:
    range(1, 10, 2) -> [1, 3, 5, 7, 9]
    range(5, 2, -1) -> [5, 4, 3 ,2]

## e02-reversing-array
Arrays have a method `reverse`, which changes the array by inverting the order in which its elements appear.

Write two functions 
+ `reverseArray` : takes an array as argument and produces a *new* array that has the same elements in the inverse order.
`reverseArrayInPlace` : modifies the array given as argument in order to reverse its elements.

## e03-list
A common data structure is the list. A list is a nested set of objects, the first object holding a reference to the second, the second to the third and so on.
In JavaScript, this can be described as:
```javascript
var list = {
    value: 1,
    rest: {
        value: 2,
        rest: {
            value: 3,
            rest: null
        }
    }
}
```

An interesting thing about lists is that they can share parts of their structure. For example, if I create two new values `{value: 0, rest: list}` and `{value: -1, rest: list}` they are both independent lists, but they share the structure that makes up their last three elements. In addition, the original list is also still a valid three-element list.

Write a function `arrayToList()` that builds up a data structure like the previous one when given `[1, 2, 3]` as argument, and write a `listToArray()` function that produces an array from a list.

Also write the helper function `prepend()` which takes an element and a list and creates a new list that adds the element to the front of the input list, and `nth()`, which takes a list and a number and returns the element at the given position in the list, or `undefined` when there is no such element.

## e04-deep-comparison
The `==` operator compares objects by identity. But sometimes, you would prefer to compare the values of their actual properties.

Write a function, `deepEquals`, that takes two values and returns true only if they are the same value or are objects with the same properties whose values are also equal when compared with a recursive call to `deepEquals`.

To find out whether to compare two things by identity (use the `===` operator for that) or by looking at their properties, you can use the `typeof` operator. If it produces `object` for both values, you should do a deep comparison. Take into account that:
```
typeof null -> object
```
