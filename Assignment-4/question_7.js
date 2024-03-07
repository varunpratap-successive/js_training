//Question7->Write a program to find index of duplicate elements in an array

let inputArray = [1, 2, 3, 4, 6, 1, 2, 3];
let outputString = "";
let flag = false;
let trackerString = "";

for (let i = 0; i < inputArray.length; i++) {
  if (
    inputArray.indexOf(inputArray[i]) !=
      inputArray.lastIndexOf(inputArray[i]) &&
    trackerString.includes(inputArray[i]) == false
  ) {
    outputString += inputArray[i];
    outputString += ":";
    outputString += i;
    trackerString += inputArray[i];
  }
  for (let j = i + 1; j < inputArray.length; j++) {
    if (inputArray[i] === inputArray[j]) {
      outputString += j;
      flag = true;
    }
  }
  if (flag === true) outputString += ",";
  flag = false;
}
outputString = outputString.slice(0, outputString.length - 1);
console.log(outputString);
