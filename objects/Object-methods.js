// Object methods - this
//
let user = {
  name: "John",
  age: 30,
};

user.sayHi = function () {
  console.log("hello");
};

user.sayHi();

let user1 = {
  name: "Jane",
  age: 30,
  sayHi: function () {
    console.log("hello");
  },
};

user = {
  sayHi() {
    console.log(`${this.name} says hi`);
    console.log(this.name);
  },
};

let admin = user;

admin.sayHi();

// this is not bound.
function greetings() {
  alert(this.name);
}

let user2 = { name: "Jack" };
let admin1 = { name: "Admin" };
user2.f = greetings;
admin1.f = greetings;

user2.f(); // Jack
admin1.f(); // Admin

const arrowSayHi = () => console.log("Hello");

let gamer = {
  firstName: "Rayna",
  sayHi() {
    let arrow = () => console.log(this.firstName);
    arrow();
  },
};

gamer.sayHi();
