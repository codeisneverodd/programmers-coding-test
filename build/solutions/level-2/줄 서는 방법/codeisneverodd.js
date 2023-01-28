function solution(n, k) {
  const getFactorial = n => {
    const result = [1, 1, 2, ...Array(n - 2)];
    result.forEach((_, i) => {
      if (i > 2) result[i] = result[i - 1] * i;
    });
    return result;
  };

  const getDivision = (dividend, divisor) => {
    const quotient = Math.floor(dividend / divisor);
    const remainder = dividend % divisor;
    return [quotient, remainder];
  };

  const stepCount = getFactorial(n).reverse();

  const generateSteps = (k, step) => {
    const [q, r] = getDivision(k, stepCount[step]);
    if (r === 0) return [q];
    return [q, ...generateSteps(r, step + 1)];
  };

  const answer = [];

  const steps = generateSteps(k - 1, 0);

  const notUsedNums = Array.from({ length: n }, (_, i) => i + 1);

  steps.slice(1).forEach(q => {
    answer.push(notUsedNums[q]);
    notUsedNums.splice(q, 1);
  });

  return [...answer, ...notUsedNums];
}