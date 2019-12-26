'use strict';

/* getters */
const varyingSize = {
  get size() {
    return Math.floor(Math.random() * 100);
  }
};

// feels like a property, but hides a method call
console.log(varyingSize.size); 
console.log(varyingSize.size);

/* a more comprehensive example */
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

const temp = new Temperature(22);
console.log(temp.fahrenheit); // getter
console.log(temp.celsius);    // property


const hotTemp = Temperature.fromFahrenheit(100);
console.log(hotTemp.celsius);