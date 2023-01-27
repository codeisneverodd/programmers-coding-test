function solution(n) {
  /*
  정답 = n의 홀수 약수의 개수
  15의 홀수 약수 : 1,3,5,15
  1+2+3+4+5=15 (중간값 3)
  4+5+6=15 (중간값 5)
  7+8=15 (연속된 값)
  15=15 (15)
  */
  let result = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i == 0 && i % 2 == 1) result++;
  }
  return result;
}
