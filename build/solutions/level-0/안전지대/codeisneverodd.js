function solution(board) {
  const isBombNearby = (r, c) => {
    const nearby = [
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, -1],
      [0, 1],
      [1, -1],
      [1, 0],
      [1, 1],
    ];

    const isInBoard = (r, c) => r >= 0 && r < board.length && c >= 0 && c < board.length;

    return nearby.some(([dR, dC]) => isInBoard(r + dR, c + dC) && board[r + dR][c + dC] === 1);
  };

  let count = 0;

  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board.length; c++) {
      if (board[r][c] !== 1 && !isBombNearby(r, c)) count += 1;
    }
  }
  return count;
}