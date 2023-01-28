function solution(n) {
  return n
    .toString()
    .split("")
    .reverse()
    .map((x) => parseInt(x));
}