//https://github.com/codeisneverodd/programmers-coding-test
//더 좋은 풀이가 존재할 수 있습니다.
//정답 1(🎩 refactor 220425) - codeisneverodd
function solution(n) {
  let answer = 0;
  for (let divisor = n - 1; divisor >= 2; divisor--) {
    if (n % divisor === 1) answer = divisor;
  }
  return answer;
}
