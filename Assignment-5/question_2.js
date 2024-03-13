//question->Write a program to sort an array of object on the basis of age ({name:"John", age:26})

let inputArray = [
  { name: "Rohit", age: 37 },
  { name: "Virat", age: 35 },
  { name: "Dhoni", age: 42 },
];

inputArray.sort((firstItem, secondItem) => firstItem.age - secondItem.age);
console.log(inputArray);
