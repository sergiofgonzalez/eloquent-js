/*
    Write a program that prints two numbers, the numbers of cows and
    chickens on a farm, with the words `Cows` and `Chickens` after
    them, and zeros padded before the number so that the numbers
    are always three digits long.
*/

'use strict';

/* Take 1: rush to code */
function printFarmInventory_1(numCows, numChickens) {
    var numCowsStr = String(numCows);
    while (numCowsStr.length < 3) {
        numCowsStr = '0' + numCowsStr;
    }
    console.log(numCowsStr + ' Cows');

    var numChickensStr = String(numChickens);
    while (numChickensStr.length < 3) {
        numChickensStr = '0' + numChickensStr;
    }
    console.log(numChickensStr + ' Chickens');
    console.log('=============================================\n');
}

printFarmInventory_1(3, 5);
printFarmInventory_1(33, 5);
printFarmInventory_1(333, 5);
printFarmInventory_1(3, 55);

/* Take 2: refactor common parts */
function printFarmInventory_2(numCows, numChickens) {
    function printZeroPadded(numAnimals, label) {
        var numAnimalsStr = String(numAnimals);
        while (numAnimalsStr.length < 3) {
            numAnimalsStr = '0' + numAnimalsStr;
        }
        console.log(numAnimalsStr + ' ' + label);
    }
    printZeroPadded(numCows, 'Cows');
    printZeroPadded(numChickens, 'Chickens');
    console.log('==============================================\n');
}

printFarmInventory_2(3, 5);
printFarmInventory_2(33, 5);
printFarmInventory_2(333, 5);
printFarmInventory_2(3, 55);

/* Take 3: Refactoring based on responsibilities */
function printFarmInventory_3(numCows, numChickens) {
    console.log(zeroPad(numCows), ' Cows');
    console.log(zeroPad(numChickens), ' Chickens');
    console.log('==============================================\n');
}

function zeroPad(num, length) {
    length = ((length <= 0)? 3 : length) || 3;
    var numStr = String(num);
    while (numStr.length < length) {
        numStr = '0' + numStr;
    }
    return numStr;
}

console.log('==================== zeroPad tests =');
console.log(zeroPad(5));
console.log(zeroPad(5, -1));
console.log(zeroPad(5, 5));

console.log('==================== printFarmInventory_3 tests =');
printFarmInventory_3(3, 5);
printFarmInventory_3(33, 5);
printFarmInventory_3(333, 5);
printFarmInventory_3(3, 55);
