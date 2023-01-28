function solution(left, right) {
  var answer = 0;
  for (let num = left; num <= right; num++) {
    divisorCounter(num) % 2 === 0 ? (answer += num) : (answer -= num);
  }
  return answer;
}

const divisorCounter = (num) => {
  let count = 0;
  const sqrt = Math.sqrt(num);
  for (let i = 1; i <= sqrt; i++) if (num % i === 0) count += 1;
  return Number.isInteger(sqrt) ? (count - 1) * 2 + 1 : count * 2;
};