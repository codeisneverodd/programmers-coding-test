function solution(a, b) {
  let gcd = 0;
  for (let i = 1; i <= Math.min(a, b); i++) {
    if ((a % i) + (b % i) === 0) {
      gcd = i;
    }
  }
  return [gcd, (a / gcd) * b];
}