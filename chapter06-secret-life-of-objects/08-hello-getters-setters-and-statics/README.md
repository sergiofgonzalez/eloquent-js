# 08 &mdash; Hello Getters, Setters and Statics
> illustrates how to define getters, setters and static properties in JavaScript

## Description

You create getters and setters by writing `get`/`set` in front of a method name that identifies a property of the object.

```javascript
class Temperature {
  constructor(celsius) {
    this.celsius = celsius;
  }

  get fahrenheit() {
    return this.celsius * 1.8 + 32;
  }

  set fahrenheit(value) {
    this.celsius = (value - 32) / 1.8;
  }
}

const temp = new Temperature(22);
console.log(temp.fahrenheit); // getter
console.log(temp.celsius);    // property
```

Sometimes you want to attach some properties directly to your constructor function, rather than to the prototype. Such methods won't have access to a class instance properties but can be useful for things such as provide additional ways to create instances, or to count how many instances of a given class there is.

This can be done by prefixing the keyword `static` before their name. You can invoke this classes via the name of the class:

```javascript
class Temperature {
  constructor(celsius) {
    this.celsius = celsius;
  }

  get fahrenheit() {
    return this.celsius * 1.8 + 32;
  }

  set fahrenheit(value) {
    this.celsius = (value - 32) / 1.8;
  }

  static fromFahrenheit(value) {
    return new Temperature((value - 32) / 1.8);
  }
}

const hotTemp = Temperature.fromFahrenheit(100);
console.log(hotTemp.celsius);
```