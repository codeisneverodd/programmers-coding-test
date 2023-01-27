function solution(s) {
  var answer = "";
  let L2 = s.length / 2;

  answer =
    s.length % 2 == 0 ? s[L2 - 1] + s[L2] : (answer = s[Math.ceil(L2 - 1)]);

  return answer;
}

