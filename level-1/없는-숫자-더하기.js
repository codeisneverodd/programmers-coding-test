//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1
function solution(numbers) {
    var answer = -1;
    answer = 45 - numbers.reduce((a,b)=>a+b)
    return answer;
}

//정답 2
function solution(numbers) {
    var answer = 0;
    for(let i=0;i<10;i++){
        answer += numbers.includes(i) ? 0 : i
    }
    return answer;
}