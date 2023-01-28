function solution(price, money, count) {
  var answer = 0;
  let sum = price;

  for (i = 2; i <= count; i++) {
    sum += price * i;
  }

  if (sum <= money) {
    answer = 0;
  } else {
    answer = sum - money;
  }
  return answer;
}