//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
function solution(participant, completion) {
    var answer = '';
    participant = participant.sort()
    completion = completion.sort()
    for(let i=0, len = completion.length; i< len; i++){
        if(participant[i] !== completion[i]) return participant[i]
    }
    answer = participant[participant.length - 1]
    return answer
}