//Question->Write a program to convert given string in camel case ("hello john doe" => helloJohnDoe)

let inputString = "hello john doe";
let outputString = "";

for (let i = 0; i < inputString.length; i++) {
  if (inputString[i] === " ") {
    let firstLetter = inputString[i + 1].toUpperCase();
    outputString += firstLetter;
    i++;
  } else {
    outputString += inputString[i];
  }
}
console.log(outputString);
