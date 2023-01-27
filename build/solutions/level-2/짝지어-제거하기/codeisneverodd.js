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

