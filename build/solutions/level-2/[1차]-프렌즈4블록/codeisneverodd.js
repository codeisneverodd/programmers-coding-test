function solution(m, n, board) {
  board = board.map(r => r.split(''));
  const getSquare = ([r, c]) => [
    [r, c],
    [r, c + 1],
    [r + 1, c],
    [r + 1, c + 1],
  ];

  const isSquare = ([r, c]) => {
    if (board[r][c] === '@') return false;
    return [...new Set(getSquare([r, c]).map(([r, c]) => board[r][c]))].length === 1;
  };

  const remove = () => {
    const removeArr = [];
    for (let r = 0; r < m - 1; r++) {
      for (let c = 0; c < n - 1; c++) {
        if (isSquare([r, c])) getSquare([r, c]).forEach(v => removeArr.push(v));
      }
    }
    removeArr.forEach(([r, c]) => {
      board[r][c] = '@';
    });
    return removeArr.length !== 0;
  };

  const pull = () => {
    for (let c = 0; c < n; c++) {
      const remainColumn = Array.from({ length: m }, (_, r) => board[r][c]).filter(v => v !== '@');
      const resultColumn = [...Array(m - remainColumn.length).fill('@'), ...remainColumn];
      resultColumn.forEach((v, r) => {
        board[r][c] = v;
      });
    }
    return board;
  };

  while (remove()) {
    pull();
  }

  return board.flat().filter(v => v === '@').length;
}
