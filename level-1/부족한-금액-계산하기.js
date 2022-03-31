//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(price, money, count) {
    var answer = -1;
    let totalCost = 0
    for (let i = 1; i <= count; i++) totalCost += price * i
    answer = totalCost <= money ? 0 : totalCost - money
    return answer;
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
