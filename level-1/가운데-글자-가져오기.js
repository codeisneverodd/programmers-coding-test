//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(s) {
    var answer = '';
    const length = s.length
    answer = (length % 2) !== 0 ? s[Math.floor(length / 2)] : s.slice((length / 2) - 1, (length / 2) + 1)
    return answer;
}

//정답 2 - yongchanson
function solution(s) {
  var answer = "";
  let L2 = s.length / 2;

  answer =
    s.length % 2 == 0 ? s[L2 - 1] + s[L2] : (answer = s[Math.ceil(L2 - 1)]);

  return answer;
}
