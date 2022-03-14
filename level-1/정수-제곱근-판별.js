//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(n) {
    var answer = 0;
    const sqrt = Math.sqrt(n)
    answer = Number.isInteger(sqrt) ? (sqrt + 1) ** 2 : -1
    return answer;
}