function solution(absolutes, signs) {
  return absolutes.reduce(
    (acc, curr, i) => acc + curr * (signs[i] ? 1 : -1),
    0
  );
}