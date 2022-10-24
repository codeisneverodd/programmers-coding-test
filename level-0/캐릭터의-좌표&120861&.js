//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(keyinput, board) {
  const moves = {
    up: [0, 1],
    down: [0, -1],
    left: [-1, 0],
    right: [1, 0],
  };
  const [rangeX, rangeY] = [Math.floor(board[0] / 2), Math.floor(board[1] / 2)];

  return keyinput
    .map(key => moves[key])
    .reduce(
      ([x, y], [mX, mY]) => (Math.abs(x + mX) > rangeX || Math.abs(y + mY) > rangeY ? [x, y] : [x + mX, y + mY]),
      [0, 0]
    );
}

//정답 2 - codeisneverodd
//명령형
function solution(keyinput, board) {
  const moves = {
    up: [0, 1],
    down: [0, -1],
    left: [-1, 0],
    right: [1, 0],
  };
  const [rangeX, rangeY] = [Math.floor(board[0] / 2), Math.floor(board[1] / 2)];

  let pos = [0, 0];

  keyinput
    .map(key => moves[key])
    .forEach(move => {
      if (Math.abs(move[0] + pos[0]) > rangeX || Math.abs(move[1] + pos[1]) > rangeY) return;
      pos[0] += move[0];
      pos[1] += move[1];
    });

  return pos;
}
