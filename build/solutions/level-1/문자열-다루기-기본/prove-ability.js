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

