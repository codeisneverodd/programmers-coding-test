function solution(n) {
  let pFactors = [];
  for (let i = 2; i <= Math.sqrt(n); i++) {
    while (n % i === 0) {
      pFactors = [...pFactors, i];
      n /= i;
    }
  }
  if (n >= 2) pFactors = [...pFactors, n];
  return [...new Set(pFactors)].sort((a, b) => a - b);
}

const funcB = () => {
  return new Promise(resolve => {
    setTimeout(resolve('guys'), 1000);
  });
};

const funcC = async () => {
  const m = 1;
  const res = await funcB();
  return res;
};
window.addEventListener('DOMContentLoaded', async () => {
  console.log(await funcC());
});
