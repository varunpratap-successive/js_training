//Question->Write a program to implement a Promise-based rate limiter, that limits the number of concurrent requests to a certain number

const rateLimiter = (i) =>
  new Promise((resolve, reject) => {
    if (i < 5) resolve(`Promise for ${i} request`);
    else reject(`Concurrent request Limit crossed`);
  });

for (let i = 1; i < 6; i++) {
  rateLimiter(i)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}
