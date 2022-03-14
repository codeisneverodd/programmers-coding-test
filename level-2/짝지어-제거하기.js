//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(s) {
    var answer = -1;
    let notPairStack = []
    for (let i = 0; i < s.length; i++) notPairStack[notPairStack.length - 1] === s[i] ? notPairStack.pop() : notPairStack.push(s[i])
    answer = notPairStack.length === 0 ? 1 : 0
    return answer;
}

//정답 2 - codeisneverodd
function solution(s) {
    var answer = -1;
    let notPairStack = []
    notPairStack.push(s[0])
    for (let i = 1; i < s.length; i++) {
        if (notPairStack[notPairStack.length - 1] === s[i]) {
            notPairStack.pop()
        } else {
            notPairStack.push(s[i])
        }
    }
    answer = notPairStack.length === 0 ? 1 : 0
    return answer;
}
