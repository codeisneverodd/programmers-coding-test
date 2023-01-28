function solution(n) {
  let answer = 0;
  for (let divisor = 1; divisor <= n; divisor++) {
    if (n % divisor === 0) answer += divisor;
  }
  return answer;
}