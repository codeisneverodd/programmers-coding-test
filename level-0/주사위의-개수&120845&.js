//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(box, n) {
  return Math.floor(box[0] / n) * Math.floor(box[1] / n) * Math.floor(box[2] / n);
}
