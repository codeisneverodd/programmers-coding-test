//https://github.com/codeisneverodd/programmers-coding-test
//더 좋은 풀이가 존재할 수 있습니다.
//정답 1(🎩 refactor 220425) - codeisneverodd
function solution(n) {
  return Number.isInteger(Math.sqrt(n)) ? (Math.sqrt(n) + 1) ** 2 : -1;
}

//정답 2 - chaerin-dev
function solution(n) {
  // n의 제곱근값을 x에 저장
  let x = Math.sqrt(n);
  // x가 정수이면 x+1의 제곱 반환, x가 정수가 아니면 -1 반환
  return Number.isInteger(x) ? Math.pow(x + 1, 2) : -1;
}

//정답 3 - prove-ability
function solution(n) {
  // n의 제곱근을 x 초기화
  const x = Math.sqrt(n);
  // 양의 정수라면 x + 1 제곱 반환
  if(Number.isInteger(x)) return Math.pow(x + 1, 2)
  // 아니라면 -1 반환
  return -1;
}

//정답 4 - jaewon1676
function solution(n) {
  let s = parseInt(Math.sqrt(n)) // n의 제곱근을 확인
  if (s ** 2 === n) return ((s+1) ** 2)
  
  return -1;
}