Eloquent JavaScript
===================

# Chapter 5 - Higher-Order Functions

## 001-abstracting-array-traversal.js
Illustrates the different options to abstract the traversal of an array in JavaScript:
+ Using a function that takes the array as an argument and iterates using a counter.
+ Using a function that takes the array and the action to be applied to each item.

It also exemplifies the different ways available in JavaScript to pass functions as arguments:
+ Define a variable which is a function and pass the variable to the function
+ Pass an existing function directly as an argument
+ Define the function inline

It also demonstrates that the function received is not forced to be a particular type (Consumer, Function, etc.).

## 002-higher-order-functions
Illustrates JavaScript syntax to define functions that return functions, and different ways of referencing and invoking that functions.

## 003-apply-method
Illustrates the usage of `apply` to invoke a function with parameters.

## 004-json
Illustrates the usage of `JSON.parse`, `JSON.stringify`, and how to parse and deserialize an external JSON file using Node.JS `require`.

## 005-filter
Demonstrates how to write a `filter` operation for arrays, and also, how to use the `filter` standard method to discard from an array the elements that do not pass the filter test.

## 006-map
Illustrates how to write a `map` function for arrays, and also, how to use the standard `map` method of arrays to transform an array according to a mapping function.

## 007-map
Illustrates how to write a custom `reduce` function for arrays, and also how to use the standard `reduce` method defined on arrays with and without the start value for the accumulator.

## 008-composing-operations
An example of how to compose filter, map and reduce operations to perform queries on a given data set.

## 009-bind
Illustrates the usage of the `bind` function to invoke functions with partially populated arguments.

## 010-higher-order-second-argument
Demonstrates that array related higher-order functions such as `map`, `filter`, `forEach` and `reduce` pass a second argument to the function consisting on the index of the element it is processing.

## e01-flat-map
Use the `reduce` method in combination with the `concat` method to "flatten" an array of arrays into a single array that has all the elements of the input arrays.

## e02-mother-child-age-diff
Using the ancestry data set, compute the average age difference between mothers and children (the age of the mother when the child is born).

Tips:
+ You will need to define an `average` function that computes the average of an array of numbers.
+ You will need to define a `byNameMap` object that associates a person name with its person.

## e03-historical-life-expectancy
Compute and output the average age of the people in the ancestry data set per centry. A person is assigned to a century by taking their year of death, dividing it by 100 and rounding it up:
```javascript
var century = Math.ceil(person.died / 100);
```

For bonus points, write a function `groupBy` that abstracts the grouping operation. It should accept as arguments an array and a function that computes the group for an element in the array and returns an object that maps group names to arrays of group members.

## e04-every-and-some
Arrays also come with the standard methods `every` and `some`. Both take a predicate function that when called with an array element returns true or false. The method `every` returns true when the predicate returns true for all the elements in the array. The `some` method returns true if any of the elements return true.
Both methods only process items if necessary, that is, they implement short-circuiting logic.

Write two functions `every` and `some` similar to the standard array methods.
