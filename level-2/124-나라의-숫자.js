//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(n) {
    var answer = '';
    const oneTwoFour = ['4', '1', '2']
    while (n > 0) {
        const remainder = n % 3
        answer = oneTwoFour[remainder] + answer;
        n = Math.floor((n - 1) / 3) //나누어떨어지지 않을 때에도 -1해도 상관없음
    }
    return answer;
}

//정답 2 - codeisneverodd
function solution(n) {
    var answer = '';
    const oneTwoFour = ['4', '1', '2']
    while (n > 0) {
        const remainder = n % 3
        answer = oneTwoFour[remainder] + answer;
        if (remainder === 0) {
            n = Math.floor((n - 1) / 3)
        } else {
            n = Math.floor(n / 3)
        }
    }
    return answer;
}

//정답 3 - jaewon1676
function solution(n) {
    const number = [ 4, 1, 2];
    let answer = "";
    
    while(n){ // 
        answer = number[n%3] + answer;
        n = (n%3 == 0)? n/3 - 1 : Math.floor(n/3);
    }

    return answer
}

//정답 4- RyanDeclan
// 3진법 풀이를 바탕으로 풀음 0,1,2 대신 1,2,3을 활용
// 1,2,4 나라지만 임시적으로 1,2,3 나라를 운영하고 마지막에 replace로 3을 전부 4로 바꾸는 코드
let result = "";
function solution(n) {
    let remainder = n % 3;
    let quotient = Math.floor(n / 3)
    if(!remainder){
       quotient = Math.floor(n / 3) - 1;
       remainder  = 3
    }
    result += remainder;
    if( quotient  <= 3){
        if(quotient)result += quotient
        result = result.replace(/["3"]/g,"4")
        return result.split("").reverse().join("")
    } 
    return solution(quotient);
}
