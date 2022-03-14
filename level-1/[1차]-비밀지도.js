//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(n, arr1, arr2) {
    var answer = []
    for (let i = 0; i < n; i++) {
        let row = (arr1[i] | arr2[i]).toString(2) //Bitwise
        row = '0'.repeat(n - row.length) + row
        row = row.replace(/1|0/g, a => +a ? '#' : ' ')
        answer.push(row)
    }
    return answer;
}

//정답 2 - codeisneverodd
function solution(n, arr1, arr2) {
    var answer = []
    let mapA = []
    let mapB = []
    for (let i = 0; i < n; i++) {
        let rowArrA = arr1[i].toString(2).split('')
        let rowArrB = arr2[i].toString(2).split('')
        for (let j = 0, len = rowArrA.length; j < n - len; j++) rowArrA.unshift('0')
        for (let j = 0, len = rowArrB.length; j < n - len; j++) rowArrB.unshift('0')
        mapA.push(rowArrA)
        mapB.push(rowArrB)
    }
    let answer2D = mapA.slice()
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            answer2D[i][j] = (mapA[i][j] === '0' && mapB[i][j] === '0') ? ' ' : '#'
        }
    }
    answer = answer2D.map(row => row.join(''))
    return answer;
}