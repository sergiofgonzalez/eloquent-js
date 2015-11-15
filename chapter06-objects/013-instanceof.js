'use strict';

function Vehicle(make, model, numWheels) {
    this.make = make;
    this.model = model;
    this.numWheels = numWheels;
}

Vehicle.prototype.move = function() {
    console.log('The', this.make, this.model, 'is moving on its', this.numWheels, 'wheels');
}


function Car(make, model) {
    Vehicle.call(this, make, model, 4);
}

Car.prototype = Object.create(Vehicle.prototype);

function Bike(make, model) {
    Vehicle.call(this, make, model, 2);
}

Bike.prototype = Object.create(Vehicle.prototype);

var mercedesA180 = new Car('Mercedes', 'A180');
mercedesA180.move();

console.log(mercedesA180 instanceof Car);
console.log(mercedesA180 instanceof Vehicle);
console.log(mercedesA180 instanceof Bike);
