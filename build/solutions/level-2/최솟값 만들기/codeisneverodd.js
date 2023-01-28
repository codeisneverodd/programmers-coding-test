function solution(A, B) {
    var answer = 0;
    A = A.sort((a, b) => a - b)
    B = B.sort((a, b) => b - a)
    for (let i = 0; i < A.length; i++) answer += A[i] * B[i]
    return answer;
}