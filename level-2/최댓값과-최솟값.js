//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(s) {
    var answer = '';
    const arr = s.split(' ')
    answer = Math.min(...arr) + ' ' + Math.max(...arr)
    return answer;
}

//정답 2 - codeisneverodd
function solution(s) {
    var answer = '';
    const arr = s.split(' ').map(x => parseInt(x, 10)).sort((a, b) => a - b)
    answer = arr[0] + ' ' + arr[arr.length - 1]
    return answer;
}