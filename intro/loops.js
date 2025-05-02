// Loops:while and for
//
//
// initialization
// while(condition) {
//   // code
//   // increment or decrement
// }
let i = 0;
while (i < 100) {
  console.log(i + 1);
  i++; // increment
}

let x = 100;
while (x > 0) {
  console.log(x);
  x--; // decrement
}

let y = 100;
// while (y < 100) {
//   console.log('....')
//   y--;
// }

do {
  console.log("...");
  y--;
} while (y < 100);

// for (initialization; condition; increment/decrement) {
//
// }
//
for (let index = 0; index < 100; index++) {
  console.log(index + 1);
}

let p = 0;
for (; p < 100; p++) {
  console.log(p + 1);
}

let k = 0;
for (; k < 100; ) {
  console.log(k + 1);
  k++;
}

// continue - skips to the next iteration
// break - stops the loopin

while (1) {
  let input = prompt("What is your age?: ");
  if (!input) break;

  if (age < 30) {
    alert("too small...");
  } else if (age > 31) {
    alert("too much...");
  } else {
    alert("correct...");
    break;
  }
}

// ASsigments: Write a program to print prime numbers from 1 -100
// Write a program that takes a number and prints a staircase up to that level
// eg 4
// *
// **
// ***
// ****
//
// Write a program to check if a number is odd or even
//
// Wrirte a program to print the sum of numbers from 0 - n, n being the number entered
// eg 10 -> ??
//
// Write a program that prints the numbers from 1 to 100.
// But for multiples of 3, print "Fizz" instead of the number,
// for multiples of 5, print "Buzz",
// and for numbers that are multiples of both 3 and 5, print "FizzBuzz".
//
// Write a simple quessing game which has the user guess a selected number. Game
// should only stop when user has gotten the answer right
// hint: get a random number from 1 - 100 -> Math.floor(Math.random() * 100 + 1)
