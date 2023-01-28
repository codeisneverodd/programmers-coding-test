function solution(arr, divisor) {
  let answer = [];
  arr.forEach((e) => {
    if (e % divisor === 0) answer.push(e);
  });
  return answer.length ? answer.sort((a, b) => a - b) : [-1];
}