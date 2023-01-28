function solution(angle) {
  if (angle === 180) return 4;
  if (angle > 90) return 3;
  if (angle === 90) return 2;
  return 1;
}