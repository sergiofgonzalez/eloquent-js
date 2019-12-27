# 02 &mdash; Recursion
> basic recursion

## Description

A function that calls itself is called *recursive*.

Many algorithms can be expressed using recursion. A recursive algorithm must feature:
1. a non-recursive *base case*
2. must converge &mdash; on each recursive invocation we should be closer to the *base case*
3. must conform to the principle of induction &mdash; it has to be possible to prove that if the algorithm works for the *nth* case it works for the *n+1 th* case as well.

### Mechanisms of Recursion

There are certain types of problems that can be easily solved using recursion.

These problems typically feature:
+ an execution cycle &mdash; similar to a loop, on which certain statements are executed several times until the *base case* is reached.
+ a stack of states &mdash; each time a recursive call is done, the state is either changed or initialized for the function. Those states are recovered once the *base case* is reached in order to return the value.

For example:
Compute the maximum distance can a Jeep travel in the jungle assuming there are N barrels of gas available, and the Jeep can transport one barrel in the tank, and another one in the trunk. With each barrel, the Jeep can travel *d* distance.

The solution to this problem is clearly recursive. It can be solved by understanding that the distance the Jeep can travel with N barrels is the distance needed to carry the barrels as far as possible plus the distance it can travel with N - 1 barrels:

That is:
```
For n barrels, the Jeep can travel:
dist(n) = d, if n == 1,
        = (d / (2 * n - 3)) + dist(n - 1), if n > 1
```

Apart from problems that can be easily solved with recursion, there are data structures that are also recursive in nature, like the *lists*:
```javascript
const list = {
  value: 1,
  rest: { 
    value: 2, rest: {
      value: 3:
      rest: null
    }
  }
};
```

Note that in general, loops are more efficient than recursive invocations. Therefore, recursion should be used when its expresiveness makes it the best choice despite not being the quickest possible implementation.

### Backtracking
