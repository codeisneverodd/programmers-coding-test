//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
function solution(s){
    var answer = false;
    let opened = 0
    for(let i=0, length = s.length; i<length; i++){
        s[i] === '(' ? opened += 1 : opened -= 1
        if(opened < 0) return false
    }
    if(opened === 0) answer = true
    return answer;
}