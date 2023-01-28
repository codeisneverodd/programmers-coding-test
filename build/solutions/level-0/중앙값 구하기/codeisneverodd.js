function solution(array) {
  return array.sort((a, b) => a - b)[Math.floor(array.length / 2)];
}