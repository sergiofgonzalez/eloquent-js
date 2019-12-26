# 09 &mdash; Hello, Inheritance!
> introducing the class inheritance concepts in JavaScript

## Description

JavaScript's class-like features include an `extends` keyword that lets you derive new classes from existing ones.

```javascript
class derivedClass extends baseClass {
  ...
}
```

The new class inherits properties and methods from the old class. The `extends` method makes the new class prototype to be the baseClass.

In order to invoke the constructor/methods from the superclass you use the `super` keyword.