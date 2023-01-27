function solution(a, b) {
  return a.reduce((acc, e, i) => acc + e * b[i], 0);
}
