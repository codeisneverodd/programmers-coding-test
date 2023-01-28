function solution(array, commands) {
  var result = [];
  var temp = [];
  for (var i = 0; i < commands.length; i++) {
    temp = array.slice(commands[i][0] - 1, commands[i][1]).sort((a, b) => {
      return a - b;
    });
    console.log(temp);
    result.push(temp[commands[i][2] - 1]);
  }
  return result;
}