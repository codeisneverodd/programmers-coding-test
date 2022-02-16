//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
function solution(n) {
    var answer = 0;
    for(let divisor = 1; divisor<=n; divisor++) if(n%divisor === 0) answer+= divisor
    return answer;
}