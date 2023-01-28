function solution(n) {
  var answer = 0;
  let i;
  for (i = 1; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      if (i * i == n) {
        //i의 제곱이 n인경우 처리
        answer += i;
      } else {
        answer += i;
        answer += n / i;
      }
    }
  }

  return answer;
}