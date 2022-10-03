//https://github.com/codeisneverodd/programmers-coding-test
//더 좋은 풀이가 존재할 수 있습니다.
//정답 1 - jetom88
function solution(n) {
  let result = [];

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) result.push(i);
  }
  return result;
}
