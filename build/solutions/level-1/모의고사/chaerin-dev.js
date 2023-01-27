function solution(answers) {
  const pattern = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];
  const scores = [0, 0, 0];

  answers.forEach((answer, i) => {
    for (let j = 0; j < pattern.length; j++) {
      const patternLength = pattern[j].length;
      if (answer === pattern[j][i % patternLength]) scores[j]++;
    }
  });

  const answer = [];
  const maxScore = Math.max(...scores);
  scores.forEach((score, i) => {
    if (score === maxScore) answer.push(i + 1);
  });
  return answer;
}