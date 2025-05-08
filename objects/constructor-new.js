let obj = {};
let obj1 = new Object();

function User(name) {
  this.name = name;
  this.isAdmin = false;

  this.sayHi = function () {
    console.log("My name is " + this.name);
  };
}

let user = new User("Jack");
user.sayHi(); // My name is Jack

// function User(name) {
//   // this = {};
//   //
//   // this.name = name;
//   // this.isAdmin = false;
//   //
//   // return this
// }

console.log(user.name); // Jack
console.log(user.isAdmin); // false

// let user = {
//   name: name,
//   isAdmin: false,
// };
