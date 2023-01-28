function solution(array) {
  const max = Math.max(...array);
  return [max, array.indexOf(max)];
}