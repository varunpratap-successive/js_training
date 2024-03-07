//Question->Write a program to return inverse of an array

let array = [3, 2, 1, 0, 4];
let inversedArray = [];

for (let i = 0; i < array.length; i++) {
  let temp = array[i];
  inversedArray[temp] = i;
}
console.log(inversedArray);
