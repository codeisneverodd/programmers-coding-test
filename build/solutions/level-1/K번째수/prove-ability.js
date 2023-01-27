function solution(array, commands) {
  var answer = [];
  commands.forEach(([i, j, k]) => {
    const su = array.slice(i - 1, j).sort((a, b) => a - b)[k - 1];
    answer.push(su);
  });
  return answer;
}

