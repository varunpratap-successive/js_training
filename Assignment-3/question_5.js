//Question5->Write a program to print all even number first and then all odd numbers using only one iteration

const range = 20;
let arr = [];
console.log("even numbers:");
for (let i = 0; i <= range; i++) {
  if (i % 2 === 0) console.log(i);
  else arr.push(i);
}
console.log("odd numbers");
console.log(arr);
