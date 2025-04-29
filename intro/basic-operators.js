// Basic Operators
// operands are what you apply operators to.
// 2 + 3
//
// Unary, Binary and Tertiary
//
// Unary operators -> 1 operand
let value = 45;
console.log(-value);
console.log(!value); // find out what this does

// Binary operators: + - / * % **
// 2 ** 3 -> 8
//
// Tertiary operators: ? : -> conditional execution
//
// = assignment operator
// String Concatenation
let greeting = "Hello";
let anotherGreeting = "World";
console.log(greeting + " " + anotherGreeting);

// Assignment: Read on what operator precendence is
// Arrange the operators you've seen in order or precendence
//
// Chain Assignments
let a, b, c;
a = b = c = 2 + 2;

// chained assignments evaluate from right to left

let n = 2;
n = n + 5;
n = n * 2;

// n += 5 -> n = n + 5
// n *= 2 -> n = n * 2
//
let counter = 2;
counter++; // counter = counter + 1
console.log(counter);

let counter1 = 2;
counter--; // counter = counter - 1
console.log(counter1);

// 5++ // error

// ASsignment: Read up on postfix and prefix forms of the increment and decrement
// What is the difference?
//
// let result = 1;
// console.log(2 * ++result) -> 4
//
// let result1 = 1;
// console.log(2 * result1++) -> 2
