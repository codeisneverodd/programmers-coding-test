//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(numbers, k) {
  const goNext = current => (current + 2) % numbers.length;
  let current = 0;
  for (let i = 0; i < k - 1; i++) current = goNext(current);
  return numbers[current];
}
