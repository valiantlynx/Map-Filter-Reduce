//var numbers = [3, 56, 2, 48, 5];

//****** */Map -Create a new array by doing something with each item in an array.
//****** */does basicly the same as a foreach loop without the hustle of creating an empy array and pushis stuff into it for each itteration

// function double(x) {
//   return x * 2;
// }
// const newNumber = numbers.map(double);
// console.log(newNumber);

//****** */Filter - Create a new array by keeping the items that return true.

// const newNumber = numbers.filter(function (x) {
//   return x > 10;
// });

// console.log(newNumber);

//***** */Reduce - Accumulate a value by doing something to each item in an array.

// const newNumber = numbers.reduce(function (accumulator, currentNumber) {
//   console.log("accumulator = " + accumulator);
//   console.log("currentNumber = " + currentNumber);
//   return accumulator + currentNumber;
// });

// console.log(newNumber);

//****** */Find - find the first item that matches from an array.

// const newNumber = numbers.find(function (num) {
//   return num > 10;
// });
// console.log(newNumber);

//****** */FindIndex - find the index of the first item that matches.

// const newNumber = numbers.findIndex(function (num) {
//   return num > 10;
// });
// console.log(newNumber);

import emojipedia from "./emojipedia";

const description = emojipedia.map(function (x) {
  const meaning = x.meaning.substring(0, 101);

  return meaning;
});

console.log(description);
