//https://github.com/codeisneverodd/programmers-coding-test
//더 좋은 풀이가 존재할 수 있습니다.
//정답 1(🎩 refactor 220425) - codeisneverodd
function solution(a, b) {
  let answer = 0;
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

//정답 5 - jaewon1676
function solution(a, b) {
  if (b < a){ // b가 a보다 큰 수가 되도록 해준다.
      let c = b
      b = a
      a = c
  }
  let sum = 0; // 합을 구할 변수
  for (let i=a; i<=b; i++){
      sum += i
  }
  return sum;
}
