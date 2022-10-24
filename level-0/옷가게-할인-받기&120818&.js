//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(price) {
  if (price >= 500000) return Math.floor(price * 0.8);
  if (price >= 300000) return Math.floor(price * 0.9);
  if (price >= 100000) return Math.floor(price * 0.95);
  return price;
}
