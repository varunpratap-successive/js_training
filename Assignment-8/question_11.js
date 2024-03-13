//find error in below code andr ectify them
//Question11
// var promise = new Promise(function(resolve, reject) {
//     setTimeout(function() { resolve("Data received"); }, 1000);
//  });
//  promise.then(function(data) {
//     console.log(data);
//  }, function(error) {
//     console.log(error);
//  });
//output->Data Received
//error->there is no syntactical error as such but we can write write it more properly and make code better by using catch in hamdling promise
// so better way of writing above code is below-
var promise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("Data received");
  }, 1000);
});

promise
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
