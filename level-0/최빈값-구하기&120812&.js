//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(array) {
  const counts = array.reduce((a, c) => (a[c] ? { ...a, [c]: a[c] + 1 } : { ...a, [c]: 1 }), {});
  const max = Math.max(...Object.values(counts));
  const modes = Object.keys(counts).filter(key => counts[key] === max);
  return modes.length === 1 ? +modes[0] : -1;
}
