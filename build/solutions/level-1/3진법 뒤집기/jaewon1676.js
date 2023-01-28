function solution(n) {
  var answer = n.toString(3).split("").reverse().join("");

  return parseInt(answer, 3);
}