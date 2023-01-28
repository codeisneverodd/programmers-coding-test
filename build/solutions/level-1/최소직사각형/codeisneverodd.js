function solution(sizes) {
  for (let card of sizes) {
    if (card[0] < card[1]) [card[0], card[1]] = [card[1], card[0]];
  }

  const maxWidth = Math.max(...sizes.map(card => card[0]));
  const maxHeight = Math.max(...sizes.map(card => card[1]));
  return maxWidth * maxHeight;
}