// Objects
// store keyed collections of various data and more complex entities
let user = new Object();
// let user = {}
user = {
  name: "John",
  age: 30,
  "likes birds": true,
};

// access properties using dot notation
console.log(user.name); // John
console.log(user.age); // 30

user.isAdmin = true;
delete user.age;

console.log(user.age);

// bracket notation
user["likes birds"] = false;
user["age"] = 56;

let key = prompt("What do you want to know about our object? ");
alert(user[key]);

// Computed properties
let fruit = prompt("Which fruit to buy?", "apple");

let bag = {
  [fruit]: 5,
};
alert(bag.apple); // 5

// let bag = {}
// bag[fruit] = 5;

let fruits = "apple";
let bag1 = {
  [fruits + "Computers"]: 5, // bag1.appleComputers = 5
};

function makeUser(name, age) {
  return {
    name: name,
    age: age,
  };
}

let user1 = makeUser("John", 23);
console.log(user1.name);

// Assigments: Difference between paramenters and arguments

// return {
//  name,
//  age
// }
let obj = {
  0: "test",
};
console.log(obj["0"]);
console.log(obj[0]);

console.log(user1.school === undefined);

console.log("school" in user1); // false
console.log("age" in user1); // true

for (key in user1) {
  console.log(user1[key]);
}

// for (let prop in obj) {}
//
let codes = {
  49: "Germany",
  234: "Nigeria",
  237: "Cameroon",
  1: "USA",
};
for (let code in codes) {
  console.log(code); // 1, 49, 234, 237
  console.log(codes.code); // USA, Germany, Nigeria, Cameroon
}

// Assignments
// Write the code, one line for each action
// create an empty oject called user
// add the property name with value John
// add the propery surname with value Smith
// Change the value of the name to Pete
// remove the property name from the object
//
// Write a function call isEmpty that returns true if an object has no property or false otherwise
//
// we have an object salaries
// let salaries = {
//  John: 100,
//  Ann: 160,
//  Pete: 130
// }
// Write a function that takes this object and returns the sum of all salaries
//
//
// Write another function that multiplies all salaries by 3 and returns the new object
//
