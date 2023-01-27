function solution(n) {
  // 정수 -> 문자열 -> 배열
  let arrN = String(n).split("");
  // 배열 내림차순 정렬
  arrN.sort((a, b) => b - a);
  // 배열 -> 문자열 -> 정수
  return parseInt(arrN.join(""));
}

