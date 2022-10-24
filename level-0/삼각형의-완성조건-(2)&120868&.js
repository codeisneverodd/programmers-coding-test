//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(sides) {
  const min = Math.min(...sides);
  const max1 = Math.max(...sides);
  const max2 = min + max1 - 1;
  return max2 - (max1 - min);
}

//정답 2 - codeisneverodd
function solution(sides) {
  return Math.min(...sides) * 2 - 1;
}
