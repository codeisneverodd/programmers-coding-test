//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd

function solution(n, a, b) {
    let currentRound = 1;
    const myNextNumber = (num) => Math.floor((num + 1) / 2)//내가 이긴경우 다음으로 가지게 될 번호
    while (a !== b) { // a의 다음 번호가 b의 다음번호와 같아지면 끝난다.
        if (myNextNumber(a) === myNextNumber(b)) break
        a = myNextNumber(a)
        b = myNextNumber(b)
        currentRound++
    }
    return currentRound
}
