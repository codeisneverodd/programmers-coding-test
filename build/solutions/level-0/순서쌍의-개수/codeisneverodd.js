function solution(n) {
  let count = 0;
  for (let i = 1; i < Math.sqrt(n); i++) {
    if (n % i === 0) count += 2;
  }
  if (n % Math.sqrt(n) === 0) count += 1;
  return count;
}
