function solution(nums) {
  let selectLength = nums.length / 2;
  console.log(selectLength);

  //최댓값은 무조건 selectLength를 넘을 수 없다.
  let stack = [];
  for (let i = 0; i < nums.length; i++) {
    if (!stack.find((el) => el === nums[i])) {
      stack.push(nums[i]);
    }
    if (stack.length === selectLength) {
      return selectLength;
    }
  }
  return stack.length;
}

let test = solution([3, 1, 2, 3]);
console.log(test); // 3
