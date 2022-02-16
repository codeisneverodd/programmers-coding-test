//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1
function solution(arr, divisor) {
    var answer = [];
    answer = arr.filter(element=> element % divisor === 0)
    answer.length === 0 ? answer.push(-1) : answer.sort((a,b)=>a-b)
    return answer;
}

//정답 2
function solution(arr, divisor) {
    var answer = [];
    arr.forEach(element=>{
        element % divisor === 0 ? answer.push(element) : null
    })
    answer.length === 0 ? answer.push(-1) : null
    answer.sort((a,b)=>a-b)
    return answer;
}