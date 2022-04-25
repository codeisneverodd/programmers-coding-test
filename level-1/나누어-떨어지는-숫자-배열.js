//https://github.com/codeisneverodd/programmers-coding-test
//더 좋은 풀이가 존재할 수 있습니다.
//정답 1(🎩 refactor 220425) - codeisneverodd
function solution(arr, divisor) {
  const answer = arr.filter((element) => element % divisor === 0);
  answer.length === 0 ? answer.push(-1) : answer.sort((a, b) => a - b);
  return answer;
}

//정답 2 - codeisneverodd
function solution(arr, divisor) {
  var answer = [];
  arr.forEach((element) => {
    element % divisor === 0 ? answer.push(element) : null;
  });
  answer.length === 0 ? answer.push(-1) : null;
  answer.sort((a, b) => a - b);
  return answer;
}
