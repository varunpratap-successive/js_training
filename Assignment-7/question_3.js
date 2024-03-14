//Question-> Convert a callback-based API to a Promise-based API (
//function fetchData(callback) { setTimeout(() => { callback(null, "Data fetched successfully"); }, 1000); })

let fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data Fetched Successfully after 1 second");
  }, 1000);
});

console.log(fetchData);
fetchData.then((data) => console.log(data));
