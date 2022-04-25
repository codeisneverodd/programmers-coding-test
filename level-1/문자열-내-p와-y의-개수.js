//https://github.com/codeisneverodd/programmers-coding-test
//더 좋은 풀이가 존재할 수 있습니다.
//정답 1(🎩 refactor 220425) - codeisneverodd
function solution(s) {
  const countP = [...s.matchAll(/p/gi)].length;
  const countY = [...s.matchAll(/y/gi)].length;
  return countP === countY;
}

//정답 2 - yongchanson
function solution(s) {
  p = s.toLowerCase().split("p").length;
  y = s.toLowerCase().split("y").length;

  return p == y ? true : false;
}
