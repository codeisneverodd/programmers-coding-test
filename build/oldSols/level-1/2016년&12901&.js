//https://github.com/codeisneverodd/programmers-coding-test
//더 좋은 풀이가 존재할 수 있습니다.
//정답 1(🎩 refactor 220425) - codeisneverodd
function solution(a, b) {
  let count = 0;
  const day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const month = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  for (let i = 1; i < a; i++) count += month[i];
  count += b;
  return day[(count + 4) % 7]; // 금요일 부터 1일 이므로
}

//정답 2 - yongchanson
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

//정답 3 - chaerin-dev
function solution(a, b) {
  let week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let dateStr = "2016-" + a + "- " + b;
  let date = new Date(dateStr);
  return week[date.getDay()];
}

//정답 4 - chaerin-dev
function solution(a, b) {
  let arr = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  // 1월 1일부터 a월 b일까지 며칠 차이인지 저장할 변수
  let passedDays = 0;
  // a달 전까지의 모든 달에 대해 각 달의 날짜 수 더해줌
  for (let i = 1; i < a; i++) passedDays += arr[i];
  // b일 더해주고 1월 0일이 아닌 1월 1일부터 시작하므로 1 빼줌
  passedDays += b - 1;
  return week[(5 + passedDays) % 7];
}

//정답 5 - prove-ability
function solution(a, b) {
  var answer = "";
  // 2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요?
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const daysOfMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  // 2016년 1월 1일은 금요일로 4를 더해준다
  let totalDays = 4;
  // a 이전 모든 달의 일 수를 더한다
  for (let i = 0, len = a - 1; i < len; i++) {
    totalDays += daysOfMonth[i];
  }
  // totalDays 와 해당 일을 더해주고 7로 나눈 나머지
  const dayIndex = (totalDays + b) % 7;
  return days[dayIndex];
}
