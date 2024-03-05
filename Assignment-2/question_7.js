
//Q3 SOlution
const outerfunction=(insidefunction) =>
{ console.log("Outer function called");
   insidefunction();
}
const insidefunction=()=>
{ console.log("inside function called");
}

outerfunction(insidefunction);

// Q4 Solution

const square = (number1) => {
    return number1*number1;
  }
console.log(square(5));

// Q5 Solution

const sum = (num1,num2) => {
    return num1+num2;
  }
console.log(sum(5,4));

// Q6

const checkevenodd= (number1)=> { 
    if(number1%2==0)
    return true;
    else 
    return false;
 }
 console.log(checkevenodd(5));