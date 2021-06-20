function solution(progresses, speeds) {
  let result = [];

  const recursive = (arr) => {
    if (arr.length === 0) {
      return;
    }

    let cnt = 0;

    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i] + speeds[i];
    }

    if (arr[0] >= 100) {
      while (true) {
        if (arr[0] < 100 || arr[0] === undefined) {
          break;
        } else {
          arr.shift();
          speeds.shift();
          cnt++;
        }
      }
      result.push(cnt);
    }

    recursive(arr);
  };

  recursive(progresses);

  return result;
}

// function solution(progresses, speeds) {
//   let days = [];
//   for (let i = 0; i < progresses.length; i++) {
//     let rest = 100 - progresses[i];
//     let day = rest / speeds[i] + (rest % speeds[i] === 0 ? 0 : 1);
//     days.push(day);
//   }
//   let result = [];
//   while (days.length > 0) {
//     let count = 1;
//     let day = days.shift();
//     while (days[0] && days.length > 0 && day >= days[0]) {
//       count++;
//       days.shift();
//     }
//     result.push(count);
//   }
//   return result;
// }

let test = solution([], []);
console.log(test);
// 5 10 1 1 20 1
