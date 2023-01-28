function solution(num) {
  let answer;
  num % 2 == 0 ? (answer = "Even") : (answer = "Odd");
  // 삼항 연산자를 사용하여 참일경우 Even, 거짓일 경우 Odd를 반환.
  return answer;
}