//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(n) {
  const isPrime = num => {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return true;
    }
    return false;
  };

  let count = 0;

  for (let i = 1; i <= n; i++) {
    if (isPrime(i)) count += 1;
  }
  
  return count;
}
