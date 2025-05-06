// Object references
//
// One of the fundamental differences of objects versus primitives is that
// objects are stored and copied by reference
let user = { name: "John" };
let admin = user;

admin.name = "Pete";
console.log(user.name); // Pete

let a = {};
let b = a;

console.log(a == b); // true
console.log(a === b); // true

let p = { name: "Jane", age: 26, school: "rebase", game: "COD" };
let q = { name: "Susan" };

console.log(p == q); // false

const gamer = { name: "John" };
gamer.name = "Pete";
console.log(gamer.name); // Pete

for (let key in p) {
  q[key] = p[key];
}

// ASsigment: Differences between methods and functions

let boy = { name: "John", age: 24, likesFood: true };
let roles = { isAdmin: true, isDeleted: false };
let testUsr = {};

// Assignment: Differences between camel case and snake case

Object.assign(testUsr, boy, roles);
console.log(testUsr);
// {
//  name: "John",
//  age: 24,
//  likesFood: true,
//  isAdmin: true,
//  isDeleted: false
// }
//
let clone = Object.assign({}, testUsr);

let usr = {
  name: "Jake",
  sizes: {
    height: 182,
    width: 50,
    dimesions: {
      x: 50,
      y: {
        coordy: 50,
        coordx: 20,
        space: {
          z: 40,
        },
      },
    },
  },
};
usr.sizes.dimesions.y.space.z = 50;
console.log(usr.sizes.height);
let c = Object.assign({}, usr);
