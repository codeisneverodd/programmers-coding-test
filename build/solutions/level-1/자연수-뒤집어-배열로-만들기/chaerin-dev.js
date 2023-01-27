function solution(n) {
  // 숫자 -> 문자열 -> 배열 -> 뒤집기 -> 모든 원소에 대해 자연수로 형 변환
  return String(n)
    .split("")
    .reverse()
    .map((item) => parseInt(item));
}

