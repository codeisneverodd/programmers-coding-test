function solution(numbers, target) {
  let answer = 0;

  dfs(0, 0);
  return answer;

  function dfs(index, sum) {
    // 재귀 종료
    if (index === numbers.length) {
      if (sum === target) {
        answer++;
      }
      return;
    }

    dfs(index + 1, sum + numbers[index]);
    dfs(index + 1, sum - numbers[index]);
  }
}

