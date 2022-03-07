//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
function solution(expression) {
    var answer = 0;
    const mathExp = ['*','+','-']
    let priorityArr = Permutation(mathExp, 3)
    const calculated = []
    for(const priority of priorityArr){
        const expressionArr = expression.split(/(\D)/)
        for(const exp of priority){
            while(expressionArr.includes(exp)){
                const index =  expressionArr.indexOf(exp)
                expressionArr.splice(index-1, 3, eval(expressionArr.slice(index-1,index+2).join('')))
            }
        }
        calculated.push(Math.abs(expressionArr[0]))
    }
    answer = Math.max(...calculated)
    return answer
}

function Permutation(arr, r) {
    const result = []
    if (r === 1) return arr.map((num) => [num])
    arr.forEach((fixed, index, org) => {
        const rest = [...org.slice(0, index), ...org.slice(index + 1)]
        const permutation = Permutation(rest, r - 1)
        const attached = permutation.map((numbers) => [fixed, ...numbers])
        result.push(...attached)
    })
    return result
}