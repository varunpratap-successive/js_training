//find error in below question and rectify them
//Question5
// let myArray = [1, 2, 3, 4];
// for (let i = 0; i < myArray.length; i++) {
//    console.log(myArray[i]);
// }

// let myNumber = myArray[5];
// if (myNumber) {
//    console.log('The number is: ' + myNumber);
// } else {
//    console.log('The number is undefined');
// }

// output->
// 1
// 2
// 3
// 4
// The number is undefined

//error -myArray length is 4 but we are accessing index 5 which will give undefined in myNumber so else statement runs which prints ->the number is undefined

// so rectified code
let myArray = [1, 2, 3, 4];
for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

let myNumber = myArray[3]; //accesing a valid index here
if (myNumber) {
  console.log("The number is: " + myNumber);
} else {
  console.log("The number is undefined");
}
