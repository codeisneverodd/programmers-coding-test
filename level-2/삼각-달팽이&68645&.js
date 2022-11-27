//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(n) {
  const snail = Array.from(Array(n), (_, index) => Array(index + 1));
  let currentNum = 0;
  let [currentRow, currentCol] = [-1, 0];
  let shouldMove = n;
  while (shouldMove > 0) {
    for (let i = 0; i < shouldMove; i++)
      snail[++currentRow][currentCol] = ++currentNum;
    for (let i = 0; i < shouldMove - 1; i++)
      snail[currentRow][++currentCol] = ++currentNum;
    for (let i = 0; i < shouldMove - 2; i++)
      snail[--currentRow][--currentCol] = ++currentNum;
    shouldMove -= 3;
  }
  return snail.flatMap((num) => num);
}

//정답 2 - jaewon1676
function solution(n) {
  const answer = new Array(n).fill().map((e, i) => new Array(i + 1));
  // 이차원배열을 만들어준다
  
  let count = 0;
  let x = -1; // 행 , 0행 0열부터 시작해주기 위해 x는 -1 해줍니다.
  let y = 0; // 열 
  while (n > 0) {
      for (let i = 0; i < n; i++) answer[++x][y] = ++count; // 아래로 이동합니다.
      for (let i = 0; i < n - 1; i++) answer[x][++y] = ++count; // 오른쪽으로 이동합니다.
      for (let i = 0; i < n - 2; i++) answer[--x][--y] = ++count; // 대각선 오른쪽 위로 이동합니다.
          
      n -= 3;
  }
  return answer.flatMap(e => e);
  // flatMap은 이차원의 여러 배열을 하나의 배열로 묶어줍니다. 
  // ex [ [ 1 ], [ 2, 9 ], [ 3, 10, 8 ], [ 4, 5, 6, 7 ] ] 
  // =>   [1, 2, 9, 3, 10, 8, 4, 5, 6, 7]
}
