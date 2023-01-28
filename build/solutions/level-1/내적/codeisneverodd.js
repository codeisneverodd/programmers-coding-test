function solution(a, b) {
  return a.reduce((x, y, i) => x + y * b[i], 0);
}