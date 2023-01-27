function solution(before, after) {
  const sort = str => [...str].sort((a, b) => (a < b ? -1 : a !== b ? 1 : 0)).join('');
  return sort(before) === sort(after) ? 1 : 0;
}
