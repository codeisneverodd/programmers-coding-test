//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(denum1, num1, denum2, num2) {
  const denum = denum2 * num1 + denum1 * num2;
  const num = num1 * num2;
  const getGCD = (a, b) => (b === 0 ? a : getGCD(b, a % b));
  const gcd = getGCD(denum, num);
  return [denum / gcd, num / gcd];
}
