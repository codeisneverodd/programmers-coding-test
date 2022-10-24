//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(A, B) {
  const pushRight = str => [str[str.length - 1], ...str.slice(0, str.length - 1)].join('');
  for (let i = 0; i <= A.length; i++) {
    if (A === B) return i;
    A = pushRight(A);
  }

  return -1;
}
