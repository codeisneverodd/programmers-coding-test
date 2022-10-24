//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(numlist, n) {
  return numlist.sort((a, b) => {
    const [aDiff, bDiff] = [Math.abs(a - n), Math.abs(b - n)];
    if (aDiff === bDiff) return b - a;
    return aDiff - bDiff;
  });
}
