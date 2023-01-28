//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(num_list, n) {
  let result = [];
  for (let i = 0; i < num_list.length / n; i++) {
    result = [...result, num_list.slice(i * n, i * n + n)];
  }
  return result;
}
