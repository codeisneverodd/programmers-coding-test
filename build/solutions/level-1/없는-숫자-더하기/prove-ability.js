function solution(numbers) {
  var answer = 0;

  for (let i = 0; i < 10; i++) {
    if (!numbers.includes(i)) answer += i;
  }

  return answer;
}

