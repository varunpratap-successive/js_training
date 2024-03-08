// Question->All of the above questions from 3-6 needs to be done with arrow functions also


//Q3 Solution
const outerfunction=(insidefunction) =>
{ console.log("Outer function called");
   insidefunction();
}
const insidefunction=()=>
{ console.log("inside function called");
}

outerfunction(insidefunction);

// Q4 Solution

const square = (number1) => number1*number1;
console.log(square(5));

// Q5 Solution

const sum = (num1,num2) =>num1+num2;
console.log(sum(5,4));

// Q6 Solution

let checkevenodd =(number1) =>(number1 % 2 == 0) ;
console.log(checkevenodd(8));
