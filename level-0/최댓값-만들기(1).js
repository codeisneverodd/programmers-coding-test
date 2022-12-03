//https://github.com/codeisneverodd/programmers-coding-test
//더 좋은 풀이가 존재할 수 있습니다.
//정답 1 - jetom88
function solution(numbers) {
  let findNum = [];

  for (let i = 0; i < numbers.length - 1; i++) {
    findNum.push(numbers[i] * numbers[i + 1]);
  }
  const max = Math.max(...findNum);
  return max;
}
