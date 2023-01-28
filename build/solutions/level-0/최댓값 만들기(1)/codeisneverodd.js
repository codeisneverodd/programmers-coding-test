function solution(numbers) {
  const [first, second, ...rest] = numbers.sort((a, b) => b - a);
  return first * second;
}