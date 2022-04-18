//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(n) {
    var answer = 0;
    let isPrimeArr = new Array(n + 1).fill(true)
    for (let num = 2, sqrt = Math.sqrt(n); num <= sqrt; num++) {
        if (isPrimeArr[num] === true) {
            for (let j = 2; num * j <= n; j++) isPrimeArr[num * j] = false
        }
    }
    for (const isPrime of isPrimeArr) if (isPrime) answer += 1
    answer -= 2 //인덱스 0과 1 제외
    return answer;
}

//정답 2 - chaerin-dev
// 소수인지 판별하는 함수
function isPrime(x) {
  for (let i = 2; i <= Math.sqrt(x); i++) {
    if (x % i === 0) return false;
  }
  return true;
}
function solution(n) {
  // 소수의 개수를 저장할 변수
  let answer = 0;
  // 1은 소수가 아니므로 2부터 n까지 모든 수에 대해
  for (let i = 2; i <= n; i++) {
    // 소수이면 소수의 개수에 1 추가
    if (isPrime(i)) answer++;
  }
  return answer;
}