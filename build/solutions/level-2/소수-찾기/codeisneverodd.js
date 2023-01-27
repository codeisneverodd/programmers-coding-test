function solution(numbers) {
    var answer = 0;
    const numArr = numbers.split('')
    const permutationAll = []
    for (let r = 1; r <= numbers.length; r++) {
        const permutationR
            = Permutation(numArr, r).map((permuArr) =>
            parseInt(permuArr.join(''))
        )
        for (let i = 0; i < permutationR.length; i++) permutationAll.push(permutationR[i])
    }
    const permutationSet = [...new Set(permutationAll)]
    for (const number of permutationSet) answer += isPrime(number) ? 1 : 0
    return answer;
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

function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) if (num % i === 0) return false
    return num >= 2
}