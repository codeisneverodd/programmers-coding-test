function solution(N, stages) {
  var answer = [];
  let failRate = new Array(N + 2).fill(0);
  let playerChallenging = new Array(N + 2).fill(0);
  let playerReached = new Array(N + 2).fill(0);

  for (const stage of stages) {
    for (let i = 1; i <= stage; i++) playerReached[i] += 1;
    playerChallenging[stage] += 1;
  }
  for (let i = 1; i <= N + 1; i++)
    failRate[i] =
      playerReached[i] === 0 ? 0 : playerChallenging[i] / playerReached[i];
  const rateNIndex = failRate
    .slice(1, N + 1)
    .map((rate, stage) => [rate, stage + 1]);
  const sortedRate = rateNIndex.sort((a, b) => b[0] - a[0]);
  answer = sortedRate.map((stage) => stage[1]);
  return answer;
}

