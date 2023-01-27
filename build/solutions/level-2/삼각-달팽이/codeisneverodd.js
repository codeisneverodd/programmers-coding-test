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

