//Question->Write a program to return inverse of an array
//Inverse of an array means if the array elements are swapped with their corresponding indices and the array is called mirror-inverse if it’s inverse is equal to itself.
let array = [3, 2, 1, 0, 4];
let inversedArray = [];

array.forEach((element, index) => {
  inversedArray[element] = index;
});
console.log(inversedArray);
