# 01 &mdash; Hello Passing Functions to Functions
> an example that shows how passing functions to functions enable more extensible functions

## Description

The capability of being able to reference a specific instance of a local binding in an enclosing scope is called a *closure*. A function that references bindings from local scopes around it is called a *closure*.

This feature frees the developer from maintaining the lifecycle of bindings defined within functions and enables the creation of functions in some creative ways.

Closures create scopes, so that the values that are wrapped around by the closures are not accesible from the outside, only through the closures:

```javascript
// the saved password will not be available from outside the closure
function checkPassword(savedPassword) {
  return candidatePassword => candidatePassword === savedPassword;
}
```