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