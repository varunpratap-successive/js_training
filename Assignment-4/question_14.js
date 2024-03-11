// Question->Write a program to reverse an array

let arr = [1,2,3,4,5];
let left = 0;
let right = arr.length - 1;

while (left < right) {
  let temp = arr[right];
  arr[right] = arr[left];
  arr[left] = temp;

  left++;
  right--;
}

console.log(arr);
