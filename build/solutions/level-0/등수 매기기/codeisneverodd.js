function solution(score) {
  const avgs = score.map(([a, b]) => (a + b) / 2);
  const avgRank = [...avgs]
    .sort((a, b) => b - a)
    .map((avg, i) => ({ avg, rank: i + 1 }))
    .map((a, i, arr) => (i > 0 && a.avg === arr[i - 1].avg ? { ...a, rank: arr[i - 1].rank } : a));

  return avgs.map(_avg => avgRank.find(({ avg }) => _avg === avg).rank);
}