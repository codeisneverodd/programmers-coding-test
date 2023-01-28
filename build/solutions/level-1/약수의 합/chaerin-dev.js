function solution(n) {
  let result = 0;
  let sqrtN = Math.sqrt(n);
  // 효율성을 위해 1부터 n의 제곱근-1까지만 순회
  for (let i = 1; i < sqrtN; i++) {
    if (n % i === 0) result += i + n / i;
  }
  // n의 제곱근이 정수인 경우 n의 제곱근도 더해줌
  if (Number.isInteger(sqrtN)) result += sqrtN;
  return result;
}