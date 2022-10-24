//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(numbers) {
  const [first, second, ...rest] = numbers.sort((a, b) => b - a);
  return first * second;
}
