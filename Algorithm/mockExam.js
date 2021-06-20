function solution(answer) {
  let person1 = [1, 2, 3, 4, 5];
  let person2 = [2, 1, 2, 3, 2, 4, 2, 5]; //각 수는 2와2사이에 배치 // 9이상 일 때 초기화
  let person3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]; //각 수는 두번씩 반복 // 10이상일 때 초기화

  let correct = [0, 0, 0];
  let cnt = [0, 0, 0];

  for (let i = 0; i < answer.length; i++) {
    if (i % 5 === 0 && i !== 0) cnt[0] += 5;
    if (i % 8 === 0 && i !== 0) cnt[1] += 8;
    if (i % 10 === 0 && i !== 0) cnt[2] += 10;

    if (answer[i] === person1[i - cnt[0]]) correct[0]++;
    if (answer[i] === person2[i - cnt[1]]) correct[1]++;
    if (answer[i] === person3[i - cnt[2]]) correct[2]++;
  }

  let result = [];

  let max = Math.max(correct[0], correct[1], correct[2]);

  if (correct[0] === max) result.push(1);
  if (correct[1] === max) result.push(2);
  if (correct[2] === max) result.push(3);
  console.log(correct);
  return result;
}

const test = solution([0, 0, 0, 0, 0, 4, 2, 5, 2]);
console.log(test);
