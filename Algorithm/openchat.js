function solution(record) {
  let array = [];

  record.forEach((element) => {
    let arr = element.split(" ");
    array.push(arr);
  });
}

let test = solution([
  "Enter uid1234 Muzi",
  "Enter uid4567 Prodo",
  "Leave uid1234",
  "Enter uid1234 Prodo",
  "Change uid4567 Ryan",
]);
console.log(test);