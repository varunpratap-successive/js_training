//Question3.1->Create a class Person with properties name, age, gender, and interests.
//Add a method greeting() that returns a string introducing the person. Also add a method farewell() that returns a string saying goodbye to the person.

class Person {
  constructor(name, age, gender, interests) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }

  greeting() {
    return (
      this.name +
      " has age " +
      this.age +
      " .Gender: " +
      this.gender +
      " .His Interests are: " +
      this.interests
    );
  }
  farewell() {
    return "Goodbye " + this.name;
  }
}

const PersonObj = new Person("Varun", 22, "Male", ["Cricket", "Reading"]);
let str1 = PersonObj.greeting();
let str2 = PersonObj.farewell();
console.log(str1);
console.log(str2);

//Question-3.2->Create a class Student that inherits from the Person class and has a property studies.
// Override the greeting() method to include information about what the student is studying.

class Person {
  constructor(studies) {
    this.studies = studies;
  }

  greeting() {
    console.log("Greeting by Parent");
  }
}

class Student extends Person {
  constructor(studies) {
    super(studies);

    this.studies = "Maths";
  }

  // overriding
  greeting() {
    console.log("Student is studying: " + this.studies);
  }
}

const studentObj = new Student("Physics");
studentObj.greeting();

//Question-3.3->Create a class Teacher that inherits from the Person class and has a property subjectsTaught.
//Override the farewell() method to include information about what the teacher teaches

class Person {
  constructor(subjectTaught) {
    this.subjectTaught = subjectTaught;
  }
  farewell() {
    console.log("Parent class farewell");
  }
}

class teacher extends Person {
  constructor(subjectTaught) {
    super(subjectTaught);
    //override
    this.subjectTaught = subjectTaught;
  }

  farewell() {
    console.log("Teacher teaches these subjects: " + this.subjectTaught);
  }
}

const personObj = new Person(["Hindi", "English"]);
personObj.farewell();
const teacherObj = new teacher(["Maths", "Bio"]);
teacherObj.farewell();
