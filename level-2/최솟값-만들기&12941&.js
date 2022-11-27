//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(A, B) {
    var answer = 0;
    A = A.sort((a, b) => a - b)
    B = B.sort((a, b) => b - a)
    for (let i = 0; i < A.length; i++) answer += A[i] * B[i]
    return answer;
}

//정답 2 - prove-ability
function solution(A,B){
  let sum = 0;
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);
  
  for(let i = 0, len = A.length; i < len; i++) {
      sum += A[i] * B[i];
  }

  return sum;
}

//정답 3 - yongchanson
function solution(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);
  return A.reduce((t, n, i) => t + n * B[i], 0);
}
