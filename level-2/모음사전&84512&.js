//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(word) {
  const alphabetRank = { A: 0, E: 1, I: 2, O: 3, U: 4 };
  const price = calculatePrice([1], 5);
  return word
    .split("")
    .map((alphabet, index) => 1 + price[index] * alphabetRank[alphabet])
    .reduce((acc, curr) => acc + curr, 0);
}
const calculatePrice = (result = [1], targetLength) => {
  if (result.length === targetLength) return result;
  return calculatePrice([result[0] * 5 + 1, ...result], targetLength);
};
/*
각 자리 문자를 바로 다음 문자로 바꾸는 데에 얼마의 비용이 들까?
4번째 자리  - 1
3번째 자리  - 1*5 + 1 = 6
2번째 자리  - 6*5 + 1 = 31
1번째 자리  - 31*5 + 1 = 156
0번째 자리  - 156*5 + 1 = 781

검증(1부터 시작하므로 1 + 비용)
I => (1 + 781 * 2) = 1563
EIO => (1 + 781 * 1) + (1 + 156 * 2) + (1 + 31 * 3) = 1189
AAAE => 1 + 1 + 1 + (1 + 6 * 1) = 10
AAAAE => 1 + 1 + 1 + 1 + (1 + 1*1) = 6
추천 레퍼런스: https://seongho96.tistory.com/50
*/
