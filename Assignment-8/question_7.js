//find error in below question and rectify them
//Question7
// for (var i = 0; i < 10; i++) {
// setTimeout(function() { console.log(i); }, 1000); }

// output->
// 10
// 10
// 10
// 10
// 10
// 10
// 10
// 10
// 10
// 10

//error-> no error ,it is printing as it should because i is in global scope and this function forms a closure with i and will point to refernece of i so when i becomes 
// 10 and condition becomes false ,then i value in global scope is 10 so it will print 10 ten Times,but in case if we want to print 0 to 9 then use let instead of var
