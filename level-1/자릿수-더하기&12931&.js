//https://github.com/codeisneverodd/programmers-coding-test
//더 좋은 풀이가 존재할 수 있습니다.
//정답 1(🎩 refactor 220425) - codeisneverodd
function solution(n) {
  return n
    .toString()
    .split("")
    .map((x) => parseInt(x))
    .reduce((acc, curr) => acc + curr, 0);
}

//정답 2 - chaerin-dev
function solution(n) {
  // 숫자 -> 문자열 -> 배열 -> 각 요소를 정수로 변환한 후 더한 누적 결과값 반환
  return String(n)
    .split("")
    .reduce((acc, item) => (acc += parseInt(item)), 0);
}

//정답 3 - chaerin-dev
function solution(n) {
  let result = 0;
  while (n > 0) {
    result += n % 10;
    n = Math.floor(n / 10);
  }
  return result;
}

// 정답 4 - prove-ability
function solution(n) {
  var answer = 0;
  n.toString()
    .split("")
    .forEach((v) => {
      answer += parseInt(v);
    });
  return answer;
}
