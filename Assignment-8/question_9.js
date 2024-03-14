//find error in below code andr ectify them
//Question9

// function Person(name, age) { this.name = name; this.age = age; }
// var person = Person("John Doe", 30);
// console.log(person.name);
//output->error->{ Cannot read properties of undefined (reading 'name') }

//error->TypeError{ Cannot read properties of undefined (reading 'name') } because we cant access person.name like this
//we can do 2 things here to rectify above code either use return statement inside Person function or directly call person function

//correct code
function Person(name, age) {
  this.name = name;
  this.age = age;
  return this.name;
}
var person = Person("John Doe", 30);
console.log(person);
