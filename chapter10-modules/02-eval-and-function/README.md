# 02 &mdash; `eval` and `Function`
> basic illustration of `eval` and `Function` that allows you to run arbitrary code passed as a string.

## Description

JavaScript provides two mechanisms that allow you to pass a string of code and run it as part of the current program.

The first mechanism is `eval`, which will execute a string in the *current* scope. As such, this breaks some of the properties that scopes normally have, such as predicted variable bindings.

```javascript
function arbitraryExecution(codeAsString) {
  eval(codeAsString);
}

arbitraryExecution(`var x = 1; console.log(x)`);
```

The second mechanism is the `Function` constructor, which allows you to pass a string containing a comma-separated list of argument names and s string containing the function body.

```javascript
let plusOne = Function('num', 'return num + 1');
console.log(plusOne(4));
```
