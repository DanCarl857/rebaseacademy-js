// Logical Operators
// || (OR), && (AND), ! (NOT), ?? (Nullish coalescing)
//
// || OR
let result = a || b;

let res = a && b;

let answer = !a;

// Assignment: Do the truth tables for AND, OR and NOT
//
// Short circuiting
// alert(1 || 0)
//
let ans = a ?? b;
// let ans = (a !== null && a !== undefined) ? a : b;

// let ans = a || b;
// || return the first truthy value
// ?? return the first defined value
// let x = 1 && 2 ?? 3 // -> syntax error
let x = (1 && 2) ?? 3; // -> 2 assignment: explain why its 2

let num = null;
console.log((num ??= 10));
console.log(num); // -> 10
