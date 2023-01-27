function solution(n) {
  // "수박"을 n번 반복한 문자열의 0번 인덱스부터 n만큼 추출해서 반환
  return '수박'.repeat(n).substr(0, n);
}

