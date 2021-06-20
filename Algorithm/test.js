function solution(arr, n) {
  let memo = [];
  for (let i = 0; i < arr.length; i++) {
    let num = Math.abs(arr[i] - n);
    if (num > memo[0]) {
      memo.shift();
      memo.push(arr[i]);
    } else {
      memo.push(arr[i]);
    }
  }
  console.log(memo);
  return memo[0];
}

let test = solution([1, 2, 3, 4, 6, 7, 8, 9], 5);
console.log(test);

// 실행 컨택스트
console.log(test);
function test() {
  let x = 5;
  return x;
}

console.log(test2());
const test2 = () => {
  console.log("ho");
};
