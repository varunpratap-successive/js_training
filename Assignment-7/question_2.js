//Question->Give an example of using multiple callback functions in a single function in JavaScript

function callback1(data1) {
  console.log(data1);
}
function callback2(data2) {
  console.log(data2);
}
function callback3(data3) {
  console.log(data3);
}
function JavaScript1(callback1, callback2, callback3) {
  console.log("entered javascript1");
  callback1("calling callback1");
  callback2("calling callback2");
  callback3("calling callback3");
}

JavaScript1(callback1, callback2, callback3);
