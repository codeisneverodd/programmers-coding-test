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
