function solution(arr, divisor) {
  var answer = [];
  arr.forEach((element) => {
    element % divisor === 0 ? answer.push(element) : null;
  });
  answer.length === 0 ? answer.push(-1) : null;
  answer.sort((a, b) => a - b);
  return answer;
}