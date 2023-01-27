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
