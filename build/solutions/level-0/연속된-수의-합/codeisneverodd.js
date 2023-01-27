function solution(num, total) {
  const numArr = Array.from({ length: num }, (_, i) => i);
  const sum = numArr.reduce((a, c) => a + c);
  return numArr.map(n => n - (sum - total) / num);
}
