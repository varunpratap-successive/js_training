//Question4-> Write a program deepClone that takes an object as input and returns a deep copy of that object. The function should handle nested objects and arrays.

let obj = {
  arraykey: ["value1", "value2", { digit: 9 }],
  numberkey: 15,
  userDetailsObject: { name: "varun", age: 20 },
};
let clonedobj = { ...obj };
console.log(clonedobj);
