//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(x, n) {
    var answer = [];
    for (let i = 0; i < n; i++) {
        answer[i] = x * (i + 1)
    }
    return answer;
}