//https://github.com/codeisneverodd/programmers-coding-test
//더 좋은 풀이가 존재할 수 있습니다.
//정답 1 - ssi02014
function solution(a, b, n) {
  let result = 0;
      
  while (n >= a) {
    const remain = n % a;
        
    n = Math.floor(n / a) * b;
    result += n;
    n += remain;
  }
  
  return result;
}
