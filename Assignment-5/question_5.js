//Question->Write a program flattenObject that takes an object with nested properties and returns a flat object with the nested properties transformed into dot-separated properties. The function should handle nested objects and arrays.
// const obj = {
//     a: 1,
//     b: { c: 2, d: [3, 4] }
//  };
//  Output: { 'a': 1, 'b.c': 2, 'b.d.0': 3, 'b.d.1': 4 }

const inputObject = {
  a: 1,
  b: { c: 2, d: [3, 4] },
};

let outuptObject = {};

function flattenObject(inputObject, name) {
  for (key in inputObject) {
    if (typeof inputObject[key] == "object") {
      flattenObject(inputObject[key], name + "." + key);
    } else {
      outuptObject[name + "." + key] = inputObject[key];
    }
  }
}
flattenObject(inputObject, "obj");
console.log(outuptObject);
