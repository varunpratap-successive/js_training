//Question-> Write a program to find the last duplicate index in an array

let array = [3, 4, 3, 2, 4, 1, 3];
let outputstr = "";
let flagArray = [];

for (let i = 0; i < array.length; i++) {
  if ( array.indexOf(array[i]) != array.lastIndexOf(array[i]) &&
    flagArray.includes(array[i]) == false
     )
  {
    //Means duplicate element
    outputstr += array[i];
    outputstr += array.lastIndexOf(array[i]);
    flagArray.push(array[i]);
  }
}

console.log(outputstr); //returning duplicate Element along with its lastindex in array
