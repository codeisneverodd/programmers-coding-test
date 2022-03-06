//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
function solution(s) {
    var answer = 0;
    let lengthArr = []
    for(let i=1; i<=s.length; i++) lengthArr.push(compressedString(s, i).length)
    answer = Math.min(...lengthArr)
    return answer;
}
function compressedString(str, unitNum){
    let count = 1
    let result = ['']
    for(let repeat=0; repeat<=str.length/unitNum; repeat++) {
        const slicedGroup = str.slice(unitNum * repeat, unitNum * repeat+ unitNum)
        if (result[result.length - 1] === slicedGroup) {
            count++
        } else {
            if(count > 1) result[result.length - 1] = count + result[result.length - 1]
            result.push(slicedGroup)
            count = 1
        }
    }
    return result.join('')
}