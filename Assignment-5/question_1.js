//Question-> Write a program to iterate over object.

const userDetails = {
  name: "Varun",
  age: 22,
  gender: "male",
};

for (const key in userDetails) {
console.log(key+ ":"+ userDetails[key]);
}
