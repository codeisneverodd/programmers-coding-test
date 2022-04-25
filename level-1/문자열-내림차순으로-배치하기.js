//https://github.com/codeisneverodd/programmers-coding-test
//더 좋은 풀이가 존재할 수 있습니다.
//정답 1(🎩 refactor 220425) - codeisneverodd
function solution(s) {
  return s
    .split("")
    .sort((a, b) => {
      if (a < b) return 1;
      if (a > b) return -1;
      return 0;
    })
    .join("");
}

//정답 2 - chaerin-dev
function solution(s) {
  // 문자열 -> 배열 -> 정렬 -> 순서뒤집기 -> 문자열
  return s.split("").sort().reverse().join("");
}

//정답3 - chaerin-dev
function solution(s) {
  return s.split("").sort((a, b) => (a < b ? 1 : -1)).join("");
}

