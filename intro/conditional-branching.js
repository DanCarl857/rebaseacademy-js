// Conditional branching: if, ?
//
let year = prompt("In which year was ECMAScript specification published?");

if (year == 2015) {
  alert("You are right");
} else {
  alert("You are wrong");
}

year == 2015 ? alert("Your are right") : alert("You are wrong");

// if (condition) {
//  ...run code here
//  }
//
// if (year == 2015) {
//   alert('You are right')
// }
//
//
// if (1) {
//
// }
let cond = year == 2015;
if (cond) {
  console.log(cond);
}

// if (condition) {
//
// } else {
//
// }

if (year < 2015) {
  alert("Too early...");
} else if (year > 2015) {
  alert("Too late...");
} else {
  alert("Exactly!");
}

// Tenary operator
// let result = condition ? value1 : value2;
//
let age = prompt("age?", 18);

let message =
  age < 3
    ? "Hi, baby"
    : age < 18
      ? "Hello!"
      : age < 100
        ? "Greetings"
        : "What an unusual age";
alert(message);

// Assignments:
// Using if...else,write the code which gets a number via propmt and then shows in alert
// - 1, if the value is greater than 0
// -1, if less than 0
// 0, if equals to 0
