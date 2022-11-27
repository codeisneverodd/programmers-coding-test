//https://github.com/codeisneverodd/programmers-coding-test
//더 좋은 풀이가 존재할 수 있습니다.
//정답 1(🎩 refactor 220425) - codeisneverodd
function solution(a, b) {
  return a.reduce((x, y, i) => x + y * b[i], 0);
}

//정답 2 - yongchanson
function solution(a, b) {
  var answer = 0;

  for (i = 0; i < a.length; i++) {
    answer += a[i] * b[i];
  }
  return answer;
}

//정답 3 - prove-ability
function solution(a, b) {
  var answer = 0;

  for (let i = 0, len = a.length; i < len; i++) {
    answer += a[i] * b[i];
  }

  return answer;
}

//정답 4 - jaewon1676
function solution(a, b) {
    let answer = 0;
    for (let i=0; i<a.length; i++){
        answer += (a[i] * b[i]) // a[i]와 b[i]를 곱한다.
    }
    return answer;
}

//정답 5 - chaerin-dev
function solution(a, b) {
  return a.reduce((acc, e, i) => acc + e * b[i], 0);
}
