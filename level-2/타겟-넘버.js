//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
function solution(numbers, target) {
    var answer = 0;
    const binaryLength = numbers.length
    const binary = 2**binaryLength
    for(let i=0; i<binary; i++){
        const numSlice = numbers.slice()
        const binaryString = i.toString(2).padStart(binaryLength, '0')
        for(let j=0; j<binaryString.length; j++) binaryString[j] === '0' ? numSlice[j] *= -1 : null
        const calculated = numSlice.reduce((prev, current) => prev + current)
        if(calculated === target) answer += 1
    }
    return answer;
}