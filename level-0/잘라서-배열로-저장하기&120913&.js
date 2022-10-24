//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(my_str, n) {
  let result = [];
  for (let i = 0; i < my_str.length / n; i++) result = [...result, my_str.slice(i * n, i * n + n)];
  return result;
}
