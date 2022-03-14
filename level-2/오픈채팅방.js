//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(record) {
    var answer = [];
    const users = {}
    record.map(history => {
        const [action, id, name] = history.split(' ')
        if (action !== 'Leave') users[id] = name
    })
    record.map(history => {
        const [action, id, name] = history.split(' ')
        if (action === 'Enter') answer.push(`${users[id]}님이 들어왔습니다.`)
        if (action === 'Leave') answer.push(`${users[id]}님이 나갔습니다.`)
    })
    return answer;
}