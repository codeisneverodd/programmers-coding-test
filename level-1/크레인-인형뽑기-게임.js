//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(board, moves) {
    var answer = 0;
    const length = board.length
    let basket = []
    moves.forEach(pick => {
        for (let i = 0; i < length; i++) {
            const item = board[i][pick - 1]
            if (item !== 0) {
                if (basket[basket.length - 1] !== item) {
                    basket.push(item)
                } else {
                    basket.pop()
                    answer += 2
                }
                board[i][pick - 1] = 0
                break
            }
        }
    })

    return answer;
}