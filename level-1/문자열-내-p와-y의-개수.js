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

//정답 3 - chaerin-dev
function solution(s) {
  let pCount = s.split(/p/i).length - 1;
  let yCount = s.split(/y/i).length - 1;
  return pCount === yCount;
}
// 문자열에서 특정 문자의 개수를 구하려면 split을 사용하면 된다.
// Ex. "ababb".split("a") 의 결과는 ["", "b", "bb"]
// => 즉, "a"의 갯수는 3에서 1을 뺀 2

// 정답 4 - prove-ability
function solution(s){
  // 배열로 변환    
  s = s.split("");
  // filter 를 사용해 갯수 추출
  const pCount = s.filter((v) => v === "p" || v === "P").length;
  const yCount = s.filter((v) => v === "y" || v === "Y").length;
  return pCount === yCount;
}