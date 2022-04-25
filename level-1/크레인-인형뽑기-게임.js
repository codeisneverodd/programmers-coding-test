//https://github.com/codeisneverodd/programmers-coding-test
//더 좋은 풀이가 존재할 수 있습니다.
//정답 1(🎩 refactor 220425) - codeisneverodd
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

//정답 2 - jaewon1676 
function solution(board, moves) {
    var answer = 0; // 인형을 터뜨린 횟수
    let basket = []; // 바구니
    let crane = 0; // 크레인의 행의 위치
    for (let i = 0; i < moves.length; i++) {
        crane = moves[i] - 1; // crane = 0
        for (let j = 0; j < board.length; j++) {
            if (board[j][crane] == 0)
            else if (board[j][crane] != 0) {
                basket.push(board[j][crane])
                board[j][crane] = 0
                if (basket[basket.length - 1] == basket[basket.length - 2]) {
                    basket.pop();
                    basket.pop();
                    answer += 2;
                }
                break;
            }
        }
    }

    return answer;
}

/* 풀이 과정
1. 입력받은 moves의 length만큼 for문을 돌린다.
2. 크레인에 찾고자 하는 행을 저장하여 제일 윗부분부터 탐색한다., 제일 윗부분이 비어있으면 다음 행으로 넘어가면서 탐색 한다.
3. 값이 들어있으면 해당 값을 바구니에 push 해주고, 비워준다.
4. 바구니 배열의 끝부분에 같은 인형 값이 연속되어있으면 연속 된 인형들을 pop 해주고, answer에 인형이 터진 횟수인 2를 더해준다. */