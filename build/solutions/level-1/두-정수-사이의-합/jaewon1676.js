function solution(a, b) {
  if (b < a){ // b가 a보다 큰 수가 되도록 해준다.
      let c = b
      b = a
      a = c
  }
  let sum = 0; // 합을 구할 변수
  for (let i=a; i<=b; i++){
      sum += i
  }
  return sum;
}
