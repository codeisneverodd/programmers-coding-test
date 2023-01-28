function solution(num) {
  let count = 0;
  while (num !== 1) {
    if (count++ === 500) return -1;
    num = num % 2 ? num * 3 + 1 : num / 2;
  }
  return count;
}