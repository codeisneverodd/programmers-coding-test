//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(emergency) {
  const sorted = emergency.map((e, i) => [e, i + 1]).sort((a, b) => b[0] - a[0]);
  return emergency.map(e => sorted.find(s => s[0] === e)[1]);
}
