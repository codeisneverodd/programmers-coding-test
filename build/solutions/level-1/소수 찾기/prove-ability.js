// 소수 판별 로직
function isPrime(n) {
  // n 제곱근 후 올림
  for (let i = 2, len = Math.ceil(Math.sqrt(n)); i <= len; i++) {
      if (n % i === 0) return false;
  }
  return true;
}

function solution(n) {
  let count = 0;
  // 1부터 n까지 반복적으로 접근 - i
  for(let i = 1; i <= n; i++) {
      // i 가 소수인지 확인 후 count++
      if(isPrime(i)) count++;
  }
  
  return count;
}