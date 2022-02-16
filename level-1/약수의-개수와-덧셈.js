//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1
function solution(left, right) {
    var answer = 0;
    for(let num=left;num<=right;num++){
        if(Number.isInteger(Math.sqrt(num))){
            answer -= num
        }else{
            answer += num
        }
    }
    return answer;
}
//정답 2
function solution(left, right) {
    var answer = 0;
    for(let num=left; num<=right; num++){
        divisorCounter(num) % 2 === 0 ? answer += num : answer -= num
    }
    return answer;
}

const divisorCounter = (num) =>{
    let count = 0
    const sqrt = Math.sqrt(num)
    for(let i=1; i<=sqrt; i++) if(num % i === 0) count += 1
    return Number.isInteger(sqrt) ? (count-1)*2 + 1 : count * 2
}