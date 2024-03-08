//Question-> Write a program to print all even number first and then all odd numbers

const range = 20;
console.log("even numbers:");
for (let i = 0; i <= range; i++) {
  if (i % 2 === 0) console.log(i);
}
console.log("odd numbers:");
for (let i = 0; i <= range; i++) {
  if (i % 2 != 0) console.log(i);
}
