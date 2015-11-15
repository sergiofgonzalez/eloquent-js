Eloquent JavaScript
===================

# Chapter 3 - Functions

## 001-hello-function-def
Demonstrates how to define functions as statements using the `function` keyword and how to assign it to variables that are later used to invoke the function.

## 002-hiding-global-vars-in-functions
Illustrates how defining a variable within a function with the same name as a global variable hides the global one.

## 003-functions-within-functions
Demonstrates how a function can contain other function definitions, and that you can use variables defined outside this functions.
In the example, it is defined a `landscape` function that declares two inner functions `flat` and `mountain` that print on screen flat and mountain landscapes.

## 004-function-declaration-notation
Illustrates how to define functions using the `function` keyword so that you don't need to assign it to a variable.

## 005-optional-arguments
Illustrates how to define a function with two arguments, which the second one is optional and take a default value when not present.
JavaScript does not enforce calling functions with the specific number and types expected, so you can exploit that fact to your beneft.

## 006-hello-closure
Very simple closure example in which you define a function that receives an argument and return a function that wraps that value defined. It is demonstrated how you can call that function after the function has been initialized and still returns the expected value.

## 007-multiplier-closure
Another example of closure in which you define a multiplier and divider functions that receive an argument when defined and return a function that also receive a parameter.

## 008-power-recursion
Demonstrates how to implement the `power` function using recursion.

## 009-recursion-puzzle
A more elaborate example of recursion on which Starting from the number 1, and repeateadly either adding 5 or multiplying by 3, write a function that given a number finds the sequence of such additions and multiplications that produce that number.

For example:
```
    13 -> 1 * 3 + 5 + 5
    15 -> cannot be reached
```

In the solution, you must define a function that includes an inner function that is the one that starts the chain of recursive calls until the number is found.

## 010-farm-inventory
A simple example consisting in creating a program that prints two numbers, the number of cows and chickens on a farm, with the words `Cows` and `Chickens` after them, and zeros padded before the number so that the numbers are always three digits long.
The example illustrates the different ways in which functions can be used: to refactor and reuse code and to assign responsibilities to certain pieces of the program.

## e01-minimum
Write a function `min` that takes two arguments and returns their minimum.

## e02-recursive-even
Implement a function `isEven` which accepts a zero or positive integer and returns true if the argument passed is even and false if it is odd.
The implementation uses a recursive definition:
+ Zero is even
+ One is odd
+ N is even if N-2 is even.

## e03-char-counting
Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase Bs are found in the string.
Write a function called countChar similar to the previous one but that accepts a second argument that identifies the char to be counted.
Rewrite countBs using this function.
