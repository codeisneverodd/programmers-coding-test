function solution(n) {
  let s = parseInt(Math.sqrt(n)) // n의 제곱근을 확인
  if (s ** 2 === n) return ((s+1) ** 2)
  
  return -1;
}

