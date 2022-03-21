//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(land) {
    for (let rowIndex = 1; rowIndex < land.length; rowIndex++) {
        for (let colIndex = 0; colIndex < land[0].length; colIndex++) {
            land[rowIndex][colIndex] += Math.max(...land[rowIndex - 1].slice(0, colIndex), ...land[rowIndex - 1].slice(colIndex + 1))
        }
    }
    return Math.max(...land[land.length - 1])
}
