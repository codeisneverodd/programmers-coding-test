//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverod
function solution(absolutes, signs) {
    var answer = 123456789;
    answer = absolutes.reduce((a, b, i) => a + b * (signs[i] ? 1 : -1), 0)
    return answer;
}

//정답 2 - codeisneverod
function solution(absolutes, signs) {
    var answer = 0;
    for (let i = 0; i < absolutes.length; i++) {
        answer += signs[i] ? absolutes[i] : -1 * absolutes[i]
    }
    return answer;
}

//정답 3 - jaewon1676
function solution(absolutes, signs) {
    var answer = 0
    for(var i=0; i<absolutes.length; i++){
        if (signs[i] === false){
            answer = answer - absolutes[i]
        }
        else{
            answer = answer + absolutes[i]
        }
    }
    
    return answer;
}