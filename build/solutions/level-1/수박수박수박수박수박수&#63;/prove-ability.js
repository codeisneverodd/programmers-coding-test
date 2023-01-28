function solution(n) {
  let answer = '';
  answer = '수박'.repeat(n / 2);
  if (n % 2 !== 0) answer += '수';
  return answer;
}