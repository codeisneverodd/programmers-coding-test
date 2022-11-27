//https://github.com/codeisneverodd/programmers-coding-test
//더 좋은 풀이가 존재할 수 있습니다.
//정답 1 - codeisneverodd
function solution(n) {
  if (n < 2) return 1;
  const count = [0, 1, 2, ...Array(n - 2).fill(0)];
  count.forEach((_, i) => {
    if (i > 2) count[i] = (count[i - 2] + count[i - 1]) % 1234567;
  });
  return count[n];
}
//재귀를 사용하면 콜스택 오버플로우가 발생합니다.
