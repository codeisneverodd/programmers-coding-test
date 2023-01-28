//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(array) {
  return array.sort((a, b) => a - b)[Math.floor(array.length / 2)];
}
