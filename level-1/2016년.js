//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(a, b) {
    var answer = '';
    let count = 0
    const day = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
    const month = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    for (let i = 1; i < a; i++) count += month[i]
    count += b
    answer = day[(count + 4) % 7]

    return answer;
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
