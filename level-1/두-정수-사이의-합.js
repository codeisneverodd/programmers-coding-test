//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
function solution(a, b) {
    var answer = 0;
    for(let i = Math.min(a,b); i<=Math.max(a,b); i++){
        answer += i
    }
    return answer;
}