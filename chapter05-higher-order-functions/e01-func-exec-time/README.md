# e01 &mdash; Function Execution Time
> an example that shows how to use higher-order functions to wrap a function in call to obtain execution time

## Description

Write a module that exposes a higher-order function `timedExecution` that accepts a fuction whose execution will get wrapped in calls to `process.hrtime.bigint()` to display how long the execution took in nanoseconds.