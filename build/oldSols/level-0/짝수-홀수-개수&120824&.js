//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(num_list) {
  const evenLength = num_list.filter(n => n % 2 === 0).length;
  return [evenLength, num_list.length - evenLength];
}
