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

