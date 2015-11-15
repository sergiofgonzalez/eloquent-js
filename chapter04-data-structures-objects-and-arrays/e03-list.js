'use strict';

function prepend(value, list) {
    return { value: value, rest: list };
}

/* prepend */
var list = prepend(1, null);
console.log('list:', list);

var list2 = prepend(0, list);
console.log('list2:', list2);

function arrayToList(array) {
    var list = null;
    for (var i = array.length - 1; i >= 0; i--) {
        list = prepend(array[i], list);
    }
    return list;
}

/* arrayToList */
console.log('arrayToList([1, 2, 3]):', arrayToList([1, 2, 3]));

/* recursive implementation */
function arrayToList2(array) {
    var list = null;
    function buildList(index) {
       if (index < array.length) {
            buildList(index + 1);
            list = { value: array[index], rest: list };
       }
    }
    buildList(0);
    return list;
}


console.log('arrayToList2([1, 2, 3]):', arrayToList2([1, 2, 3]));
console.log('arrayToList2([]):', arrayToList2([]));
console.log('arrayToList2([\'a\']):', arrayToList2(['a']));

function nth(list, index) {
    var result;
    if (index < 0) {
        return undefined;
    }
    function elementAt(subList, i) {
        if (i < index) {
            elementAt(subList.rest, i + 1);
        } else if (!subList) {
            return undefined;
        } else {
            result = subList.value; 
        }
    }
    elementAt(list, 0);
    return result;
}

/* nth */
var list = arrayToList2([1, 2, 3]);
console.log('nth(list, 0):', nth(list, 0));
console.log('nth(list, 1):', nth(list, 1));
console.log('nth(list, 2):', nth(list, 2));
console.log('nth(list, 3):', nth(list, 3));

function listToArray(list) {
    var result = [];
    function buildArray(subList) {
       if (subList) {
           result.push(subList.value);
           buildArray(subList.rest);
       }
    }
    buildArray(list);
    return result;
}

/* listToArray */
console.log('list:', list);
console.log('listToArray:', listToArray(list));
var list2 = null;
console.log('list2:', list2);
console.log('listToArray:', listToArray(list2));

var list3 = { value: 1, rest: null };
console.log('list3:', list3);
console.log('listToArray:', listToArray(list3));

/* sequential implementation */
function listToArray2(list) {
    var result = [];
    for (var node = list; node; node = node.rest) {
        result.push(node.value);
    }
    return result;
}

console.log('==========================================');
console.log('list:', list);
console.log('listToArray2:', listToArray2(list));
var list2 = null;
console.log('list2:', list2);
console.log('listToArray2:', listToArray2(list2));

var list3 = { value: 1, rest: null };
console.log('list3:', list3);
console.log('listToArray2:', listToArray2(list3));



/* nth book implementation */
function nth2(list, n) {
    if (!list) {
        return undefined;
    } else if (n === 0) {
        return list.value;
    } else {
        return nth2(list.rest, n - 1);
    }
}

console.log('================================');
console.log('list: ', list);
console.log('nth2(list, 0):', nth2(list, 0));
console.log('nth2(list, 1):', nth2(list, 1));
console.log('nth2(list, 2):', nth2(list, 2));
console.log('nth2(list, 3):', nth2(list, 3));



