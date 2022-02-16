//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
function solution(x) {
    var answer = true;
    const num = x.toString().split('')
    let sum = 0
    num.forEach(element=>sum+=Number(element))
    answer = x % sum === 0 ? true : false
    return answer;
}