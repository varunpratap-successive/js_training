//Question->Write a program to remove dupliacte elements from an array

let array = [3, 4, 3, 2, 4, 1, 3];

let newArray = [...new Set(array)];

console.log(newArray);
