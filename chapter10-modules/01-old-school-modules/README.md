# 01 &mdash; Old-school Modules
> modules before ECMAScript modules

## Description

Modules are an essential mechanism for keeping the growth of your programs in line so that they don't become a *big ball of mud*.

A module is a piece of program that specifies which other pieces it relies on and which functionality if provides for other modules to use (its interface). The relations between modules are called *dependencies*.

Being able to consume modules seamlessly is paramount for the success of a module system. In JavaScript, the package system is provided by NPM.

Before modules were properly introduced into the JavaScript programming language, the only way to provide some isolation between interface and implementation were using techniques like the one below:

```javascript
// IIFE - Immediately Invoked Function Expression
const weekDay = function() {
  // names is hidden from the outside because it's defined within a function
  const names = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  // the return statement exposes the module's interface
  return {
    name(number) { return names[number]; },
    number(name) { return names.indexOf(name); }
  };
}(); // note how we immediately invoked weekDay function

weekDay.name(0);          // => Sunday
weekDay.number('Monday'); // => 1
```