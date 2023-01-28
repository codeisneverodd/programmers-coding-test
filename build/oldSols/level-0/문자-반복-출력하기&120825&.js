//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(my_string, n) {
  return [...my_string].map(char => char.repeat(n)).join('');
}
