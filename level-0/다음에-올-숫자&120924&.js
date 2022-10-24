//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(common) {
  const isAP = arr => arr[2] - arr[1] === arr[1] - arr[0];
  return isAP(common)
    ? common[common.length - 1] + common[1] - common[0]
    : common[common.length - 1] * (common[1] / common[0]);
}
