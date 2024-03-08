//Question->Write a program to remove all the id key from array of object ({name:"John", age:27, id:1})
let objectArray = [
    { name: "Rohit", age: 37, id: 1 },
    { name: "Virat", age: 35, id: 2 },
    { name: "Dhoni", age: 42, id: 3 }
  ];
  
  let resultArray = [];
  objectArray.forEach(objitem => {
    let { id, ...rest } = objitem;
    resultArray.push(rest);
  });
  
  console.log(resultArray);