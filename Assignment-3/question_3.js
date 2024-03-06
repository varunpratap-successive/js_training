//Question->
// Write a program to display Diamond Pattern

//         *
//       *  *
//     *  *  *
//   *  *  *  *
// *  *  *  *  *
//   *  *  *  *
//     *  *  *
//      *  *
//        *

let limit = 5;
for (let row = 0; row < limit; row++) {
  let space = " ";
  let str = " ";
  for (let gap = 0; gap < limit - row - 1; gap++) {
    space += " ";
  }
  for (let col = 0; col < row + 1; col++) {
    str += "*" + " ";
  }
  console.log(space, str);
}
limit--;
for (let row = 0; row < 4; row++) {
  let space = " ";
  let str = " ";
  for (let gap = 0; gap < row + 1; gap++) {
    space += " ";
  }
  for (let col = 0; col < limit; col++) {
    str += "*" + " ";
  }
  console.log(space, str);
  limit--;
}
