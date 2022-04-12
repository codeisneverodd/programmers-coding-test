function solution(x) {
    var answer = true;
    // 모든 자릿수의 합을 구한다
    const sum = x.toString().split("").reduce((acc, cur) => acc + parseInt(cur, 10), 0);
    // x가 자릿수의 합으로 나누어떨어지지 않는다면 false 반환
    if(x % sum !== 0) return false
    return answer;
}