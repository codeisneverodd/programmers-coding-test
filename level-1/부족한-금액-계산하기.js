//https://github.com/codeisneverodd/programmers-coding-test
//더 좋은 풀이가 존재할 수 있습니다.
//정답 1(🎩 refactor 220425) - codeisneverodd
function solution(price, money, count) {
  let totalCost = 0;
  for (let i = 1; i <= count; i++) totalCost += price * i;
  return totalCost <= money ? 0 : totalCost - money;
}

//정답 2 - yongchanson
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

//정답 3 - jaewon1676
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
