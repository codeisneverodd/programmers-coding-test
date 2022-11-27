//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(num, total) {
  const numArr = Array.from({ length: num }, (_, i) => i);
  const sum = numArr.reduce((a, c) => a + c);
  return numArr.map(n => n - (sum - total) / num);
}
