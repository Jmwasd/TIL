function solution(a, b) {
  const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const month = [5, 1, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4];

  let startDay = month[a - 1];
  console.log(startDay);
  for (let i = 1; i <= b; i++) {
    if (i === b) return week[startDay];
    startDay++;
    if (startDay === 7) startDay = 0;
  }
}

let test = solution(5, 23);
console.log(test);

function getDayName(a, b) {
  var date = new Date(2016, a - 1, b);
  return date.toString().slice(0, 3).toUpperCase();
}
