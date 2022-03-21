//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(participant, completion) {
    var answer = '';
    participant = participant.sort()
    completion = completion.sort()
    for (let i = 0, len = completion.length; i < len; i++) {
        if (participant[i] !== completion[i]) return participant[i]
    }
    answer = participant[participant.length - 1]
    return answer
}

//정답 2 - jaewon1676
function solution(participant, completion) {
    var answer = '';
    for (let i=0; i<participant.length; i++){
        for (let j=0; j<completion.length; j++){
            if (participant[i] === completion[j]) {
                console.log(participant,completion)
                participant.splice(i, 1)
                completion.splice(j, 1)
                i--;
                j--;
                console.log(participant,completion)
                break;
            } 
        }
    }
    
    return participant[0]
}