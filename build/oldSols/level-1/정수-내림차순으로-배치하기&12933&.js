//https://github.com/codeisneverodd/programmers-coding-test
//더 좋은 풀이가 존재할 수 있습니다.
//정답 1(🎩 refactor 220425) - codeisneverodd
function solution(n) {
  return parseInt(
    n
      .toString()
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );
}

//정답 2 - chaerin-dev
function solution(n) {
  // 정수 -> 문자열 -> 배열
  let arrN = String(n).split("");
  // 배열 내림차순 정렬
  arrN.sort((a, b) => b - a);
  // 배열 -> 문자열 -> 정수
  return parseInt(arrN.join(""));
}

//정답 3 - prove-ability
function solution(n) {
  return parseInt(n.toString().split("").sort((a, b) => b - a).join(""), 10);
}

