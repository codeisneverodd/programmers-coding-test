// 소수인지 판별하는 함수
function isPrime(x) {
  for (let i = 2; i <= Math.sqrt(x); i++) {
    if (x % i === 0) return false;
  }
  return true;
}
function solution(n) {
  // 소수의 개수를 저장할 변수
  let answer = 0;
  // 1은 소수가 아니므로 2부터 n까지 모든 수에 대해
  for (let i = 2; i <= n; i++) {
    // 소수이면 소수의 개수에 1 추가
    if (isPrime(i)) answer++;
  }
  return answer;
}