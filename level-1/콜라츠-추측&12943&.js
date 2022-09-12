//https://github.com/codeisneverodd/programmers-coding-test
//더 좋은 풀이가 존재할 수 있습니다.
//정답 1(🎩 refactor 220425) - codeisneverodd
function solution(num) {
  let answer = 0;
  while (answer <= 500) {
    if (num === 1) return answer;
    num = num % 2 === 0 ? num / 2 : num * 3 + 1;
    answer += 1;
  }
  return -1;
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
  while (num != 1 && answer != 500) {
    //짝수면, 2로 나눠주고 홀수면 3을 곱하고 1을 더해준다.
    num % 2 == 0 ? (num = num / 2) : (num = num * 3 + 1);
    answer++;
  }
  return num == 1 ? answer : -1;
}

//정답 4 - prove-ability
function solution(num) {
  let count = 0;

  // 결과로 나온 수에 같은 작업을 1이 될 때까지 반복합니다.
  while (num !== 1) {
    // 입력된 수가 짝수라면 2로 나눕니다.
    if (num % 2 === 0) num /= 2;
    // 입력된 수가 홀수라면 3을 곱하고 1을 더합니다.
    else num = num * 3 + 1;
    count++;
    // 작업을 500번을 반복해도 1이 되지 않는다면 –1을 반환해 주세요
    if (count > 500) return -1;
  }

  return count;
}

//정답 5 - yongchanson
function solution(num) {
  let count = 0;
  while (num !== 1) {
    if (count++ === 500) return -1;
    num = num % 2 ? num * 3 + 1 : num / 2;
  }
  return count;
}
