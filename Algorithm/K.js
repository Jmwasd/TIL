// function solution(array, commands) {
//   let result = [];
//   for (let i = 0; i < commands.length; i++) {
//     let left = commands[i][0] - 1;
//     let right = commands[i][1];

//     let sliceArr = array.slice(left, right);

//     sliceArr.sort((a, b) => {
//       return a - b;
//     });
//     // console.log(sliceArr);

//     result.push(sliceArr[commands[i][2] - 1]);
//   }
//   return result;
// }

function solution(array, commands) {
  let location = [];
  function result(i) {
    //탈출조건
    if (i > commands.length - 1) {
      return;
    }
    let start = commands[i][0] - 1;
    let end = commands[i][1];
    let point = commands[i][2] - 1;
    let sliceArr = array.slice(start, end);
    sliceArr.sort((a, b) => {
      return a - b;
    });
    location.push(sliceArr[point]);
    return result(i + 1);
  }
  result(0);
  return location;
}

// function solution(array, commands) {
//   let location = [];
//   function result(i) {
//     //탈출조건
//     if (i > commands.length) {
//       return;
//     }
//     let start = commands[i][0] - 1;
//     let end = commands[i][1];
//     let point = commands[i][2] - 1;
//     let sliceArr = array.slice(start - 1, end);
//     sliceArr.sort((a, b) => {
//       return a - b;
//     });
//     location.push(sliceArr[point]);
//     return result(i + 1);
//   }
//   result(0);
//   return location;
// }

let test = solution(
  [1, 5, 2, 6, 3, 7, 4],
  [
    [2, 5, 3],
    [4, 4, 1],
    [1, 7, 3],
  ]
);

console.log(test);
