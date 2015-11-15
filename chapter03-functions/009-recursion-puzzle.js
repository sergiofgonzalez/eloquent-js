/*
    Starting from the number 1, and repeateadly either adding 5
    or multiplying by 3, write a function that given a number
    finds the sequence of such additions and multiplications
    that produce that number.

    For example:
        13 -> 1 * 3 + 5 + 5
        15 -> cannot be reached
*/

'use strict';

function findSolution(target) {
    function find(start, history) {
        if (start === target) {
            return history;
        } else if (start > target) {
            return null;
        } else {
            return find(start + 5, '(' + history + ' + 5)') || find(start * 3, '(' + history + ' * 3)');
        }
    }
    return find(1, '1');
}

console.log('findSolution(13)=', findSolution(13));
console.log('findSolution(15)=', findSolution(15));
console.log('findSolution(24)=', findSolution(24));
console.log('findSolution(7)=', findSolution(7));
console.log('findSolution(25)=', findSolution(25));
