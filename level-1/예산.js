//https://github.com/codeisneverodd/programmers-coding-test
//더 좋은 풀이가 존재할 수 있습니다.
//정답 1(🎩 refactor 220425) - codeisneverodd
function solution(d, budget) {
  let answer = 0;
  d.sort((a, b) => a - b);
  for (const department of d) {
    if (budget < department) break;
    answer += 1;
    budget -= department;
  }
  return answer;
}
