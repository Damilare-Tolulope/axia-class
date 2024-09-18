// functions
function greet(name) {
  console.log(`Hello, ${name}!`);
}

function welcome() {
  console.log("Welcome to our website!");
}

greet("Sandra");
greet("Fawaz");
greet("Hilary");
welcome();

// function to multiply 2 values
function multiplyValues(firstNum, secondNum) {
  return firstNum * secondNum;
}

function addValues(firstNum, secondNum) {
  return firstNum + secondNum;
}
console.log(addValues(5, 10));
console.log(addValues(20, 50));

let res = multiplyValues(10, 5);
console.log(res);

// anonymous function
let cube = function (a) {
  return a * a * a;
};

console.log(cube); //it will make reference to the function block
console.log(cube(3)); //it will call the function

function squareOne() {
  var num1 = 100;
  let num2 = 150;
  const num3 = 250;

  return num1;
}
console.log(squareOne());
// console.log(`num1: ${num1}`);
// console.log(`num2: ${num2}`);
// console.log(`num3: ${num3}`);

// Arrow function
let wel = (name) => {
  console.log(`Welcome to ${name} website`);
};

wel("Gabriel");
wel("JohnMark");
wel("Anthony");
wel("Ibraheem");

// self calling function
(function () {
  console.log("This is a self calling function");
})();

(function (age) {
  console.log(`He is ${age} years old!`);
})(14);

(function (age) {
  console.log(`He is ${age} years old!`);
})(23);

const person = {
  name: "Gabriel",
  age: 25,
  address: {
    street: "123, some-street",
    city: "Lagos",
    country: "Nigeria",
  },
};

console.log(
  `My name is ${person.name}, I live in ${person.address.street} ${person.address.city} ${person.address.country} and I am ${person.age}`
);

function welcome(name) {
  console.log("Welcome to my website, " + name);
}
welcome("Kehinde");

const welcomeStudents = (name) => {
  console.log(name + " welcomes all students!");
};
welcomeStudents("Theo");
