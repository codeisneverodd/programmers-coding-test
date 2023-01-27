function solution(num) {
  let count = 0;

  // 결과로 나온 수에 같은 작업을 1이 될 때까지 반복합니다.
  while (num !== 1) {
    // 입력된 수가 짝수라면 2로 나눕니다.
    if (num % 2 === 0) num /= 2;
    // 입력된 수가 홀수라면 3을 곱하고 1을 더합니다.
    else num = num * 3 + 1;
    count++;
    // 작업을 500번을 반복해도 1이 되지 않는다면 –1을 반환해 주세요
    if (count > 500) return -1;
  }

  return count;
}

