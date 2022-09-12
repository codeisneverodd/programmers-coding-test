//https://github.com/codeisneverodd/programmers-coding-test
//더 좋은 풀이가 존재할 수 있습니다.
//정답 1(🎩 refactor 220425) - codeisneverodd
function solution(phone_number) {
  return "*".repeat(phone_number.length - 4) + phone_number.slice(-4);
}

//정답 2 - chaerin-dev
function solution(phone_number) {
  // "*"을 phone_number의 길이에서 4만큼 뺀 횟수만큼 반복한 문자열과
  // phone_number의 -4인덱스부터 끝까지 추출한 문자열을
  // 이어붙인 후 반환
  return "*".repeat(phone_number.length - 4) + phone_number.slice(-4);
}

// 정답 3 - prove-ability
function solution(phone_number) {
  var answer = "";
  answer += "*".repeat(phone_number.length - 4);
  answer += phone_number.slice(phone_number.length - 4, phone_number.length);
  return answer;
}
