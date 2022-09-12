//https://github.com/codeisneverodd/programmers-coding-test
//더 좋은 풀이가 존재할 수 있습니다.
//정답 1(🎩 refactor 220425) - codeisneverodd
function solution(n, m) {
  const gcd = greatestCommonDivisor(n, m);
  return [gcd, (n * m) / gcd];
}

const greatestCommonDivisor = (a, b) => {
  if (b === 0) return a;
  else return greatestCommonDivisor(b, a % b);
};

//정답 2 - chaerin-dev
function solution(n, m) {
  // 최대공약수 구하기
  let gcd = (n, m) => (n % m === 0 ? m : gcd(m, n % m));
  // 최소공배수 구하기
  let lcm = (n, m) => (n * m) / gcd(n, m);
  // 결과 출력
  return [gcd(n, m), lcm(n, m)];
}

//정답 3 - yongchanson
function solution(a, b) {
  let gcd = 0;
  for (let i = 1; i <= Math.min(a, b); i++) {
    if ((a % i) + (b % i) === 0) {
      gcd = i;
    }
  }
  return [gcd, (a / gcd) * b];
}
