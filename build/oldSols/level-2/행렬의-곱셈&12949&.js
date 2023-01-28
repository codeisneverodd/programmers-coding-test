//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(arr1, arr2) {
    const [row, col] = [arr1.length, arr2[0].length]
    let answer = new Array(row);
    for (let i = 0; i < row; i++) answer[i] = new Array(col)
    //arr1의 열의 개수 = arr2의 행의 개수, arr1의 i번째 행과 arr2의 j번째 열의 원소들을 곱한 것들의 합이 answer[i][j] 값
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            answer[i][j] = arr1[i].reduce((sum, arr1Value, rowIndex) => sum + arr1Value * arr2[rowIndex][j], 0)
        }
    }
    return answer;
}

//정답 2 - prove-ability
function solution(arr1, arr2) {
    var answer = [];
    // 행만큼 반복
    for(let i = 0, len = arr1.length; i < len; i++) {
        const arr = []
        // 열만큼 반복
        for(let j = 0, len = arr1[i].length; j < len; j++) {
            // 각의 배열에서 행을 더해서 arr push
            arr.push(arr1[i][j] + arr2[i][j])
        }
        // 열 만큼 추가된 arr 를 answer 가 추가
        answer.push(arr)
    }
    
    return answer;
}