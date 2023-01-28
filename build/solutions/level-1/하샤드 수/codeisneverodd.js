function solution(x) {
  const sum = x
    .toString()
    .split("")
    .map((x) => parseInt(x))
    .reduce((acc, curr) => acc + curr);
  return x % sum === 0;
}