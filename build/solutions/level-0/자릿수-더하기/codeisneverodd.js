function solution(n) {
  return [...('' + n)].map(num => +num).reduce((a, c) => a + c, 0);
}
