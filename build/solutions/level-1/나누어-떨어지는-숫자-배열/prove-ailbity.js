function solution(arr, divisor) {
  var answer = [];
  arr.forEach((v) => v % divisor === 0 && answer.push(v))
  return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
}
