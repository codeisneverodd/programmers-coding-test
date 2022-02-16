//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
function solution(n) {
    var answer = [];
    n = n.toString()
    for(let i=0;i<n.length;i++){
        answer[i] = Number(n[n.length-1-i])
    }
    return answer;
}