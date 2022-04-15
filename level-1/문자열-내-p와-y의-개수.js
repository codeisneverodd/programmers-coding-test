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

//정답 3 - chaerin-dev
function solution(s) {
  let pCount = s.split(/p/i).length - 1;
  let yCount = s.split(/y/i).length - 1;
  return pCount === yCount;
}
// 문자열에서 특정 문자의 개수를 구하려면 split을 사용하면 된다.
// Ex. "ababb".split("a") 의 결과는 ["", "b", "bb"]
// => 즉, "a"의 갯수는 3에서 1을 뺀 2
