//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(n) {
  let nums = [];
  for (let i = 0; i <= n; i++) {
    if (i % 2 === 1) nums = [...nums, i];
  }
  return nums;
}
