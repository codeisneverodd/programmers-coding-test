function solution(p) {
    if (p.length === 0) {
        return p
    } else {
        const sliceIndex = balancedIndex(p)
        const [u, v] = [p.slice(0, sliceIndex + 1), p.slice(sliceIndex + 1)]
        if (isRight(u)) {
            return u + solution(v)
        } else {
            let emptyString = '(' + solution(v) + ')'
            const slicedReversedString = u
                .slice(1, u.length - 1)
                .split('')
                .map(bracket => bracket === '(' ? ')' : '(')
                .join('')
            return emptyString + slicedReversedString
        }
    }
}

const isRight = (str) => {
    if (str[0] === ')') return false
    let stack = 0
    for (let i = 0; i < str.length; i++) {
        stack = str[i] === '(' ? stack + 1 : stack - 1
        if (stack < 0) return false
    }
    return stack === 0
}
const balancedIndex = (str) => {
    let count = 0
    for (let i = 0; i < str.length; i++) {
        count = str[i] === '(' ? count + 1 : count - 1
        if (count === 0) return i
    }
}