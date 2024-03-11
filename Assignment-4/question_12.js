//Question->Write a program to display intersection of two array

let array1 = [1, 5, 7, 8, 9];
let array2 = [1, 7, 9];
let intersectedArray = [];

let flagEnter = false;

array2.forEach((element1) => {
  flagEnter = false;
  array1.forEach((element2) => {
    if (element1 == element2 && flagEnter == false) {
      intersectedArray.push(element2);
      flagEnter = true;
    }
  });
});
console.log(intersectedArray);
