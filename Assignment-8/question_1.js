// Find Error in below questions and rectify them

// Question1.
// let myArray = [1, 2, 3, 4];
// for (let i = 0; i <= myArray.length; i++) {
//    console.log(myArray[i]);
//  // }

//  output of above code->1 2 3 4 undefined
//  error->myArray length is 4 so it sould go from index 0 to 3 but above loop is runnig from 0 to 4 index,so it gives undefined at myArray[4]

//correct code
let myArray = [1, 2, 3, 4];
for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}
