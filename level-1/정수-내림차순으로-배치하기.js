//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverod
function solution(n) {
    var answer = 0;
    const answerArray = n
        .toString()
        .split("")
        .sort((a, b) => b - a)
        .join('')
    answer = Number(answerArray)
    return answer;
}