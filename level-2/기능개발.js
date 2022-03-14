//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd - 시간복잡도 감소
function solution(progresses, speeds) {
    var answer = [];
    const remainDays = progresses.map((prog, index) => Math.ceil((100 - prog) / speeds[index]))
    console.log(remainDays)
    let maxDay = remainDays[0]
    answer.push(0)
    for (let i = 0; i < remainDays.length; i++) {
        if (remainDays[i] <= maxDay) {
            answer[answer.length - 1] += 1
        } else {
            answer.push(1)
            maxDay = remainDays[i]
        }
    }
    return answer;
}

//정답 2 - codeisneverodd
function solution(progresses, speeds) {
    var answer = [];
    while (progresses.length > 0) {
        let done = 0
        progresses = progresses.map((prog, index) => prog + speeds[index])
        const length = progresses.length
        for (let i = 0; i < length; i++) {
            if (progresses[0] >= 100) {
                progresses.shift()
                speeds.shift()
                done += 1
            } else {
                break
            }
        }
        if (done > 0) answer.push(done)
    }
    return answer;
}