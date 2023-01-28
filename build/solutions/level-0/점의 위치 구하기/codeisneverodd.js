function solution(dot) {
  const [x, y] = dot;
  if (y > 0) return x > 0 ? 1 : 2;
  return x < 0 ? 3 : 4;
}