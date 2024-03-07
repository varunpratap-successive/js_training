//Question-> Write a program to find the last duplicate index in an array

let array = [3, 4, 3, 2, 4, 1, 3];
let outputstr = "";
let newArray = [];
let index = -1;
let flag = false;

for (let i = 0; i < array.length; i++) {
  if (array[i] != undefined) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] == array[j]) {
        index = j;
        delete array[j];
        flag = true;
      }
    }
    if (flag == true) outputstr += array[i];
    if (index != -1) outputstr += index;
    index = -1;
    flag = false;
  }
}
console.log(outputstr);//returning duplicate Element along with its lastindex in array
