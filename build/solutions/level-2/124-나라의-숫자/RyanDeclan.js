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
