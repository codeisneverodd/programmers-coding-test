//https://github.com/codeisneverodd/programmers-coding-test
//더 좋은 풀이가 존재할 수 있습니다.
//정답 1 - jetom88
function solution(n, k) {
  return n * 12000 + (k * 2000 - Math.floor(n / 10) * 2000);
}
