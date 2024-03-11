//QUestion->Create a class called `Person` that has properties for `firstName`, `lastName`, and `age`.
//The class should also have a method called `fullName` that returns the person's full name.
//Additionally, the class should have a method called `averageAge` that takes in an array of `Person` objects and returns the average age of all the people in the array.

class Person {
  constructor(firstname, lastname, age) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
  }
  fullName() {
    return this.firstname + " " + this.lastname;
  }

  averageAge(personObj) {
    this.personObj = personObj;
    let count = 0;
    let sum = 0;
    personObj.forEach((element) => {
      for (let key in element) {
        if (key === "age") {
          sum += element[key];
          count++;
        }
      }
    });
    return sum / count;
  }
}

const personObj1 = new Person("Varun", "Pratap", 22);
let fName = personObj1.fullName();
console.log(fName);
const personObj2 = new Person("Shivam", "Thakur", 30);
const personObj3 = new Person("Yash", "Agarwal", 60);
let average = personObj1.averageAge([personObj2, personObj3]);
console.log(average);
