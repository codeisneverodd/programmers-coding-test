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

//정답 3 - chaerin-dev
function solution(n) {
  let result = 0;
  let sqrtN = Math.sqrt(n);
  // 효율성을 위해 1부터 n의 제곱근-1까지만 순회
  for (let i = 1; i < sqrtN; i++) {
    if (n % i === 0) result += i + n / i;
  }
  // n의 제곱근이 정수인 경우 n의 제곱근도 더해줌
  if (Number.isInteger(sqrtN)) result += sqrtN;
  return result;
}

//정답 4 - jaewon1676
function solution(n) {
  var answer = 0;
  for (let i=1; i<=n; i++){
      if (n%i == 0){ // n으로 i를 나눴을 때, 나머지가 0이면 약수이다.
          answer += i
      }
  }
  return answer;
}
// 약수란 어떤 수를 나누었을 때 나머지 없이 나누어 떨어지게 하는 그 수입니다.
// 10을 예로 들면, 10은 1, 2, 5, 10 이 나누었을 때 나머지가 없으므로 약수입니다.
// 3, 4, 6, 7, 8, 9 는 나누었을 때 나머지가 남기때문에 약수가 아닙니다.