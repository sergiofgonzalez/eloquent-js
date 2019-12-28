# 03 &mdash; ECMAScript modules
> illustrates ES modules in Node.js

## Description

In 2015, the JavaScript standard introduced the ES modules. This system introduces its own, different approach to Node.js modules (which is based in CommonJS).

In this system, the main concepts of dependencies and insterfaces remain the same, but the details differ. For example, the notation is now integrated into the language and you don't need to call a function like `require` and instead use the JavaScript keywords `import` and `export`.

```javascript
// making a few modules available in the current scope
import ordinal from 'ordinal';
import { days, months } from 'date-names';

...
// exporting functionalities from the current scope
export function formatDate(date, format) { /* ... */ }
```

The `export` keyword is used to export things. It may appear in front of a function, class or binding definition (`let`, `const` or `var`).

An ES module's interface is a set of *named bindings*. For example, in the previous sample code, the module binds the `formatDate` function to a function. When you import from another module, you import the *binding*, not the value, which means an exporting module change the value of the binding at any time, and the modules that import it will see its new value.

When there's a binding named `default`, it is treated as the module's main exported value. When you do an import like:

```javascript
import ordinal from 'ordinal';
```

you get the default binding (*the one tagged as default*). The module can still export other bindings, but you will have to import them explicitly.

To create a default export you write `export default` before an expression, function declaration or class declaration:

```javascript
export default ['Winter', 'Spring', 'Summer', 'Autumn'];
```

Imported bindings can be renamed using the keyword `as`:

```javascript
import { days as dayNames } from 'date-names';
```

## ES Modules and Node.js CommonJS modules
ES modules are the official standard format to package JavaScript code for reuse. Modules are defined using a variety of `import` and `export` statements.

Node.js already fully supports ES modules, but provide limited interoperability between this standard module definition and CommonJS.

In order to use this module definition you either have to use the extension `.mjs` or `.js` and provide the nearest `package.json` with a top-level field `"type": "module"`.