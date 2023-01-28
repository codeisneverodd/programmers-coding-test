function solution(arr) {
  return arr.reduce((acc, curr) => acc + curr) / arr.length;
}