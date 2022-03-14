//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(arr1, arr2) {
    var answer = [];
    arr1.forEach((row, rowIndex) => {
        answer.push(row.map((col, colIndex) => col + arr2[rowIndex][colIndex]))
    })
    return answer;
}

//정답 2 - codeisneverodd
function solution(arr1, arr2) {
    var answer = new Array(arr1.length)
    for (let i = 0; i < arr1.length; i++) {
        answer[i] = new Array(arr1[0].length)
    }
    for (let row = 0; row < answer.length; row++) {
        for (let col = 0; col < answer[0].length; col++) {
            answer[row][col] = arr1[row][col] + arr2[row][col]
        }
    }
    return answer;
}