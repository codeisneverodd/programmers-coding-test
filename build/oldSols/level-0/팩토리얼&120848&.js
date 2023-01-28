//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(n) {
  let factorial = [1, 1];
  for (let i = 2; n > factorial[i - 1]; i++) factorial[i] = factorial[i - 1] * i;

  return factorial[factorial.length - 1] === n ? factorial.length - 1 : factorial.length - 2;
}
