/**
 * X, Y의 길이가 굉장히 길어서 공통 숫자를 뽑아낼 때 객체를 이용해 연산 횟수 최적화
 * X, Y를 배열로 변환 후에 배열 메서드를 사용해도 되지만, for of문보다 효율성 떨어짐 
 * (테스트 케이스 11 ~ 15 100ms~200ms 차이)
 */
function solution(X, Y) {
  const commons = [];
  const obj = {};

  for (const el of X) {
    obj[el] = (obj[el] || 0) + 1;
  }

  for (const el of Y) {
    if (obj[el]) {
      commons.push(el);
      obj[el]--;
    }
  }

  commons.sort((a, b) => b - a);

  if (!commons.length) return "-1";
  else if (commons[0] === "0") return "0";
  return commons.join("");
}