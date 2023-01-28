function solution(n, numlist) {
  return numlist.filter(num => num % n === 0);
}