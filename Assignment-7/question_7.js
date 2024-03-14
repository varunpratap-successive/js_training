//Question->Create a function that performs multiple asynchronous operations in parallel using async/await and waits for all of them to complete before returning the results.

const promise1 = new Promise((resolve, reject) =>
  setTimeout(() => {
    resolve("Promise1 Resolved");
  }, 2000)
);
const promise2 = new Promise((resolve, reject) =>
  setTimeout(() => {
    resolve("Promise2 Resolved");
  }, 2000)
);

async function asyncOp1() {
  //I have setTimeout as async operation in first and second async operation
  const response1 = await promise1;
  return response1;
}
async function asyncOp2() {
  //second async function
  const response2 = await promise2;
  return response2;
}
async function asyncOp3() {
  //third async function,I have take api call as asynchronous operation here
  let response3 = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=kanpur&units=imperial&appid=7f33da9903c18929243e9675953957c4`
  );
  const data3 = await response3.json();
  return response3;
}

let res = Promise.all([asyncOp1(), asyncOp2(), asyncOp3()]);
res.then((data) => console.log(data));
