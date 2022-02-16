//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
function solution(array, commands) {
    var answer = [];
    answer = commands.map(cmd => {
        const arrCmd = array.slice(cmd[0]-1,cmd[1]).sort((a,b)=>a-b)
        return arrCmd[cmd[2]-1]
    })
    return answer;
}