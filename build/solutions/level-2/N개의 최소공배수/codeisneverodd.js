function solution(arr) {
    var answer = 0;
    answer = arr.reduce((a, b) => leastCommonMultiple(a, b), 1)
    return answer;
}

function leastCommonMultiple(a, b) {
    return a * b / greatestCommonDivisor(a, b)
}

function greatestCommonDivisor(a, b) {
    while (b > 0) {
        let r = a % b;
        a = b;
        b = r;
    }
    return a;
}