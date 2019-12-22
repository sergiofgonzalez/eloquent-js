# e03-array-to-list
> function that creates a linked list out of an array

## Description

Considering a *list* as a data structure that follows the same pattern:

```javascript
const list = {
  value: 1,
  rest: { 
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};
```

Write a function `arrayToList` that builds up this structure when given an array.
Also write a `listToArray` that produces an array from a list.
Add also a `prepend` helper function that takes an element and a list and adds that element to the front of the given list.
Create an `nth` function that takes a list and a number returns the element at the given position or undefined when there is no such element.