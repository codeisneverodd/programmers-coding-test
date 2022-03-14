//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(d, budget) {
    var answer = 0;
    d.sort((a, b) => a - b)
    for (const department of d) {
        if (budget < department) break
        answer += 1
        budget -= department
    }
    return answer;
}