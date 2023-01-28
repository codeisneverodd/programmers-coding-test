function solution(n, k) {
  return n * 12000 + (k - Math.floor(n / 10)) * 2000;
}