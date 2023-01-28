function solution(s) {
  const count = [...s].reduce((a, c) => (a[c] ? { ...a, [c]: a[c] + 1 } : { ...a, [c]: 1 }), {});
  return Object.keys(count)
    .filter(key => count[key] === 1)
    .sort((a, b) => (a < b ? -1 : a > b ? 1 : 0))
    .join('');
}