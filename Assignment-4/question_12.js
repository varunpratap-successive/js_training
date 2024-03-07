//Question->Write a program to display intersection of two array

let array1 = [1, 5, 7, 8, 9];
let array2 = [1, 7, 9];
let intersectedArray = [];

for (let i = 0; i < array2.length; i++) {
  for (let j = 0; j < array1.length; j++) {
    if (array2[i] == array1[j]) {
      intersectedArray.push(array2[i]);
      break;
    }
  }
}
console.log(intersectedArray);
