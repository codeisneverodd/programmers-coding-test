//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(n) {
    var answer = 0;
    for (let divisor = n - 1; divisor >= 2; divisor--) {
        n % divisor === 1 ? answer = divisor : null
    }
    return answer;
}