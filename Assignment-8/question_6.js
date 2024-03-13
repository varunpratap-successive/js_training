//find error in below question and rectify them
//Question6

// var person = { name: "John Doe", age: 30, getDetails: function() { console.log(this.name + " is " + this.age + " years old"); } };
// var getPersonDetails = person.getDetails;
// getPersonDetails();

//output->undefined is undefined years old ,
// error->we want to print John Doe is 30 years old but we are printing undefined is undefined years old by above code
// because we are referencing getDetails function without its context ,so we will use bind function to give context to this

//rectified code
var person = {
  name: "John Doe",
  age: 30,
  getDetails: function () {
    console.log(this.name + " is " + this.age + " years old");
  },
};
var getPersonDetails = person.getDetails.bind(person);
getPersonDetails();
