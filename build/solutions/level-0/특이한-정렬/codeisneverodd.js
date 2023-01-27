function solution(numlist, n) {
  return numlist.sort((a, b) => {
    const [aDiff, bDiff] = [Math.abs(a - n), Math.abs(b - n)];
    if (aDiff === bDiff) return b - a;
    return aDiff - bDiff;
  });
}
