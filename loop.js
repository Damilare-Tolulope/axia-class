console.log("Loops!!!");

// let num = 10;
// console.log(num);

// num++;
// num += 1;
// let a;

// a += 5 //a = a + 5
// console.log(a)
// // 10 + 1
// console.log(num); //num

// For Loop
// for (initialization, condition, increment) {
//      block of codes/statements
// }

// console.log("Hi welcome!");

console.log(typeof "3");
console.log(typeof 3);
console.log(3 == "3"); //only checks for value
console.log(3 === "3"); //checks for value and type;

for (let i = 0; i < 5; i++) {
  if (i === 3) {
    console.log("This is 3");

    break;
  }
  console.log(i);
}

let value = 0;
for (value; value < 10; value++) {
  console.log(`this is number: ${value}`);
}

// While Loop
// initialization;
// while (condition) {
//     block of codes/statements;
//      increment;
// }

let count = 10;
while (count > 0) {
  console.log("While loop count: " + count);

  if (count === 5) {
    console.log("This is 5 and its the end of the loop");
    break;
  }

  count--;
}

// Do-while Loop
// initialization
// do {
//     block of codes/statements;
//      increment
// } while (condition);

let val = 5;

do {
  console.log(val);
  val++;
} while (val < 5);

console.log(5 === "5"); //will check for both the values and data type
console.log(5 == "5"); //will check for the values alone
