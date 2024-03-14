//Question-> Write a program to implement a Promise-based task queue, that processes tasks in a specified order, with a specified concurrency limit

const taskQueue = (i, limit) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (i <= limit) resolve(`promise resolved for request${i}`);
      else reject("limit exceeded now");
    }, i * 2000);
  });

const limit = 5;

for (let i = 1; i < limit + 2; i++) {
  taskQueue(i, limit)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}
