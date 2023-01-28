function solution(A, B) {
  let answer = [];

  for (let i = 0; i < A.length; i++) {
    answer[i] = [];
    for (let j = 0; j < A[0].length; j++) {
      answer[i][j] = A[i][j] + B[i][j];
    }
  }
  return answer;
}