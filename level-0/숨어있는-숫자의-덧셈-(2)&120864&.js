//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(my_string) {
  const nums = my_string.match(/[0-9]+/g);
  return nums ? nums.map(num => +num).reduce((a, c) => a + c, 0) : 0;
}
