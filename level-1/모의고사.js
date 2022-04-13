//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(answers) {
    var answer = [];
    const firstPattern = [1, 2, 3, 4, 5]
    const firstPLength = firstPattern.length
    const secondPattern = [2, 1, 2, 3, 2, 4, 2, 5]
    const secondPLength = secondPattern.length
    const thirdPattern = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    const thirdLength = thirdPattern.length
    let correctCount = [0, 0, 0]
    for (let i = 0, len = answers.length; i < len; i++) {
        if (answers[i] === firstPattern[i % firstPLength]) correctCount[0] += 1
        if (answers[i] === secondPattern[i % secondPLength]) correctCount[1] += 1
        if (answers[i] === thirdPattern[i % thirdLength]) correctCount[2] += 1
    }
    const maxScore = Math.max(...correctCount)
    for (let i = 0; i < 3; i++) {
        if (correctCount[i] === maxScore) answer.push(i + 1)
    }
    return answer;
}

// 완벽한 정답이 아닙니다.
// 정답 2 - prove-ability
function solution(answers) {
    let result = [];

    let players = {
        1: {
            pattern: [1, 2, 3, 4, 5],
            count: 0
        },
        2: {
            pattern: [2, 1, 2, 3, 2, 4, 2, 5],
            count: 0
        },
        3: {
            pattern: [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
            count: 0
        },
    }
    let max = 0;
    answers.forEach((answer, index) => {
        for(let [key, { pattern }] of Object.entries(players)) {
            // 조정된 index 의 값과 답이 맞다면 해당 플레이어 count 증가
            if(pattern[index % pattern.length] === answer) { 
                players[key].count++;
                // 제일 높은 count 구하기
                if(max < players[key].count) max = players[key].count;
            }
        }
    })
    // players 중에 count 가 max 와 값이 같다면 result 추가
    for(let [key, { count }] of Object.entries(players)) {
        if(count === max) result.push(parseInt(key, 10))
    }
    
    return result;
}