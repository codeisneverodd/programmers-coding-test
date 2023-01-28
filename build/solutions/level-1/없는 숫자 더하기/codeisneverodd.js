function solution(numbers) {
  var answer = 0;
  for (let i = 0; i < 10; i++) {
    answer += numbers.includes(i) ? 0 : i;
  }
  return answer;
}