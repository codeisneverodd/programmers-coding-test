function solution(array, height) {
  return array.filter(a => a > height).length;
}