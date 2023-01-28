function solution(sides) {
  const max = Math.max(...sides);
  return max < sides.reduce((a, c) => a + c, 0) - max ? 1 : 2;
}