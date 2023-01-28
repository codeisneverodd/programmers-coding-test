function solution(array) {
  const counts = array.reduce((a, c) => (a[c] ? { ...a, [c]: a[c] + 1 } : { ...a, [c]: 1 }), {});
  const max = Math.max(...Object.values(counts));
  const modes = Object.keys(counts).filter(key => counts[key] === max);
  return modes.length === 1 ? +modes[0] : -1;
}