//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(my_string) {
  return my_string
    .match(/[0-9]/g)
    .map(str => +str)
    .sort((a, b) => a - b);
}
