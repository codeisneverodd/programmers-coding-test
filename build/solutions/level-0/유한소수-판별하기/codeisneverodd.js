function solution(a, b) {
  const getGCD = (a, b) => {
    let gcd = 1;
    for (let i = 1; i <= Math.min(a, b); i++) {
      if (a % i === 0 && b % i === 0) gcd = i;
    }
    return gcd;
  };

  const getPrimeFactors = num => {
    let pFactors = [];
    for (let i = 2; i <= Math.sqrt(num); i++) {
      while (num % i === 0) {
        pFactors = [...pFactors, i];
        num /= i;
      }
    }
    if (num > 2) pFactors = [...pFactors, num];
    return pFactors;
  };

  return getPrimeFactors(b / getGCD(a, b)).find(n => n !== 2 && n !== 5) ? 2 : 1;
}
