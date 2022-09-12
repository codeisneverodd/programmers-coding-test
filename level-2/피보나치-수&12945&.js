//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(n) {
    var answer = 0;
    answer = fibonacci1234567(n)
    return answer;
}

function fibonacci1234567(n) { //재귀적으로 하면 시간초과
    let fiboArr = new Array(n + 1).fill(0)
    fiboArr[0] = 0
    fiboArr[1] = 1
    for (let i = 2; i <= n; i++) fiboArr[i] = (fiboArr[i - 1] + fiboArr[i - 2]) % 1234567 //1234567로 나눈 나머지로 하지 않으면 정수범위 초과
    return fiboArr[n]
}

//정답 2 - jaewon1676
function solution(n) {
    let f_1 = 0;
    let f_2 = 1;
    
    for (let i=2; i<=n; i++) {
        let temp = (f_1 + f_2) % 1234567;
        f_1 = f_2;
        f_2 = temp;
    }
    
    return f_2;
}