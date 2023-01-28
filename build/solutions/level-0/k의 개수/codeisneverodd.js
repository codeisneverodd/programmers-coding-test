function solution(i, j, k) {
  let count = 0;
  for (let num = i; num <= j; num++) {
    count += [...('' + num)].filter(n => +n === k).length;
  }
  return count;
}