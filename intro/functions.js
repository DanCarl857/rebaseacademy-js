// Functions
//
// alert("Hello"), console.log("Hello"), prompt("message")
//
// function functionName(parameter1, paremeter2) {
//    // code here
// }
//
function sum(a, b) {
  return a + b;
}

let s = sum(4, 5);
let p = sum(1, 2);
let q = sum(-9, 0);
sum(20, 0);

function greeting() {
  console.log("Good morning");
}

greeting();

let name = "jack";

function showNewName(n) {
  let name = "John";
  console.log(name);
}

showNewName("Mark");

function showMessage() {
  name = "Susan";
  let message = "Hello " + name;
  console.log(message);
}

showMessage();

function showMessage1(from, text = "no text given") {
  console.log(from + "= " + text);
}

showMessage1("Jack"); // -> Jack= no text given
showMessage1("Mary", "how are you?"); // -> Mary= how are you?

function subtraction(a, b) {
  return a - b;
}
subtraction(5); // 5 - undefined

// function showMessage2(from, text) {
//  text = text ?? 'no text given';
//  ....
// }

function showMessage2(from, text) {
  if (text === undefined) {
    text = "no text was given";
  }
  console.log(from + ": " + text);
}
showMessage2("Mark");
showMessage2("Jane", "hello");

// Functions are first class citizens
function add(a, b) {
  return a + b;
}

function compound(cb, a, b) {
  let s = cb(a, b);
  // do something with s
  console.log(s);
}

compound(add, 4, 5);

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) return false;
  }
  return true;
}

isPrime(2); // true;
isPrime(4); // false

// Assignments:
// Write a function called min to return the minimum number of 2 numbers
// Write a function called pow which does the exponentiation of a, with b
//  e.g pow(2, 3) should return the value of 2 ^ 3
// 5! = 5 * 4* 3 * 2* 1. Write a function called factorial, that returns the factorial of the number passed.
//
