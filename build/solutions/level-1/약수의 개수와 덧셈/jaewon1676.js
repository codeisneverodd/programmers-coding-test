function solution(left, right) {
  var answer = 0;

  for (left; left <= right; left++) {
    // left의 제곱근이 정수면 약수의 개수는 홀수
    if (Number.isInteger(Math.sqrt(left))) {
      answer -= left;
    } else {
      answer += left;
    }
  }
  return answer;
}