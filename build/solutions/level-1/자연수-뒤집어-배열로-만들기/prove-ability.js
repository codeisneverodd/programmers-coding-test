function solution(n) {
  // 1. 문자열 변환
  // 2. 배열로 변환
  // 3. 배열 반전
  // 4. 정수로 변환
  return n
    .toString()
    .split("")
    .reverse()
    .map((v) => parseInt(v));
}

