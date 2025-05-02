// Comparison
// Greater than  a > b
// Less than a < b
// Equals a == b
// Not equals a != b
//
// For all comparisons boolean is the result
let result = 5 > 1;

console.log("Z" > "A"); // ASCII table
console.log("Glow" > "Glee");
console.log("Bee" > "Be");

console.log("2" > 1); // -> true
console.log("01" == 1); // -> true

// Strict equality
// compare both value and data type
console.log("01" === 1); // -> false
console.log("01" !== 1); // -> true
console.log(null === undefined); // false
console.log(null == undefined); // true

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true

console.log(undefined > 0); // false
console.log(undefined < 0); // false
console.log(undefined == 0); // false
