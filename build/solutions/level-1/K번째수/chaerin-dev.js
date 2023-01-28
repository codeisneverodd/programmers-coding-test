function solution(array, commands) {
  let t = commands.length;
  let answer = [];
  while (t--) {
    let command = commands.shift();
    answer.push(
      array.slice(command[0] - 1, command[1]).sort((a, b) => a - b)[
        command[2] - 1
      ]
    );
  }
  return answer;
}