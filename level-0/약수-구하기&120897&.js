//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(n) {
  let answer = [];
  for (let i = 1; i < Math.sqrt(n); i++) {
    if (n % i === 0) answer = [...answer, i, n / i];
  }
  if (Number.isInteger(Math.sqrt(n))) answer = [...answer, Math.sqrt(n)];
  return answer.sort((a, b) => a - b);
}
