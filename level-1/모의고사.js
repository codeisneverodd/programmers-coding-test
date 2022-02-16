//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
function solution(answers) {
    var answer = [];
    const firstPattern = [1,2,3,4,5]
    const firstPLength = firstPattern.length
    const secondPattern = [2,1,2,3,2,4,2,5]
    const secondPLength = secondPattern.length
    const thirdPattern = [3,3,1,1,2,2,4,4,5,5]
    const thirdLength = thirdPattern.length
    let correctCount = [0,0,0]
    for(let i=0, len = answers.length; i < len; i++) {
        if(answers[i] === firstPattern[i % firstPLength]) correctCount[0] += 1
        if(answers[i] === secondPattern[i % secondPLength]) correctCount[1] += 1
        if(answers[i] === thirdPattern[i % thirdLength]) correctCount[2] += 1
    }
    const maxScore = Math.max(...correctCount)
    for(let i=0; i<3;i++){
        if(correctCount[i] === maxScore) answer.push(i+1)
    }
    return answer;
}