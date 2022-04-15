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

//정답 3 - prove-ability
function solution(s) {
  var answer = '';
  // 중간 지점 찾기
  const point = Math.floor(s.length / 2);
  // 짝수인 경우 - (중간지점 - 1) + 중간지점 
  if(s.length % 2 ===0) answer = s[point - 1] + s[point];
  // 홀수인 경우 - 중간지점
  else answer = s[point];
  return answer;
}

// 정답 4 - chaerin-dev
function solution(s) {
  return s.length % 2
    ? s[parseInt(s.length / 2)]
    : s[s.length / 2 - 1] + s[s.length / 2];
}

