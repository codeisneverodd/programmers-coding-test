//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(arr, divisor) {
    var answer = [];
    answer = arr.filter(element => element % divisor === 0)
    answer.length === 0 ? answer.push(-1) : answer.sort((a, b) => a - b)
    return answer;
}

//정답 2 - codeisneverodd
function solution(arr, divisor) {
    var answer = [];
    arr.forEach(element => {
        element % divisor === 0 ? answer.push(element) : null
    })
    answer.length === 0 ? answer.push(-1) : null
    answer.sort((a, b) => a - b)
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

//정답 4 - prove-ailbity
function solution(arr, divisor) {
  var answer = [];
  arr.forEach((v) => v % divisor === 0 && answer.push(v))
  return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
}