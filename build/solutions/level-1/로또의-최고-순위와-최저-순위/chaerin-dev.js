function solution(lottos, win_nums) {
  let zeroCount = 0;
  let winCount = 0;
  lottos.forEach((item) => {
    if (item === 0) zeroCount++;
    else if (win_nums.includes(item)) winCount++;
  });
  let maxRank = Math.min(7 - (winCount + zeroCount), 6);
  let minRank = Math.min(7 - winCount, 6);
  return [maxRank, minRank];
}
