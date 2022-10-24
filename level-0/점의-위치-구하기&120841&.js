//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(dot) {
  const [x, y] = dot;
  if (y > 0) return x > 0 ? 1 : 2;
  return x < 0 ? 3 : 4;
}
