//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(n, m) {
    var answer = []
    const gcd = greatestCommonDivisor(n, m)
    answer.push(gcd, n * m / gcd)
    return answer
}

const greatestCommonDivisor = (a, b) => {
    if (b === 0) return a
    else return greatestCommonDivisor(b, a % b)
}

//정답 2 - chaerin-dev
function solution(n, m) {
  // 최대공약수 구하기
  let gcd = (n, m) => (n % m === 0 ? m : gcd(m, n % m));
  // 최소공배수 구하기
  let lcm = (n, m) => (n * m) / gcd(n, m);
  // 결과 출력
  return [gcd(n, m), lcm(n, m)];
}