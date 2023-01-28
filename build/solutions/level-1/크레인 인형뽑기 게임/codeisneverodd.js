function solution(board, moves) {
    let answer = 0;
    const length = board.length
    let basket = []
    moves.forEach(move => {
        for (let i = 0; i < length; i++) {
            const item = board[i][move - 1]
            if (item !== 0) {
                if (basket[basket.length - 1] !== item) {
                    basket.push(item)
                } else {
                    basket.pop()
                    answer += 2
                }
                board[i][move - 1] = 0
                break
            }
        }
    })

    return answer;
}