// Question->Write a program to display prime numbers from 1 to 50

console.log("Prime Numbers between 1 to 50");
let arr = [];
let count;
for (let i = 2; i < 50; i++) {
  count = 0;
  for (let j = 2; j <= i; j++) {
    if (i % j === 0) {
      count++;
    }
  }
  if (count == 1) arr.push(i);
}
console.log(arr);
