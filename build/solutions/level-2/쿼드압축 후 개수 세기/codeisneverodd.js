function solution(arr) {
  const quad = matrix => {
    const length = matrix.length;
    const half = length / 2;
    const pass = matrix => matrix.every(row => row.every(v => v === matrix[0][0]));

    if (pass(matrix)) return [matrix[0][0]];
    if (length <= 2) return matrix;

    const startPoints = [
      [0, 0],
      [0, half],
      [half, 0],
      [half, half],
    ];

    return startPoints.map(([r, c]) => quad(matrix.slice(r, r + half).map(row => row.slice(c, c + half))));
  };
  return quad(arr)
    .flat(Infinity)
    .reduce((a, c) => (c === 0 ? [a[0] + 1, a[1]] : [a[0], a[1] + 1]), [0, 0]);
}