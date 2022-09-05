//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(n) {
    /*
    1. 0번째 행에 0번째 queen을 놓는다.
    2. 그 다음 행의 퀸은 이전 퀸들의 범위와 겹치지 않는 곳에 놓는다. 퀸은 한 행에 반드시 하나 두어야한다.
    3. 마지막 열까지 도달하면 성공으로 간주하고 answer에 1을 더한다.
    4. 0번째 queen의 위치를 바꿔가며 모두 시도한다.
    4. 단, 체스판은 일차원 배열로 선언하고 index = 행, 값 = 열 로 생각한다.
    */
    let answer = 0;
    const canBePlacedOn = (chess, currentRow) => {
        //해당 행에 둔 queen이 유효한지
        for (let prevRow = 0; prevRow < currentRow; prevRow++) {
            const onDiagonal = currentRow - prevRow === Math.abs(chess[currentRow] - chess[prevRow])
            const onStraight = chess[prevRow] === chess[currentRow]
            if (onDiagonal || onStraight) return false
        }
        return true
    }
    const placeQueen = (chess, currentRow) => {
        //queen을 배치하다가 끝 행에 도착하면 1을 리턴, 도착하지 못하면 0을 리턴하여, 재귀적으로 모든 경우를 합하여 리턴
        let count = 0
        if (currentRow === chess.length) return 1
        for (let currentQueen = 0; currentQueen < n; currentQueen++) {
            //queen을 우선 배치한 후 가능한지 살펴본다.
            chess[currentRow] = currentQueen
            if (canBePlacedOn(chess, currentRow)) count += placeQueen(chess, currentRow + 1)
        }
        return count
    }
    for (let firstQueen = 0; firstQueen < n; firstQueen++) {
        const chess = new Array(n).fill(-1)
        chess[0] = firstQueen
        answer += placeQueen(chess, 1)
    }
    return answer;
}