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

