//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1
function solution(w, h) {
    var answer = 1;
    const gcd = greatestCommonDivisor(w,h)
    answer = w * h - (h + w - gcd)
    return answer;
}

let greatestCommonDivisor = (a, b) => {
    while(b > 0){
        let r = a % b;
        a = b;
        b = r;
    }
    return a;
}
//정답 2
function solution(w, h) {
    var answer = 1;
    const gcd = greatestCommonDivisor(w,h)
    const erasedBoxInUnit = h/gcd + w/gcd - 1
    answer = w * h - erasedBoxInUnit * gcd
    return answer;
}

let greatestCommonDivisor = (a, b) => {
    while(b > 0){
        let r = a % b;
        a = b;
        b = r;
    }
    return a;
}