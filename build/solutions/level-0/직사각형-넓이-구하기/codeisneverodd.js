function solution(dots) {
  const xDots = dots.flatMap(([x, y]) => x);
  const yDots = dots.flatMap(([x, y]) => y);
  const width = Math.max(...xDots) - Math.min(...xDots);
  const height = Math.max(...yDots) - Math.min(...yDots);
  return width * height;
}
