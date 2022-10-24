//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(angle) {
  if (angle === 180) return 4;
  if (angle > 90) return 3;
  if (angle === 90) return 2;
  return 1;
}
