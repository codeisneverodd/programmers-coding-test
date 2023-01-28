function solution(s) {
    let answer = 0;
    let sArr = s.split('')
    if (isRight(sArr.join(''))) answer += 1
    for (let i = 0; i < sArr.length - 1; i++) {
        sArr.push(sArr.shift())
        if (isRight(sArr.join(''))) answer += 1
    }
    return answer;
}

function isRight(str) {
    const bracketOpen = ['[', '{', '('], bracketClose = [']', '}', ')']
    let status = [{open: false, openOrder: []}, {open: false, openOrder: []}, {open: false, openOrder: []}]
    for (let sIndex = 0; sIndex < str.length; sIndex++) {
        for (let bIndex = 0; bIndex < 3; bIndex++) {
            if (str[sIndex] === bracketOpen[bIndex]) {
                status[bIndex].open = true
                status[bIndex].openOrder.push(sIndex)
            }
            if (str[sIndex] === bracketClose[bIndex]) {
                if (status[bIndex].openOrder.length > 0) {
                    if (status.filter(check => check.open && check.openOrder[check.openOrder.length - 1] > status[bIndex].openOrder[status[bIndex].openOrder.length - 1]).length > 0)
                        return false //먼저 닫혀야 하는 괄호보다 먼저 닫힘
                    status[bIndex].openOrder.pop()
                    status[bIndex].open = false
                } else {
                    return false //열리기 전에 닫힘
                }
            }
        }
    }
    for (let i = 0; i < 3; i++) if (status[i].open) return false //닫히지 않은 괄호가 있음
    return true
}