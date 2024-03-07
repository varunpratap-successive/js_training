//Question->Write a program to reverse a string ("Hello John" => "olleH nhoJ")

let originalstr = "Hello John";
let numArray = originalstr.split(" ");

let reversedstr = "";

let finalstr = "";
for (let j = 0; j < numArray.length; j++) {
  let str = numArray[j];

  for (let i = str.length - 1; i >= 0; i--) {
    reversedstr += str[i];
  }

  finalstr += reversedstr + " ";
  reversedstr = "";
}
console.log(finalstr);
