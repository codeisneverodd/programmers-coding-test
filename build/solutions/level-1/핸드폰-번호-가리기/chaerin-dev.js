function solution(phone_number) {
  // "*"을 phone_number의 길이에서 4만큼 뺀 횟수만큼 반복한 문자열과
  // phone_number의 -4인덱스부터 끝까지 추출한 문자열을
  // 이어붙인 후 반환
  return "*".repeat(phone_number.length - 4) + phone_number.slice(-4);
}

