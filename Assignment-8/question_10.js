//find error in below code andr ectify them
//Question10
// function getData(callback) {
//     setTimeout(function() { callback([1, 2, 3, 4, 5]); }, 1000);
//  }
//  getData(function(data) {
//     console.log(data.length);
//  });

// output->5
// error-> no error as getData function is accepting a callback function whicn will run after 1 second due to setTimeout
