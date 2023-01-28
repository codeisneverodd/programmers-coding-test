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