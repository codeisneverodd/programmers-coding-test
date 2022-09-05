//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(n, computers) {
    let answer = 0
    const visited = new Array(n).fill(false)
    const newNetwork = (startComputer) => {
        //새로운 네트워크를 만들 시작 컴퓨터를 파라미터로 받는다.
        const toBeVisited = [startComputer]
        while (toBeVisited.length > 0) {
            //시작 컴퓨터로부터 방문 가능한 컴퓨터를 모두 방문하며 해당 컴퓨터의 visited를 true로 바꾼다
            const currentComputer = toBeVisited.pop()
            visited[currentComputer] = true
            for (let nextComputer = 0; nextComputer < n; nextComputer++) {
                if (!visited[nextComputer] && computers[currentComputer][nextComputer]) {
                    toBeVisited.push(nextComputer)
                }
            }
        }
    }

    for (let startComputer = 0; startComputer < n; startComputer++) {
        if (!visited[startComputer]) {
            newNetwork(startComputer)
            //새로운 네트워크를 생성할 때마다 정답을 1 증가시킨다.
            answer++
        }
    }
    return answer
}