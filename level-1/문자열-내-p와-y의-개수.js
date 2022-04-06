//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(s) {
    var answer = true;
    const countP = [...s.matchAll(/p/gi)].length
    const countY = [...s.matchAll(/y/gi)].length
    if (countP !== countY) answer = false

    return answer;
}

//정답 2 - yongchanson
function solution(s) {
  p = s.toLowerCase().split("p").length;
  y = s.toLowerCase().split("y").length;

  return p == y ? true : false;
}
