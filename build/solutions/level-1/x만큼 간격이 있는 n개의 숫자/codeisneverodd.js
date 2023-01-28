function solution(x, n) {
  return Array.from(Array(n), (_, index) => x * (index + 1));
}