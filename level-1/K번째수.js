//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(array, commands) {
    var answer = [];
    answer = commands.map(cmd => {
        const arrCmd = array.slice(cmd[0] - 1, cmd[1]).sort((a, b) => a - b)
        return arrCmd[cmd[2] - 1]
    })
    return answer;
}

//정답 2 - jaewon1676
function solution(array, commands) {
    var result = [];
    var temp = [];
    for(var i=0; i<commands.length; i++){
        temp = array.slice(commands[i][0] - 1, commands[i][1]).sort((a,b) => {return a - b}) 
        console.log(temp)
        result.push(temp[commands[i][2]-1])
    }
    return result
  }
  