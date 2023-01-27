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

