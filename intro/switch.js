// A switch statement can replace multiple if checks.
//
// It gives a more descriptive way to compare a value with multiple variants
//
// switch (x) {
//  case 'value1':
//    ...
//    break;
//  case 'value2':
//    ...
//    break;
//  default:
//    ...
//    break;
// }
if (x === "value1") {
} else if (x === "value2") {
} else {
}

let a = 2 + 2;

switch (a) {
  case 3:
    alert("Too small");
    break;
  case 4:
    alert("Exactly!");
    break;
  case 5:
    alert("Too big");
    break;
  default:
    alert("I don't know such values");
}

let p = "1";
let b = 0;

switch (+p) {
  case b + 1:
    alert("this runs, because +p is 1, exactly equals b+1");
    break;
  default:
    alert("This doesn't run");
}

// Assignment: Find out what happens when you remove the break statement after every case.
switch (a) {
  case 1:
  case 2:
    alert("One or two");
    break;
  default:
    alert("Two");
}
