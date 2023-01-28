function solution(s) {
  let pCount = s.split(/p/i).length - 1;
  let yCount = s.split(/y/i).length - 1;
  return pCount === yCount;
}
// 문자열에서 특정 문자의 개수를 구하려면 split을 사용하면 된다.
// Ex. "ababb".split("a") 의 결과는 ["", "b", "bb"]
// => 즉, "a"의 갯수는 3에서 1을 뺀 2