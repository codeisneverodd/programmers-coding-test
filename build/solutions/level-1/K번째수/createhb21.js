function solution(array, commands) {
  let answer = [];
  for (let i = 0; i < commands.length; i++) {
    let eachCommand = commands[i];
    let slice = array.slice(eachCommand[0] - 1, eachCommand[1]);
    answer.push(slice.sort((a, b) => a - b)[eachCommand[2] - 1]);
  }
  return answer;
}