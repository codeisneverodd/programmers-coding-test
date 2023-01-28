function solution(answers) {
  let score = [];
  let answer = [];
  let a1 = [1, 2, 3, 4, 5];
  let a2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let a3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  score.push(answers.filter((a, i) => a === a1[i % a1.length]).length);
  score.push(answers.filter((a, i) => a === a2[i % a2.length]).length);
  score.push(answers.filter((a, i) => a === a3[i % a3.length]).length);

  for (let i = 0; i < score.length; i++) {
    const max = Math.max(...score);
    if (score[i] === max) {
      answer.push(i + 1);
    }
  }

  return answer;
}