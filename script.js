// var, let, const -- keywords for declaring a variable
var name = "Sandra";
let age = 25;
const isMarried = false;

let myLocation = {
  city: "New York",
  country: "USA",
  street: {
    houseNumber: 28,
    streetName: "Adeleke street",
    isSecured: true,
  },
  lounges: ["Xtreme lounge", "Recreational lounge", "ATP lounge"],
};

// console.log(name);
// console.log(age);
// console.log(isMarried);
// console.log(myLocation);

// console.log(myLocation.street.houseNumber);
// console.log(myLocation.lounges);

// using typeof to get the data type of the object;
// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof isMarried);
// console.log(typeof myLocation);
// console.log(typeof myLocation.city);
// console.log(typeof myLocation.street);

// Array
let colors = [
  "blue",
  "yellow",
  "brown",
  "gray",
  "black",
  "white",
  "orange",
  "pink",
  ["cyan", "green"],
];
// console.log(colors);
// console.log(colors[5]);
// console.log(colors[0]);
// console.log(colors[7]);
// console.log(colors[8][1]);

const randomItems = [
  "rice",
  true,
  23,
  "white",
  { age: 40, state: "NY" },
  ["nigeria", "ghana", "SA"],
];

// console.log(randomItems);
// console.log(randomItems);
// console.log(randomItems[4].age);
// console.log(randomItems[4].state);
// console.log(randomItems[4]);

// Arithmetic Operations - number data type
let first = 20;
let second = 5;
let third = 10;
let fourth = "20";

// Addition
let result = first + second;
let subResult = first - third;
let mulResult = second * third;
let divResult = third / second;

console.log(first > second);
console.log(first < third);
console.log(first != third);
console.log(second <= third);
console.log(third >= 11);
console.log(first == fourth);
// 20 == 20
console.log(first === fourth);
// 20 === "20"
console.log(15 != "15");
console.log(15 !== "15");
// ===check both values and types

// console.log("Addition: ", result);
// console.log("Subtraction: ", subResult);
// console.log("Multiplication: ", mulResult);
// console.log("Division: ", divResult);

// String Concatenation

// number + number = number - Addition
// string + string = string - Concatenation
// string + number = string - Concatenation
// number + string = string - Concatenation

let firstName = "Caleb";
let lastName = "Anthony";
let fullName = firstName + " " + lastName;

let cohort = 6;
let num = 20;

// let student = "I am a student of cohort" + " " + cohort;
// let numberOfStudents = num + " students";

let ayoolaAge = 20;
let muizAge = "thirty";

// console.log(fullName);
// console.log(typeof fullName);
// console.log(student);

// const diffInAge = 5 - "i am a boy";

// console.log("This is their diff in age: " + diffInAge);
// console.log(typeof diffInAge);

let year = 5;

// console.log("This is my account of " + 2 + "years");
// console.log(`This is my account of ${year} year`);
// console.log(`I am a student of cohort ${cohort}`);

// let a = 10;
// a += 5;
// // a = a + 5;
// // a = 10 + 5 = 15
// // a = 15
// console.log("a+=5 results: " + a);

// a -= 5; // a = a - 5;
// // a = 15 - 5 = 10
// // a = 10
// console.log("a-=5 results: " + a);

// a *= 5; // a = a * 5;
// // 50
// console.log("a*=5 results: " + a);

// a /= 5; // a = a / 5;
// // 50/5 = 10
// console.log("a/=5 results: " + a);
