//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1
function solution(p) {
    if(p.length === 0) return p
    let bracketCount = 0
    let isURight = true
    for(let i=0; i<p.length; i++){
        bracketCount = p[i] === '(' ? bracketCount + 1 : bracketCount - 1
        if(bracketCount < 0) isURight = false
        if(bracketCount === 0){
            const [u, v] = [p.slice(0,i+1), p.slice(i+1)]
            if(isURight){
                return u + solution(v)
            }else{
                let emptyString = '(' + solution(v) + ')'
                const slicedReversedString = u
                    .slice(1,u.length-1)
                    .split('')
                    .map(bracket=> bracket === '(' ? ')' : '(')
                    .join('')
                return emptyString + slicedReversedString
            }
        }
    }
}

//정답 2
function solution(p) {
    if(p.length === 0){
        return p
    }else{
        const sliceIndex = balancedIndex(p)
        const [u, v] = [p.slice(0,sliceIndex+1), p.slice(sliceIndex+1)]
        if(isRight(u)){
            return u + solution(v)
        }else{
            let emptyString = '(' + solution(v) + ')'
            const slicedReversedString = u
                .slice(1,u.length-1)
                .split('')
                .map(bracket=> bracket === '(' ? ')' : '(')
                .join('')
            return emptyString + slicedReversedString
        }
    }
}
const isRight = (str) => {
    if(str[0] === ')') return false
    let stack = 0
    for(let i=0; i<str.length; i++){
        stack = str[i] === '(' ? stack + 1 : stack - 1
        if(stack < 0) return false
    }
    return stack === 0
}
const balancedIndex = (str) =>{
    let count = 0
    for(let i=0; i<str.length; i++){
        count = str[i] === '(' ? count + 1 :  count - 1
        if(count === 0) return i
    }
}