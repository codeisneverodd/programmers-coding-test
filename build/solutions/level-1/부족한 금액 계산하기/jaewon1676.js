function solution(price, money, count) {
  let sum_price = 0; // 놀이기구의 이용료의 합
  for (let i = 1; i <= count; i++) {
    sum_price += i * price; // 이용료의 N배 만큼 곱해서 더해준다.
  }
  if (sum_price <= money) {
    return 0;
  }
  return sum_price - money;
}