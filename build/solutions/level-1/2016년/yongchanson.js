function solution(a, b) {
  const month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const week = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"];

  let sum = b;
  for (
    let i = 0;
    i < a - 1;
    i++ //ex)5월인 경우 1~4월까지 더해준다.
  )
    sum += month[i];

  return week[sum % 7]; //1일이 금요일이므로, 0이면 목요일이 출력되어야 한다.
}