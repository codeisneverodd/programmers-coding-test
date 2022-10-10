//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - cg10036
function fact(n) {
    return n ? BigInt(n) * fact(n - 1) : 1n;
}

function solution(n) {
    return fact(n * 2) / (fact(n) * fact(n + 1));
}
