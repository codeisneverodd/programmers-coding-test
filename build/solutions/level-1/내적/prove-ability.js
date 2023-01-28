function solution(a, b) {
  var answer = 0;

  for (let i = 0, len = a.length; i < len; i++) {
    answer += a[i] * b[i];
  }

  return answer;
}