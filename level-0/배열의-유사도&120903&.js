//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(s1, s2) {
  return s1.filter(s => s2.includes(s)).length;
}
