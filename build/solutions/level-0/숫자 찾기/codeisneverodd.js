function solution(num, k) {
  const index = [...('' + num)].findIndex(n => +n === k);
  return index === -1 ? -1 : index + 1;
}