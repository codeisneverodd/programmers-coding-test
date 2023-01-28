//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(s) {
  const arr = s.split(' ');
  while (arr.includes('Z')) arr.splice(arr.indexOf('Z') - 1, 2);
  return arr.map(n => +n).reduce((a, c) => a + c, 0);
}
