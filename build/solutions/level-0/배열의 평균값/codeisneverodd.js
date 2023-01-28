function solution(numbers) {
  return numbers.reduce((a, c) => a + c, 0) / numbers.length;
}