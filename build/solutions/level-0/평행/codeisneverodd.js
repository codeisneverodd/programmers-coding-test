function solution(dots) {
  const getInclination = ([[x1, y1], [x2, y2]]) => (x2 !== x1 ? (y2 - y1) / (x2 - x1) : Infinity);
  const isParallel = (line1, line2) => getInclination(line1) === getInclination(line2);

  return dots.some(dot => {
    const line1 = [dots[0], dot];
    const line2 = dots.filter(dot => !line1.includes(dot));
    return isParallel(line1, line2);
  })
    ? 1
    : 0;
}