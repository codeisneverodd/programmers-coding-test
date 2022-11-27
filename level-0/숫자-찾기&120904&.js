//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(num, k) {
  const index = [...('' + num)].findIndex(n => +n === k);
  return index === -1 ? -1 : index + 1;
}
