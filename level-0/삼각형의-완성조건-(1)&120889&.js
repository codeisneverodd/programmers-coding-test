//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(sides) {
  const max = Math.max(...sides);
  return max < sides.reduce((a, c) => a + c, 0) - max ? 1 : 2;
}
