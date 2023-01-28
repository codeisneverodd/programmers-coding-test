function solution(array, n) {
  const minDiff = Math.min(...array.map(a => Math.abs(a - n)));
  return array.sort((a, b) => a - b).find(a => Math.abs(a - n) === minDiff);
}