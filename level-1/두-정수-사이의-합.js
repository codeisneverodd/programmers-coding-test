//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(a, b) {
    var answer = 0;
    for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
        answer += i;
    }
    return answer;
}

//정답 2 - chaerin-dev
function solution(a, b) {
  let answer = 0;
  for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
    answer += i;
  }
  return answer;
}

//정답 3 - prove-ability
function solution(a, b) {
  let answer = 0;
  for(let i = Math.min(a, b), len = Math.max(a, b); i <= len; i++) {
      answer += i;
  }
  return answer;
}

//정답 4 - prove-ability
function solution(a, b) {
  return Array.from({length: Math.max(a, b) - Math.min(a, b) + 1}, (_, i) => i + Math.min(a, b)).reduce((a, b) => a + b, 0);
}