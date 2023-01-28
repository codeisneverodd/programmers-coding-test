function solution(n, m) {
  // 최대공약수 구하기
  let gcd = (n, m) => (n % m === 0 ? m : gcd(m, n % m));
  // 최소공배수 구하기
  let lcm = (n, m) => (n * m) / gcd(n, m);
  // 결과 출력
  return [gcd(n, m), lcm(n, m)];
}