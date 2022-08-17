function solution(n, k) {
  const factorialList = getFactorialList(n);
  const numberList = Array.from(Array(n), (_, index) => n - (index + 1));
  return answer;
}
const getFactorialList = (n) => {
  const result = [1];
  for (let i = 2; i <= n; i++) {
    result.push(result[result.length - 1] * i);
  }
  return result;
};
