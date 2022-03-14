//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(s) {
    var answer = '';
    answer = s.split('').sort((a, b) => {
        if (a < b) return 1
        if (a > b) return -1
        return 0
    }).join('')
    return answer;
}