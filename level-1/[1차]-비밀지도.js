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

//정답 3 - jaewon1676
function solution(n, arr1, arr2) {
    let answer = [];
    for (let i=0; i<n; i++){
        let temp = (arr1[i] | arr2[i]).toString(2)
        let line = []; // 한 행의 모든 2진수 보관

        for (let j=temp.length - n; j< temp.length; j++){
            if (temp[j] == 1) {line.push('#')}
            else {line.push(' ')}            
        }
        answer.push(line.join(''))
    }
    return answer
}
/* 풀이 과정
1. 배열 arr1, arr2 을 2진수로 변한한다. 이 때, 하나라도 1일 시에는 1로 변환하고, 그렇지 않으면 0을 반환한다.
2. 9번의 반복문을 행의 길이만큼 돌려 1이면 #, 그렇지 않으면 띄어쓰기를 push 해준다.
3. 행의 배열의 원소를 join 메서드를 사용하여 문자열로 합친다.*/