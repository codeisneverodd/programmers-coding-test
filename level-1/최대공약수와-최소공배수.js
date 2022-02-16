//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
function solution(n, m) {
    var answer = []
    const gcd = greatestCommonDivisor(n,m)
    answer.push(gcd, n * m / gcd)
    return answer
}
const greatestCommonDivisor = (a,b) =>{
    if(b === 0) return a
    else return greatestCommonDivisor(b, a%b)
}