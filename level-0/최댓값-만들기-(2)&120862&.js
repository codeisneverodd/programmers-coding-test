//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(numbers) {
  const sorted = numbers.sort((a, b) => a - b);
  return Math.max(sorted[0] * sorted[1], sorted[sorted.length - 1] * sorted[sorted.length - 2]);
}
