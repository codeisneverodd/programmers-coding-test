//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(cipher, code) {
  return [...cipher].reduce((a, c, i) => ((i + 1) % code === 0 ? a + c : a), '');
}
