//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(n) {
    var answer = 0;
    for (let divisor = 1; divisor <= n; divisor++) if (n % divisor === 0) answer += divisor
    return answer;
}

//정답 2 - yongchanson
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
