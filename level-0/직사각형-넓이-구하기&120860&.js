//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(dots) {
  const xDots = dots.flatMap(([x, y]) => x);
  const yDots = dots.flatMap(([x, y]) => y);
  const width = Math.max(...xDots) - Math.min(...xDots);
  const height = Math.max(...yDots) - Math.min(...yDots);
  return width * height;
}
