//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
function solution(x, n) {
    var answer = [];
    for(let i=0; i<n; i++){
        answer[i] = x * (i+1)
    }
    return answer;
}