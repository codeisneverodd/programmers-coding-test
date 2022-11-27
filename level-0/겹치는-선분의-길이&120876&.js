//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(lines) {
  const visited = lines.reduce((a, [x, y]) => {
    for (let i = Math.min(x, y) + 1; i <= Math.max(x, y); i++) a[i] = a[i] ? a[i] + 1 : 1;
    return a;
  }, {});

  return Object.values(visited).filter(v => v > 1).length;
}
