//Question->Write a program to perform functionality of a calculator (add,sub,multiply,divide)

let num1 = prompt("Enter first number");
let num2 = prompt("Enter second number");
let operation = prompt(
  "Enter your choice ->1 for Add , 2 for Subtract , 3 for Multiply , 4 for Divide "
);

switch (operation) {
  case 1: {
    console.log("Addition: " + (num1 + num2));
    break;
  }
  case 2: {
    console.log("Subtraction: " + (num1 - num2));
    break;
  }
  case 3: {
    console.log("Multiply: " + num1 * num2);
    break;
  }
  case 4: {
    console.log("Divide : " + num1 / num2);
    break;
  }
  default:
    console.log("Invalid Choice");
    break;
}
