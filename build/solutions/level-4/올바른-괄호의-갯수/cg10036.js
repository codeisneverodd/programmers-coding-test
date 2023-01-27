function solution(n) {
    const fact = n => n ? BigInt(n) * fact(n - 1) : 1n;
    return fact(n * 2) / (fact(n) * fact(n + 1));
}
