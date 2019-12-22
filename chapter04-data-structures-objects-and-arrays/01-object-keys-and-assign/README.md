# 01-object-keys-and-assign
> Demonstrates simple usage of `Object.keys` and `Object.assign`.

## Description

Simple example that illustrates the usage of `Object.keys` and `Object.assign`.
+ `Object.keys(obj)` &mdash; returns an array with the properties of the object
+ `Object.assign(obj1, obj2)` &mdash; copies the properties of `obj2` into `obj1`. This operation does not perform a deep copy (i.e. the inner objects found in `obj2` will be aliased, that is they will point to the same object).