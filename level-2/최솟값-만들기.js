//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
function solution(A,B){
    var answer = 0;
    A = A.sort((a,b)=>a-b)
    B = B.sort((a,b)=>b-a)
    for(let i=0;i<A.length;i++) answer += A[i]*B[i]
    return answer;
}