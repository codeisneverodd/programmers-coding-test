//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(num) {
    var answer = 0;
    while (answer <= 500) {
        if (num === 1) return answer;
        num = num % 2 === 0 ? num / 2 : num * 3 + 1;
        answer += 1;
    }
    return -1
}

//정답 2 - chaerin-dev
function solution(num) {
  // 작업을 반복한 횟수를 저장할 변수
  let cnt = 0;
  // num이 1이 되면 반복 종료
  while (num > 1) {
    // 작업을 500번 반복해도 1이 되지 않으면 -1 반환
    if (cnt == 500) return -1;
    // 작업 반복 횟수 증가
    cnt++;
    // 입력된 수가 짝수이면 2로 나누기
    if (num % 2 == 0) num /= 2;
    // 입력된 수가 홀수이면 3을 곱하고 1을 더하기
    else {
      num *= 3;
      num++;
    }
  }
  // 작업을 반복한 횟수 반환
  return cnt;
}

//정답 3 - jaewon1676
function solution(num) {
  var answer = 0;
  // num이 1이 아니고, answer이 500이 아니면 진행.
  // 두 가지 조건중 하나라도 맞지 않으면 while문 종료.
  while(num != 1 && answer != 500){ 
      //짝수면, 2로 나눠주고 홀수면 3을 곱하고 1을 더해준다.
      (num % 2 == 0 ? num = num / 2 : num = num * 3 + 1)
      answer++;
  }
  return num == 1 ? answer : -1
}