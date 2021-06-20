function solution(board, moves) {
  let bucket = [];
  let result = 0;

  for (let i = 0; i < moves.length; i++) {
    let target = moves[i] - 1;

    for (let j = 0; j < board.length; j++) {
      if (board[j][target] !== 0) {
        bucket.push(board[j][target]);
        board[j][target] = 0;
        break;
      }
    }

    let len = bucket.length;

    if (bucket.length === 0) {
      continue;
    }

    if (bucket[len - 1] === bucket[len - 2]) {
      bucket.pop();
      bucket.pop();
      result += 2;
    }
  }

  //   moves.forEach((i, idx) => {
  //     let target = i - 1;
  //     for (let j = 0; j < board.length; j++) {
  //       if (board[j][target] !== 0) {
  //         bucket.push(board[j][target]);
  //         board[j][target] = 0;
  //         break;
  //       }
  //     }
  //     let len = bucket.length;

  //     if (bucket.length === 0) {
  //       continue;
  //     }
  //     if (bucket[len - 1] === bucket[len - 2]) {
  //       bucket.pop();
  //       bucket.pop();
  //       result += 2;
  //     }
  //   });

  //   for (let i = 0; i < bucket.length; i++) {
  //     if (bucket[i] === bucket[i + 1]) {
  //       bucket.splice(i, 2);
  //       result += 2;
  //       i -= 2;
  //     }
  //   }
  return result;
}

let test = solution(
  [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1],
  ],
  [1, 5, 3, 5, 1, 2, 1, 4]
);

console.log(test);

// 남이 푼 코드
const transpose = (matrix) =>
  matrix.reduce(
    (result, row) => row.map((_, i) => [...(result[i] || []), row[i]]),
    []
  );

const solution2 = (board, moves) => {
  const stacks = transpose(board).map((row) =>
    row.reverse().filter((el) => el !== 0)
  );
  const basket = [];
  let result = 0;

  for (const move of moves) {
    const pop = stacks[move - 1].pop();
    if (!pop) continue;
    if (pop === basket[basket.length - 1]) {
      basket.pop();
      result += 2;
      continue;
    }
    basket.push(pop);
  }

  return result;
};
