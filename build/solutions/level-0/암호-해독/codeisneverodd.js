function solution(cipher, code) {
  return [...cipher].reduce((a, c, i) => ((i + 1) % code === 0 ? a + c : a), '');
}
