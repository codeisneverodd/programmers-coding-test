//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(n) {
    var answer = 0;
    const ternaryReversed = n.toString(3).split('').reverse().join('')
    answer = parseInt(ternaryReversed, 3)
    return answer;
}

//정답 2 - codeisneverodd
function solution(n) {
    var answer = 0;
    const ternaryReversed = decimalToTernaryReversed(n)
    answer = parseInt(ternaryReversed, 3)
    return answer;
}

const decimalToTernaryReversed = num => {
    let ternary = ''
    while (num >= 3) {
        ternary += (num % 3).toString()
        num = Math.floor(num / 3)
    }
    ternary += num.toString()
    return ternary
}