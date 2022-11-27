//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(i, j, k) {
  let count = 0;
  for (let num = i; num <= j; num++) {
    count += [...('' + num)].filter(n => +n === k).length;
  }
  return count;
}
