//Question->Write a program to display following output as shown in figure

//Pattern1
// 1
// 2 3
// 4 5 6
// 7 8 9 10

//  let num = 1;
//  let rowline="";
// for (let row = 0; row < 4; row++) {

//   for (let col = 0; col < row + 1; col++) {
//     rowline += num + " ";
//     num++;
//   }
//   console.log(rowline);
//   rowline = "";
// }

//Pattern2
// 1
// 2 2
// 3 3 3
// 4 4 4 4

let rowline = "";

for (let row = 0; row < 4; row++) {
  for (let col = 0; col < row + 1; col++) {
    rowline += row + 1 + " ";
  }
  console.log(rowline);
  rowline = "";
}

//Pattern3
// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

// let value = 5;
// let rowline=" ";
// for (let row = 0; row < 5; row++) {
//   for (let col = 0; col < value ;col++) {
//     rowline += col + 1 + " ";
//   }
//   console.log(rowline);
//   value--;
//   rowline=" ";
// }
// for (let row = 0; row < 5; row++) {
//   let rowline = " ";
//   for (let col = 0; col < row + 1; col++) {
//     rowline += col + 1 + " ";
//   }
//   if (row != 0)
//    console.log(rowline);
// }
