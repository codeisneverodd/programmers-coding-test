function solution(n) {
  // n의 제곱근을 x 초기화
  const x = Math.sqrt(n);
  // 양의 정수라면 x + 1 제곱 반환
  if(Number.isInteger(x)) return Math.pow(x + 1, 2)
  // 아니라면 -1 반환
  return -1;
}

