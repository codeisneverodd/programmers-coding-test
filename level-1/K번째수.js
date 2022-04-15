//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(array, commands) {
  var answer = [];
  answer = commands.map((cmd) => {
    const arrCmd = array.slice(cmd[0] - 1, cmd[1]).sort((a, b) => a - b);
    return arrCmd[cmd[2] - 1];
  });
  return answer;
}

//정답 2 - jaewon1676
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

// 정답 3 - prove-ability
function solution(array, commands) {
  var answer = [];
  commands.forEach(([i, j, k]) => {
    const su = array.slice(i - 1, j).sort((a, b) => a - b)[k - 1];
    answer.push(su);
  });
  return answer;
}

//정답 4 - createhb21

function solution(array, commands) {
  let answer = [];
  for (let i = 0; i < commands.length; i++) {
    let eachCommand = commands[i];
    let slice = array.slice(eachCommand[0] - 1, eachCommand[1]);
    answer.push(slice.sort((a, b) => a - b)[eachCommand[2] - 1]);
  }
  return answer;
}
