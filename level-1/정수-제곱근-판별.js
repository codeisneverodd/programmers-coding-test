//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(n) {
    var answer = 0;
    const sqrt = Math.sqrt(n)
    answer = Number.isInteger(sqrt) ? (sqrt + 1) ** 2 : -1
    return answer;
}

//정답 2 - chaerin-dev
function solution(n) {
  // n의 제곱근값을 x에 저장
  let x = Math.sqrt(n);
  // x가 정수이면 x+1의 제곱 반환, x가 정수가 아니면 -1 반환
  return Number.isInteger(x) ? Math.pow(x + 1, 2) : -1;
}