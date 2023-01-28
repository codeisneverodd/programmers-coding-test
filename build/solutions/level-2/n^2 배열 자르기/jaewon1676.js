function solution (n, left, right) {
  const answer = [];
  
  for (let i=left; i <= right; i++) { // left부터 right까지를 구한다.
      let row = parseInt(i/n);	// 행(row)을 구한다.
      let column = i%n;	// 열(column)을 구한다.
      answer.push(Math.max(row, column) + 1) // 행과 열중 큰 값을 푸시한다.
  }
  return answer
}