Eloquent JavaScript
===================

# Chapter 10 - Modules

## 01-functions-as-namespaces
Illustrates how to use functions as namespaces to hide local variables from global scope.
In this example, we create a function that maps a number from 0 to 6 to its corresponding day name (Sunday, Monday, ...).
The function is defined as a variable which holds a function that does the actual mapping.

# 02-functions-isolating-code
Another example of using functions as namespaces. In this case, we define a function that returns the square number of 100 by defining a function and wrapping it in an extra set of parentheses and calling it right away.The result of executing the program is obtaining the value.

# 03-objects-as-interfaces
An example of defining an object as an interface. A variable holding a function is defined, and the function returns an object in which the object methods are declared.
In this example, the object defines a couple of methods that map a day name into its corresponding number and vice versa.

# 04-objects-as-interfaces-exports
An example of defining an object as an interface, but instead of returning the object with the exported methods at the end of the function, what we do is declare a function expression which receives as argument a global object which is initially empty, and then use the syntax `exports.method` to export a method whenever it is needed.

# e01-month-names
Write a simple module similar to `weekDay` that can convert month numbers to names and vice versa. Give it its own namespaces since it will need an internal array of month names and use plain JavaScript without any module loader system.
