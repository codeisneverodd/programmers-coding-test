//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(array, n) {
  const minDiff = Math.min(...array.map(a => Math.abs(a - n)));
  return array.sort((a, b) => a - b).find(a => Math.abs(a - n) === minDiff);
}
