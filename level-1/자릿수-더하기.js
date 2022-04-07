//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(n) {
    var answer = 0;
    const answerArray = n
        .toString()
        .split('')
    answer = answerArray.reduce((a, b) => Number(a) + Number(b), 0)
    return answer;
}

//정답 2 - chaerin-dev
function solution(n) {
  // 숫자 -> 문자열 -> 배열 -> 각 요소를 정수로 변환한 후 더한 누적 결과값 반환
  return String(n).split("").reduce((acc, item) => acc += parseInt(item), 0);
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