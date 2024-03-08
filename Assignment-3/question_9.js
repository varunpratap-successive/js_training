//Question-> Write a program to print fibonaaci series

console.log("Fibonacci Series");
console.log("0");
console.log("1");
let current;
let fibonacci = (prev, prev2prev) => {
  if (prev + prev2prev > 100) return;
  console.log(prev + prev2prev);

  fibonacci(prev + prev2prev, prev);
};

fibonacci(1, 0);
