// Question->Write a program to reverse an array

let arr = [1, 2, 3, 4, 5];
let newArray = [];
for (let i = arr.length - 1; i >= 0; i--) {
  newArray.push(arr[i]);
}
arr = [...newArray];
console.log(arr);
