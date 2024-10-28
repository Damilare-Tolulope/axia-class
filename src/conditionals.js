console.log("Conditional statements!!");

let height = 170;

if (height > 140) {
  console.log("You are tall");
} else {
  console.log("You are short");
}

let age = 24;

if (age > 50) {
  console.log("You are old");
} else if (age > 40) {
  console.log("You are middle-aged");
} else if (age > 20) {
  console.log("You are young");
} else if (age > 14) {
  console.log("You are a teenager");
} else {
  console.log("You are a kid");
}

let today = "sunday";

if (today == "sunday") {
  console.log("Going to church");
} else {
  console.log("Go to the field");
}

// this is a conditional statement to check for temperature
let temp = 35;

if (temp > 70 && temp < 90) {
  console.log("It is very hot");
} else if (temp >= 50 && temp <= 60) {
  console.log("It is cool");
} else {
  console.log("It is cold");
}

// 55 >= 50 - true
// 55 <= 60 - true
// true && true - true

// && - logical AND - (*), 1-true, 0-false
// || - logical OR - (+)

// AND
// 1 && 1 = 1
// 1 && 0 = 0
// 0 && 1 = 0
// 0 && 0 = 0

// OR
// 1 || 1 = 1
// 1 || 0 = 1
// 0 || 1 = 1
// 0 || 0 = 0

// if(condition){
//      code to be executed if condition is true
// }else if(condition2) {
//      code to be executed if condition2 is true
// } else {
//      code to be executed if condition and condition2 are false
// }

// for (let i = 0; i < 5; i++) {
//   console.log("Number: " + i);
// }
