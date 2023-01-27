function solution(balls, share) {
  const [n, m] = [balls, share];
  const fact = [BigInt(1), BigInt(1)];

  for (let i = 2; i <= n; i++) fact[i] = fact[i - 1] * BigInt(i);

  return Number(fact[n] / (fact[n - m] * fact[m]));
}
