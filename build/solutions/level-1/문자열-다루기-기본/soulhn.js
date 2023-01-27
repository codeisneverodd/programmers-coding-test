function solution(s) {
  if (s.length !== 4 && s.length !== 6) return false;
  return !s.split("").some((i) => isNaN(parseInt(i, 10))); 
   //early return 제외사항 먼저 처리
  //.split 문자열 배열로 변환, .some을 이용하여 isNaN인지 판별, ! 사용하여 문제 조건에 맞게 반환
}
