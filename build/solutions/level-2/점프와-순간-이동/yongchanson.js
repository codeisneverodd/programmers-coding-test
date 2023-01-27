function solution(n) {
  let result = 0;
  while (n > 0) {
    result += n % 2;
    n = Math.floor(n / 2);
  }
  return result;
}
