//Question->Write a program to find sum of an array

let array = [1, 2, 3, 5, 6];

const sum = array.reduce((accumulator, currentValue)=> accumulator+currentValue);
  
console.log(sum);

