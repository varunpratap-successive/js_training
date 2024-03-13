// Find Error in below questions and rectify them
//Question2
// let myObject = { name: 'John', age: 30 };
// for (property in myObject) {
//    console.log(property + ': ' + myObject.property);
// }
// output ->name: undefined
// age: undefined
// error->it should print John for name key and 30 for age key,but it is not doing so because myObject.property is wrong way to access key

//correct code for above code
let myObject = { name: "John", age: 30 };
for (property in myObject) {
  console.log(property + ": " + myObject[property]);
}
