function solution(arr, divisor) {
  var answer = [];
  arr.forEach((element) => {
    element % divisor === 0 ? answer.push(element) : null;
  });
  answer.length === 0 ? answer.push(-1) : null;
  answer.sort((a, b) => a - b);
  return answer;
}

//정답 3. chaerin-dev
function solution(arr, divisor) {
  let answer = [];
  arr.forEach((e) => {
    if (e % divisor === 0) answer.push(e);
  });
  return answer.length ? answer.sort((a, b) => a - b) : [-1];
}

