//Question->Write a program to reverse a string ("Hello John" => "olleH nhoJ")

let originalstr = "Hello John";
let numArray = originalstr.split(" ");
let outputArray = [];

for (let j = 0; j < numArray.length; j++) {
  let str = numArray[j];

  let splitStr = str.split("");

  let left = 0;
  let right = splitStr.length - 1;

  while (left < right) {
    let temp = splitStr[right];
    splitStr[right] = splitStr[left];
    splitStr[left] = temp;

    left++;
    right--;
  }
  let reversedStr = splitStr.join("");
  outputArray.push(reversedStr);
}

let finalArray = outputArray.join(" ");

console.log(finalArray);
