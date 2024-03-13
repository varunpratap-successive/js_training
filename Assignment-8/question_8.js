//find error in below question and rectify them
//Question8

// function Person(name, age) { this.name = name; this.age = age; }
// Person.prototype.getDetails = function() {
//    console.log(this.name + " is " + this.age + " years old");
// };
// var person = new Person("John Doe", 30);
// delete person.name;
// person.getDetails();

// output->undefined is 30 years old

//error->there is no error because we set name and age using var person = new Person("John Doe", 30); and then delete name using delete person.name so name is undefined now
