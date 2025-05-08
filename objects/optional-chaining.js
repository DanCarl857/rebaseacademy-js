// Optional chaining ?
//
let user = {};
console.log(user.address.street);

console.log(user.address ? user.address.street : undefined);

// undefined.street -> error
//
console.log(
  user.address ? (user.address.street ? user.address.street.name : null) : null,
);

console.log(user.address && user.address.street && user.address.street.name);

console.log(user?.address?.street);

// optional chaining: value?.prop
// value must be declared
let u = null;
console.log(u?.address); // undefined
console.log(u?.address.street); // undefined

let userAdmin = {
  admin() {
    console.log("I am admin");
  },
};

let userGuest = {};

userAdmin.admin?.(); // I am admin
userGuest.admin?.(); // nothing happens

let key = "firstName";

let user2 = {
  firstName: "John",
};

let user3 = null;

console.log(user2?.[key]); // John
console.log(user3?.[key]); // undefined

delete user2?.name; // delete user.name if user exists

let boxer = null;
boxer?.name = "Jack"; // Error
