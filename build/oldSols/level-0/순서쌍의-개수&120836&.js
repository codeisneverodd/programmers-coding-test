//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(n) {
  let count = 0;
  for (let i = 1; i < Math.sqrt(n); i++) {
    if (n % i === 0) count += 2;
  }
  if (n % Math.sqrt(n) === 0) count += 1;
  return count;
}
