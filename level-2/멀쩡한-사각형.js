//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(w, h) {
    var answer = 1;
    const gcd = greatestCommonDivisor(w, h)
    answer = w * h - (h + w - gcd)
    return answer;
}

let greatestCommonDivisor = (a, b) => {
    while (b > 0) {
        let r = a % b;
        a = b;
        b = r;
    }
    return a;
}

//정답 2 - codeisneverodd
function solution(w, h) {
    var answer = 1;
    const gcd = greatestCommonDivisor(w, h)
    const erasedBoxInUnit = h / gcd + w / gcd - 1
    answer = w * h - erasedBoxInUnit * gcd
    return answer;
}

let greatestCommonDivisor = (a, b) => {
    while (b > 0) {
        let r = a % b;
        a = b;
        b = r;
    }
    return a;
}

//정답 3 - jaewon1676
// 유클리드 호제법을 이용한 최대 공약수 구하기
function gcd(w, h) {   
    let mod = w % h; // w와 h의 나머지를 구합니다.

    if (mod === 0) { // 나머지가 0일 경우 h를 반환합니다.
        return h;
    }
    // 만약 0이 아닐경우 w에 h를 넣고 h에 나머지인 mod를 넣어 해당 함수를 다시 호출해 줍니다.
    return gcd(h, mod);
}
function solution(w, h) {
    const gcdVal = gcd(w, h); // 최대 공약수를 구해줍니다.
    return w * h - (w + h - gcdVal);
} 
