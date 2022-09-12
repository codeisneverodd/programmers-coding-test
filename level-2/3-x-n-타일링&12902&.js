//https://github.com/codeisneverodd/programmers-coding-test
//더 좋은 풀이가 존재할 수 있습니다.
//정답 1 - codeisneverodd
function solution(n) {
  if (n % 2 !== 0) return 0;

  const getCount = n => {
    const k = n / 2;
    const count = [3, 11, ...Array(k - 2)];
    const divider = 1000000007;
    for (let i = 2; i < k; i++) {
      count[i] = (4 * count[i - 1] - count[i - 2] + divider) % divider;
    }
    return count[count.length - 1];
  };

  return getCount(n);
}
