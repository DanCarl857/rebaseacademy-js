// Most times JS needs work with information
// online shop - goods being sold and a shopping cart
// chat application - users, messages and more
//
// a variable - named storage for data.
// ES5 we use var.
//
let message;
message = "This is a new message";

// alert("This is a new message");
console.log(message);

let user = "John",
  age = 25,
  message1 = "Hello";
// let user = 'John'
// let age = 25
// let message1 = 'Hello'
//
//
//
let hello = "hello";
message = hello;
console.log(message); // -> "hello"

// Rules for naming variables
// 1. The name must contain only letters, digits or symbols
// 2. The first character must not be a digit
// 3. It cannot be a reserved word
//
// Bad examples
// let 4times = "four times";
// let first name = "John";
//
//
// Good examples
// let times4 = "four times";
// let first_name = "John";
//
// Variable names are case sensitive
// let AGE = 34 is not the same as let age = 34
// let 我 = '...';
//
// Reserved words are words used by the language itself
// for example let, const, function, for, while, if.....
// ASsignment: List of reserved words.
//
// let let -> invalid, let return = 0 -> invalid
//
// Contants -> unchanging variables
const height = "5.4";
height = "6.1";

const COLOR_RED = "#ff0000";
const COLOR_GREEN = "#00ff00";
const COLOR_BLUE = "#0000ff";

// Some good rules to follow
// - use human readable names like userName, firstName
// - avoid abbreviations like let a, or let b
// - make names as descriptive as possbile.
//
// EXERCISE
// Declare 2 variables: name and age
// assign value "Jack" and 34
// copy the value of name into admin
// show the value of name, admin and age in the console.
// hint: you show values in the console using console.log
let name, age1;
name = "Jack";
age1 = 34;
let admin = name;
console.log(name, admin, age);
