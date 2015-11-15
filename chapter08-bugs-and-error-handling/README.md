Eloquent JavaScript
===================

# Chapter 8 - Bugs and Error Handling

## 01-strict-mode
Demonstrates some of the capabilities of the `'use strict';` such as:
+ use variables in a function without having been declared.
+ use this in inner functions called within methods.
+ declare several parameters with the same name in a function.

## 02-vector-libtest
Defines the `Vector` type that represents a vector in 2D space and a plus operation to add vectors.

# 03-exceptions
Demonstrates how to throw an exception of type `Error` with a custom message to stop execution when an unexpected problem occurs.

# 04-try-catch
Demonstrates how to implement a try-catch block in JavaScript to catch an exception.

# 05-finally
Illustrates the use of finally in certain situation on which you have to execute some code independently of whether an exception is thrown or not.

# 06-exceptions-hierarchy
Illustrates how you can selectively catch certain types of exceptions by creating an inheritance hierarchy that extends from Error and use `instanceof` to ask for the specific type of exception.

# 07-assertions
Illustrates how to create an exception type to detect assertion errors and how to provide a function that throws such an exception when an assertion conditions is not met.

# e01-retry
Say you have a function primitiveMultiply that in 50% of cases multiply two numbers, and in the other 50% of the cases raises and exception of type `MultiplicatorUnitFailure`. Write a function that wraps this clunky function and just keeps trying until a call succeeds, after which it returns the result.
Make sure you handle only the exceptions you're trying to handle.

# e02-locked-box
Consider the following object:
```javascript
    var box = {
        locked: true,
        unlock: function() { this.locked = false; },
        lock: function() { this.locked = true; },
        _content: [],
        get content() {
            if (this.locked) {
                throw new Error("Locked!!");
            }
            return this._content;
        }
    };
```

It is a box with a lock. Inside is an array, but you can get at it only when the box is unlocked. Directly accessing the `_content` property is not allowed.
Write a function called `withBoxUnlocked` that takes a function value as argument, unlocks the box, runs the function, and then ensures that the box is locked again before returning, regardless of whether the argument function returned normally or threw an exception.
