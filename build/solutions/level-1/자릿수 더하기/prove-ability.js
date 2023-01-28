function solution(n) {
  var answer = 0;
  n.toString()
    .split("")
    .forEach((v) => {
      answer += parseInt(v);
    });
  return answer;
}