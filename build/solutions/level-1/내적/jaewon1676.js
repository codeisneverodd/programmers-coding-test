function solution(a, b) {
    let answer = 0;
    for (let i=0; i<a.length; i++){
        answer += (a[i] * b[i]) // a[i]와 b[i]를 곱한다.
    }
    return answer;
}