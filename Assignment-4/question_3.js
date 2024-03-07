//Question->Write a program to give count of variables in a string ("abcabcdabbcc" => "a3b4c4d1")

let str = "abcabcdabbcc";
let outputString = "";

function characterCount(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === char) {
      count++;
    }
  }
  return count;
}

for (let i = 0; i < str.length; i++) {
  if (outputString.includes(str[i]) === false) {
    let charcount = characterCount(str, str[i]);
    outputString += str[i];
    outputString += charcount;
  }
}
console.log(outputString);
