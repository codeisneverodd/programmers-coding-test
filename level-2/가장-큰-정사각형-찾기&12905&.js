//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(board) {
    for (let row = 0; row < board.length; row++) {//해당 칸이 0이 아니고 위, 왼쪽 대각선, 왼쪽이 정사각형이면, 정사각형 연장가능
        for (let col = 0; col < board[0].length; col++) {
            if (board[row][col] >= 1 && (!(board[row - 1] === undefined || board[row][col - 1] === undefined)))
                board[row][col] = Math.min(board[row - 1][col], board[row - 1][col - 1], board[row][col - 1]) + 1;
        }
    }
    return Math.max(...board.map((row) => Math.max(...row))) ** 2; //수정된 board 내의 최댓값이 가능한 정사각형의 최대
}