// 1 6 10 19 31 45\
// 1 6 25 31 44

function solution(lottos, win_nums) {
  let maxRank = 0;
  let minRank = 0;
  lottos.forEach((el) => {
    if (el === 0) {
      maxRank++;
    } else {
      let winningNum = win_nums.find((num) => num === el);
      if (winningNum) {
        maxRank++;
        minRank++;
      }
    }
  });
  if (maxRank === 0 && minRank === 0) {
    return [6, 6];
  } else if (maxRank === 0) {
    return [6, 7 - minRank];
  } else if (minRank === 0) {
    return [7 - maxRank, 6];
  }
  return [7 - maxRank, 7 - minRank];
}

let test = solution([9, 7, 2, 3, 4, 5], [31, 10, 45, 1, 6, 19]);
console.log(test);
