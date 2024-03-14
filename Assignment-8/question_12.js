//find error in below code andr ectify them
//Question12
// async function getData() {
//     setTimeout(function() { return [1, 2, 3, 4, 5]; }, 1000); }
//  getData().then(function(data) {
//     console.log(data);
//  });
//output->undefiend
//error->it is giving undefined because getData is expecting a promise to resolve it using .then but it is not returning a promise so we will wrap setTimeout inside a promise
//recitified code below
async function getData() {
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve([1, 2, 3, 4, 5]);
    }, 1000);
  });
}
getData().then(function (data) {
  console.log(data);
});
