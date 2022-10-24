//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(rsp) {
  const win = { 0: 5, 2: 0, 5: 2 };
  return [...rsp].map(num => win[num]).join('');
}
