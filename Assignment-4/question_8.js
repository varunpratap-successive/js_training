//Question->Write a program to remove dupliacte elements from an array

let array = [3, 4, 3, 2, 4, 1, 3];

let newArray = [];

for (let i = 0; i < array.length; i++) {
  if (array[i] != undefined) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] == array[j]) {
        delete array[j];
      }
    }
    newArray.push(array[i]);
  }
}
console.log(newArray);
