//Question->Implement a function that returns a resolved Promise after a specified delay using async/await.

console.log("Program started");

let delayPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolved promise after 5 seconds");
  }, 5000);
});

async function resolvedPromise() {
  const response1 = await delayPromise;
  console.log(response1);
}
resolvedPromise();
