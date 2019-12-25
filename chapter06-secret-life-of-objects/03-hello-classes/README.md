# 03 &mdash; Hello Classes
> introduces the three ways in which JavaScript classes can be defined: creating your own *constructors* which sets an object prototype and properties, the constructor function which allows the use of the `new` keyword and the modern JavaScript classes using the `class` keyword.

## Description

A class defines the shape of a type of an object &mdash; it dictactes what methods and properties it has. A given object is called *an instance of a class*.

Prototype are useful for defining properties that all instances of a class share (such as methods). Properties that differ per instance, need to be stored in the objects themselves.

To create an instance of a given class, you have to make an object that derives to the proper prototype, and also, you have to make sure that the properties of that object are the ones it is supposed to have. You typically do that in a constructor.

That is, the following function is a *constructor*:
```javascript
const protoRabbit = {
  speak(line) {
    console.log(`The ${ this.type } rabbit says: '${ line }'`);
  }
};

function makeRabbit(type) {
  const rabbit = Object.create(protoRabbit);
  rabbit.type = type;
  return rabbit;
}
```

In JavaScript, if you put the `new` keyword in front of a function call, the function is treated as constructor. This makes that the previous *constructor* is almost never seen, and instead you find something like:

```javascript
// Constructor
function Rabbit(type) {
  this.type = type;
}

// Assigning methods to the prototype that will
// be shared by all instances of Rabbit
Rabbit.prototype.speak = function(line) {
  console.log(`The ${ this.type } rabbit says: '${ line }'`);
};

const aRabbit = new Rabbit('small');
```

In the statement `Rabbit.prototype.speak` we're accessing a property named `prototype` that by default holds a plain empty object that derives from `Object.prototype`. In this case we're adding new properties to this object, but we could have overwritten it instead.

Note the distinction between:
+ the `prototype` property of objects have
+ the *prototype* of an object (obtained through `Object.getPrototypeOf(obj)`).

The prototype of the `Rabbit` constructor is `Function.Prototype`, while we use the `prototype` property of the `Rabbit` constructor to define the methods that will be shared by all instances of the `Rabbit` class.

### Introducing the class notation
The previous section shows how classes used to be defined in old-school JavaScript, but now, the language features a less awkward notation:

```javascript
class ModernRabbit {
  constructor(type) {
    this.type = type;
  }

  speak(line) {
    console.log(`The ${ this.type } rabbit says: '${ line }`);
  }
}

const killerRabbit = new ModernRabbit('killer');

killerRabbit.speak(`I'm a killer`);
```

Note that this is just *syntactic sugar* over the previous approach, and therefore, you can mix both approaches and do things such as `ModernRabbit.prototype.age` to add an `age` property to the ModernRabbit class.

Like the `function` keyword, the `class` keyword can be used in statements and expressions. When used as an expression it doesn't define a binding, but just produces a constructor as a value, so that you can do things like:

```javascript
const object = new class {
  getWord() {
    return 'hello, word!';
  }
};

console.log(`object.getWord(): ${ object.getWord() }`);
```

### Overriding Derived Properties
When you add a property to an object, the property will be added to the object itself. If there was already a property with the same name on the object's prototype, the latter will be hidden behind the object's own property.

```javascript
// we define a property on the class
ModernRabbit.prototype.teeth = 'small';
console.log(`killerRabbit.teeth: ${ killerRabbit.teeth }`);

// we override the property for a given object: now the prototype's property is hidden
killerRabbit.teeth = 'long, sharp, and bloody';
console.log(`killerRabbit.teeth: ${ killerRabbit.teeth }`);

// for the rest of the objects of that class it is still valid
console.log(`blackRabbit.teeth: ${ blackRabbit.teeth }`);
```