function solution(n) {

  let answer = 0;
  for (let divisor = n - 1; divisor >= 2; divisor--) {
    if (n % divisor === 1) answer = divisor;
  }
  return answer;
}