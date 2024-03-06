//QUestion->Write a program to display the twice of a number starting from 2 and end at 4096 (2, 4, 8, 16, ..... 4096)

console.log("Double of numbers");
let i = 2;
while (i <= 4096) {
  console.log(i);
  i = i * 2;
  if (i == 4096) {
    console.log(i);
    break;
  }
}
