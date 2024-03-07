//Question1->Write a program to remove duplicate charecters from a string

let originalStr = "vaarrun";
let newStr = "";
for (let i = 0; i < originalStr.length; i++) {
  if (newStr.indexOf(originalStr[i]) === -1) {
    newStr += originalStr[i];
  }
}
console.log(newStr);
