Eloquent JavaScript
===================

# Chapter 9 - Regular Expressions

## 01-hello-regex
Illustrates how to define regular expressions using both the `RegExp` constructor and the notation with forward slashes `/`.

## 02-testing-for-matches
Illustrates how to use the `test` method to test for matches in a string to a given regular expression.
```javascript
    /regex/.test('string');
```
## 03-exec-for-matches
Illustrates how to use `exec` method to obtain additional information on test matching. Includes examples of:
+ simple matching
+ matching with subexpressions
+ matching with groups

## 04-date
Illustrates basic operations on the `Date` type.

## 05-string-to-date
Implementation of a simple function that converts a string to a date.

## 06-regex-boundaries
Illustrates how to use the `\b` to enforce that a regular expression occurs in a particular position of the string.

## 07-choice-patterns
Illustrates how to use the `|` to express a choice between more than two patterns.

## 08-replace
Illustrates the use of `replace` from the simplest example (replacing a string by another one) to using a regex as a replacement string, to identifying matched groups or using a function as a second argument to replace.

## 09-strip-comments
Illustrates how to strip comments from JavaScript code by using non-greedy repetition operators.

## 10-dynamic-regex
Illustrates how to build dynamic regular expressions using the `RegEx` constructor function. It also gives an example of how to escape strings that will be used in regular expressions so that they are correctly interpreted.

## 11-search-and-indexof
Illustrates how `indexOf` does not work with regular expressions, but that you can use the `search` method for that purpose.

## 12-last-index-property
Introduces the internals of the pattern object, with the `lastIndex` property.It also demonstrates some of the pitfalls of reusing a regex patterns with multiple strings and how `match` works when using the global modifier.

## 13-loop-over-matches
Illustrates how to find all matches of a given regular expression pattern found in a string sequentially.

## 14-ini-file-parser
A simple program that parses and INI file with a global section and subsections.

## e01-regexp-golf
Code golf is a term used for the game of trying to express a particular program in as few characters as possible. Similarly, regexp golf is the practice of writing as tine a regular expression as possible to match a given pattern, and only that pattern.
For each of the following items, write a regular expression to test whether any of the given substrincs occur in a string. The regular expression should match only strings containing one of the substrings described. Do not worry about word boundaries unless explicitly mentioned. When your expression works, see whether you can make it any smaller.
1. car and cat
2. pop and prop
3. ferret, ferry and ferrari
4. Any word ending in ious
5. A whitespace character followed by a dot, comma, colon or semicolon.
6. A word with six letters or longer
7. A word without the letter e

## e02-quoting-style
Imagine you have written a story and used single quotation marks throughout to mark pieces of dialogue. Now you want to replace all the dialogue quotes with double quotes while keeping the single quotes used in contractions like aren't.
Think of a pattern that distinguishes these two kinds of quote usage and craft a call to the `replace` method that does the proper replacement.

## e03-numbers-again
A series of digits can be matched by the simple regular expression `/\d+/`. Write an expression that matches only JavaScript style numbers. It must supports an optional minus or plus sign in front of the number, the decimal dot, and exponent notation `5e-3` or `1E10`.
Also note that it is not necessary to have digits in front or after the dot, but the number cannot be the dot alone.

# e04-imdb-cast
Parser for parsing the cast when copied from imdb cast.
