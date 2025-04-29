// DATA TYPES
// A value in JS is always of a certain type.
// There are 8 basic data types in Javascript
//
// NUMBER
// integer and floating point numbers
// Integer - 4, 5, 6, -4, -5
// Floating - 1.2, 3.5, 6.7
//
// // Special numbers
// Infinity, -Infinity. NaN;
// 1/0 -> Infinity
// "hello"/2 -> NaN
//
// Mathematical operations: + - / * %
// 4 % 2 -> 0
// 5 % 2 -> 1
// age = 45
//
//
// BigInt
// Cannot safely represent integer values larger than 2^53 - 1 or less than -(2^52 - 1)
//
//
// Strings
// must be surrounded by quotes
// "hello", 'Jack', `Mark`
let name = "John";
console.log(`My name is ${name}`); // My name is John

// Boolean(logical type)
// truthy or falsy values; -> true or false
let isEven = true;
let isOdd = false;

// anything that represents an empty state is considered false
// 0 -> false
// 9 -> true;
// {} -> false
// {name: "Jack"} -> true

// null - references non-existing objects or null pointers
let obj = null;

// undefined - value is not assigned
let age;
console.log(age); // undefined
let car = undefined;

// string, numbers and boolean variables represent primitive data types
// Objects and Symbols
// Store a collection of data and more complex entities
// Symbols - used to create unique identifiers for objects
//

// typeof
// typeof will return the data type of a variable
// typeof undefined -> undefined;
// typeof 4 -> number
// typeof "foo" -> string
// typeof Symbol("id") -> symbol
// typeof null -> object
// typeof {} -> object
// tyeof alert -> function
