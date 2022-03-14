//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(num) {
    var answer = 0;
    while (answer <= 500) {
        if (num === 1) return answer
        num = num % 2 === 0 ? num / 2 : num * 3 + 1
        answer += 1
    }
    return -1
}