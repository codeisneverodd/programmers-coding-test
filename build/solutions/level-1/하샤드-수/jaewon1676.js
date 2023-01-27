function solution(x) {
  let sum = 0;
  let arr = String(x).split(""); // 숫자를 하나씩 분리한다.

  for (var i = 0; i < arr.length; i++) {
    sum += Number(arr[i]); // 각 숫자를 더해준다.
  }

  return x % sum == 0 ? true : false; // 자릿수의 합으로 x가 나누어지면 하샤드 수
}

