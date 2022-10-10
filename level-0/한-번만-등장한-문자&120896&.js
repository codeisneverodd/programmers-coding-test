//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(s) {
  const count = [...s].reduce((a, c) => (a[c] ? { ...a, [c]: a[c] + 1 } : { ...a, [c]: 1 }), {});
  return Object.keys(count)
    .filter(key => count[key] === 1)
    .sort((a, b) => (a < b ? -1 : a > b ? 1 : 0))
    .join('');
}
