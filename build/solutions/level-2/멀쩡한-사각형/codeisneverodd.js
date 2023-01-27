function solution(w, h) {
    var answer = 1;
    const gcd = greatestCommonDivisor2(w, h)
    const erasedBoxInUnit = h / gcd + w / gcd - 1
    answer = w * h - erasedBoxInUnit * gcd
    return answer;
}

let greatestCommonDivisor2 = (a, b) => {
    while (b > 0) {
        let r = a % b;
        a = b;
        b = r;
    }
    return a;
}

