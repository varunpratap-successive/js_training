// Question-> Write a function expression that takes in another function as an argument

const outerFunction = function (insideFunction) {
  console.log("Outer function called");
  insideFunction();
};
const insideFunction = function () {
  console.log("inside function called");
};

outerFunction(insideFunction);
