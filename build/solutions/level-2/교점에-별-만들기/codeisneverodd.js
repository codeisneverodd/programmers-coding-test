function solution(line) {
  const getCrossPoint = ([A, B, E], [C, D, F]) => {
    if (A * D - B * C === 0) return [Infinity, Infinity];
    return [(B * F - E * D) / (A * D - B * C), (E * C - A * F) / (A * D - B * C)];
  }; //문제 설명 최하단 참조

  const crossPoints = line.flatMap((lineA, i) =>
    line
      .slice(i + 1)
      .map(lineB => getCrossPoint(lineA, lineB))
      .filter(([x, y]) => Number.isInteger(x) && Number.isInteger(y))
  );

  const generateCanvas = crossPoints => {
    const xPoints = [...crossPoints.map(([x, y]) => x)];
    const yPoints = [...crossPoints.map(([x, y]) => y)];
    const [minX, maxX] = [Math.min(...xPoints), Math.max(...xPoints)];
    const [minY, maxY] = [Math.min(...yPoints), Math.max(...yPoints)];
    const xLength = Math.abs(maxX - minX) + 1;
    const yLength = Math.abs(maxY - minY) + 1;

    return {
      canvas: Array.from({ length: yLength }, () => Array(xLength).fill('.')),
      draw([x, y], value) {
        this.canvas[Math.abs(y - maxY)][Math.abs(x - minX)] = value;
      },
      print() {
        return this.canvas.map(row => row.join(''));
      },
    };
  };

  const canvas = generateCanvas(crossPoints);

  crossPoints.forEach(point => {
    canvas.draw(point, '*');
  });

  return canvas.print();
}
