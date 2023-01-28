function solution(num) {
  let answer = 0;
  while (answer <= 500) {
    if (num === 1) return answer;
    num = num % 2 === 0 ? num / 2 : num * 3 + 1;
    answer += 1;
  }
  return -1;
}