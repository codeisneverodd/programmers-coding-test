//https://github.com/codeisneverodd/programmers-coding-test
//더 좋은 풀이가 존재할 수 있습니다.
//정답 1(🎩 refactor 220425) - codeisneverodd
function solution(s) {
  return s.search(/\D/g) < 0 && (s.length === 4 || s.length === 6);
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

//정답 3 - prove-ability
function solution(s) {
  var answer = true;
  // 문자열 s의 길이가 4 혹은 6이고
  if (s.length === 4 || s.length === 6) {
    for (let i = 0, len = s.length; i < len; i++) {
      // 숫자로만 구성돼있는지 확인
      if (!Number.isInteger(parseInt(s[i], 10))) return false;
    }
    // 문자열 s의 길이가 4 혹은 6 가 아니라면 false
  } else return false;

  return answer;
}
