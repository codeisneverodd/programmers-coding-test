//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
function solution(n) {
    var answer = '';
    for(let i=0; i<n; i++){
        answer += i % 2 === 0 ? '수' : '박'
    }
    return answer;
}