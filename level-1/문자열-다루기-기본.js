//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(s) {
    var answer = false;
    const length = s.length
    if (s.search(/\D/g) < 0 && (length === 4 || length === 6)) answer = true
    return answer;
}

//정답 2 - yongchanson
function solution(s) {
  let parseInts = parseInt(s);
  if (s.length == 6 || s.length == 4) {
    if (s == parseInts) {
      return true;
    }
  }

  return false;
}
