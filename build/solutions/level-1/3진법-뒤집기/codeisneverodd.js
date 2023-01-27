function solution(n) {
  var answer = 0;
  const ternaryReversed = decimalToTernaryReversed(n);
  answer = parseInt(ternaryReversed, 3);
  return answer;
}

const decimalToTernaryReversed = (num) => {
  let ternary = "";
  while (num >= 3) {
    ternary += (num % 3).toString();
    num = Math.floor(num / 3);
  }
  ternary += num.toString();
  return ternary;
};

