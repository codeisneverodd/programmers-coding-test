//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(order) {
  return [...('' + order)].filter(num => num === '3' || num === '6' || num === '9').length;
}
